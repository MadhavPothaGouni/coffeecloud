import { commonHeaders } from "./headers.js";
// const apiUrl ="https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=EIGHT_HOURS";

const apiUrls = {
  "Last 8 hours":
    "https://ccdev.scanomat.com/rest/dashboard/error_live_chart_data?groupid=-1&offset=-330&hoursrange=EIGHT_HOURS",
  "Last 24 hours":
    "https://ccdev.scanomat.com/rest/dashboard/error_live_chart_data?groupid=-1&offset=-330&hoursrange=TWENTY_FOUR_HOURS",
  "Last 1 week":
    "https://ccdev.scanomat.com/rest/dashboard/error_live_chart_data?groupid=-1&offset=-330&hoursrange=ONE_WEEK",
};
 
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

function fetchAndRenderDatatech(timeRange) {
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
        parseInt(item.Errors),
      ]);

      Highcharts.chart("containertech", {
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
        yAxis: { title: { text: "Number of Errors" } },
        tooltip: {
          headerFormat: "{point.key}<br>",
          pointFormat: "No of Errors: {point.y}",
          shared: true,
        },
        legend: { enabled: false },
        series: [
          {
            data: chartData.map((item) => item[1]),
            name: "Number of Errors",
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

document.querySelector(".opttech").addEventListener("change", function () {
  fetchAndRenderDatatech(this.value);
});

document.addEventListener("DOMContentLoaded", function () {
  fetchAndRenderDatatech("Last 8 hours");
});
am5.ready(function () {
  
  fetch("https://ccdev.scanomat.com/rest/dashboard/error_doughnut_chart?groupid=-1", {
    method: "GET",
    headers: commonHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      var root = am5.Root.new("chartdivtech");

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

//Top Error//

document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("machinetroble");

  let markup = `
    <div class="machine-divtech">
      <h3>Top error</h3>
      <div class="machine-div-childtech">
        <h5 class="average-bordertech active2">This Month</h5>
        <h5 class="average-bordertechweek">This Week</h5>
      </div>
    </div>
    <div class="navbar-line-cardtech"></div>
    <h2 class="healthy-h2tech"></h2>
    <div class="tsub">
      <h3 class="occur"></h3>
      <button class="troublebtn">Troubleshoot</button>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", markup);

  let flow = document.querySelector(".healthy-h2tech");
  let occur = document.querySelector(".occur");

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
  // document.html.appendChild(progressBar);

  let periodMap = {
    this_week: "top_error_this_week",
    this_month: "top_error_this_month",
  };

  
  machinet("this_month", document.querySelector(".average-bordertech"));

  async function machinet(period, clickedElement) {
    let apiUrl = `https://ccdev.scanomat.com/rest/dashboard/${periodMap[period]}?groupid=-1&offset=-330`;

    progressBar.style.width = "10%";
    let interval = setInterval(() => {
      if (parseFloat(progressBar.style.width) < 90) {
        progressBar.style.width = `${
          parseFloat(progressBar.style.width) + 10
        }%`;
      }
    }, 300);

    try {
      let response = await fetch(apiUrl, { headers: commonHeaders });
      let data = await response.json();

      // Update UI
      flow.textContent = `${data.error}`;
      occur.textContent = `(${data.count} occurrences)`;

      // Toggle active state
      document
        .querySelectorAll(".machine-div-childtech h5")
        .forEach((el) => el.classList.remove("active2"));
      clickedElement.classList.add("active2");
      progressBar.style.width = "100%";
      setTimeout(() => {
        progressBar.style.width = "0%";
      }, 500);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
      flow.textContent = "Error loading data";
      progressBar.style.width = "0%";
    } 
  }

  document.querySelector(".average-bordertechweek").addEventListener("click", function () {
    machinet("this_week", this);
  });

  document.querySelector(".average-bordertech").addEventListener("click", function () {
    machinet("this_month", this);
  });
});


// Last error - Realtime//

let container = document.getElementById("errorrealtime");

async function toperror() {
  try {
    const response = await fetch(
      "https://ccdev.scanomat.com/rest/dashboard/error/search?groupid=-1",
      {
        method: "POST",
        headers: commonHeaders,
        body: JSON.stringify({
          criteria: {},
          sort: { "timestamp.milliseconds": "desc" },
          offset: 0,
          limit: 1,
          count: false
        }),
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    if (data && data.result && data.result.length > 0) {
      const errorEntry = data.result[0];
      const machineName = errorEntry.machineName;
      const errorText = errorEntry.error;
      const timestamp = errorEntry.timestamp?.milliseconds;

      let timeAgo = "HAHAHA";
      if (timestamp) {
        const now = Date.now();
        const diffMs = now - timestamp;
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMinutes = Math.floor(diffMs / (1000 * 60)) % 60;

        if (diffHours >= 1) {
          timeAgo = `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
        } else {
          timeAgo = `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
        }
      }

      const markup = `
      <div class="machine-divtech">
      <h3>Last error - Realtime</h3>
      <div class="machine-div-childtech">
        <a id="notifyToggle"><ion-icon name="notifications-off" class="icon-infobelltech"></ion-icon></a>
        <h5 class="average-borderteche">Last Error</h5>
      </div>
    </div>
    
    <div class="navbar-line-card"></div>
    
    <h2 class="daystech">${errorText}<span class="piston">${timeAgo}</span></h2>
    <div class="tsub">
      <h4 class="machname">${machineName}</h4>
      <button class="trouble-btn">Troubleshoot</button>
    </div>
      `;
      container.insertAdjacentHTML("beforeend", markup);
    } else {
      container.innerHTML = `<p>No error data found.</p>`;
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    container.innerHTML = `<p>Error loading top error.</p>`;
  }
}

toperror();

//No of errors - Realtime//

document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("totalerrors");

  let markup = `
     <div class="machine-div-sptech">
      <h3>No of errors</h3>
      <div class="machine-div-childtech">
      <h5 class="card-3tech active3">Today</h5>
        <h5 class="card-4tech">This Week</h5>
      </div>
      </div>
      <div class="navbar-line-card"></div>
      <h2 class = "errornumber">57</h2>
    <p class="arrowtech">-578.53% &#8628;</p>
  `;

  container.insertAdjacentHTML("beforeend", markup);


  let errornumber = document.querySelector(".errornumber");
  let arrowtech = document.querySelector(".arrowtech");

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
  // document.html.appendChild(progressBar);

  let periodMap = {
    Today: "number_of_errors_today",
    Week: "number_of_errors_this_week",
  };

  
  machinet("Today", document.querySelector(".card-3tech"));

  async function machinet(period, clickedElement) {
    let apiUrl = `https://ccdev.scanomat.com/rest/dashboard/${periodMap[period]}?groupid=-1&offset=-330`;

    progressBar.style.width = "10%";
    let interval = setInterval(() => {
      if (parseFloat(progressBar.style.width) < 90) {
        progressBar.style.width = `${
          parseFloat(progressBar.style.width) + 10
        }%`;
      }
    }, 300);

    try {
      let response = await fetch(apiUrl, { headers: commonHeaders });
      let data = await response.json();
      // Update UI
      errornumber.textContent = `${data.totalErrors}`;
      arrowtech.textContent = `${data.percentage}`

      // Toggle active state
      document
        .querySelectorAll(".machine-div-childtech h5")
        .forEach((el) => el.classList.remove("active3"));
      clickedElement.classList.add("active3");

      progressBar.style.width = "100%";
      setTimeout(() => {
        progressBar.style.width = "0%";
      }, 500);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
      flow.textContent = "Error loading data";
      progressBar.style.width = "0%";
    } 
  }

  document.querySelector(".card-3tech").addEventListener("click", function () {
    machinet("Today", this);
  });

  document.querySelector(".card-4tech").addEventListener("click", function () {
    machinet("Week", this);
  });
});


//No of realtime errors//
const noofcupsrealtimetech = document.querySelector(".no-of-cups-realtimetech")
async function fetchTotalcups() {
  try {
    const response = await fetch(
      "https://ccdev.scanomat.com/rest/dashboard/number_of_errors_this_month?groupid=-1&offset=-330",
      {
        headers: commonHeaders,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    //   console.log(data);
    const markup = `<h2 class="realtimeerrors">${data.totalErrors}</h2>`;
    noofcupsrealtimetech.insertAdjacentHTML("beforeend", markup);
  } catch (error) {
    console.error("Error fetching data:", error);
    //   document.getElementById("cupCount").textContent = "Error!";
  }
}
fetchTotalcups();


//No of errors//

document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("totalerrorrr");

  let markup = `
    <div class="machine-divtech">
    <h3>No of errors - Realtime</h3>
    <div class="machine-div-childtech">
    <h5 class="average-bordertechh">This Year</h5>
    <h5 class="average-bordertechweekk">Total</h5>
    </div>
    </div>
    <div class="navbar-line-cardtech"></div>
    <h2 class="healthy-h2-cupstech"></h2>
  `;

  container.insertAdjacentHTML("beforeend", markup);


  let totalerr = document.querySelector(".healthy-h2-cupstech");
  // let arrowtech = document.querySelector(".arrowtech");

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
  // document.html.appendChild(progressBar);

  let periodMap = {
    This_year: "number_of_errors_this_year",
    Total: "number_of_errors_this_year",
  };

  
  machinet("This_year", document.querySelector(".average-bordertechh"));

  async function machinet(period, clickedElement) {
    let apiUrl = `https://ccdev.scanomat.com/rest/dashboard/${periodMap[period]}?groupid=-1&offset=-330`;

    progressBar.style.width = "10%";
    let interval = setInterval(() => {
      if (parseFloat(progressBar.style.width) < 90) {
        progressBar.style.width = `${
          parseFloat(progressBar.style.width) + 10
        }%`;
      }
    }, 300);

    try {
      let response = await fetch(apiUrl, { headers: commonHeaders });
      let data = await response.json();
     
      totalerr.textContent = `${data.totalErrors}`;
      document
        .querySelectorAll(".machine-div-childtech h5")
        .forEach((el) => el.classList.remove("active4"));
      clickedElement.classList.add("active4");

      progressBar.style.width = "100%";
      setTimeout(() => {
        progressBar.style.width = "0%";
      }, 500);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
      totalerr.textContent = "Error loading data";
      progressBar.style.width = "0%";
    } 
  }

  document.querySelector(".average-bordertechh").addEventListener("click", function () {
    machinet("This_year", this);
  });

  document.querySelector(".average-bordertechweekk").addEventListener("click", function () {
    machinet("Total", this);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body");
  const paginationDiv = document.getElementById("pagination-controls");
  const apiUrl = "https://ccdev.scanomat.com/rest/dashboard/top_machine_errors?groupid=-1";

  const commonHeaders = {
    "Content-Type": "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290IiwianRpIjoiNTk0ZTU5N2FmYTRmOGMwMDAxMDJjMzg4IiwiYXV0aCI6IkFETUlOLEFQSV9BQ0NFU1MsQlVTSU5FU1NfTU9ERUwsQ0xJRU5ULENPRkZFRV9BU19BX1NFUlZJQ0VfQVVTVFJBTElBLENPRkZFRV9BU19BX1NFUlZJQ0VfREssQ09GRkVFX0FTX0FfU0VSVklDRV9LVVdBSVQsQ09GRkVFX0VYVEVSTkFMLEdFTkVSQUwsSU5TSUdIVFNfREFUQSxTQ0FOT01BVF9BRE1JTixTQ1RfREVWLFNVUEVSLVVTRVIsVEVDSE5JQ0FMLFRFU1RJTkcsVU5BU1NJR05FRF9BQ0NFU1MsVVNFUiIsImV4cCI6MTc0ODY5MTczMX0.uePXpSnYG5cVd3wx4lNwO332BmF7V7zOK_Ipo_ajNzs", // Replace with your token
  };

  let currentPage = 1;
  const limit = 10;
  let totalCount = 0;

  function formatDate(milliseconds) {
    const date = new Date(milliseconds);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }

  function renderPagination() {
    const totalPages = Math.ceil(totalCount / limit);
    paginationDiv.innerHTML = "";
  
    const createButton = (text, page, isDisabled = false) => {
      const btn = document.createElement("button");
      btn.textContent = text;
      btn.classList.add("pagination-btn");
      if (page === currentPage && !["First", "Previous", "Next", "Last"].includes(text)) {
        btn.classList.add("activepag");
      }
      if (isDisabled) {
        btn.disabled = true;
        btn.classList.add("disabled");
      } else {
        btn.addEventListener("click", () => {
          currentPage = page;
          fetchTableData();
        });
      }
      return btn;
    };
  
    // Always show First and Previous 
    paginationDiv.appendChild(createButton("First", 1, currentPage === 1));
    paginationDiv.appendChild(createButton("Previous", currentPage - 1, currentPage === 1));
  
    // Numbered buttons
    for (let i = 1; i <= totalPages; i++) {
      paginationDiv.appendChild(createButton(i, i));
    }
  
    // Always show Next and Last 
    paginationDiv.appendChild(createButton("Next", currentPage + 1, currentPage === totalPages));
    paginationDiv.appendChild(createButton("Last", totalPages, currentPage === totalPages));
  }
  

  async function fetchTableData() {
    const offset = (currentPage - 1) * limit;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: commonHeaders,
        body: JSON.stringify({
          criteria: {},
          sort: { "timestamp.milliseconds": "desc" },
          offset: offset,
          limit: limit,
          count: true,
        }),
      });

      const data = await response.json();
      totalCount = data.count || 0;

      tableBody.innerHTML = "";

      if (!data.result || !Array.isArray(data.result)) {
        throw new Error("Unexpected API response format");
      }

      data.result.forEach((item) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.machineName || "Unknown";

        const errorCell = document.createElement("td");
        errorCell.textContent = item.errorsCountMap?.[0]?.error || "N/A";

        const countCell = document.createElement("td");
        countCell.textContent = item.errorsCountMap?.[0]?.count || "0";

        const totalCell = document.createElement("td");
        totalCell.textContent = item.totalCount || "0";

        const dateCell = document.createElement("td");
        dateCell.textContent = formatDate(item.timestamp.milliseconds);

        row.append(nameCell, errorCell, countCell, totalCell, dateCell);
        tableBody.appendChild(row);
      });

      renderPagination();
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  }

  fetchTableData();
});

document.addEventListener("DOMContentLoaded", function () {
  const troubleshootBtn = document.querySelector(".troublebtn");
  const modalOverlay = document.getElementById("modal-overlay");
  const closeModal = document.getElementById("close-modal");

  troubleshootBtn.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
  });

  closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
});

document.addEventListener("click", function () {
  const troubleshootBtnsec = document.querySelector(".trouble-btn");
  const modalOverlaysec = document.getElementById("modal-overlaysec");
  const closeModalsec = document.getElementById("close-modalsec");

  troubleshootBtnsec.addEventListener("click", () => {
    modalOverlaysec.style.display = "flex";
  });

  closeModalsec.addEventListener("click", () => {
    modalOverlaysec.style.display = "none";
  });

  modalOverlaysec.addEventListener("click", (e) => {
    if (e.target === modalOverlaysec) {
      modalOverlaysec.style.display = "none";
    }
  });
});


document.addEventListener("click", () => {
  const icon = document.querySelector(".icon-infobelltech");
  const modal = document.getElementById("notificationModal");
  const closeBtn = document.getElementById("closeModal");

  let modalVisible = false;

  document.getElementById("notifyToggle").addEventListener("click", () => {
    modalVisible = !modalVisible;

    if (modalVisible) {
      modal.style.display = "flex"; 
      icon.setAttribute("name", "notifications"); 
    } else {
      modal.style.display = "none"; 
      icon.setAttribute("name", "notifications-off"); 
    }
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    icon.setAttribute("name", "notifications");
    modalVisible = false;
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      icon.setAttribute("name", "notifications");
      modalVisible = false;
    }
  });
});