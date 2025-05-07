import TableSearch from "../../components/globals/TableSearch";
import FormModal from "../../components/globals/FormModal";
import Table from "../../components/globals/Table";
import Pagination from "../../components/globals/Pagination";
import { role } from "../../lib/data";
import { fetchOrders } from "../../api";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";
import { formatter } from "../../utils/helpers";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const columns = [
  {
    header: "Order Info",
    accessor: "order_title",
  },
  {
    header: "Ordered By",
    accessor: "first_name",
  },
  {
    header: "Location",
    accessor: "city",
  },
  {
    header: "Amount Paid",
    accessor: "total_paid",
    className: "hidden md:table-cell",
  },
  {
    header: "Delivery Status",
    accessor: "delivery_status",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const PendingOrdersPage = () => {
  const { orders, ordersLoading, ordersError, mutate } = fetchOrders();
  mutate();
  const [data, setdata] = useState();
  const [searchBy, setSearchBy] = useState();

  useEffect(() => {
    let arr = orders?.data?.filter(
      (item) => item.delivery_status.toLowerCase() == "pending"
    );

    // if (searchBy) {
    //   arr = arr?.filter((item) =>
    //     item.order_title.toLowerCase().includes(searchBy.toLowerCase())
    //   );
    // }
    setdata(arr);
    mutate();
  }, [orders, searchBy]);

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
          <p className="font-semibold text-gray-300">{item.order_title}</p>
          <span className="text-sm text-gray-400">{item.items.length} pcs</span>
        </div>
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.first_name} {item.last_name}
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        <div className="flex flex-col">
          <span className="text-gray-300 font-medium">
            {" "}
            {item.shipping_method}
          </span>
          <span>{item.city}</span>
        </div>
      </td>
      <td className="hidden md:table-cell text-gray-400">
        {formatter(item.total_paid).toString().split("NGN")[1].substr(1)}
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.delivery_status}
      </td>

      <td>
        <div className="flex items-center gap-2 lg:gap-3">
          <Link to={`/orders/${item._id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-yayyuYellow text-black">
              {/* <img
                src="/assets/images/view.png"
                alt=""
                width={16}
                height={16}
              />{" "} */}
              <FaEye />
            </button>
          </Link>
          {item.delivery_status !== "Completed" && (
            <FormModal
              table="order"
              type="complete"
              data={item}
              id={item._id}
              mutate={mutate}
            />
          )}
          {item.delivery_status !== "Canceled" && (
            <FormModal
              table="order"
              type="cancel"
              data={item}
              id={item._id}
              mutate={mutate}
            />
          )}
          {item.delivery_status !== "Pending" && (
            <FormModal
              table="order"
              type="pend"
              data={item}
              id={item._id}
              mutate={mutate}
            />
          )}
          <FormModal
            table="order"
            type="delete"
            id={item._id}
            mutate={mutate}
          />
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-titusDarkGray p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="hidden md:block text-lg font-semibold text-gray-400">
          All Pending Orders
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch setSearchBy={setSearchBy} />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-titusLilac">
              <img
                src="/assets/images/filter.png"
                alt=""
                width={14}
                height={14}
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-titusLilac">
              <img
                src="/assets/images/sort.png"
                alt=""
                width={14}
                height={14}
              />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      {data ? (
        <div className="max-h-[70vh] overflow-y-scroll">
          <Table columns={columns} renderRow={renderRow} data={data} />
        </div>
      ) : null}
      {ordersLoading ? <Loader /> : null}
      {ordersError ? <ErrorWidget error={ordersError} /> : null}

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default PendingOrdersPage;
