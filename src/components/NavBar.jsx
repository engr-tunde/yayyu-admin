import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowCircleRight,
  FaArrowCircleDown,
  FaSearch,
  FaTelegram,
  FaDiscord,
  FaDownload,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
// import useFetchCredential from "../api/useFetchCredential";
import { successNotification } from "./../utils/helpers";
import { companyMenu, exploreMenu } from "../utils/data";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  let location = useLocation();
  const pathname = location.pathname;
  console.log({ pathname });

  const handleNavToggle = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed w-full shadow-lg z-[100] py-[3%] md:py-[2px] px-5 md:px-10 bg-titusDarkGrey">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center w-full h-full">
          <div className="flex items-center gap-14">
            <Link to="/" className="flex items-center justify-center">
              <img
                src="/assets/images/logo.png"
                alt=""
                className="w-[40px] md:w-[50px]"
              />
              <div className="flex flex-col items-start gap-0 text-white">
                <span className="text-[11px] md:text-[12px] font-bold uppercase p-0 m-0 leading-[0.9em] text-start">
                  TiTus
                </span>
                <span className="text-[8px] md:text-[8px] font-medium uppercase">
                  Exchange
                </span>
              </div>
            </Link>
            <div
              // style={{ color: `${linkColor}` }}
              className="hidden md:flex gap-10 text-[14px] font-medium items-center"
            >
              <Link
                to="/m2m"
                className={pathname === "m2m" ? "active" : "menu-link"}
                onMouseEnter={() => {
                  setShowExplore(false);
                  setShowCompany(false);
                }}
              >
                M2M
              </Link>
              <Link
                to="/swap"
                className={pathname === "swap" ? "active" : "menu-link"}
                onMouseEnter={() => {
                  setShowExplore(false);
                  setShowCompany(false);
                }}
              >
                Swap
              </Link>
              <Link
                to="/buy"
                className={pathname === "buy" ? "active" : "menu-link"}
                onMouseEnter={() => {
                  setShowExplore(false);
                  setShowCompany(false);
                }}
              >
                Buy & Sell
              </Link>

              <div
                className={
                  pathname === "/about"
                    ? "active relative"
                    : pathname === "/about#team"
                    ? "active relative"
                    : pathname === "/careers"
                    ? "active relative"
                    : "menu-link relative"
                }
                onMouseEnter={() => {
                  setShowExplore(false);
                  setShowCompany(true);
                }}
              >
                <li className="flex gap-1 items-center justify-center">
                  <span>Company</span>
                  <FaArrowCircleDown className="text-titusGreen" />
                </li>
                <div
                  onMouseEnter={() => {
                    setShowCompany(true);
                  }}
                  onMouseLeave={() => setShowCompany(false)}
                  className={
                    showCompany
                      ? "bg-titusDarkGrey text-sm py-6 flex flex-col absolute -left-[30%] top-8 rounded-lg text-white border-[1px] border-titusGreen w-[180px]"
                      : "hidden"
                  }
                >
                  {companyMenu.map((item, i) => (
                    <Link
                      key={i}
                      to={item.url}
                      className="text-white hover:text-titusGreenDeep hover:bg-titusGreen pl-4 pr-14 py-2 w-full ease-in duration-300"
                      onClick={() => setShowCompany(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/support"
                className={pathname === "/support" ? "active" : "menu-link"}
                onMouseEnter={() => {
                  setShowExplore(false);
                  setShowCompany(false);
                }}
              >
                Support
              </Link>
              <div
                className={
                  pathname === "/industry-updates"
                    ? "active relative"
                    : pathname === "/product-updates"
                    ? "active relative"
                    : pathname === "/faqs"
                    ? "active relative"
                    : pathname === "/whitepaper"
                    ? "active relative"
                    : "menu-link relative"
                }
                onMouseEnter={() => {
                  setShowCompany(false);
                  setShowExplore(true);
                }}
              >
                <li className="flex gap-1 items-center justify-center">
                  <span>Explore</span>
                  <FaArrowCircleDown className="text-titusGreen" />
                </li>
                <div
                  onMouseEnter={() => setShowExplore(true)}
                  onMouseLeave={() => setShowExplore(false)}
                  className={
                    showExplore
                      ? "bg-titusDarkGrey text-sm py-6 flex flex-col absolute -left-[30%] top-8 rounded-lg text-white border-[1px] border-titusGreen w-max"
                      : "hidden"
                  }
                >
                  {exploreMenu.map((item, i) => (
                    <Link
                      key={i}
                      to={item.url}
                      className="text-white hover:text-titusGreenDeep hover:bg-titusGreen pl-4 pr-14 py-2 w-full ease-in duration-300"
                      onClick={() => setShowExplore(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="flex btnn-dark py-[6px] px-4 text-[12px] font-medium justify-center items-center ease-in duration-300"
            >
              <span className="mr-2">Login</span>
              <span>
                <FaArrowCircleRight className="text-titusGreen" />
              </span>
            </Link>
            <Link
              to="/register"
              className="flex btnn1 py-[6px] px-4 text-[12px] font-medium justify-center items-center ease-in duration-300"
            >
              <span className="mr-2">Sign Up</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Link>
            <div
              onClick={() => {
                successNotification("Mobile apps are coming soon!");
              }}
              className="scaleItem flex p-[6px] px-2 cursor-pointer"
            >
              <span>
                <FaDownload />
              </span>
            </div>
          </div>
          <div onClick={handleNavToggle} className="md:hidden">
            <AiOutlineMenu className="text-gray-100" size={22} />
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? "md:hidden fixed z-[150] left-0 top-0 w-full h-screen bg-titusDarkGrey p-[8%] ease-in duration-500"
              : "hidden h-0 w-0"
          }
        >
          <div className="flex w-full justify-end items-center mb-3">
            <div
              onClick={handleNavToggle}
              className="pl-3 pb-3 cursor-pointer text-gray-300 font-bold text-2xl"
            >
              <AiOutlineCloseCircle size={30} />
            </div>
          </div>
          <div className="flex justify-between items-center mb-6">
            <Link
              to="/register"
              className="w-[47%] flex btnn-dark py-[8px] px-4 text-[13px] font-semibold justify-center items-center ease-in duration-300"
            >
              <span className="mr-2">Log In</span>
              <span>
                <FaArrowCircleRight className="text-titusGreen" />
              </span>
            </Link>
            <Link
              to="/register"
              className="w-[47%] flex btnn1 py-[8px] px-4 text-[13px] font-semibold justify-center items-center ease-in duration-300"
            >
              <span className="mr-2">Sign Up</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-2 border-[1px] border-[#ffffff73] rounded-lg mb-3">
            <FaSearch />
            <input
              type="text"
              className="w-[95%] p-[14px] h-max text-white bg-titusDarkGrey border-transparent active:border-0"
              placeholder="Coin, function, announcement"
            />
          </div>

          <div className="py-4 flex flex-col">
            <div className="flex flex-col gap-2 text-sm">
              <Link
                onClick={() => setNav(false)}
                to="/"
                className={activeLink === "home" ? "active" : "menu-link py-2"}
              >
                Swap Assets
              </Link>
              <Link
                onClick={() => setNav(false)}
                to="/m2m"
                className={activeLink === "media" ? "active" : "menu-link py-2"}
              >
                M2M Market
              </Link>
              <Link
                onClick={() => setNav(false)}
                to="/"
                className={activeLink === "about" ? "active" : "menu-link py-2"}
              >
                Buy Crypro
              </Link>

              <Link
                onClick={() => setNav(false)}
                to="/about"
                className={activeLink === "alert" ? "active" : "menu-link py-2"}
              >
                About Us
              </Link>
              <Link
                onClick={() => setNav(false)}
                to="/about#team"
                className={
                  activeLink === "market" ? "active" : "menu-link py-2"
                }
              >
                Our Team
              </Link>
              <Link
                onClick={() => setNav(false)}
                to="/careers"
                className={
                  activeLink === "careers" ? "active" : "menu-link py-2"
                }
              >
                Careers
              </Link>
              <Link
                onClick={() => setNav(false)}
                to="/"
                className={activeLink === "api" ? "active" : "menu-link py-2"}
              >
                Support
              </Link>
            </div>

            <div className="pt-[15%]">
              <p className="tracking-widest text-[#a1a1a1] font-medium text-sm">
                Meet us on Social Media
              </p>
              <div className="flex items-center justify-start gap-5 my-4 w-full sm:w-[80%] text-titusGreen">
                <Link
                  to="https://x.com/"
                  className="rounded-full shadow-md shadow-titusGreenFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaTelegram />
                </Link>
                <Link
                  to="https://x.com/"
                  className="rounded-full shadow-md shadow-titusGreenFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="https://x.com/"
                  className="rounded-full shadow-md shadow-titusGreenFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaDiscord />
                </Link>
                <Link
                  to="https://instagram.com/"
                  className="rounded-full shadow-md shadow-titusGreenFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://facebook.com/"
                  className="rounded-full shadow-md shadow-titusGreenFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
