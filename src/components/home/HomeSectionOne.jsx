import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";

const HomeSectionOne = () => {
  return (
    <div className="bg-black relative z-10">
      <div className="container pt-32 lg:pt-32 pb-[200px] lg:pb-[150px] px-8 md:px-10 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="col-span-1 flex flex-col gap-8 lg:gap-10">
            <h1 className="text-[36px] lg:text-[60px] font-bold leading-[1.2em] font-sans text-[#fff]">
              Your <span className="text-titusGreen"> Number 1</span> Gateway to
              Web3
            </h1>
            <p className="">
              Buy, Sell, Trade with Peers and Swap Cryptos in Lightening Speed,
              Simple Way& Low Fees
            </p>
            <Link
              to=""
              className="w-max btnn1 flex items-center gap-2 py-3 px-10 font-semibold"
            >
              <div className="span">Swap Your Assets</div>
              <FaCoins className="text-black" />
            </Link>
          </div>
          <div className="col-span-1">
            <img src="/assets/images/bg.jpg" alt="" className="updown" />
          </div>
        </div>
      </div>
      <img
        src="/assets/images/hand.png"
        alt=""
        className="w-[300px] lg:w-[500px] absolute right-0 bottom-0 lg:-bottom-40 z-0"
      />
    </div>
  );
};

export default HomeSectionOne;
