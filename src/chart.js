import { commonHeaders } from "./headers.js";

const apiUrl =
  "https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=EIGHT_HOURS";

const apiUrls = {
  "Last 8 hours":
    "https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=EIGHT_HOURS",
  "Last 24 hours":
    "https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=TWENTY_FOUR_HOURS",
  "Last 1 week":
    "https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=ONE_WEEK",
};
const side = document.getElementById("togglee");
side.addEventListener("click", function(){
  toggleNav();
})
const desh1 = document.getElementById("dash123");
desh1.addEventListener("click", function () {
  showDashboard();
});

const loadtech = document.getElementById("loadtech");
loadtech.addEventListener("click", function () {
  loadingtech();
});
const loadgen = document.getElementById("loadgen");
loadgen.addEventListener("click", function () {
  loadinggen();
});
const filterle = document.getElementById("filterle");
filterle.addEventListener("click", function(){
  openSignInNav();
})
const modal2 = document.getElementById("modalright");
modal2.addEventListener("click", function(){
  openSignInNavmodal();
})
const filterrightclosemodal = document.getElementById("closerightmodal");
filterrightclosemodal.addEventListener("click", function(){
  closeSignInNavmodal();
})
const filterrightclose = document.getElementById("closeright");
filterrightclose.addEventListener("click", function(){
  closeSignInNav();
})
const transElements = document.querySelectorAll(".trans");
transElements.forEach((element) => {
  element.addEventListener("click", function () {
    emptybox(this);
  });
});

let progressBar = document.createElement("div");
progressBar.id = "loading-progress-bar";
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.width = "0%";
progressBar.style.height = "2px";
progressBar.style.backgroundColor = "white";
progressBar.style.zIndex = 9999;
progressBar.style.transition = "width 0.1s ease-in-out";
document.body.appendChild(progressBar);

function fetchAndRenderData(timeRange) {
  const apiUrl = apiUrls[timeRange];
  if (!apiUrl) return;

  progressBar.style.width = "10%";
  let interval = setInterval(() => {
    if (parseFloat(progressBar.style.width) < 90) {
      progressBar.style.width = `${parseFloat(progressBar.style.width) + 10}%`;
    }
  }, 300);

  fetch(apiUrl, { headers: commonHeaders })
    .then((response) => response.json())
    .then((data) => {
      const chartData = data.map((item) => [
        item.Hour,
        parseInt(item.NumberOfCups),
      ]);

      Highcharts.chart("container2", {
        chart: {
          type: "area",
          zooming: { type: "x" },
          panning: true,
          panKey: "shift",
          scrollablePlotArea: { minWidth: 600 },
        },
        credits: { enabled: false },
        xAxis: {
          categories: chartData.map((item) => item[0]),
          title: { text: "Hour" },
        },
        yAxis: { title: { text: "Number of Cups" } },
        tooltip: {
          headerFormat: "{point.key}<br>",
          pointFormat: "No of cups: {point.y}",
          shared: true,
        },
        legend: { enabled: false },
        series: [
          {
            data: chartData.map((item) => item[1]),
            name: "Number of Cups",
            color: "#3498db",
            fillOpacity: 0.5,
            marker: { enabled: false },
          },
        ],
      });

      progressBar.style.width = "100%";
      setTimeout(() => {
        progressBar.style.width = "0%";
      }, 500);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      progressBar.style.width = "0%";
    })
    .finally(() => clearInterval(interval));
}

document.querySelector(".opt").addEventListener("change", function () {
  fetchAndRenderData(this.value);
});

// Initial load
document.addEventListener("DOMContentLoaded", function () {
  fetchAndRenderData("Last 8 hours");
});

am5.ready(function () {
  // Create root element
  // Fetch data from API
  fetch("https://ccdev.scanomat.com/rest/orders/by/product/chart?groupid=-1", {
    method: "GET",
    headers: commonHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      var root = am5.Root.new("chartdiv");

      // Set themes
      root.setThemes([am5themes_Animated.new(root)]);

      // Create chart
      var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          layout: root.verticalLayout,
          innerRadius: am5.percent(50),
        })
      );

      // Create series
      var series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
          alignLabels: false,
        })
      );

      series.labels.template.setAll({
        textType: "circular",
        centerX: 0,
        centerY: 0,
      });

      // Transform API response to match the chart format
      const formattedData = data
        .filter((item) => item.label) // Remove empty labels
        .map((item) => ({
          category: item.label, // Map 'label' to 'category'
          value: item.value, // Keep 'value' as is
          fill: am5.color(item.color), // Set slice color
        }));

      series.data.setAll(formattedData.splice(0, 10));

      var legend = chart.children.push(
        am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          marginTop: 15,
          marginBottom: 15,
        })
      );

      legend.data.setAll(series.dataItems);
      series.appear(1000, 100);
    })
    .catch((error) => console.error("Error fetching data:", error));
});


function loadingtech(type) {
  let loader = document.getElementById("loader");
  let loadingText = document.getElementById("loading-text");
  let general = document.getElementById("general");
  let technical = document.getElementById("technical");
  let g1 = document.querySelector(".General");
  let t1 = document.querySelector(".Technical-gap");

  general.style.display = "none";
  general.style.opacity = "0";

  loader.style.display = "block";
  loadingText.style.display = "block";
  g1.style.border = "none";
  t1.style.color = '#add8e6'
  t1.style.borderTop = "2px solid #40434a";
  t1.style.borderLeft = "2px solid #40434a";
  t1.style.borderRight = "2px solid #40434a";
  t1.style.padding = "10px";
  t1.style.paddingLeft = "20px";
  t1.style.paddingRight = "20px";
  t1.addEventListener("mouseover", function () {
    t1.style.backgroundColor = "transparent";
    t1.style.color = 'white';
  });

  t1.addEventListener("mouseout", function () {
    t1.style.backgroundColor = "transparent";
  });
  
  setTimeout(() => {
    loader.style.display = "none";
    loadingText.style.display = "none";
    technical.style.display = "block";
    technical.style.opacity = "1";
  }, 1000);
  g1.addEventListener("mouseover", function () {
    g1.style.backgroundColor = "transparent";
  });

  g1.addEventListener("mouseout", function () {
    g1.style.backgroundColor = "transparent";
    g1.style.color = '#add8e6';
  });
}

function loadinggen(type) {
  let loader = document.getElementById("loader");
  let loadingText = document.getElementById("loading-text");
  let general = document.getElementById("general");

  let technical = document.getElementById("technical");
  let g1 = document.querySelector(".General");
  let t1 = document.querySelector(".Technical-gap");


  technical.style.display = "none";
  technical.style.opacity = "0";


  loader.style.display = "block";
  loadingText.style.display = "block";

  t1.style.border = "none";
  g1.style.color = '#add8e6';
  g1.style.borderTop = "2px solid #40434a";
  g1.style.borderLeft = "2px solid #40434a";
  g1.style.borderRight = "2px solid #40434a";
  g1.style.padding = "10px 20px";
  g1.addEventListener("mouseover", function () {
    g1.style.backgroundColor = "transparent";
    g1.style.color = 'white';
  });

  g1.addEventListener("mouseout", function () {
    g1.style.backgroundColor = "transparent";
  });
  
  setTimeout(() => {
    loader.style.display = "none";
    loadingText.style.display = "none";
    general.style.display = "block";
    general.style.opacity = "1";
  }, 1000);
  t1.addEventListener("mouseover", function () {
    t1.style.backgroundColor = "transparent";
  });

  t1.addEventListener("mouseout", function () {
    t1.style.backgroundColor = "transparent";
    t1.style.color = '#add8e6';
  });
}


function showDashboard(type) {
  let mainBlock = document.getElementById("main-block1");
  let loader = document.getElementById("loader");
  let loadingText = document.getElementById("loading-text");
  let hiddendash = document.querySelector(".dashboardhidden");
  let technical = document.getElementById("technical");
  let g1 = document.querySelector(".General");
  let t1 = document.querySelector(".Technical-gap");
  technical.style.display = 'none';
  loader.style.display = "block";
  loadingText.style.display = "block";

  // Change styles for `hiddendash`
  hiddendash.style.backgroundColor = "#40434a";
  hiddendash.style.color = "white";
  t1.style.border = "none";
  t1.style.border = "none";
  g1.style.borderTop = "2px solid #40434a";
  g1.style.borderLeft = "2px solid #40434a";
  g1.style.borderRight = "2px solid #40434a";
  g1.style.padding = "10px";
  g1.style.paddingLeft = "20px";
  g1.style.paddingRight = "20px";

  // Reset styles for all `.trans` elements
  document.querySelectorAll(".trans").forEach((el) => {
    el.style.backgroundColor = "transparent";
    el.style.color = "#7384b0";
  });
  t1.addEventListener("mouseover", function () {
    t1.style.backgroundColor = "white";
  });

  t1.addEventListener("mouseout", function () {
    t1.style.backgroundColor = "transparent";
  });
  setTimeout(() => {
    loader.style.display = "none";
    loadingText.style.display = "none";
    mainBlock.style.display = "block";
  }, 1000);
}

function emptybox(clickedElement) {
  let mainBlock = document.getElementById("main-block1");
  let hiddendash = document.querySelector(".dashboardhidden");

  mainBlock.style.display = "none";
  document.querySelectorAll(".trans").forEach((el) => {
    el.style.backgroundColor = "transparent";
    el.style.color = "#7384b0";
  });

  // Apply styles to the clicked element
  clickedElement.style.backgroundColor = "#40434a";
  clickedElement.style.color = "white";
  hiddendash.style.backgroundColor = "transparent";
  hiddendash.style.color = "#7384b0";
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
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  myModal.style.display = "block";
};
span.onclick = function () {
  myModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == myModal) {
    myModal.style.display = "none";
  }
};


  document.getElementById("signInOverlay").addEventListener("click", function (event) {
    if (event.target === event.currentTarget) {
      closeSignInNav();
    }
  });

function openSignInNav() {
  document.getElementById("signInNav").style.transition = "none";
  document.getElementById("signInNav").style.width = "26%";
  document.getElementById("signInOverlay").style.width = "100%";
  document.getElementById("signInOverlay").style.backgroundColor =
    "rgba(0,0,0,0.5)";

  setTimeout(function () {
    document.getElementById("signInNav").style.transition = "width 0.3s ease";
  }, 0);
}

function closeSignInNav() {
  document.getElementById("signInNav").style.width = "0%";
  document.getElementById("signInOverlay").style.width = "0%";
  document.getElementById("signInOverlay").style.backgroundColor =
    "transparent";
}

document.getElementById("signInOverlaymodal2").addEventListener("click", function (event) {
  if (event.target === event.currentTarget) {
    closeSignInNavmodal();
  }
});

function openSignInNavmodal() {
document.getElementById("signInNavmodal").style.transition = "none";
document.getElementById("signInNavmodal").style.width = "35%";
document.getElementById("signInOverlaymodal2").style.width = "100%";
document.getElementById("signInOverlaymodal2").style.backgroundColor =
  "rgba(0,0,0,0.5)";

setTimeout(function () {
  document.getElementById("signInNavmodal").style.transition = "width 0.3s ease";
}, 0);
}

function closeSignInNavmodal() {
document.getElementById("signInNavmodal").style.width = "0%";
document.getElementById("signInOverlaymodal2").style.width = "0%";
document.getElementById("signInOverlaymodal2").style.backgroundColor =
  "transparent";
} 