import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"));

const options = {};

const series = [
  {
    name: "primeiro",
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
];

const Grafico = () => {
  return (
    <div>
      <Chart options={options} series={series} />
    </div>
  );
};

export default Grafico;
