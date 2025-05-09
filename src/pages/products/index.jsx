import { Link } from "react-router-dom";
import TableSearch from "../../components/globals/TableSearch";
import FormModal from "../../components/globals/FormModal";
import Table from "../../components/globals/Table";
import Pagination from "../../components/globals/Pagination";
import { role } from "../../lib/data";
import { fetchCategories, fetchProducts } from "../../api";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";
import { formatter } from "../../utils/helpers";

const columns = [
  {
    header: "Product Info",
    accessor: "item_name",
  },
  {
    header: "Original/New Prices",
    accessor: "original_price",
  },
  {
    header: "Description",
    accessor: "description",
    className: "hidden md:table-cell",
  },
  {
    header: "Sizes",
    accessor: "sizes",
    className: "hidden md:table-cell",
  },
  {
    header: "Colors",
    accessor: "colors",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ProductsPage = () => {
  const { products, productsLoading, productsError, mutate } = fetchProducts();
  const { categories, categoriesLoading, categoriesError } = fetchCategories();
  mutate();

  console.log("products", products);

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
          <h3 className="font-semibold text-gray-300">
            {formatter(item.new_price).toString().split("NGN")[1].substr(1)}
          </h3>
          <span className="text-gray-400 text-sm">
            {formatter(item.original_price)
              .toString()
              .split("NGN")[1]
              .substr(1)}
            {/* {formatter(item.original_price)} */}
          </span>
        </div>
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.description.substr(0, 30)}...
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.sizes.length ? item.sizes.slice(0, 3).join(", ") : null}...
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.colors.length ? item.colors.slice(0, 3).join(", ") : null}
        ...
      </td>

      <td>
        <div className="flex items-center gap-2">
          <Link to={`/products/${item._id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-titusSky">
              <img
                src="/assets/images/view.png"
                alt=""
                width={16}
                height={16}
              />{" "}
            </button>
          </Link>
          {role === "admin" && categories && (
            <FormModal
              table="product"
              type="update"
              data={item}
              id={item._id}
              mutate={mutate}
              categories={categories?.data}
            />
          )}
          {role === "admin" && categories && (
            <FormModal
              table="product"
              type="delete"
              id={item._id}
              mutate={mutate}
              categories={categories?.data}
            />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-titusDarkGray p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="hidden md:block text-lg font-semibold text-gray-400">
          All Products In Shop
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
            {role === "admin" && categories?.data && (
              <FormModal
                table="product"
                type="create"
                categories={categories?.data}
              />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
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
      {categoriesError ? <ErrorWidget error={categoriesError} /> : null}

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ProductsPage;
