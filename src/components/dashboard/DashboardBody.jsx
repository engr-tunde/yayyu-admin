import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { dashboardServices } from "../../utils/data";

const DashboardBody = () => {
  const history = useNavigate();

  const handleRequst = (item) => {
    history("/request-service", { state: { item: item } });
  };

  // const copyErc20Text = () => {
  //   const txt = walletData && walletData.erc20;
  //   const input = document.createElement('input');
  //   input.value = txt;
  //   document.body.appendChild(input);
  //   input.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(input);
  //   successNotification(`ERC20 wallet address copied`);
  // };

  // const copyBitcoinText = () => {
  //   const txt = walletData && walletData.bitcoin;
  //   const input = document.createElement('input');
  //   input.value = txt;
  //   document.body.appendChild(input);
  //   input.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(input);
  //   successNotification(`Bitcoin wallet address copied`);
  // };

  return (
    <div className="h-full md:h-[80vh] w-[100vw] bg-[#0A0D16]">
      <div className="container pt-[80px] pb-[170px] md:py-0 px-5 md:px-0 flex flex-col h-full justify-center gap-8 bg-[#0A0D16]">
        <div className="flex flex-col gap-0">
          <p className="uppercase font-bold text-[20px] md:text-[45px] text-white tracking-[8px] md:tracking-[-3px]">
            Elder Intelligence
          </p>
        </div>

        <div className="dashboardBox w-full py-3 px-4 md:px-8">
          <marquee behavior="" direction="">
            hi there! Which of our services are you intersted in?
          </marquee>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 md:gap-10 px-0 md:px-0">
          {dashboardServices &&
            dashboardServices.map((item, i) => (
              <div
                onClick={() => handleRequst(item)}
                // to={{
                //   pathname: "/request-service",
                //   state: { item: item },
                // }}
                key={i}
                className="col-span-1 bg-[#14161F] p-2 rounded-lg flex gap-2 md:gap-10 justify-between items-center"
              >
                <img
                  src="/assets/images/dahboard/balance-1.png"
                  alt="Hedge Funds"
                  className="w-[25%] md:w-[30%]"
                />
                <div className="flex flex-col gap-1 md:gap-0">
                  <div className="text-[12px] md:text-[16px] text-white font-medium">
                    {item.title}
                  </div>
                  <div className="text-[11px] md:text-[13px]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
