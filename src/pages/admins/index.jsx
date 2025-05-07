import { Link } from "react-router-dom";
import TableSearch from "../../components/globals/TableSearch";
import FormModal from "../../components/globals/FormModal";
import Table from "../../components/globals/Table";
import Pagination from "../../components/globals/Pagination";
import { role } from "../../lib/data";
import { fetchAdmins } from "../../api";
import Loader from "../../components/globals/Loader";
import ErrorWidget from "../../components/globals/ErrorWidget";

const columns = [
  {
    header: "User Info",
    accessor: "info",
  },
  {
    header: "Email",
    accessor: "email",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AdminsPage = () => {
  const { admins, adminsLoading, adminsError, mutate } = fetchAdmins();
  mutate();

  console.log("admins", admins);
  const renderRow = (item) => (
    <tr key={item._id} className="even:bg-titusDarkLight hover:bg-black">
      <td className="flex items-center gap-4 p-4">
        <img
          alt=""
          src="/assets/images/avatar.png"
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-300">{item.username}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.email}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link to={`/admins/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-titusSky">
              <img
                src="/assets/images/view.png"
                alt=""
                width={16}
                height={16}
              />{" "}
            </button>
          </Link> */}
          {role === "admin" && (
            <FormModal
              table="admin"
              type="update"
              data={item}
              id={item._id}
              mutate={mutate}
            />
          )}
          {role === "admin" && (
            <FormModal
              table="admin"
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
            {role === "admin" && <FormModal table="admin" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      {admins ? (
        <Table columns={columns} renderRow={renderRow} data={admins?.data} />
      ) : null}
      {adminsLoading ? <Loader /> : null}
      {adminsError ? <ErrorWidget error={adminsError} /> : null}

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AdminsPage;
