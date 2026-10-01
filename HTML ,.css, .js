<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Community Data Hub</title>

  <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
  <div class="brand">🌍 Community Data Hub</div>

  <nav>
    <a href="#home">Home</a>
    <a href="#report">Report Issue</a>
    <a href="#dashboard">Dashboard</a>
    <a href="#area">My Area</a>
    <a href="#insights">Insights</a>
  </nav>
</header>


<main>

<!-- HOME -->
<section id="home" class="hero">

  <div>
    <p class="eyebrow">COMMUNITY-CENTRIC OPEN DATA PLATFORM</p>

    <h1>
      Understand your community.
      <span>Take action.</span>
    </h1>

    <p>
      Explore local issues, report community problems,
      track their progress and discover data-driven insights.
    </p>

    <div class="actions">
      <a class="btn primary" href="#area">Explore My Area</a>
      <a class="btn" href="#report">Report an Issue</a>
    </div>
  </div>

  <div class="hero-card">
    <div class="big">📊</div>

    <h3>Live Community Overview</h3>

    <p id="heroStats">
      Loading...
    </p>
  </div>

</section>


<!-- REPORT -->
<section id="report" class="section">

  <h2>📝 Report a Community Issue</h2>

  <p class="muted">
    Citizens can report problems in their area.
  </p>

  <form id="reportForm" class="card form-grid">

    <label>
      Area

      <select id="areaInput" required>
        <option value="">Select Area</option>
        <option>Chembur</option>
        <option>Kurla</option>
        <option>Ghatkopar</option>
        <option>Andheri</option>
        <option>Bandra</option>
        <option>Dadar</option>
      </select>
    </label>


    <label>
      Category

      <select id="categoryInput" required>
        <option value="">Select Category</option>
        <option>Waste</option>
        <option>Road</option>
        <option>Street Light</option>
        <option>Water</option>
        <option>Park</option>
        <option>Public Transport</option>
      </select>
    </label>


    <label>
      Urgency

      <select id="urgencyInput">
        <option>Normal</option>
        <option>Urgent</option>
      </select>
    </label>


    <label>
      Description

      <textarea
        id="descriptionInput"
        required
        placeholder="Describe the problem..."
      ></textarea>
    </label>


    <label>
      Photo

      <input
        type="file"
        id="photoInput"
        accept="image/*"
      >
    </label>


    <button class="btn primary" type="submit">
      Submit Report
    </button>

    <div id="reportMsg"></div>

  </form>

</section>


<!-- DASHBOARD -->
<section id="dashboard" class="section">

  <h2>📊 Community Dashboard</h2>

  <div class="stats" id="stats"></div>


  <div class="grid2">

    <div class="card">

      <h3>Issues by Category</h3>

      <div id="categoryChart"></div>

    </div>


    <div class="card">

      <h3>Issue Status</h3>

      <div id="statusChart"></div>

    </div>

  </div>


  <div class="card">

    <h3>Recent Reports</h3>

    <div class="tablewrap">

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Area</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody id="reportTable"></tbody>

      </table>

    </div>

  </div>

</section>


<!-- MY AREA -->
<section id="area" class="section">

  <h2>📍 What is happening in my area?</h2>

  <div class="card area-select">

    <label>

      Select your area

      <select id="areaSelect">

        <option>Chembur</option>
        <option>Kurla</option>
        <option>Ghatkopar</option>
        <option>Andheri</option>
        <option>Bandra</option>
        <option>Dadar</option>

      </select>

    </label>

  </div>


  <div id="areaReport" class="area-report"></div>

</section>


<!-- INSIGHTS -->
<section id="insights" class="section">

  <h2>🤖 Smart Insights & Prediction</h2>


  <div class="grid2">

    <div class="card">

      <h3>📈 Community Trend</h3>

      <p id="trend"></p>

    </div>


    <div class="card">

      <h3>🔮 Next Month Prediction</h3>

      <p id="prediction"></p>

    </div>

  </div>


  <!-- MAP -->
  <div class="card">

    <h3>🗺️ Community Issue Map</h3>

    <div class="fake-map">

      <span>📍 Chembur</span>
      <span>📍 Kurla</span>
      <span>📍 Ghatkopar</span>
      <span>📍 Andheri</span>
      <span>📍 Bandra</span>
      <span>📍 Dadar</span>

    </div>

    <p class="muted">
      Prototype map view. A real map API can be connected later.
    </p>

  </div>

</section>

</main>


<footer>

  Community Data Hub
  <br>
  College CEP Project

</footer>


<script src="script.js"></script>

</body>
</html>

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f7fb;
  color: #182230;
}


/* HEADER */

header {
  position: sticky;
  top: 0;
  z-index: 10;

  background: white;

  border-bottom: 1px solid #ddd;

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 15px 7%;
}


.brand {
  font-size: 20px;
  font-weight: 800;
}


nav a {
  margin-left: 20px;

  text-decoration: none;

  color: #344054;

  font-weight: 600;
}


/* HERO */

.hero {
  padding: 75px 7%;

  display: flex;

  gap: 50px;

  align-items: center;

  background: #eef5ff;
}


.hero > div {
  flex: 1;
}


.eyebrow {
  font-size: 12px;

  font-weight: 800;

  letter-spacing: 1.5px;
}


.hero h1 {
  font-size: 46px;

  line-height: 1.1;

  margin: 15px 0;
}


.hero h1 span {
  color: #2563eb;
}


.hero p {
  font-size: 18px;

  line-height: 1.6;
}


.actions {
  display: flex;

  gap: 12px;

  margin-top: 25px;
}


/* BUTTON */

.btn {
  border: 1px solid #2563eb;

  border-radius: 10px;

  padding: 12px 18px;

  text-decoration: none;

  background: white;

  color: #2563eb;

  font-weight: 700;

  cursor: pointer;
}


.btn.primary {
  background: #2563eb;

  color: white;
}


/* CARDS */

.hero-card,
.card {

  background: white;

  border: 1px solid #e4e7ec;

  border-radius: 18px;

  padding: 25px;

  box-shadow: 0 8px 25px #1018280d;
}


.hero-card {
  text-align: center;

  max-width: 340px;
}


.big {
  font-size: 70px;
}


/* SECTION */

.section {
  padding: 55px 7%;
}


.section h2 {
  font-size: 30px;
}


.muted {
  color: #667085;
}


/* FORM */

.form-grid {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 18px;
}


.form-grid label {

  display: flex;

  flex-direction: column;

  gap: 8px;

  font-weight: 700;
}


.form-grid textarea {

  min-height: 100px;
}


.form-grid input,
.form-grid select,
.form-grid textarea {

  padding: 11px;

  border: 1px solid #d0d5dd;

  border-radius: 9px;

  font: inherit;
}


/* STATISTICS */

.stats {

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 15px;

  margin: 20px 0;
}


.stat {

  background: white;

  padding: 20px;

  border-radius: 15px;

  border: 1px solid #e4e7ec;
}


.stat b {

  font-size: 28px;

  display: block;

  margin-top: 8px;
}


/* GRID */

.grid2 {

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 18px;

  margin-bottom: 20px;
}


/* CHART */

.bar {

  margin: 13px 0;
}


.barline {

  height: 12px;

  background: #e4e7ec;

  border-radius: 8px;

  overflow: hidden;
}


.barfill {

  height: 100%;

  background: #2563eb;
}


/* TABLE */

.tablewrap {
  overflow: auto;
}


table {

  width: 100%;

  border-collapse: collapse;
}


th,
td {

  padding: 13px;

  border-bottom: 1px solid #eee;

  text-align: left;
}


/* PRIORITY */

.pill {

  padding: 5px 9px;

  border-radius: 20px;

  font-size: 12px;

  font-weight: 700;

  background: #eef2ff;
}


.high {

  background: #fee4e2;

  color: #b42318;
}


.medium {

  background: #fff4cc;

  color: #8a5b00;
}


.low {

  background: #dcfae6;

  color: #067647;
}


/* AREA REPORT */

.area-report {

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 15px;
}


.area-box {

  background: white;

  padding: 20px;

  border-radius: 15px;

  border: 1px solid #e4e7ec;
}


.area-box h3 {

  margin-top: 0;
}


.area-select select {

  padding: 10px;

  margin-left: 10px;
}


/* MAP */

.fake-map {

  min-height: 280px;

  border-radius: 15px;

  background: linear-gradient(
    135deg,
    #e8f5e9,
    #dbeafe
  );

  position: relative;

  padding: 25px;

  overflow: hidden;
}


.fake-map span {

  position: absolute;

  background: white;

  padding: 9px 12px;

  border-radius: 20px;

  box-shadow: 0 4px 15px #0002;
}


.fake-map span:nth-child(1) {
  left: 12%;
  top: 25%;
}


.fake-map span:nth-child(2) {
  left: 40%;
  top: 65%;
}


.fake-map span:nth-child(3) {
  left: 65%;
  top: 25%;
}


.fake-map span:nth-child(4) {
  left: 75%;
  top: 70%;
}


.fake-map span:nth-child(5) {
  left: 25%;
  top: 75%;
}


.fake-map span:nth-child(6) {
  left: 52%;
  top: 42%;
}


/* FOOTER */

footer {

  text-align: center;

  padding: 30px;

  background: #182230;

  color: white;
}


/* MOBILE */

@media(max-width: 750px) {

  header {

    flex-direction: column;

    gap: 10px;
  }


  nav a {

    margin: 0 6px;

    font-size: 13px;
  }


  .hero {

    flex-direction: column;

    padding-top: 45px;
  }


  .hero h1 {

    font-size: 36px;
  }


  .form-grid,
  .grid2,
  .area-report {

    grid-template-columns: 1fr;
  }


  .stats {

    grid-template-columns: 1fr 1fr;
  }

          }

/* ================================
   INITIAL COMMUNITY DATA
================================ */

const seed = [

  {
    id: 1,
    area: "Chembur",
    category: "Waste",
    priority: "High",
    status: "In Progress",
    desc: "Overflowing waste collection point"
  },

  {
    id: 2,
    area: "Chembur",
    category: "Road",
    priority: "Medium",
    status: "Resolved",
    desc: "Damaged road surface"
  },

  {
    id: 3,
    area: "Kurla",
    category: "Street Light",
    priority: "Low",
    status: "Submitted",
    desc: "Street light not working"
  },

  {
    id: 4,
    area: "Ghatkopar",
    category: "Water",
    priority: "High",
    status: "Under Review",
    desc: "Water supply issue"
  },

  {
    id: 5,
    area: "Andheri",
    category: "Waste",
    priority: "Medium",
    status: "Resolved",
    desc: "Garbage near public area"
  },

  {
    id: 6,
    area: "Bandra",
    category: "Park",
    priority: "Low",
    status: "Resolved",
    desc: "Park maintenance required"
  },

  {
    id: 7,
    area: "Dadar",
    category: "Public Transport",
    priority: "Medium",
    status: "Assigned",
    desc: "Bus stop information issue"
  },

  {
    id: 8,
    area: "Kurla",
    category: "Waste",
    priority: "High",
    status: "Submitted",
    desc: "Waste accumulation"
  }

];


/* ================================
   LOAD DATA
================================ */

let reports =
  JSON.parse(
    localStorage.getItem("communityReports")
  ) || seed;


/* ================================
   SHORTCUT
================================ */

const $ = (id) => document.getElementById(id);


/* ================================
   SAVE DATA
================================ */

function save() {

  localStorage.setItem(
    "communityReports",
    JSON.stringify(reports)
  );

}


/* ================================
   PRIORITY CALCULATION
================================ */

function calculatePriority(category, urgency) {

  if (
    urgency === "Urgent" ||
    category === "Water" ||
    category === "Waste"
  ) {

    return "High";

  }


  if (
    category === "Road" ||
    category === "Public Transport"
  ) {

    return "Medium";

  }


  return "Low";

}


/* ================================
   COUNT FUNCTION
================================ */

function counts(key) {

  return reports.reduce(

    (result, report) => {

      result[report[key]] =
        (result[report[key]] || 0) + 1;

      return result;

    },

    {}

  );

}


/* ================================
   MAIN RENDER
================================ */

function render() {

  const total = reports.length;


  const resolved =
    reports.filter(
      r => r.status === "Resolved"
    ).length;


  const pending =
    total - resolved;


  const high =
    reports.filter(
      r => r.priority === "High"
    ).length;


  /* STATISTICS */

  $("stats").innerHTML = `

    <div class="stat">
      Total Reports
      <b>${total}</b>
    </div>

    <div class="stat">
      Resolved
      <b>${resolved}</b>
    </div>

    <div class="stat">
      Pending
      <b>${pending}</b>
    </div>

    <div class="stat">
      High Priority
      <b>${high}</b>
    </div>

  `;


  /* HERO */

  $("heroStats").textContent =
    `${total} reports • ${resolved} resolved • ${pending} pending`;


  /* CHARTS */

  renderBars(
    "categoryChart",
    counts("category")
  );


  renderBars(
    "statusChart",
    counts("status")
  );


  /* TABLE */

  $("reportTable").innerHTML =

    reports
      .slice()
      .reverse()
      .map(

        r => `

        <tr>

          <td>#${r.id}</td>

          <td>${r.area}</td>

          <td>${r.category}</td>

          <td>

            <span class="pill ${r.priority.toLowerCase()}">

              ${r.priority}

            </span>

          </td>

          <td>${r.status}</td>

          <td>

            <button
              class="btn"
              onclick="advanceStatus(${r.id})"
            >
              Update
            </button>

          </td>

        </tr>

        `

      )
      .join("");


  areaReport();

  generateInsights();

}


/* ================================
   BAR CHART
================================ */

function renderBars(id, data) {

  const max =
    Math.max(
      ...Object.values(data),
      1
    );


  $(id).innerHTML =

    Object.entries(data)
      .map(

        ([category, value]) => `

          <div class="bar">

            <b>
              ${category} — ${value}
            </b>

            <div class="barline">

              <div
                class="barfill"
                style="width:${(value / max) * 100}%"
              ></div>

            </div>

          </div>

        `

      )
      .join("");

}


/* ================================
   STATUS UPDATE
================================ */

function advanceStatus(id) {

  const report =
    reports.find(
      r => r.id === id
    );


  const statuses = [

    "Submitted",

    "Under Review",

    "Assigned",

    "In Progress",

    "Resolved"

  ];


  const currentIndex =
    statuses.indexOf(
      report.status
    );


  report.status =
    statuses[
      Math.min(
        currentIndex + 1,
        statuses.length - 1
      )
    ];


  save();

  render();

}


/* ================================
   AREA ANALYSIS
================================ */

function areaReport() {

  const selectedArea =
    $("areaSelect").value;


  const areaReports =
    reports.filter(
      r => r.area === selectedArea
    );


  const categoryCounts =
    countArea(
      areaReports,
      "category"
    );


  const topCategory =
    Object.entries(categoryCounts)
      .sort(
        (a, b) => b[1] - a[1]
      )[0];


  const resolved =
    areaReports.filter(
      r => r.status === "Resolved"
    ).length;


  const resolutionRate =
    areaReports.length
      ? Math.round(
          (resolved / areaReports.length) * 100
        )
      : 0;


  $("areaReport").innerHTML = `

    <div class="area-box">

      <h3>Total Reports</h3>

      <b>${areaReports.length}</b>

    </div>


    <div class="area-box">

      <h3>Major Issue</h3>

      <b>
        ${
          topCategory
            ? topCategory[0]
            : "No data"
        }
      </b>

      <p>
        ${
          topCategory
            ? topCategory[1] + " reports"
            : "Submit the first report."
        }
      </p>

    </div>


    <div class="area-box">

      <h3>Resolution Rate</h3>

      <b>${resolutionRate}%</b>

    </div>


    <div class="area-box">

      <h3>Area Summary</h3>

      <p>

        ${
          areaReports.length

          ? `The platform found
             ${areaReports.length}
             community reports
             for ${selectedArea}.`

          : `There is not enough data
             for this area yet.`
        }

      </p>

    </div>


    <div class="area-box">

      <h3>Suggested Focus</h3>

      <p>

        ${
          topCategory

          ? `Monitor ${topCategory[0]}
             and encourage timely
             reporting and resolution.`

          : `Collect more community data.`
        }

      </p>

    </div>


    <div class="area-box">

      <h3>Data Note</h3>

      <p>
        Insights are generated from
        reports currently stored in
        this prototype.
      </p>

    </div>

  `;

}


/* ================================
   AREA COUNT
================================ */

function countArea(reportsArray, key) {

  return reportsArray.reduce(

    (result, report) => {

      result[report[key]] =
        (result[report[key]] || 0) + 1;

      return result;

    },

    {}

  );

}


/* ================================
   SMART INSIGHTS
================================ */

function generateInsights() {

  const total =
    reports.length;


  const wasteReports =
    reports.filter(
      r => r.category === "Waste"
    ).length;


  const wastePercentage =
    total
      ? Math.round(
          (wasteReports / total) * 100
        )
      : 0;


  $("trend").textContent =

    `Waste represents
     ${wastePercentage}%
     of all current reports.
     Future monthly data can be
     compared to identify whether
     this category is increasing
     or decreasing.`;


  /* ================================
     SIMPLE PROTOTYPE PREDICTION
  ================================= */

  const categoryCounts =
    counts("category");


  const sorted =
    Object.entries(categoryCounts)
      .sort(
        (a, b) => b[1] - a[1]
      );


  if (sorted.length > 0) {

    const highestCategory =
      sorted[0][0];


    $("prediction").textContent =

      `Prototype prediction:
       ${highestCategory}
       is currently the category
       that should be monitored
       closely next month.

       In the final project,
       this can be replaced with
       a real Machine Learning
       prediction model.`;

  }

}


/* ================================
   SUBMIT REPORT
================================ */

$("reportForm")
  .addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const area =
        $("areaInput").value;


      const category =
        $("categoryInput").value;


      const urgency =
        $("urgencyInput").value;


      const description =
        $("descriptionInput").value;


      const priority =
        calculatePriority(
          category,
          urgency
        );


      const newReport = {

        id: Date.now(),

        area: area,

        category: category,

        priority: priority,

        status: "Submitted",

        desc: description

      };


      reports.push(
        newReport
      );


      save();


      event.target.reset();


      $("reportMsg").innerHTML = `

        <b>
          ✅ Report submitted successfully!
        </b>

      `;


      render();


      location.hash =
        "dashboard";

    }
  );


/* ================================
   AREA SELECT CHANGE
================================ */

$("areaSelect")
  .addEventListener(
    "change",
    areaReport
  );


/* ================================
   INITIAL LOAD
================================ */

render();
