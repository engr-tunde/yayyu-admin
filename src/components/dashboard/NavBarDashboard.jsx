import axios from "axios";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowCircleRight,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
axios.defaults.withCredentials = true;

const NavBarDashboard = ({ userData }) => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleNavToggle = () => {
    setNav(!nav);
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleLogout = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user-auth/logout`,
      null,
      {
        withCredentials: true,
      }
    );
    console.log(response);
    try {
      if (response.status === 200) {
        const data = response.data;
        successNotification(data.message);
        setTimeout(() => window.location.replace("/login"), 1500);
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  return (
    <>
      <div className="w-full shadow-2xl z-[100] py-4 md:py-4 px-5 md:px-10 bg-[#00000000] md:bg-[#0A0D16]">
        <div className="flex justify-between items-center w-full h-full">
          <Link to="/" className="flex flex-col gap-0">
            <p className="uppercase font-bold text-[20px] md:text-[25px] text-white tracking-[8px] md:tracking-[10px] leading-[12px] md:leading-[20px] mb-0">
              Elder
            </p>
            <p className="lowercase text-[11px] md:text-[13px] text-white tracking-widest mt-0">
              Intelligence
            </p>
          </Link>
          <div>
            <ul
              // style={{ color: `${linkColor}` }}
              className="hidden md:flex gap-10 text-[16px] font-medium uppercase items-center"
            >
              <Link
                to="/"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => onUpdateActiveLink("home")}
              >
                <li className="navLink">Home</li>
              </Link>
              <Link
                to="/about"
                className={activeLink === "about" ? "active" : ""}
                onClick={() => onUpdateActiveLink("about")}
              >
                <li className="navLink">About</li>
              </Link>
              <Link
                to="/media"
                className={
                  activeLink === "media"
                    ? "active"
                    : "hover:scale-105 ease-in duration-300 hover:text-[#fff]"
                }
                onClick={() => onUpdateActiveLink("media")}
              >
                <li className="navLink">Media</li>
              </Link>
              <Link
                to="/markets"
                className={
                  activeLink === "markets"
                    ? "active"
                    : "hover:scale-105 ease-in duration-300 hover:text-[#fff]"
                }
                onClick={() => onUpdateActiveLink("markets")}
              >
                <li className="navLink">Alerts</li>
              </Link>
              <Link
                to="/markets"
                className={
                  activeLink === "markets"
                    ? "active"
                    : "hover:scale-105 ease-in duration-300 hover:text-[#fff]"
                }
                onClick={() => onUpdateActiveLink("markets")}
              >
                <li className="navLink">Markets</li>
              </Link>
              <Link
                to="/contact"
                className={
                  activeLink === "contact"
                    ? "active"
                    : "hover:scale-105 ease-in duration-300 hover:text-[#fff]"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                <li className="navLink">Contact</li>
              </Link>
              <Link
                to="/api"
                className={
                  activeLink === "api"
                    ? "active"
                    : "hover:scale-105 ease-in duration-300 hover:text-[#fff]"
                }
                onClick={() => onUpdateActiveLink("api")}
              >
                <li className="navLink">API</li>
              </Link>
              <div
                onClick={handleNavToggle}
                className="hidden md:flex cursor-pointer"
              >
                <div className="btnn2 text-sm font-bold flex justify-center items-center hover:scale-105 ease-in duration-300">
                  <span className="mr-2">
                    {userData ? `${userData.name.split(" ")[0]}` : `User`}'s
                    Menu
                  </span>
                  <span>
                    <FaBars />
                  </span>
                </div>
              </div>
            </ul>
            <div onClick={handleNavToggle} className="md:hidden">
              <div className="btnn2 text-sm font-bold flex justify-center items-center hover:scale-105 ease-in duration-300">
                <span className="mr-2">
                  {userData ? `${userData.name.split(" ")[0]}` : `User`}'s Menu
                </span>
                <span>
                  <FaBars />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? "fixed z-[150] right-0 top-0 w-full h-screen bg-black/70 "
              : ""
          }
          style={{ zIndex: "11111" }}
        >
          <div
            className={
              nav
                ? "fixed h-[62vh] md:h-[60vh] right-0 top-0 ease-in duration-500 w-[60%] md:w-[20%] bg-[#000000fa] py-8 px-6 md:p-10 rounded-3xl"
                : "fixed right-[-130%] top-0 ease-in duration-500 p-10"
            }
          >
            <div>
              <div className="flex w-full justify-between items-center">
                <Link to="/" className="flex flex-col gap-0">
                  <p className="uppercase font-bold text-[22px] text-white tracking-[8px] leading-[15px] mb-0">
                    Elder
                  </p>
                  <p className="lowercase text-[12px] text-white tracking-widest mt-0">
                    Intelligence
                  </p>
                </Link>
                <div
                  onClick={handleNavToggle}
                  className="rounded-full shadow-md shadow-gray-500 p-2 cursor-pointer text-gray-300"
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="border-b border-gray-500 my-5"></div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase ">
                <Link
                  onClick={() => setNav(false)}
                  to="/dashboard"
                  className={activeLink === "" ? "active" : "text-gray-200"}
                >
                  <li className="py-4 text-sm">Dashboard</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/edit-profile"
                  className={
                    activeLink === "edit-profile" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">Edit Profile</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/edit-password"
                  className={
                    activeLink === "edit-password" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">Edit Password</li>
                </Link>
                <Link
                  onClick={() => setNav(false)}
                  to="/my-requests"
                  className={
                    activeLink === "my-requests" ? "active" : "text-gray-200"
                  }
                >
                  <li className="py-4 text-sm">My Requests</li>
                </Link>
                <div
                  onClick={handleLogout}
                  className="flex justify-start items-center gap-3"
                >
                  <li className="py-4 text-sm">Logout</li>
                  <span>
                    <FaSignOutAlt />
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarDashboard;
