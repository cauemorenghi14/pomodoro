import React from "react";
import dynamic from "next/dynamic";

interface ApexChartProps {
  horas: number[]
  possiveis: number[]
}
const options = {
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: "Saira",
      color: "#000",
    },
  },
  colors: ["#e0e0e0", "#161515"], //"#77B6EA", "#98FB98"
  chart: {
    foreColor: "#e1e1e1",
  },
  markers: {
    colors: ["#fff"],
  },
  subtitle: {
    text: "Horas",
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "12px",
      fontWeight: "normal",
      fontFamily: undefined,
      color: "#e1e1e1",
    },
  },
  series: [
    {
      name: "Horas Trabalhadas",
      data: [1,2,3,4,5,6,7,8,9],
    },
    {
      name: "Horas Possíveis",
      data: [2,3,4,5,6,7,8,9,10],
    }
  ],
};
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
interface ApexChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    chart: {
      height: number;
      type: string;
      dropShadow: {
        enabled: boolean;
        color: string;
        top: number;
        left: number;
        blur: number;
        opacity: number;
      };
      toolbar: {
        show: boolean;
      };
    };
    colors: string[];
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      curve: string;
    };
    title: {
      text: string;
      align: string;
    };
    grid: {
      borderColor: string;
      row: {
        colors: string[];
        opacity: number;
      };
    };
    markers: {
      size: number;
    };
    xaxis: {
      categories: string[];
      title: {
        text: string;
      };
    };
    yaxis: {
      title: {
        text: string;
      };
      min: number;
      max: number;
    };
    legend: {
      position: string;
      horizontalAlign: string;
      floating: boolean;
      offsetY: number;
      offsetX: number;
    };
  };
}
class ApexChartComponent extends React.Component<
  ApexChartProps,
  ApexChartState
> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [
        {
          name: "Horas Trabalhadas",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "Horas Possíveis",
          data: [12, 11, 14, 18, 17, 13, 13],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#98FB98", "#98FB98"], // Cores das séries
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Average High & Low Temperature",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7", // Cor da borda do grid
          row: {
            colors: ["#f3f3f3", "transparent"], // Cores das linhas do grid
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ApexChart
          options={options}
          series={[
            {
              name: "Horas Trabalhadas",
              data: this.props.horas
            },
            {
              name: "Horas Possíveis",
              data: this.props.possiveis
            }
          ]}
          type="line"
          height={250}
        />
      </div>
    );
  }
}

export default ApexChartComponent;
