import React from "react";
import Chart from "react-apexcharts";

const Graph=({chartype="line"}) => {
  const chartOptions = {
    chart: {
      id: "basic-line",
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996],
      title: { text: "Date", style: { fontsize: "16px" } },
    },
    title: {
      align: "center",
    },
    yaxis: {
      title: { text: "Request", style: { fontsize: "16px" } },
    },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60],
    },
  ];

  return (
    <div className="app">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type={chartype}
        width="100%"
        height="400"
      />
    </div>
  );
};

export default Graph;
