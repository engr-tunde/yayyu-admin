import TableSearch from "../../components/globals/TableSearch";
import FormModal from "../../components/globals/FormModal";
import Table from "../../components/globals/Table";
import Pagination from "../../components/globals/Pagination";
import { role } from "../../lib/data";
import { fetchShipping } from "../../api";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";

const columns = [
  {
    header: "Location",
    accessor: "location",
  },
  {
    header: "Delivery Duration",
    accessor: "delivery_duration",
  },
  {
    header: "Delivery Fee",
    accessor: "fee",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ShippingPage = () => {
  const { shipping, shippingLoading, shippingError, mutate } = fetchShipping();
  mutate();

  console.log("shipping", shipping);
  const renderRow = (item) => (
    <tr key={item._id} className="even:bg-titusDarkLight hover:bg-black">
      <td className="flex items-center gap-4 p-4 text-sm">
        <div className="font-semibold text-gray-300">{item.location}</div>
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.delivery_duration}
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">{item.fee}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <FormModal
              table="shipping"
              type="update"
              data={item}
              id={item._id}
              mutate={mutate}
            />
          )}
          {role === "admin" && (
            <FormModal
              table="shipping"
              type="delete"
              id={item._id}
              mutate={mutate}
            />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-titusDarkGray p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-gray-400">
          All Shipping Data
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
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
            {role === "admin" && <FormModal table="shipping" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      {shipping ? (
        <Table columns={columns} renderRow={renderRow} data={shipping?.data} />
      ) : null}
      {shippingLoading ? <Loader /> : null}
      {shippingError ? <ErrorWidget error={shippingError} /> : null}

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ShippingPage;
