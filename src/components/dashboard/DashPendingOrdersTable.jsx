import React, { useEffect, useState } from "react";
import { fetchOrders } from "../../api";
import Table from "../globals/Table";
import Loader from "../globals/Loader";
import ErrorWidget from "../globals/ErrorWidget";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const columns = [
  {
    header: "Items",
    accessor: "order_title",
  },
  {
    header: "By",
    accessor: "first_name",
  },
  {
    header: "Location",
    accessor: "city",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const DashPendingOrdersTable = () => {
  const { orders, ordersLoading, ordersError, mutate } = fetchOrders();
  mutate();
  const [data, setdata] = useState();

  useEffect(() => {
    let arr = orders?.data?.filter(
      (item) => item.delivery_status.toLowerCase() == "pending"
    );
    setdata(arr);
    mutate();
  }, [orders]);

  const renderRow = (item) => (
    <tr key={item._id} className="even:bg-titusDarkLight hover:bg-black p-0">
      <td className="px-2 py-4 flex gap-4">
        <img
          alt=""
          src={`${import.meta.env.VITE_API_PUBLIC}/products/${item.img}`}
          width={30}
          height={30}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-gray-300">
            {item.order_title.substr(0, 10)}...
          </p>
          <span className="text-sm text-gray-400">{item.items.length} pcs</span>
        </div>
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.first_name} {item.last_name}
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        <div className="flex flex-col">
          <span>{item.city}</span>
        </div>
      </td>
      <td>
        <div className="flex items-center justify-end pe-1">
          <Link to={`/orders/${item._id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-titusSky">
              <img
                src="/assets/images/view.png"
                alt=""
                width={16}
                height={16}
              />{" "}
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="rounded-2xl h-full bg-titusDarkGray p-4 overflow-y-scroll">
      <h1 className="text-gray-200 text-lg font-semibol mb-3">
        Pending Orders
      </h1>
      <div className="h-[90%] flex flex-col justify-between overflow-y-scroll">
        <div className="">
          {data ? (
            <div className="max-h-[70vh] overflow-y-scroll">
              <Table columns={columns} renderRow={renderRow} data={data} />
            </div>
          ) : null}
          {ordersLoading ? <Loader /> : null}
          {ordersError ? <ErrorWidget error={ordersError} /> : null}
        </div>
        <div className="text-sm text-yayyuYellow text-center">
          <Link to="/orders/pending">View all</Link>
        </div>
      </div>
    </div>
  );
};

export default DashPendingOrdersTable;
