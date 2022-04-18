import React, { createContext, useCallback, useEffect, useState } from 'react';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import Web3 from 'web3';
import { createWeb3 } from '../../blockchain/utils';
import { rpcUrls } from '../../blockchain/constants';

interface IWeb3ModalContext {
  web3: Web3 | null;
  connect: () => void;
  disconnect: () => void;
  account: string | null;
  chainId: number | null;
  networkId: number | null;
  connected: boolean;
}

export const Web3ModalContext = createContext<IWeb3ModalContext>({
  web3: null,
  connect: () => {},
  disconnect: () => {},
  account: null,
  chainId: null,
  networkId: null,
  connected: false
});

type childrenProps = {
  children: JSX.Element;
}

const Web3ModalProvider = ({ children }: childrenProps) => {

  const [web3Modal, setWeb3Modal] = useState<Web3Modal | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [networkId, setNetworkId] = useState<number | null>(null);
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: process.env.REACT_APP_INFURA_PROJECT_ID, // required
        }
      },
      fortmatic: {
        package: Fortmatic, // required
        display: {
          name: 'Fortmatic-Eth',
          description: "Using your email"
        },
        options: {
          key: process.env.REACT_APP_FORTMATIC_PROJECT_ID, // required,
          network: {
            rpcUrl: rpcUrls[1],
            chainId: 1
          } // if we don't pass it, it will default to localhost:8454
        }
      },
      // fortmaticBsc: {
      //   package: Fortmatic, // required
      //   options: {
      //     key: process.env.REACT_APP_FORTMATIC_PROJECT_ID, // required,
      //     network: {
      //       rpcUrl: rpcUrls[56],
      //       chainId: 56
      //     } // if we don't pass it, it will default to localhost:8454
      //   }
      // }
    };
  
    const _web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true  , // optional
      providerOptions, // required
      disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
      theme: "dark"
    });
  
    setWeb3Modal(_web3Modal);
  }, [])

  const resetWeb3 = useCallback(() => {
    setWeb3(null);
    setAccount(null);
    setChainId(null);
    setNetworkId(null);
    setConnected(false);
  }, [])

  const subscribeProvider = useCallback(async (_provider: any, _web3: Web3) => {
    if (!_provider.on)
      return;

    _provider.on("close", () => {
      resetWeb3();
    });
    _provider.on("accountsChanged", async (accounts: string[]) => {
      setAccount(accounts[0]);
    });
    _provider.on("chainChanged", async (chainId: number) => {
      console.log("Chain changed: ", chainId);
      const networkId = await _web3.eth.net.getId();
      setChainId(chainId);
      setNetworkId(networkId);
    });

    _provider.on("networkChanged", async (networkId: number) => {
      const chainId = await _web3.eth.getChainId();
      setChainId(chainId);
      setNetworkId(networkId);
    });
  }, [resetWeb3])

  const connect = useCallback(async () => {
    if (!web3Modal)
      return;

    const _provider = await web3Modal.connect();
    if (_provider === null) 
      return;
    
    const _web3 = createWeb3(_provider);
    setWeb3(_web3);

    await subscribeProvider(_provider, _web3);
    
    const accounts = await _web3.eth.getAccounts();
    const _account = accounts[0];
    const _networkId = await _web3.eth.net.getId();
    const _chainId = await _web3.eth.getChainId();

    setAccount(_account);
    setNetworkId(_networkId);
    setChainId(_chainId);
    setConnected(true);
    
  }, [web3Modal, subscribeProvider]);

  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider) {
      connect();
    }
  }, [web3Modal, connect])

  const disconnect = useCallback(async () => {
    if (web3 && web3.currentProvider) {
      const _provider: any = web3.currentProvider;
      if (_provider.close)
        await _provider.close();
    }
    if (web3Modal) {
      await web3Modal.clearCachedProvider();
    }
    resetWeb3();
  }, [web3Modal, web3, resetWeb3])

  return (
    <Web3ModalContext.Provider 
      value={{ 
        web3, 
        connect,
        disconnect,
        account,
        networkId,
        chainId,
        connected
      }}>
      {children}
    </Web3ModalContext.Provider>
  )
}

export default Web3ModalProvider;