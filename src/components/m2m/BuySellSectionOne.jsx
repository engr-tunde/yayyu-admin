import React, { useState } from "react";
import { FaArrowCircleDown, FaFilter } from "react-icons/fa";
import {
  currencies,
  openAdsData,
  paymentMethods,
  sortTradeBy,
} from "../../utils/data";
import OpenAds from "./OpenAds";

const BuySellSectionOne = ({ token, type }) => {
  const [currency, setCurrency] = useState({
    icon: "USD.png",
    ticker: "USD",
    symbol: "$",
  });
  const [showCurrencyList, setShowCurrencyList] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);

  let data = [];
  if (token.length) {
    data = openAdsData.filter((item) => item.order.token === token);
    // if (type === "Buy") {
    data = data.filter((item) => item.order.type !== type);
  } else {
    data = openAdsData;
    data = data.filter((item) => item.order.type !== type);
  }

  const [sortBy, setSortBy] = useState("Price");
  const [showSortBy, setShowSortBy] = useState(false);
  return (
    <div className="w-full pt-[25px] pb-32">
      <div className="container flex flex-col gap-6">
        <div className="w-full flex flex-col gap-3  lg:gap-0 lg:flex-row justify-between items-start lg:items-center mb-6">
          <div className="flex gap-2 lg:gap-4 items-center justify-between">
            <div className="relative">
              <div className="border-[1px] border-titusLightBorder p-1 flex items-center gap-2 rounded-lg hover:border-titusGreenFaded">
                <input
                  type="text"
                  className="border-0 bg-transparent hover:border-0 w-[60px] lg:w-[150px] h-[30px]"
                  placeholder="Transaction amount..."
                />

                <div className="bg-titusLightBorder w-[2px] h-[20px]"></div>
                <div
                  className="flex items-center gap-6 hover:border-[1px] hover:border-titusGreenFaded rounded-lg p-1"
                  onMouseEnter={() => {
                    setShowCurrencyList(true);
                    setShowPaymentMethod(false);
                    setShowSortBy(false);
                  }}
                  onClick={() => {
                    setShowCurrencyList(!showCurrencyList);
                    setShowPaymentMethod(false);
                    setShowSortBy(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={`/assets/images/currencies/${currency.icon}`}
                      alt=""
                      className="w-[15px] lg:w-[25px]"
                    />
                    <div className="text-white text-sm font-medium">
                      {currency.ticker}
                    </div>
                  </div>
                  <FaArrowCircleDown className="" />
                </div>
              </div>

              <div
                className={
                  showCurrencyList
                    ? "w-full absolute px-2 py-5 border-titusLightBorder flex flex-col gap-1 left-0 top-12 rounded-lg bg-titusDarkGrey"
                    : "hidden"
                }
                onMouseLeave={() => setShowCurrencyList(false)}
              >
                {currencies.map((item, i) => (
                  <div
                    className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
                    key={i}
                    onClick={() => {
                      setCurrency(item);
                      setShowCurrencyList(false);
                    }}
                  >
                    <img
                      src={`/assets/images/currencies/${item.icon}`}
                      alt=""
                      className="w-[20px]"
                    />
                    <div className="text-white text-sm font-medium">
                      {item.ticker}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-full">
              <div
                className="lg:w-[200px] flex items-center justify-between border-titusLightBorder border-[1px] hover:border-titusGreenFaded rounded-lg px-3 h-full py-[10px]"
                onMouseEnter={() => {
                  setShowPaymentMethod(true);
                  setShowCurrencyList(false);
                  setShowSortBy(false);
                }}
                onClick={() => {
                  setShowPaymentMethod(!showPaymentMethod);
                  setShowCurrencyList(false);
                  setShowSortBy(false);
                }}
              >
                <div className="text-white text-[10px] lg:text-sm font-medium">
                  {paymentMethod.length == 0 ? "Payment method" : paymentMethod}
                </div>
                <FaArrowCircleDown className="" />
              </div>
              <div
                className={
                  showPaymentMethod
                    ? "w-full absolute px-2 py-5 border-titusLightBorder flex flex-col gap-1 left-0 top-12 rounded-lg bg-titusDarkGrey"
                    : "hidden"
                }
                onMouseLeave={() => setShowPaymentMethod(false)}
              >
                {paymentMethods.map((item, i) => (
                  <div
                    className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
                    key={i}
                    onClick={() => {
                      setPaymentMethod(item);
                      setShowPaymentMethod(false);
                    }}
                  >
                    <div className="text-white text-sm font-medium">{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center border-titusLightBorder border-[1px] hover:border-titusGreenFaded rounded-lg px-3 h-full py-[10px] cursor-pointer">
              <FaFilter />
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative h-full">
              <div
                className="flex items-center justify-between border-titusLightBorder border-[1px] hover:border-titusGreenFaded rounded-lg px-3 h-full py-[10px] gap-4"
                onMouseEnter={() => {
                  setShowSortBy(true);
                  setShowPaymentMethod(false);
                  setShowCurrencyList(false);
                }}
                onClick={() => {
                  setShowSortBy(!showSortBy);
                  setShowPaymentMethod(false);
                  setShowCurrencyList(false);
                }}
              >
                <div className="text-white text-sm font-medium">Sort By</div>
                <div className="text-white text-sm font-medium">{sortBy}</div>
                <FaArrowCircleDown className="" />
              </div>
              <div
                className={
                  showSortBy
                    ? "w-full absolute px-2 py-5 border-titusLightBorder flex flex-col gap-1 left-0 top-12 rounded-lg bg-titusDarkGrey"
                    : "hidden"
                }
                onMouseLeave={() => setShowSortBy(false)}
              >
                {sortTradeBy.map((item, i) => (
                  <div
                    className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
                    key={i}
                    onClick={() => {
                      setSortBy(item);
                      setShowSortBy(false);
                    }}
                  >
                    <div className="text-white text-sm font-medium">{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center border-titusLightBorder border-[1px] hover:border-titusGreenFaded rounded-lg px-3 h-full py-[10px] cursor-pointer">
              <FaFilter />
            </div>
          </div>
        </div>

        <OpenAds currency={currency} data={data} />
      </div>
    </div>
  );
};

export default BuySellSectionOne;
