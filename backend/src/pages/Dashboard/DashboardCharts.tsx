import React from 'react';
import ReactApexChart from "react-apexcharts";

import getChartColorsArray from "Common/ChartsDynamicColor";

const RevenueCharts = ({ dataColors, chartData }: any) => {
    var revenueChartColors = getChartColorsArray(dataColors);

    const series = chartData

    var options: any = {
        chart: {
            height: 405,
            zoom: {
                enabled: true
            },
            toolbar: {
                show: false
            }
        },
        colors: revenueChartColors,
        markers: {
            size: 0,
            colors: "#ffffff",
            strokeColors: revenueChartColors,
            strokeWidth: 1,
            strokeOpacity: 0.9,
            fillOpacity: 1,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [2, 2, 2],
            curve: 'smooth'
        },
        fill: {
            type: ['solid', 'gradient', 'solid'],
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                inverseColors: false,
                opacityFrom: 0.3,
                opacityTo: 0.0,
                stops: [20, 80, 100, 100]
            },
        },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2
            },
            borderColor: '#f1f1f1'
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
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
                height="405"
                className="apex-charts"
            />
        </React.Fragment>
    );
}

const SatisfactionChart = ({ dataColors }: any) => {
    const satisfactionChartsColors = getChartColorsArray(dataColors)
    const series = [{
        name: 'This Month',
        data: [49, 54, 48, 54, 67, 88, 96]
    }, {
        name: 'Last Month',
        data: [57, 66, 74, 63, 55, 70, 85]
    }];
    var options: any = {
        chart: {
            height: 250,
            type: 'area',
            toolbar: {
                show: false
            }
        },
        fill: {
            type: ['gradient', 'gradient'],
            gradient: {
                shadeIntensity: 1,
                type: "vertical",
                inverseColors: false,
                opacityFrom: 0.3,
                opacityTo: 0.0,
                stops: [50, 70, 100, 100]
            },
        },
        markers: {
            size: 4,
            colors: "#ffffff",
            strokeColors: satisfactionChartsColors,
            strokeWidth: 1,
            strokeOpacity: 0.9,
            fillOpacity: 1,
            hover: {
                size: 6,
            }
        },
        grid: {
            show: false,
            padding: {
                top: -35,
                right: 0,
                bottom: 0,
                left: -6,
            },
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [2, 2],
            curve: 'smooth'
        },
        colors: satisfactionChartsColors,
        xaxis: {
            labels: {
                show: false,
            }
        },
        yaxis: {
            labels: {
                show: false,
            }
        },
    };
    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                type="area"
                height="240"
                className="apex-charts"
            />
        </React.Fragment>
    );
}

const TopCategoriesChart = ({ dataColors }: any) => {
    const topCategoriesChartsColors = getChartColorsArray(dataColors)
    const series = [85, 69, 45, 78];
    var options = {
        chart: {
            height: 300,
            type: 'radialBar',
        },
        sparkline: {
            enabled: true
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Sales',
                        formatter: function (w: any) {
                            return 2922
                        }
                    }
                }
            }
        },
        labels: ['Fashion', 'Electronics', 'Groceries', 'Others'],
        colors: topCategoriesChartsColors,
        legend: {
            show: false,
            fontSize: '16px',
            position: 'bottom',
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
        },
    };
    return (
        <React.Fragment>
            <ReactApexChart
                options={options}
                series={series}
                type="radialBar"
                height="300"
                className="apex-charts"
            />
        </React.Fragment>
    );
}

export { RevenueCharts, SatisfactionChart, TopCategoriesChart };