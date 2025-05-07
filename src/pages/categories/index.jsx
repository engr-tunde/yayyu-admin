import { Link } from "react-router-dom";
import TableSearch from "../../components/globals/TableSearch";
import FormModal from "../../components/globals/FormModal";
import Table from "../../components/globals/Table";
import Pagination from "../../components/globals/Pagination";
import { role } from "../../lib/data";
import { fetchCategories } from "../../api";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";

const columns = [
  {
    header: "Category",
    accessor: "category",
  },
  {
    header: "Category Slug",
    accessor: "category_slug",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const CategoriesPage = () => {
  const { categories, categoriesLoading, categoriesError, mutate } =
    fetchCategories();
  mutate();

  console.log("categories", categories);
  const renderRow = (item) => (
    <tr key={item._id} className="even:bg-titusDarkLight hover:bg-black">
      <td className="flex items-center gap-4 p-4 text-sm">
        <div className="font-semibold text-gray-300">{item.category}</div>
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.category_slug}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <FormModal
              table="category"
              type="update"
              data={item}
              id={item._id}
              mutate={mutate}
            />
          )}
          {role === "admin" && (
            <FormModal
              table="category"
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
          All App Administrators
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
            {role === "admin" && <FormModal table="category" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      {categories ? (
        <Table
          columns={columns}
          renderRow={renderRow}
          data={categories?.data}
        />
      ) : null}
      {categoriesLoading ? <Loader /> : null}
      {categoriesError ? <ErrorWidget error={categoriesError} /> : null}

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default CategoriesPage;
