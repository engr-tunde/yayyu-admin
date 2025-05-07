import React from "react";

const Table = ({ columns, renderRow, data }) => {
  return (
    <table className="w-full mt-4 h-[90px] overflow-y-scroll overflow-x-scroll">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="overflow-y-scroll ">
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
};

export default Table;
