const cups = document.querySelector(".no-of-cups-realtime");
const machineHealth = document.querySelector(".machine-health");
const totalcups = document.querySelector(".total-cups");
import { commonHeaders } from "./headers.js";

document.getElementById("dash123").addEventListener("click", function () {
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = "0%";

  let progress = 0;
  const startTime = Date.now();
  const interval = setInterval(() => {
    progress += 5;
    progressBar.style.width = progress + "%";

    if (progress >= 90) {
      clearInterval(interval);
    }
  }, 200);
 
  fetch(
    "https://ccdev.scanomat.com/rest/dashboard/last_day_by_hour?groupid=-1&offset=-330&hoursrange=EIGHT_HOURS"
  ) 
    .then((response) => response.json())
    .then((data) => {
      clearInterval(interval);

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);

      setTimeout(() => {
        progressBar.style.width = "100%";
      }, remainingTime);
    })
    .catch((error) => {
      console.error("API Error:", error);
      clearInterval(interval);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("cups-container");

  let markup = `
    <div class="machine-div-sp2">
      <h3>No of cups - Realtime</h3>
      <div class="machine-div-child">
        <h5 class="card-5" data-period="this_week">This Week</h5>
        <div class="sub-flex">
          <h5 class="card-6" data-period="this_month">This Month</h5>
          <h5 class="card-7 active1" data-period="today">Today</h5>
        </div>
      </div>
    </div>
    <div class="navbar-line-card"></div>
    <h2 class="cupCount"></h2>
    <p class="arrow-cups"> &#8628;</p>
  `;

  container.insertAdjacentHTML("beforeend", markup);
  let progressBar = document.createElement("div");
  progressBar.classList.add("window-progress-bar");
  document.body.appendChild(progressBar);

  let cupCount = document.querySelector(".cupCount");
  let arrowCups = document.querySelector(".arrow-cups");

  let periodMap = {
    today: "number_of_cups_today",
    this_week: "number_of_cups_this_week",
    this_month: "number_of_cups_this_month",
  };

  let defaultElement = document.querySelector(".machine-div-child .active1");
  updateCupsData("today", defaultElement);

  async function updateCupsData(period, clickedElement) {
    let apiUrl = `https://ccdev.scanomat.com/rest/dashboard/${periodMap[period]}?groupid=-1&offset=-330`;

    try {
      progressBar.style.width = "0%"; 
      progressBar.style.display = "block"; 
      let progress = 0;

      let interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        if (progress >= 90) {
          clearInterval(interval);
        }
      }, 200);

      let response = await fetch(apiUrl, { headers: commonHeaders });
      let data = await response.json();

      clearInterval(interval);
      progressBar.style.width = "100%";
      setTimeout(() => {
        progressBar.style.display = "none";
      }, 500);

      cupCount.textContent = `${data.totalCups} cups`;
      arrowCups.innerHTML = `${data.percentage}% &#8628;`;

      document.querySelectorAll(".machine-div-child h5").forEach((el) => {
        el.classList.remove("active1");
      });

      if (clickedElement) {
        clickedElement.classList.add("active1");
      }
    } catch (error) {
      console.error("Error fetching cups data:", error);
      cupCount.textContent = "Error loading data";
      progressBar.style.display = "none"; 
    }
  }

  document.querySelectorAll(".machine-div-child h5").forEach((element) => {
    element.addEventListener("click", function () {
      let period = this.getAttribute("data-period");
      updateCupsData(period, this);
    });
  });
});

async function fetchHealth() {
  try {
    const response = await fetch(
      "https://ccdev.scanomat.com/rest/dashboard/healthkpi?groupid=-1",

      {
        method: "POST",
        headers: commonHeaders,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data);
    const markup = `<h2 class="healthy-h2">${data.healthStatus}</h2>`;
    machineHealth.insertAdjacentHTML("beforeend", markup);
  } catch (error) {
    console.error("Error fetching data:", error);
    // document.getElementById("cupCount").textContent = "Error!";
  }
}
fetchHealth();

async function fetchTotalcups() {
  try {
    const response = await fetch(
      "https://ccdev.scanomat.com/rest/dashboard/number_of_cups?groupid=-1",
      {
        headers: commonHeaders,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    //   console.log(data);
    const markup = `<h2 class="healthy-h2-cups">${data}</h2>`;
    totalcups.insertAdjacentHTML("beforeend", markup);
  } catch (error) {
    console.error("Error fetching data:", error);
    //   document.getElementById("cupCount").textContent = "Error!";
  }
}
fetchTotalcups();

document.addEventListener("DOMContentLoaded", function () {
  function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
  }

  
  document
    .querySelector(".icon-drawer")
    .addEventListener("click", toggleDropdown);


  window.onclick = function (event) {
    if (!event.target.matches(".icon-drawer")) {
      let dropdown = document.getElementById("dropdown");
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleDropdowner() {
    const dropdown = document.getElementById("dropdown1");
    dropdown.classList.toggle("show1");
  }


  document
    .querySelector(".icon-drawer-time")
    .addEventListener("click", toggleDropdowner);

  
  window.addEventListener("click", function (event) {
    const dropdown = document.getElementById("dropdown1");

    if (
      !event.target.closest(".icon-drawer-time") &&
      !event.target.closest("#dropdown1")
    ) {
      dropdown.classList.remove("show1");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("coffeeamount"); 
  let markup = `
    <div class="machine-div-sp">
      <h3>Coffee</h3>
      <div class="machine-div-child">
        <h5 class="card-3 active">Today</h5>
        <h5 class="card-4">This Week</h5>
        <h5 class="card-4">This Month</h5>
        <h5 class="card-4">Last Month</h5>
      </div>
    </div>
    <div class="navbar-line-card"></div>
    <h2 class="gram"></h2>
    <p class="arrow"></p>
  `;

  
  container.insertAdjacentHTML("beforeend", markup);

  let coffeeAmount = document.querySelector(".gram");
  let arrow = document.querySelector(".arrow");

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

  let periodMap = {
    today: "mg_of_coffee_today",
    this_week: "mg_of_coffee_this_week",
    this_month: "mg_of_coffee_this_month",
    last_month: "mg_of_coffee_last_month",
  };

  updateCoffeeData("today", document.querySelector(".card-3"));

  async function updateCoffeeData(period, clickedElement) {
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

      coffeeAmount.textContent = `${data.mgOfCoffee} grams`;
      arrow.textContent = `${data.percentage} ↴`;

      document
        .querySelectorAll(".machine-div-child h5")
        .forEach((el) => el.classList.remove("active"));
      clickedElement.classList.add("active");

      progressBar.style.width = "100%";
      setTimeout(() => {
        progressBar.style.width = "0%";
      }, 500);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
      coffeeAmount.textContent = "Error loading data";
      progressBar.style.width = "0%";
    } finally {
      clearInterval(interval);
    }
  }

  document.querySelector(".card-3").addEventListener("click", function () {
    updateCoffeeData("today", this);
  });
  document
    .querySelectorAll(".card-4")[0]
    .addEventListener("click", function () {
      updateCoffeeData("this_week", this);
    });
  document
    .querySelectorAll(".card-4")[1]
    .addEventListener("click", function () {
      updateCoffeeData("this_month", this);
    });
  document
    .querySelectorAll(".card-4")[2]
    .addEventListener("click", function () {
      updateCoffeeData("last_month", this);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector(".table-inside table"); 
  const tableBody = table.querySelector("tbody"); 

  const apiUrl = "https://ccdev.scanomat.com/rest/dashboard/order/search"; 

  function formatDate(timestamp) {
    const date = new Date(timestamp);
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

  async function fetchTableData() {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...commonHeaders, 
        },
        body: JSON.stringify({
          groupid: -1, 
          limit: 10, 
          offset: 0
        }),
      });

      const data = await response.json();
      // console.log(data);
      if (!data.result || !Array.isArray(data.result)) {
        throw new Error("Unexpected API response format");
      }

      // Remove only the data rows (not headers)
      table.querySelectorAll("tbody tr:not(:first-child)").forEach((row) => row.remove());

    
      data.result.forEach((item) => {
        const row = document.createElement("tr");

        const productNameCell = document.createElement("td");
        productNameCell.textContent = item.product || "Unknown";

        const machineNameCell = document.createElement("td");
        machineNameCell.textContent = item.machineName || "Unknown Serial No";

        const dateCell = document.createElement("td");
        dateCell.textContent = formatDate(item.timestamp.milliseconds);

        row.appendChild(productNameCell);
        row.appendChild(machineNameCell);
        row.appendChild(dateCell);

        tableBody.appendChild(row);
        row.addEventListener("mouseover", function () {
          row.style.backgroundColor = "#606469";
          let filterdiv = document.createElement('div')
          let filterel = document.createElement('button');
          filterel.textContent = 'Filter';
          filterdiv.style.position = 'relative';
          filterel.style.position = 'absolute';
          filterel.style.top = 0;
          filterel.style.right = -150;
          filterel.style.backgroundColor = 'lightblue';
          filterel.style.padding = '7px';
          filterel.style.textAlign = 'center'
          filterel.classList.add("filter-button"); 
          filterdiv.appendChild(filterel)
          row.appendChild(filterdiv);
      });
      
      row.addEventListener("mouseout", function () {
          row.style.backgroundColor = "#2e353f";
          let filterButton = row.querySelector(".filter-button"); 
          if (filterButton) {
              filterButton.remove(); 
          }
      });
      

      });
    } catch (error) {
      console.error("Error fetching table data:", error);
    }
  }

  fetchTableData(); 
});
const apiUrl = "https://ccdev.scanomat.com/rest/dashboard/noofhourssinceclean?groupid=-1";
fetch(apiUrl, { headers: commonHeaders })
  .then(response => response.json())
  .then(timestamp => {
    // console.log(timestamp); 

    const lastCleanedDate = new Date(timestamp);
    // console.log(lastCleanedDate);
    const now = new Date();
    // console.log(now);
    const diffInMs = now - lastCleanedDate;
    // console.log(diffInMs);
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    let timeAgo;
    if (diffInSeconds < 60) {
      timeAgo = `${diffInSeconds} seconds`;
    } else if (diffInMinutes < 60) {
      timeAgo = `${diffInMinutes} minutes`;
    } else if (diffInHours < 24) {
      timeAgo = `${diffInHours} hours`;
    } else {
      timeAgo = `${diffInDays} days`;
    }

    document.querySelector(".days").textContent = `${timeAgo}`;
  })
  .catch(error => console.error("Error fetching timestamp:", error));

  async function updateMachineHealth() {
    const apiUrl = "https://ccdev.scanomat.com/rest/dashboard/healthkpi?groupid=-1";

    try {
        let response = await fetch(apiUrl, {
            method: "POST",  
            headers: commonHeaders,
            body: JSON.stringify({ groupid: -1 }) 
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        let data = await response.json();

        if (!data || !data.machineKPIDetails) {
            console.error("Unexpected API response format:", data);
            return;
        }

        let healthHeading = document.querySelector(".dropdown h3");

      
        let tableBody = document.querySelector(".dropdown-content tbody");
        tableBody.innerHTML = ""; 


        data.machineKPIDetails.forEach(machine => {
            let row = document.createElement("tr");

            let machineCell = document.createElement("td");
            machineCell.textContent = machine.origin.sn;

            let healthCell = document.createElement("td");
            healthCell.textContent = machine.healthStatus;

            let causeCell = document.createElement("td");
            causeCell.textContent = machine.cause;

            row.appendChild(machineCell);
            row.appendChild(healthCell);
            row.appendChild(causeCell);
            tableBody.appendChild(row);
        });

      
        document.getElementById("toggleIcon").addEventListener("click", toggleDropdown);

    } catch (error) {
        console.error("Error fetching machine health data:", error);
    }
}


function toggleDropdown() {
    let dropdownContent = document.getElementById("dropdown");
    dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";
}

window.toggleDropdown = toggleDropdown; 

updateMachineHealth(); 




async function timesincecleaned() {
  const apiUrl = "https://ccdev.scanomat.com/rest/dashboard/noofhourssincecleandrilldown?groupid=-1";

  try {
      let response = await fetch(apiUrl, {
          headers: commonHeaders,
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      let data = await response.json();

      if (!data || !Array.isArray(data)) {
          console.error("Unexpected API response format:", data);
          return;
      }

    
      let healthHeading = document.querySelector(".dropdown1 h3");
      healthHeading.innerHTML = `Time since cleaned 
          <ion-icon name="caret-down-circle" class="icon-drawer-time" id="icon-drawer-time"></ion-icon>`;

    
      let tableBody = document.querySelector(".dropdown-content1 tbody");
      tableBody.innerHTML = ""; 

    
      data.forEach(cleaned => {
          let row = document.createElement("tr");

          let machineCell = document.createElement("td");
          machineCell.textContent = cleaned.sn; 

          let eventCell = document.createElement("td");
          eventCell.textContent = timeSinceInYears(cleaned.lastCleanedTime); 

          row.appendChild(machineCell);
          row.appendChild(eventCell);
          tableBody.appendChild(row);
      });

      document.getElementById("icon-drawer-time").addEventListener("click", toggleDropdowner);

  } catch (error) {
      console.error("Error fetching machine health data:", error);
  }
}


function timeSinceInYears(cleanedTimestamp) {
  let now = Date.now();
  let diffMs = now - cleanedTimestamp; 
  let diffYears = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365)); 
  return `${diffYears} years ago`;
}


function toggleDropdowner() {
  let dropdownContent = document.getElementById("dropdown1");
  dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";
}

window.toggleDropdowner = toggleDropdowner; 

timesincecleaned();