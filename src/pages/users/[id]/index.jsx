import React from "react";
import { Link } from "react-router-dom";
import FormModal from "../../../components/globals/FormModal";
import Announcements from "../../../components/globals/Announcements";
import BigCalendar from "../../../components/globals/BigCalendar";
import Performance from "../../../components/globals/Performance";

const SingleUserPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row gap-4">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-titusDarkGray py-6 rounded-md flex-1 flex gap-4 px-2">
            <div className="w-1/3">
              <img
                src="https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/327772887_1202312623758954_965954364083622135_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFiyd9LPGcdc-4fYxVxyNTwZLeK9Lz760Bkt4r0vPvrQPbF-MPN-bgs3nUqMsuZJl-vz_gg_jNaezMZVyVtIS6e&_nc_ohc=HLXsGp5KtWsQ7kNvgEakfbw&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=AAlsScMo0rK81-WxicXhR0F&oh=00_AYA7b3ym6cqBZmJWdMLLZz4t-ObLBiUCsRS2181BlLRmFQ&oe=67259E81"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold text-gray-300">Tee King</h1>
              <FormModal
                table="student"
                type="update"
                data={{
                  id: 1,
                  instructorId: "1234567890",
                  username: "teeking",
                  firstName: "Tee",
                  lastName: "King",
                  email: "john@doe.com",
                  photo:
                    "https://imgs.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  phone: "1234567890",
                  subjects: ["Math", "Geometry"],
                  classes: ["1B", "2A", "3C"],
                  address: "123 Main St, Anytown, USA",
                }}
              />
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <img
                    src="/assets/images/blood.png"
                    height={14}
                    width={14}
                    alt=""
                  />
                  <span className=""> A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <img
                    src="/assets/images/date.png"
                    height={14}
                    width={14}
                    alt=""
                  />
                  <span className=""> January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <img
                    src="/assets/images/mail.png"
                    height={14}
                    width={14}
                    alt=""
                  />
                  <span className=""> devteeking@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <img
                    src="/assets/images/phone.png"
                    height={14}
                    width={14}
                    alt=""
                  />
                  <span className="">09046832081</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <div className="w-full bg-titusDarkGray p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[47%] 2xl:w-[48%]">
              <img
                src="/assets/images/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-500">Attendance</span>
              </div>
            </div>
            <div className="w-full bg-titusDarkGray p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[47%] 2xl:w-[48%]">
              <img
                src="/assets/images/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2024</h1>
                <span className="text-sm text-gray-500">Class</span>
              </div>
            </div>
            <div className="w-full bg-titusDarkGray p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[47%] 2xl:w-[48%]">
              <img
                src="/assets/images/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">30</h1>
                <span className="text-sm text-gray-500">Lessons</span>
              </div>
            </div>
            <div className="w-full bg-titusDarkGray p-4 rounded-md flex gap-4 md:w-[48%] xl:w-[47%] 2xl:w-[48%]">
              <img
                src="/assets/images/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">A</h1>
                <span className="text-sm text-gray-500">Batch</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-titusDarkGray rounded-md p-4 h-[800px]">
          <h1>Student's Schedule0</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-titusDarkGray p-4 rounded-md">
          <h1 className="text-xl font-semibold"> Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-sm text-gray-900">
            <Link to="" className="p-3 rounded-md bg-titusLight">
              Student&apos;s Lessons
            </Link>
            <Link to="" className="p-3 rounded-md bg-titusPurpleLight">
              Student&apos;s Instructors
            </Link>
            <Link to="" className="p-3 rounded-md bg-titusLilac">
              Student&apos;s Exams
            </Link>
            <Link to="" className="p-3 rounded-md bg-titusSky">
              Student&apos;s Assignments
            </Link>
            <Link to="" className="p-3 rounded-md bg-titusYellowLight">
              Student&apos;s Results
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleUserPage;
