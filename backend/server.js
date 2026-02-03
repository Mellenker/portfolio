const express = require("express");
const initSqlJs = require("sql.js");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

let db;

// Initialize the database at startup
async function initDatabase() {
  const SQL = await initSqlJs();
  const dbPath = "./database.db";

  if (fs.existsSync(dbPath)) {
    // Load existing database from file
    const buffer = fs.readFileSync(dbPath);
    db = new SQL.Database(buffer);
  } else {
    // Create new database
    db = new SQL.Database();
    // CREATE INITIAL TABLE HERE
  }

  console.log("Connected to the database.");
  return db;
}

// Save database to file
function saveDb() {
  if (db) {
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync("./database.db", buffer);
  }
}

// Query helper function
async function fetchAll(query, params = []) {
  return new Promise((resolve, reject) => {
    try {
      const stmt = db.prepare(query);
      stmt.bind(params);
      const rows = [];
      while (stmt.step()) {
        rows.push(stmt.getAsObject());
      }
      stmt.free();
      resolve(rows);
    } catch (err) {
      reject(err);
    }
  });
}
// Serve static files first
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use("/downloads", express.static(path.join(__dirname, "public/downloads")));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await fetchAll(
      `SELECT p.*, GROUP_CONCAT(t.name) as tech_stack
       FROM projects p
       LEFT JOIN projects_tech pt ON p.id = pt.project_id
       LEFT JOIN tech t ON pt.tech_name = t.name
       GROUP BY p.id
       ORDER BY p.created_at DESC`,
    );

    const formattedProjects = projects.map((project) => ({
      ...project,
      tech_stack: project.tech_stack ? project.tech_stack.split(",") : [],
    }));

    res.json(formattedProjects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Initialize database before starting server
initDatabase()
  .then(() => {
    app.listen(port, "0.0.0.0", () => {
      console.log(`App is listening on ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize database:", err);
    process.exit(1);
  });

// For testing
module.exports = app;
