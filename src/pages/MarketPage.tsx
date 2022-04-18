import styled from "styled-components";
import BreadCrumb from "../components/BreadCrumb";
import MarketItem, { MarketItemProps } from "../components/MarketCard";
import Item1 from "../images/market/blue (1).png";
import Item2 from "../images/market/blue (2).png";
import Item3 from "../images/market/blue (3).png";
import Item4 from "../images/market/blue (4).png";
import Item5 from "../images/market/blue (5).png";
import Item6 from "../images/market/blue (6).png";
import { ItemType } from "./Account/Properties";
import MarketTabBG from "../images/market/market_active_tab.png";
import { useState } from "react";
import ReactSelect, { OptionType } from "../components/Select";
import SearchIcon from "../images/market/search.png";
import NextIcon from "../images/market/next.png";
import PrevIcon from "../images/market/prev.png";

const MarketTab = styled.div`
  margin-right: -2rem;
  cursor: pointer;

  &.active {
    background: url(${MarketTabBG});
    background-size: 100% 100%;
  }
`;

const Search = styled.input.attrs({ type: "text" })`
  background: #0303036b;
  border: 1px solid;
  border-image-source: linear-gradient(90deg, #493e8f 0%, #b22376 100%);
  border-image-slice: 1;
  outline: none;
  height: 36px;
  background: url(${SearchIcon}) no-repeat center left;
  background-position: 10px;
`;

const PageNumber = styled.input.attrs({ type: "number" })`
  width: 64px;
  border: 2px solid #403258;
  background: transparent;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

interface Tab {
  label: string;
  value: string;
}

const MarketPage = () => {
  const items_land: MarketItemProps[] = [
    {
      img_url: Item1,
      content:
        "For research and production of electronic components and mechanical parts.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "gray",
      head: "Martian Institute:",
    },
    {
      img_url: Item2,
      content: "Used to refine Martian mineral resources.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "gray",
      head: "Smelter Factory:",
    },
    {
      img_url: Item3,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "orange",
      head: "Drone Radar:",
    },
    {
      img_url: Item4,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "orange",
      head: "Chronosphere:",
    },
    {
      img_url: Item5,
      content:
        "Generate energy  production of electronic components and mechanical parts.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "gray",
      head: "Martian Institute:",
    },
    {
      img_url: Item6,
      content: "Used to refine Martian mineral resources.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "gray",
      head: "Smelter Factory:",
    },
    {
      img_url: Item1,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "orange",
      head: "Drone Radar:",
    },
    {
      img_url: Item6,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "orange",
      head: "Chronosphere:",
    },
    {
      img_url: Item5,
      content:
        "Generate energy to maintain the normal operation of other buildings and various activities.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "green",
      head: "Reactor:",
    },
    {
      img_url: Item4,
      content:
        "Used to controls Drones and allocates them to different tasks. ",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "orange",
      head: "Drone Radar:",
    },
    {
      img_url: Item3,
      content: "A teleportation device that helps people explore the Mars",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "orange",
      head: "Chronosphere:",
    },
    {
      img_url: Item2,
      content:
        "Generate energy to maintain the normal operation of other buildings and various activities.",
      type: ItemType.LEGENDARY,
      name: "Land",
      price: "500",
      chain: "Binance Smart Chain",
      color: "green",
      head: "Reactor:",
    },
  ];

  const Tabs: Tab[] = [
    { label: "Official Store", value: "store" },
    { label: "Community Market", value: "market" },
  ];

  const Properties: OptionType[] = [
    { label: "All Property", value: "" },
    { label: "Lands", value: "lands" },
    { label: "Turrets", value: "turrets" },
    { label: "Buildings", value: "buildings" },
    { label: "Trap", value: "trap" },
    { label: "Blind Box", value: "blindbox" },
  ];

  const Sorts: OptionType[] = [
    { label: "Rarity", value: "rarity" },
    { label: "Latest", value: "latest" },
    { label: "Price", value: "price" },
  ];

  const Options: OptionType[] = [
    { label: "SpaceY 2025", value: "" },
    { label: "SpaceY 2025", value: "" },
    { label: "SpaceY 2025", value: "" },
  ];

  const [activeTab, setActiveTab] = useState<string>(Tabs[0].value);
  const [property, setProperty] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [pageNum, setPageNum] = useState<number>(1);

  const pageNumChange = (value: number) => {
    if (value < 1) {
      setPageNum(1);
      return;
    }
    if (value > 499) {
      setPageNum(500);
      return;
    }
    setPageNum(value);
  };

  return (
    <>
      <BreadCrumb title="Market" />
      <div className="container m-auto md:px-5 py-10">
        <div className="md:flex justify-between items-center md:px-4">
          <div className="flex items-center">
            {Tabs.map((tab, index) => (
              <MarketTab
                key={index}
                className={`py-3 md:py-6 px-8 md:px-12 text-sm md:text-lg ${
                  activeTab === tab.value ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </MarketTab>
            ))}
          </div>
          <ReactSelect
            options={Options}
            classNamePrefix="select"
            selectClassName="select-1 w-full md:w-52 mt-4 md:mt-0"
            id="react-select"
            name="react-select"
            defaultOption={""}
            handleChange={(event: { value: string }) =>
              setProperty(event.value)
            }
          />
        </div>
        <div className="md:flex justify-between items-center mt-6 md:px-4">
          <div className="md:flex">
            <div className="w-full md:w-52">
              <ReactSelect
                options={Properties}
                classNamePrefix="select"
                id="react-select"
                name="react-select"
                defaultOption={property}
                handleChange={(event: { value: string }) =>
                  setProperty(event.value)
                }
              />
            </div>
            <div className="w-full md:w-52 md:ml-8 mt-4 md:mt-0">
              <ReactSelect
                options={Sorts}
                classNamePrefix="select"
                id="react-select"
                name="react-select"
                placeholder="Sort by: "
                defaultOption={sort}
                handleChange={(event: { value: string }) =>
                  setSort(event.value)
                }
              />
            </div>
          </div>
          <Search
            className="px-8 w-full md:w-1/3 mt-4 md:mt-0"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-wrap mt-8">
          {items_land.map((item, index) => (
            <MarketItem props={item} key={index} />
          ))}
        </div>
        <div className="flex md:px-4 justify-end items-center mt-20">
          <img
            src={PrevIcon}
            alt="pagination control"
            onClick={() => pageNumChange(pageNum - 1)}
            className="cursor-pointer"
          />
          <PageNumber
            className="mx-4 px-2"
            min="1"
            max="500"
            onChange={(e) => pageNumChange(Number(e.target.value))}
            value={pageNum}
          />
          <span className="mr-4">of 500</span>
          <img
            src={NextIcon}
            alt="pagination control"
            onClick={() => pageNumChange(pageNum + 1)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default MarketPage;
