import React, { useRef, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { useOutsideClick } from "../../../utils/helpers";

const CurrencyAssetDropdownMini = ({
  data,
  setdata,
  array,
  title,
  firstItem = null,
}) => {
  const [showAsset, setshowAsset] = useState(false);
  const ref = useRef();
  useOutsideClick(ref.current, () => setshowAsset(false));
  return (
    <>
      <div
        className="w-full flex items-center justify-between rounded-lg px-2 h-full py-[10px] cursor-pointer"
        onMouseEnter={() => {
          setshowAsset(true);
        }}
        onClick={() => {
          setshowAsset(!showAsset);
        }}
      >
        <img
          src={`/assets/images/tokens/${data.icon}`}
          alt={import.meta.env.VITE_APP_NAME}
          className="w-5"
        />
        <div className="text-white text-sm">{title}</div>
        <FaArrowCircleDown className="" />
      </div>
      <div
        className={
          showAsset
            ? "w-full absolute z-[1500] px-2 py-5 border-titusLightBorder flex flex-col gap-1 left-0 top-12 rounded-lg bg-titusDarkGrey"
            : "hidden"
        }
        onMouseLeave={() => setshowAsset(false)}
      >
        {firstItem && (
          <div
            className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
            onClick={() => {
              setdata({});
              setshowAsset(false);
            }}
          >
            <div
              className={
                !Object.keys(data).length
                  ? "text-white text-sm font-medium"
                  : "text-white text-sm font-light"
              }
            >
              {firstItem}
            </div>
          </div>
        )}
        {array.map((item, i) => {
          let it = item.ticker;

          return (
            <div
              className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
              key={i}
              onClick={() => {
                setdata(item);
                setshowAsset(false);
              }}
            >
              <img
                src={`/assets/images/tokens/${item.icon}`}
                alt={import.meta.env.VITE_APP_NAME}
                className="w-5"
              />
              <div
                className={
                  data?.ticker === it
                    ? "text-white text-sm font-medium"
                    : "text-white text-sm font-light"
                }
              >
                {item.name}
              </div>
              <div className="text-sm font-light">{item.ticker}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CurrencyAssetDropdownMini;
