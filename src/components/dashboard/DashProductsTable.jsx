import { fetchProducts } from "../../api";
import FormModal from "../globals/FormModal";
import Table from "../globals/Table";
import Loader from "../globals/Loader";
import ErrorWidget from "../globals/ErrorWidget";
import { Link } from "react-router-dom";
import { formatter } from "../../utils/helpers";

const columns = [
  {
    header: "Product Info",
    accessor: "item_name",
  },
  {
    header: "Price",
    accessor: "original_price",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const DashProductsTable = () => {
  const { products, productsLoading, productsError, mutate } = fetchProducts();

  const renderRow = (item) => (
    <tr key={item._id} className="even:bg-titusDarkLight hover:bg-black">
      <td className="flex items-center gap-4 p-4">
        <img
          alt=""
          src={`${import.meta.env.VITE_API_PUBLIC}/products/${item.img}`}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-300">{item.item_name}</h3>
          <span className="text-sm text-gray-400">{item.category}</span>
        </div>
      </td>
      <td className="">
        <div className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">
            {formatter(item.original_price)
              .toString()
              .split("NGN")[1]
              .substr(1)}
            {/* {formatter(item.original_price)} */}
          </span>
        </div>
      </td>

      <td>
        <div className="flex items-center justify-end">
          <Link to={`/products/${item.item_slug}`}>
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
        Recently Added Products
      </h1>
      <div className="h-[90%] flex flex-col justify-between overflow-y-scroll">
        <div className="">
          {products ? (
            <div className="max-h-[70vh] overflow-y-scroll">
              <Table
                columns={columns}
                renderRow={renderRow}
                data={products?.data}
              />
            </div>
          ) : null}
          {productsLoading ? <Loader /> : null}
          {productsError ? <ErrorWidget error={productsError} /> : null}
        </div>
        <div className="text-sm text-yayyuYellow text-center">
          <Link to="/orders/pending">View all</Link>
        </div>
      </div>
    </div>
  );
};

export default DashProductsTable;
