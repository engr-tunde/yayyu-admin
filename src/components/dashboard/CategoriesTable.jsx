import React from "react";
import { fetchCategories } from "../../api";
import FormModal from "../globals/FormModal";
import Table from "../globals/Table";
import Loader from "../globals/Loader";
import ErrorWidget from "../globals/ErrorWidget";
import { Link } from "react-router-dom";

const columns = [
  {
    header: "Category",
    accessor: "category",
  },
  {
    header: "Actions",
    accessor: "action",
    className: "text-end",
  },
];

const DashCategoriesTable = () => {
  const { categories, categoriesLoading, categoriesError, mutate } =
    fetchCategories();
  mutate();

  console.log("categories", categories);
  const renderRow = (item) => (
    <tr key={item._id} className="even:bg-titusDarkLight hover:bg-black">
      <td className="flex items-center gap-4 py-4 px-2 text-sm">
        <div className="font-semibold text-gray-300">{item.category}</div>
      </td>
      <td>
        <div className="flex items-center justify-end gap-2">
          <FormModal
            table="category"
            type="update"
            data={item}
            id={item._id}
            mutate={mutate}
          />
          <FormModal
            table="category"
            type="delete"
            id={item._id}
            mutate={mutate}
          />
        </div>
      </td>
    </tr>
  );

  return (
    <div className="rounded-2xl h-full bg-titusDarkGray p-4 overflow-y-scroll">
      <h1 className="text-gray-200 text-lg font-semibol mb-3">Categories</h1>
      <div className="h-[90%] flex flex-col justify-between overflow-y-scroll">
        <div className="">
          {categories ? (
            <Table
              columns={columns}
              renderRow={renderRow}
              data={categories?.data}
            />
          ) : null}
          {categoriesLoading ? <Loader /> : null}
          {categoriesError ? <ErrorWidget error={categoriesError} /> : null}
        </div>
        <div className="text-sm text-yayyuYellow text-center">
          <Link to="/categories">View all</Link>
        </div>
      </div>
    </div>
  );
};

export default DashCategoriesTable;
