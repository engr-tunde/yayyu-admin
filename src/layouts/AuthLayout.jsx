import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { checkSession } from "../api";

const AuthLayout = () => {
  const { session, sessionLoading, sessionError } = checkSession();
  console.log("session", session);
  useEffect(() => {
    if (session) {
      window.location.href = "/";
    }
  }, [session]);
  return (
    <>
      <div className="bg-titusDarkLight">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
