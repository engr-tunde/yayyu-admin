import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "#1F1F1F",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#5904D3",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#D401F0",
  },
];

const CountChart = () => {
  return (
    <div className="border-gray-500 border-[0px] rounded-xl w-full h-full p-4 bg-titusDarkGray">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-200">Students</h1>
        <img src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              // label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <img
          alt=""
          src="/maleFemale.png"
          height={50}
          width={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-titusLilac rounded-full" />
          <h1 className="font-bold text-gray-500">1,234</h1>
          <h1 className="text-sm text-gray-300">Boys (55%)</h1>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-titusBlue rounded-full" />
          <h1 className="font-bold text-gray-500">1,234</h1>
          <h1 className="text-sm text-gray-300">Girs (48%)</h1>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
