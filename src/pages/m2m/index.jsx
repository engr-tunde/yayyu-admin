import React, { useState } from "react";
import M2MHeader from "../../components/m2m/M2MHeader";
import Head from "../../components/Head";
import BuySellSectionOne from "../../components/m2m/BuySellSectionOne";
import BuySellSectionTwo from "../../components/m2m/BuySellSectionTwo";

const M2MPage = () => {
  const [token, setToken] = useState("");
  const [type, setType] = useState("Buy");
  return (
    <>
      <Head pageTitle={`Buy and Sell with your Preferred Traders`} />
      <div className="bg-titusDarkBG px-5 lg:px-0">
        <M2MHeader
          setToken={setToken}
          token={token}
          type={type}
          setType={setType}
        />
        <BuySellSectionOne token={token} type={type} />
        <BuySellSectionTwo />
      </div>
    </>
  );
};

export default M2MPage;
