import React from "react";
import Head from "../../components/Head";
import HomeSectionOne from "../../components/home/HomeSectionOne";
import RowTwoSection from "../../components/home/HomeSectionTwo";
import HomeSectionThree from "../../components/home/HomeSectionThree";
import HomeSectionFour from "../../components/home/HomeSectionFour";
import HomeSectionFive from "../../components/home/HomeSectionFive";
import HomeSectionSix from "../../components/home/HomeSectionSix";
import HomeSectionSeven from "../../components/home/HomeSectionSeven";

const HomePage = () => {
  return (
    <>
      <Head pageTitle="Welcome to Titus Exchange" />
      <div className="bg-black">
        <HomeSectionOne />
        <RowTwoSection />
        <HomeSectionThree />
        <HomeSectionFour />
        <HomeSectionFive />
        <HomeSectionSix />
        <HomeSectionSeven />
      </div>
    </>
  );
};

export default HomePage;
