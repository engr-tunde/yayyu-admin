import React from "react";
import NavBar from "../../components/NavBar";
import AboutSectionOne from "../../components/about/AboutSectionOne";
import AboutSectionTwo from "../../components/about/AboutSectionTwo";
import AboutSectionThree from "../../components/about/AboutSectionThree";
import Head from "../../components/Head";

const AboutPage = () => {
  return (
    <>
      <Head pageTitle="About Us" />
      <div className="bg-titusDarkBG">
        <AboutSectionOne />
        <AboutSectionTwo />
        <AboutSectionThree />
      </div>
    </>
  );
};

export default AboutPage;
