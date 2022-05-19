import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartDataType {
  name: string;
  x: number;
  y: number;
}
interface ParentChilds {
  data: ChartDataType[];
}

const state = {
  options: {
    chart: {
      height: '100%',
      toolbar: {
        show: false
      }
    },
    dataLables: {
      enabled: false
    },
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
    },
    colors: ['#0b9444', '#fbb251', '#d24221'],
    grid: {
      show: false
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    }
  }
};

const ScatterChartPanel: React.FC<ParentChilds> = (props) => {
  return (
    <ReactApexChart
      options={state.options}
      series={props.data}
      type="scatter"
      width={'100%'}
      height={'80px'}
    />
  );
};

export default ScatterChartPanel;
