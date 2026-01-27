// var compression = require("compression");
const express = require("express");
const app = express();
const port = 3000;

const { DatabaseSync } = require("node:sqlite");
const database = new DatabaseSync("./database.db");
const path = require("path");

database.exec(`
  CREATE TABLE IF NOT EXISTS projects(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    tech_stack TEXT,
    github_url TEXT,
    download_url TEXT,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);
// app.use(compression());
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use("/downloads", express.static(path.join(__dirname, "public/downloads")));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.get("/api", (req, res) => {
  const query = database.prepare("SELECT * FROM projects");
  const projects =
    query.all()?.map((project) => ({
      ...project,
      tech_stack: JSON.parse(project.tech_stack || "[]"),
    })) ?? [];
  res.json({ projects }); // Send JSON response
});

// Accept traffic from all IPs
app.listen(port, "0.0.0.0", () => {
  console.log(`App is listening on ${port}`);
});

module.exports = app;
