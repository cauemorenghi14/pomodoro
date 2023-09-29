import React, { Component } from "react";
import dynamic from "next/dynamic";

interface ApexChartProps {
    dia: number
    mes: string
    horas: number[]
}

const options = {
    labels: [""],
    fill: {
        colors: ["#00A537"]
    }
};

const ApexChart2 = dynamic(() => import("react-apexcharts"), { ssr: false });

interface ApexChartState {
  series: number[];
  options: {
    chart: {
      height: number;
      type: string;
    };
    plotOptions: {
      radialBar: {
        hollow: {
          size: string;
        };
      };
    };
    labels: string[];
  };
}

class ApexChartComponent extends Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [70],
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
          },
        },
        labels: ["Cricket"],
      },
    };
  }

  render() {
    return (
      <div id="chart" className="text-center">
        <p>{this.props.dia}/{this.props.mes}</p>
        <ApexChart2
          options={options}
          series={this.props.horas}
          type="radialBar"
          height={200}
        />
      </div>
    );
  }
}

export default ApexChartComponent;
