import React, { Component } from "react";
import dynamic from "next/dynamic";
import CardComparacaoModel from "@/models/CardComparacaoModel";

interface ApexChartProps {
    horas: number[]
    series: CardComparacaoModel[]
}

const ApexChart3 = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    foreColor: '#fff'
  },
  xaxis: {
    labels: {
      rotate: -45
    },
    categories: [],
    tickPlacement: 'on'
  },
}

interface ApexChartState {
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    annotations: {
      points: {
        x: string;
        seriesIndex: number;
        label: {
          borderColor: string;
          offsetY: number;
          style: {
            color: string;
            background: string;
          };
          text: string;
        };
      }[];
    };
    chart: {
      height: number;
      type: string;
    };
    plotOptions: {
      bar: {
        borderRadius: number;
        columnWidth: string;
      };
    };
    dataLabels: {
      enabled: boolean;
    };
    stroke: {
      width: number;
    };
    grid: {
      row: {
        colors: string[];
      };
    };
    xaxis: {
      labels: {
        rotate: number;
      };
      categories: string[];
      tickPlacement: string;
    };
    yaxis: {
      title: {
        text: string;
      };
    };
    fill: {
      type: string;
      gradient: {
        shade: string;
        type: string;
        shadeIntensity: number;
        gradientToColors: string | undefined;
        inverseColors: boolean;
        opacityFrom: number;
        opacityTo: number;
        stops: number[];
      };
    };
  };
}

class GraficoComparacao extends Component<ApexChartProps, ApexChartState> {
  constructor(props: ApexChartProps) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Servings',
          data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
        },
        {
            name: 'Servings',
            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
          }
      ],
      options: {
        annotations: {
          points: [
            {
              x: 'Bananas',
              seriesIndex: 0,
              label: {
                borderColor: '#775DD0',
                offsetY: 0,
                style: {
                  color: '#fff',
                  background: '#775DD0',
                },
                text: 'Bananas are good',
              }
            }
          ]
        },
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            columnWidth: '50%',
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
            'Blackberries', 'Pears', 'Watermelons', 'Cherries', 'Pomegranates', 'Tangerines', 'Papayas'
          ],
          tickPlacement: 'on'
        },
        yaxis: {
          title: {
            text: 'Servings',
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          },
        }
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ApexChart3
          options={options}
          series={this.props.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default GraficoComparacao;
