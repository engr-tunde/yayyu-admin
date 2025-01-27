import React from "react";
import Head from "../../components/Head";
import ContactSectionOne from "../../components/contact/ContactSectionOne";
import ContactSectionTwo from "../../components/contact/ContactSectionTwo";

const ContactPage = () => {
  return (
    <>
      <Head pageTitle="Get n Touch" />
      <ContactSectionOne />
      <ContactSectionTwo />
    </>
  );
};

export default ContactPage;
