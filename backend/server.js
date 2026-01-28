const express = require("express");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
const port = 3000;

const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the database.");
});

async function fetchAll(db, sql, params) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}

// Serve static files first
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use("/downloads", express.static(path.join(__dirname, "public/downloads")));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await fetchAll(
      db,
      `SELECT p.*, GROUP_CONCAT(t.name) as tech_stack
       FROM projects p
       LEFT JOIN projects_tech pt ON p.id = pt.project_id
       LEFT JOIN tech t ON pt.tech_name = t.name
       GROUP BY p.id
       ORDER BY p.created_at DESC`,
    );

    // Convert tech_stack string to JSON array
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

app.listen(port, "0.0.0.0", () => {
  console.log(`App is listening on ${port}`);
});

// For testing
module.exports = app;
