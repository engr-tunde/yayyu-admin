import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const BlogHeader = ({ title }) => {
  let location = useLocation();
  const pathname = location.pathname;
  const link = {
    active: "hover:text-titusGreenFaded duration-300 ease-in text-titusGreen",
    inactive: "hover:text-titusGreenFaded duration-300 ease-in text-white",
  };
  return (
    <>
      <div className="mt-[53px] fixed w-full shadow-lg z-[10] py-[3%] md:py-[5px] px-5 md:px-10 bg-titusGreenDeep text-white">
        <div className="container flex justify-between items-center">
          <div className="font-semibold lg:text-lg">{title}</div>
          <div className="hidden md:flex gap-10 text-[14px] font-medium items-center text-white ">
            <Link
              to="/industry-updates"
              className={
                pathname === "/industry-updates" ? link.active : link.inactive
              }
            >
              Industry Updates
            </Link>
            <Link
              to="/product-updates"
              className={
                pathname === "/product-updates" ? link.active : link.inactive
              }
            >
              Product Updates
            </Link>
            <Link
              to="/announcements"
              className={
                pathname === "/announcements" ? link.active : link.inactive
              }
            >
              Announcements
            </Link>
            <Link
              to="/faqs"
              className={pathname === "/faqs" ? link.active : link.inactive}
            >
              FAQs
            </Link>
            <Link
              to="/whitepaper"
              className={
                pathname === "/whitepaper" ? link.active : link.inactive
              }
            >
              Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
