import { useEffect, useState } from "react";
import { fetchOrders } from "../../api";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Navbar = ({ admin }) => {
  const [data, setdata] = useState();
  const { orders, ordersLoading, ordersError, mutate } = fetchOrders();
  useEffect(() => {
    let arr = orders?.data?.filter(
      (item) => item.delivery_status.toLowerCase() == "pending"
    );
    setdata(arr);
    mutate();
  }, [orders]);

  return (
    <div className="flex items-center justify-between p-4">
      {/* SAECRH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <img src="/assets/images/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* ICONS & USER BAR */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <img src="/assets/images/message.png" alt="" height={20} width={20} />
        </div>
        <Link
          to="/orders/pending"
          className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
        >
          <img
            src="/assets/images/announcement.png"
            alt=""
            height={20}
            width={20}
          />
          {data ? (
            <div className="absolute -top-3 -right-3 h-5 w-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
              {data.length}
            </div>
          ) : null}
          {ordersLoading ? <Loader /> : null}
        </Link>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium text-titusLilac">
            {admin.username}
          </span>
          <span className="text-[10px] text-gray-500 text-right">
            Superadmin
          </span>
        </div>
        <img
          src="/assets/images/avatar.png"
          alt=""
          height={36}
          width={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
