import { Link, Outlet } from "react-router-dom";
import Menu from "../components/globals/Menu";
import Navbar from "../components/globals/Navbar";
import { adminProfile } from "../api";
import Loader from "../components/globals/Loader";
import ErrorWidget from "../components/globals/ErrorWidget";

export default function DashboardLayout() {
  const { admin, adminLoading, adminError } = adminProfile();
  console.log("admin", admin);
  return (
    <div className="h-screen flex">
      {/* LEFT */}

      {admin ? (
        <>
          <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-titusDarkLight overflow-y-scroll">
            <Link to="" className="flex items-center justify-between gap-2">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                width={50}
                height={32}
              />
              <span className="hidden lg:block text-white">
                {import.meta.env.VITE_APP_NAME}
              </span>
            </Link>

            <Menu />
          </div>
          {/* RIGHT */}
          <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-titusDark overflow-scroll flex flex-col">
            <Navbar admin={admin?.data} />
            <Outlet />
          </div>
        </>
      ) : null}

      {adminLoading ? <Loader /> : null}
      {adminError ? <ErrorWidget error={adminError} /> : null}
    </div>
  );
}
