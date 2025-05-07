import { Link } from "react-router-dom";

const UserCard = ({ type, data, url }) => {
  return (
    <div className="rounded-2xl odd:bg-titusDarkLight  even:bg-titusDarkGray p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-gray-500 px-2 py-1 rounded-full text-black font-medium">
          as at 2025
        </span>
        <Link to={url}>
          <img src="/assets/images/more.png" alt="" width={20} height={20} />
        </Link>
      </div>
      <h1 className="text-2xl font-semibold my-4 text-gray-400">
        {data?.length}
      </h1>
      <h2 className="text-sm font-medium odd:text-gray-500 even:text-gray-900">
        All {type}s
      </h2>
    </div>
  );
};

export default UserCard;
