import React from "react";
import { dateFormatter, successNotification } from "../../utils/helpers";

const MyRequestsBody = ({ requestsData }) => {
  const copyText = (text) => {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    successNotification(`Request ID copied`);
  };

  return (
    <div className="h-full md:h-[80vh] w-[100vw] bg-[#0A0D16]">
      <div className="max-w-[1000px] mx-auto pt-[80px] pb-[170px] md:py-0 px-5 md:px-0 flex flex-col h-full justify-center gap-8 bg-[#0A0D16]">
        <div className="text-[25px] font-bold mb-[10px]">Requests History</div>
        <div className="p-2 bg-[#181B24] overflow-x-scroll ">
          <div className="p-2 mb-2 w-[720px] md:w-full">
            <div className="font-bold text-[14px] md:text-[16px] grid grid-cols-12 gap-2 w-[100%] p-2 mb-2">
              <div className="col-span-1">SN</div>
              <div className="col-span-2">Request Title</div>
              <div className="col-span-3">ID (tap to copy)</div>
              <div className="col-span-2">Created On</div>
              <div className="col-span-3">Means of Com</div>
              <div className="col-span-1">Status</div>
            </div>

            {requestsData &&
              requestsData.map((req, i) => {
                const date = dateFormatter(req.createdAt);
                return (
                  <div
                    key={i}
                    className={`text-[15] md:text-[16px] grid grid-cols-12 w-[100%] gap-2 p-2 my-1 ${
                      i % 2 === 0 ? "bg-[#0A0D16]" : "bg-transparent"
                    }`}
                  >
                    <div className="col-span-1">{i + 1}</div>
                    <div className="col-span-2 text-[13px] md:text-[13px]">
                      {req.service}
                    </div>
                    <div
                      className="col-span-3 cursor-pointer text-[13px] md:text-[13px]"
                      onClick={() => copyText(req.serviceSlug)}
                    >
                      {req?.serviceSlug?.substr(0, 15)}...
                    </div>
                    <div className="col-span-2 text-[13px] md:text-[13px]">
                      {date}
                    </div>
                    <div className="col-span-3 text-[13px] md:text-[13px]">
                      {`${req.social} (@${req.socialHandle})`}
                    </div>
                    <div className="col-span-1 text-[13px]">{req.status}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRequestsBody;
