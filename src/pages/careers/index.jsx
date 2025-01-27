import React from "react";
import Head from "../../components/Head";
import CareerSectionOne from "../../components/careers/CareerSectionOne";
import CareerSectionTwo from "../../components/careers/CareerSectionTwo";

const CareersPage = () => {
  return (
    <>
      <Head pageTitle="Careers Us" />
      <div className="bg-titusDarkBG">
        <CareerSectionOne />
        <CareerSectionTwo />
      </div>
    </>
  );
};

export default CareersPage;
