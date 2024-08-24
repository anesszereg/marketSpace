import React from 'react';
import ReactApexChart from "react-apexcharts";
import getChartColorsArray from "Common/ChartsDynamicColor";

const PurchaseCharts  = ({dataColors} : any) => {

    var linechartDatalabelColors = getChartColorsArray(dataColors);
    const series = [{
        name: "Sales",
        data: [15, 24, 32, 36, 33, 31, 33]
    },
    {
        name: "Purchase",
        data: [18, 30, 19, 25, 17, 22, 18]
    }
    ];
    var options = {
        chart: {
            height: 380,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        colors: linechartDatalabelColors,
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [3, 3],
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2
            },
            borderColor: '#f1f1f1'
        },
        markers: {
            style: 'inverted',
            size: 6
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                legend: {
                    show: false
                },
            }
        }]
    }
  return (
    <React.Fragment>
        <ReactApexChart
            dir="ltr"
            options={options}
            series={series}
            type="line"
            height="380"
            className="apex-charts"
        />
    </React.Fragment>
  )
}

const IncomeStatisticsCharts  = ({dataColors} : any) => {

    var chartColumnColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Net Profit',
        data: [296, 285, 365, 410, 321, 357, 436, 397, 510]
    }];
    var options = {
        chart: {
            height: 380,
            type: 'bar',
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '45%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: chartColumnColors,
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (Thousands)'
            }
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        fill: {
            opacity: 1

        },
        tooltip: {
            y: {
                formatter: function (val : any) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }
  return (
    <React.Fragment>
        <ReactApexChart
            dir="ltr"
            options={options}
            series={series}
            type="bar"
            height="380"
            className="apex-charts"
        />
    </React.Fragment>
  )
}

const TopSellingProductCharts  = ({dataColors} : any) => {

    var chartColumnStackedColors = getChartColorsArray(dataColors);
    const series = [{
        name: 'Phone',
        data: [44, 55, 41, 67, 22, 43, 24, 41, 25, 10, 32]
    }, {
        name: 'Clothes',
        data: [13, 23, 20, 8, 13, 27, 19, 20, 14, 36, 18]
    }, {
        name: 'Smartwatch',
        data: [11, 17, 15, 15, 21, 14, 8, 11, 12, 17, 20]
    }, {
        name: 'Footwear',
        data: [21, 7, 25, 13, 22, 8, 32, 16, 30, 22, 13]
    }, {
        name: 'Other',
        data: [47, 15, 10, 9, 18, 10, 41, 31, 45, 20, 64]
    }]
    var options = {
        yaxis: {
            title: {
                text: 'Products Order'
            }
        },
        legend: {
            show: false,
        },
        chart: {
            type: 'bar',
            height: 400,
            stacked: true,
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
        },
        responsive: [{
            breakpoint: 480,
        }],
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
            opacity: 1
        },
        colors: chartColumnStackedColors,
    };
  return (
    <React.Fragment>
        <ReactApexChart
            dir="ltr"
            options={options}
            series={series}
            type="bar"
            height="400"
            className="apex-charts"
        />
    </React.Fragment>
  )
}

const OrdersbyCountriesCharts  = ({dataColors} : any) => {

    var barchartCountriesColors = getChartColorsArray(dataColors);
    const series = [{
        data: [1245, 1640, 490, 1255, 1050, 689, 800, 1879, 1014],
        name: 'Orders'
    }];
    var options = {
        series: [{
            data: [1245, 1640, 490, 1255, 1050, 689, 800, 1879, 1014],
            name: 'Orders',
        }],
        chart: {
            type: 'bar',
            height: 400,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
                distributed: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        colors: barchartCountriesColors,
        dataLabels: {
            enabled: true,
            offsetX: 32,
            style: {
                fontSize: '12px',
                fontWeight: 500,
                colors: ['#adb5bd']
            }
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        xaxis: {
            categories: ['India', 'US', 'China', 'Indonesia', 'Russia', 'Canada', 'Brazil', 'USA', 'UK'],
        },
    };
  return (
    <React.Fragment>
        <ReactApexChart
            dir="ltr"
            options={options}
            series={series}
            type="bar"
            height="400"
            className="apex-charts"
        />
    </React.Fragment>
  )
}

export { PurchaseCharts, IncomeStatisticsCharts, TopSellingProductCharts, OrdersbyCountriesCharts }
