const cups = document.querySelector(".no-of-cups-realtime");
const machineHealth = document.querySelector(".machine-health");
const totalcups = document.querySelector(".total-cups");
const commonHeaders = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb290IiwianRpIjoiNTk0ZTU5N2FmYTRmOGMwMDAxMDJjMzg4IiwiYXV0aCI6IkFETUlOLEFQSV9BQ0NFU1MsQlVTSU5FU1NfTU9ERUwsQ0xJRU5ULENPRkZFRV9BU19BX1NFUlZJQ0VfQVVTVFJBTElBLENPRkZFRV9BU19BX1NFUlZJQ0VfREssQ09GRkVFX0FTX0FfU0VSVklDRV9LVVdBSVQsQ09GRkVFX0VYVEVSTkFMLEdFTkVSQUwsSU5TSUdIVFNfREFUQSxTQ0FOT01BVF9BRE1JTixTQ1RfREVWLFNVUEVSLVVTRVIsVEVDSE5JQ0FMLFRFU1RJTkcsVU5BU1NJR05FRF9BQ0NFU1MsVVNFUiIsImV4cCI6MTc0MzQzNzA3OH0.2ITapKSsBTCamfUHR9gBSVBjXKceGCpU6ATP3aUR6uk",
    "Content-Type": "application/json"
};
async function fetchData() {
    try {
        const response = await fetch("https://ccdev.scanomat.com/rest/dashboard/number_of_cups_today?groupid=-1&offset=-330", {
            headers: commonHeaders
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        const markup = `<h2>${data.totalCups}</h2>
      <p class="arrow-cups">${data.percentage} &#8628;</p>`;
        cups.insertAdjacentHTML("beforeend", markup);
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById("cupCount").textContent = "Error!";
    }
}
fetchData();
async function fetchHealth() {
    try {
        const response = await fetch("https://ccdev.scanomat.com/rest/dashboard/healthkpi?groupid=-1", {
            method: "POST",
            headers: commonHeaders
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
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
        const response = await fetch("https://ccdev.scanomat.com/rest/dashboard/number_of_cups?groupid=-1", {
            headers: commonHeaders
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
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
function toggleDropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}
// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.icon-drawer')) {
        let dropdown = document.getElementById("dropdown");
        if (dropdown.classList.contains("show")) dropdown.classList.remove("show");
    }
};
function toggleDropdowner() {
    document.getElementById("dropdown1").classList.toggle("show");
}
// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.icon-drawer-time')) {
        let dropdown = document.getElementById("dropdown1");
        if (dropdown.classList.contains("show")) dropdown.classList.remove("show");
    }
};

//# sourceMappingURL=CoffeeCloud.d7d3af69.js.map
