export const defaultChainId = 1;
// export const MetaspaceBridgeAddress = {
//   "4": "0xc10641031430cF29579f829952b118f1d873bbc2"
// }
export const rpcUrls = {
  1: 'https://mainnet.infura.io/v3/' + process.env.REACT_APP_INFURA_PROJECT_ID,
  4: 'https://rinkeby.infura.io/v3/' + process.env.REACT_APP_INFURA_PROJECT_ID,
  56: 'https://bsc-dataseed.binance.org/'
}

export const networkNames = {
  1: 'Ethereum Mainnet',
  4: 'Rinkeby Test Network',
  56: 'Binance Smart Chain'
}
