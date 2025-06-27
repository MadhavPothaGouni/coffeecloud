// import { commonHeaders } from "./headers.js";
// const elevationDatatech = [
//   [0.0, 225],
//   [0.1, 226],
//   [0.2, 228],
//   [0.3, 228],
//   [0.4, 229],
//   [0.5, 229],
//   [0.6, 230],
//   [0.7, 234],
// ];
// // Now create the chart
// Highcharts.chart("containertech", {
//   chart: {
//     type: "area",
//     zooming: {
//       type: "x",
//     },
//     panning: true,
//     panKey: "shift",
//     scrollablePlotArea: {
//       minWidth: 600,
//     },
//   },
//   lang: {
//     accessibility: {
//       screenReaderSection: {
//         annotations: {
//           descriptionNoPoints:
//             "{annotationText}, at distance " +
//             "{annotation.options.point.x}km, elevation " +
//             "{annotation.options.point.y} meters.",
//         },
//       },
//     },
//   },
//   credits: {
//     enabled: false,
//   },
//   annotations: [
//     {
//       draggable: "",
//       labelOptions: {
//         backgroundColor: "rgba(255,255,255,0.5)",
//         verticalAlign: "top",
//         y: 15,
//       },
//       labels: [
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 27.98,
//             y: 255,
//           },
//           text: "Arbois",
//         },
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 45.5,
//             y: 611,
//           },
//           text: "Montrond",
//         },
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 63,
//             y: 651,
//           },
//           text: "Mont-sur-Monnet",
//         },
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 84,
//             y: 789,
//           },
//           x: -10,
//           text: "Bonlieu",
//         },
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 129.5,
//             y: 382,
//           },
//           text: "Chassal",
//         },
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 159,
//             y: 443,
//           },
//           text: "Saint-Claude",
//         },
//       ],
//     },
//     {
//       draggable: "",
//       labels: [
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 101.44,
//             y: 1026,
//           },
//           x: -30,
//           text: "Col de la Joux",
//         },
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 138.5,
//             y: 748,
//           },
//           text: "Côte de Viry",
//         },
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 176.4,
//             y: 1202,
//           },
//           text: "Montée de la Combe <br>de Laisia Les Molunes",
//         },
//       ],
//     },
//     {
//       draggable: "",
//       labelOptions: {
//         shape: "connector",
//         align: "right",
//         justify: false,
//         crop: true,
//         style: {
//           fontSize: "10px",
//           textOutline: "1px white",
//         },
//       },
//       labels: [
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 96.2,
//             y: 783,
//           },
//           text: "6.1 km climb <br>4.6% on avg.",
//         },
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 134.5,
//             y: 540,
//           },
//           text: "7.6 km climb <br>5.2% on avg.",
//         },
//         {
//           point: {
//             xAxis: 0,
//             yAxis: 0,
//             x: 172.2,
//             y: 925,
//           },
//           text: "11.7 km climb <br>6.4% on avg.",
//         },
//       ],
//     },
//   ],
//   xAxis: {
//     labels: {
//       format: "{value} km",
//     },
//     minRange: 5,
//     title: {
//       text: "Distance",
//     },
//     accessibility: {
//       rangeDescription: "Range: 0 to 187.8km.",
//     },
//   },
//   yAxis: {
//     startOnTick: true,
//     endOnTick: false,
//     maxPadding: 0.35,
//     title: {
//       text: null,
//     },
//     labels: {
//       format: "{value} m",
//     },
//     accessibility: {
//       description: "Elevation",
//       rangeDescription: "Range: 0 to 1,553 meters",
//     },
//   },
//   tooltip: {
//     headerFormat: "Distance: {point.x:.1f} km<br>",
//     pointFormat: "{point.y} m a. s. l.",
//     shared: true,
//   },
//   legend: {
//     enabled: false,
//   },
//   series: [
//     {
//       data: elevationData,
//       lineColor: Highcharts.getOptions().colors[1],
//       color: Highcharts.getOptions().colors[2],
//       fillOpacity: 0.5,
//       name: "Elevation",
//       marker: {
//         enabled: false,
//       },
//       threshold: null,
//     },
//   ],
// });
// am5.ready(function () {
//   // Create root element
//   // https://www.amcharts.com/docs/v5/getting-started/#Root_element
//   var root = am5.Root.new("chartdiv-2");
//   // Set themes
//   // https://www.amcharts.com/docs/v5/concepts/themes/
//   root.setThemes([am5themes_Animated.new(root)]);
//   // Create chart
//   // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
//   var chart = root.container.children.push(
//     am5percent.PieChart.new(root, {
//       layout: root.verticalLayout,
//       innerRadius: am5.percent(50),
//     })
//   );
//   // Create series
//   // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
//   var series = chart.series.push(
//     am5percent.PieSeries.new(root, {
//       valueField: "value",
//       categoryField: "category",
//       alignLabels: false,
//     })
//   );
//   series.labels.template.setAll({
//     textType: "circular",
//     centerX: 0,
//     centerY: 0,
//   });
//   // Set data
//   // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
//   series.data.setAll([
//     { value: 10, category: "One" },
//     { value: 9, category: "Two" },
//     { value: 6, category: "Three" },
//     { value: 5, category: "Four" },
//     { value: 4, category: "Five" },
//     { value: 3, category: "Six" },
//     { value: 1, category: "Seven" },
//   ]);
//   // Create legend
//   // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
//   var legend = chart.children.push(
//     am5.Legend.new(root, {
//       centerX: am5.percent(50),
//       x: am5.percent(50),
//       marginTop: 15,
//       marginBottom: 15,
//     })
//   );
//   legend.data.setAll(series.dataItems);
//   // Play initial series animation
//   // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
//   series.appear(1000, 100);
// }); // end am5.ready()

//# sourceMappingURL=CoffeeCloud.3d054a46.js.map
