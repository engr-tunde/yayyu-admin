import { Link } from "react-router-dom";
import TableSearch from "../../../components/globals/TableSearch";
import FormModal from "../../../components/globals/FormModal";
import Table from "../../../components/globals/Table";
import Pagination from "../../../components/globals/Pagination";
import { role, studentsData } from "../../../lib/data";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Contract Address",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  {
    header: "Chain ID",
    accessor: "chainId",
    className: "hidden md:table-cell",
  },
  {
    header: "Decimal",
    accessor: "decimal",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const BuySellTokensPage = () => {
  // const { tokens, tokensLoading, tokensError } = fetchP2PTokenList();
  // console.log("tokens", tokens);

  const renderRow = (item) => (
    <tr key={item._id} className="even:bg-titusDarkLight hover:bg-black">
      <td className="flex items-center gap-4 p-4">
        <img
          alt=""
          src={`${import.meta.env.VITE_API_PUBLIC_URL}/imgs/tokens/${
            item.logoURI
          }`}
          width={20}
          height={20}
          className="md:hidden xl:block w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-300">{item.name}</h3>
          <p className="text-sm text-gray-500">{item?.symbol}</p>
        </div>
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.address}
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.chainId}
      </td>
      <td className="hidden md:table-cell text-gray-400 text-sm">
        {item.decimal}
      </td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link to={`/users/${item.id}`}>
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
            <FormModal table="token" type="update" data={item} id={item.id} />
          )}
          {role === "admin" && (
            <FormModal table="token" type="delete" id={item.id} />
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
          All Listed Tokens for Buy/Sell Trading
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
            {role === "admin" && <FormModal table="token" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      {/* {tokens ? (
        <Table columns={columns} renderRow={renderRow} data={tokens.data} />
      ) : null} */}
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default BuySellTokensPage;
