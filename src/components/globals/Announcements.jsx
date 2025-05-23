const Announcements = () => {
  return (
    <div className="p-4 bg-titusDarkGray rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-300">Announcements</h1>
        <span className="text-xs text-gray-500">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-titusSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-titusDarkGray rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            deserunt mollitia perferendis?
          </p>
        </div>
        <div className="bg-titusLilac rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-titusDarkGray rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            deserunt mollitia perferendis?
          </p>
        </div>
        <div className="bg-titusSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-titusDarkGray rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            deserunt mollitia perferendis?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
