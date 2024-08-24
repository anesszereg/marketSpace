import React from 'react';
import getChartColorsArray from "Common/ChartsDynamicColor";
import Chart from 'react-apexcharts'

const Polar = ({ dataColors }:any) => {
  var chartPolarareaBasicColors = getChartColorsArray(dataColors);
  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21]
  var options:any = {

      chart: {
          type: 'polarArea',
          width: 400,
      },
      labels: ['Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F', 'Series G', 'Series H', 'Series I'],
      stroke: {
          colors: ['#fff']
      },
      fill: {
          opacity: 0.8
      },

      legend: {
          position: 'bottom'
      },
      colors: chartPolarareaBasicColors
  };
  return (
      <Chart
          dir="ltr"
          className="apex-charts"
          series={series}
          options={options}
          type="polarArea"
          height={310}
      />
  )
}

const PolarMonochrome = () => {
  const series = [42, 47, 52, 58, 65]
  var options:any = {
      chart: {
          width: 400,
          type: 'polarArea'
      },
      labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
      fill: {
          opacity: 1
      },
      stroke: {
          width: 1,
          colors: undefined
      },
      yaxis: {
          show: false
      },
      legend: {
          position: 'bottom'
      },
      plotOptions: {
          polarArea: {
              rings: {
                  strokeWidth: 0
              },
              spokes: {
                  strokeWidth: 0
              },
          }
      },
      theme: {
          mode: 'light',
          palette: 'palette1',
          monochrome: {
              enabled: true,
              shadeTo: 'light',
              color: '#405189',
              shadeIntensity: 0.6
          }
      }
  };
  return (
      <Chart
          dir="ltr"
          className="apex-charts"
          series={series}
          options={options}
          type="polarArea"
          height={310}
      />
  )
}

export { Polar, PolarMonochrome };