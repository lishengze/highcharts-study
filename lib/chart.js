$(function () {
    // Create the chart
    $('#container-drilldown').highcharts({
        chart: {
            type: 'column',
            events: {
                drilldown: function (e) {
                    if (!e.seriesOptions) {
                        var chart = this,
                            drilldowns = {
                                'Animals': {
                                    name: 'Animals',
                                    data: [
                                        ['Cows', 2],
                                        ['Sheep', 3]
                                    ]
                                },
                                'Fruits': {
                                    name: 'Fruits',
                                    data: [
                                        ['Apples', 5],
                                        ['Oranges', 7],
                                        ['Bananas', 2]
                                    ]
                                },
                                'Cars': {
                                    name: 'Cars',
                                    data: [
                                        ['Toyota', 1],
                                        ['Volkswagen', 2],
                                        ['Opel', 5]
                                    ]
                                }
                            },
                            series = drilldowns[e.point.name];
                        // Show the loading label
                        chart.showLoading('Simulating Ajax ...');
                        setTimeout(function () {
                            chart.hideLoading();
                            chart.addSeriesAsDrilldown(e.point, series);
                        }, 100);
                    }
                }
            }
        },
        title: {
            text: 'Async drilldown'
        },
        xAxis: {
            type: 'category',
            gridLineWidth: 1            
        },
        yAxis: {
            gridLineWidth: 1,
            gridLineColor: '#019000',
            gridLineDashStyle: 'Dash'            
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Things',
            colorByPoint: true,
            data: [{
                name: 'Animals',
                y: 5,
                drilldown: true
            }, {
                name: 'Fruits',
                y: 2,
                drilldown: true
            }, {
                name: 'Cars',
                y: 4,
                drilldown: true
            }]
        }],
        drilldown: {
            series: []
        }
    });
    
    $('#container-multiaxiss').highcharts({
        title: {
            text: 'Multiple Axis'
        },
        yAxis:[
            {
                opposite:true
            }
        ],
        series:[
            // {
            //     type:'Line',
            //     yAxis:0
            // },
            {
                type:'spline',
                yAxis:0,
                data:[23,3,23,50]
            }
            // {
            //     type:'column',
            //     yAxis:1,
            //     // data:[
            //     //     [new Date('2016/01/01').getTime(), 23],
            //     //     [new Date('2016/01/02').getTime(), 67],
            //     //     [new Date('2016/01/03').getTime(), 102],
            //     //     [new Date('2016/01/04').getTime(), 90],
            //     //     [new Date('2016/01/05').getTime(), 98]
            //     // ]
            //     data:[23,67,102,90,98]               
            // }
        ]
    });

    console.log (new Date('2016/01/01').getTime());

    $('#container-multiaxisss').highcharts({
        title: {
            text: 'Multiple Axis'
        },
        yAxis:[
            {
                opposite:true
            },
            {

            },
            {
                opposite:true
            }
        ],
        series:[
            {
                type:'Line',
                yAxis:0
            },
            {
                type:'spline',
                yAxis:1,
                data:[23,3,23,50]
            },
            {
                type:'column',
                yAxis:2,
                data:[
                    [new Date('2016/01/01').getTime(), 23],
                    [new Date('2016/01/02').getTime(), 67],
                    [new Date('2016/01/03').getTime(), 102],
                    [new Date('2016/01/04').getTime(), 90],
                    [new Date('2016/01/05').getTime(), 98]
                ]             
            }
        ]
    });

    $('#container-multiaxis').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Average Monthly Temperature and Rainfall in Tokyo'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [
        { // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, 
        { // Secondary yAxis
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm'
            }
        }, {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });
});
