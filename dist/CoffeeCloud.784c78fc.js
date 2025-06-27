// import { commonHeaders } from "./headers.js";
const apiUrl = "https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=EIGHT_HOURS";
const commonHeaders = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290IiwianRpIjoiNTk0ZTU5N2FmYTRmOGMwMDAxMDJjMzg4IiwiYXV0aCI6IkFETUlOLEFQSV9BQ0NFU1MsQlVTSU5FU1NfTU9ERUwsQ0xJRU5ULENPRkZFRV9BU19BX1NFUlZJQ0VfQVVTVFJBTElBLENPRkZFRV9BU19BX1NFUlZJQ0VfREssQ09GRkVFX0FTX0FfU0VSVklDRV9LVVdBSVQsQ09GRkVFX0VYVEVSTkFMLEdFTkVSQUwsSU5TSUdIVFNfREFUQSxTQ0FOT01BVF9BRE1JTixTQ1RfREVWLFNVUEVSLVVTRVIsVEVDSE5JQ0FMLFRFU1RJTkcsVU5BU1NJR05FRF9BQ0NFU1MsVVNFUiIsImV4cCI6MTc0MzY1NTM2OH0.ey49Pwo-E_N-1rC_CVGcmfJB87RnbSy8rZ59PACjZ_k",
    "Content-Type": "application/json"
};
const apiUrls = {
    "Last 8 hours": "https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=EIGHT_HOURS",
    "Last 24 hours": "https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=TWENTY_FOUR_HOURS",
    "Last 1 week": "https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=ONE_WEEK"
};
function fetchAndRenderData(timeRange) {
    const apiUrl = apiUrls[timeRange];
    if (!apiUrl) return;
    fetch(apiUrl, {
        headers: commonHeaders
    }).then((response)=>response.json()).then((data)=>{
        const chartData = data.map((item)=>[
                item.Hour,
                parseInt(item.NumberOfCups)
            ]);
        Highcharts.chart("container2", {
            chart: {
                type: "area",
                zooming: {
                    type: "x"
                },
                panning: true,
                panKey: "shift",
                scrollablePlotArea: {
                    minWidth: 600
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: chartData.map((item)=>item[0]),
                title: {
                    text: "Hour"
                }
            },
            yAxis: {
                title: {
                    text: "Number of Cups"
                }
            },
            tooltip: {
                headerFormat: "{point.key}<br>",
                pointFormat: "No of cups: {point.y}",
                shared: true
            },
            legend: {
                enabled: false
            },
            series: [
                {
                    data: chartData.map((item)=>item[1]),
                    name: "Number of Cups",
                    color: "#3498db",
                    fillOpacity: 0.5,
                    marker: {
                        enabled: false
                    }
                }
            ]
        });
    }).catch((error)=>console.error("Error fetching data:", error));
}
document.querySelector(".opt").addEventListener("change", function() {
    fetchAndRenderData(this.value);
});
// Initial load
document.addEventListener("DOMContentLoaded", function() {
    fetchAndRenderData("Last 8 hours");
});
am5.ready(function() {
    // Create root element
    // Fetch data from API
    fetch("https://ccdev.scanomat.com/rest/orders/by/product/chart?groupid=-1", {
        method: "GET",
        headers: commonHeaders
    }).then((response)=>response.json()).then((data)=>{
        var root = am5.Root.new("chartdiv");
        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);
        // Create chart
        var chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout,
            innerRadius: am5.percent(50)
        }));
        // Create series
        var series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            alignLabels: false
        }));
        series.labels.template.setAll({
            textType: "circular",
            centerX: 0,
            centerY: 0
        });
        // Transform API response to match the chart format
        const formattedData = data.filter((item)=>item.label) // Remove empty labels
        .map((item)=>({
                category: item.label,
                value: item.value,
                fill: am5.color(item.color)
            }));
        // console.log(formattedData);
        // Set the formatted data
        series.data.setAll(formattedData.splice(0, 10));
        var legend = chart.children.push(am5.Legend.new(root, {
            centerX: am5.percent(50),
            x: am5.percent(50),
            marginTop: 15,
            marginBottom: 15
        }));
        legend.data.setAll(series.dataItems);
        // Play initial series animation
        series.appear(1000, 100);
    }).catch((error)=>console.error("Error fetching data:", error));
// Create legend
});
function loading(type) {
    let loader = document.getElementById("loader");
    let loadingText = document.getElementById("loading-text");
    let general = document.getElementById("general");
    let technical = document.getElementById("technical");
    general.style.display = "none";
    technical.style.display = "none";
    general.style.opacity = "0";
    technical.style.opacity = "0";
    loader.style.display = "block";
    loadingText.style.display = "block"; // Show loading message
    // Force reflow to apply display change
    loader.offsetHeight;
    setTimeout(()=>{
        loader.style.display = "none";
        loadingText.style.display = "none"; // Hide message when image appears
        const img = document.getElementById(type);
        img.style.display = "block";
        // Slight delay to ensure display change registers
        setTimeout(()=>{
            img.style.opacity = "1";
        }, 50);
    }, 1000);
}
function showDashboard(type) {
    let mainBlock = document.getElementById("main-block1");
    let loader = document.getElementById("loader");
    let loadingText = document.getElementById("loading-text");
    let hiddendash = document.querySelector(".dashboardhidden");
    // mainBlock.style.display = 'block';
    loader.style.display = "block";
    loadingText.style.display = "block";
    hiddendash.style.backgroundColor = '#40434a';
    hiddendash.style.color = 'white';
    // Force reflow to apply display change
    loader.offsetHeight;
    setTimeout(()=>{
        loader.style.display = "none";
        loadingText.style.display = "none"; // Hide message when image appears
        // const mainBlock = document.getElementById(type);
        mainBlock.style.display = "block";
    // Slight delay to ensure display change registers
    //   setTimeout(() => {
    //     img.style.opacity = "1";
    //   }, 50);
    }, 1000);
}
function empty(type) {
    let mainBlock = document.getElementById("main-block1");
    mainBlock.style.display = "none";
// setTimeout(() => {
//     loader.style.display = 'none';
//     loadingText.style.display = 'none'; // Hide message when image appears
//     // const mainBlock = document.getElementById(type);
//     mainBlock.style.display = 'block';
//     // Slight delay to ensure display change registers
//     setTimeout(() => {
//         img.style.opacity = '1';
//     }, 50);
// }, 2000);
}
function toggleNav() {
    let sidebar = document.getElementById("mySidebar");
    let main = document.getElementById("main-block");
    if (sidebar.style.width === "220px") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        sidebar.style.width = "220px";
        main.style.marginLeft = "205px";
    }
}
var myModal = document.getElementById("myModal-1");
// Get the button that opens the myModal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the myModal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the myModal
btn.onclick = function() {
    myModal.style.display = "block";
};
// When the user clicks on <span> (x), close the myModal
span.onclick = function() {
    myModal.style.display = "none";
};
// When the user clicks anywhere outside of the myModal, close it
window.onclick = function(event) {
    if (event.target == myModal) myModal.style.display = "none";
};
// function openModal() {
//   document.getElementById("modalOverlay").style.display = "block";
//   document.getElementById("modalContent-1").style.right = "0";
// }
// function closeModal() {
//   document.getElementById("modalContent-1").style.right = "-100%";
//   setTimeout(() => {
//       document.getElementById("modalOverlay").style.display = "none";
//   }, 400); // Match transition time
// }
document.getElementById("signInOverlay").addEventListener("click", function(event) {
    if (event.target === event.currentTarget) closeSignInNav();
});
function openSignInNav() {
    document.getElementById("signInNav").style.transition = "none";
    document.getElementById("signInNav").style.width = "26%";
    document.getElementById("signInOverlay").style.width = "100%";
    document.getElementById("signInOverlay").style.backgroundColor = "rgba(0,0,0,0.5)";
    setTimeout(function() {
        document.getElementById("signInNav").style.transition = "width 0.3s ease";
    }, 0);
}
function closeSignInNav() {
    document.getElementById("signInNav").style.width = "0%";
    document.getElementById("signInOverlay").style.width = "0%";
    document.getElementById("signInOverlay").style.backgroundColor = "transparent";
}

//# sourceMappingURL=CoffeeCloud.784c78fc.js.map
