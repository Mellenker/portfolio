const express = require("express");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const path = require("path");

async function createDatabase() {
  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
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

  return db;
}

async function startServer() {
  const db = await createDatabase();

  const app = express();
  const port = 3000;

  // Serve static files first
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.use(
    "/downloads",
    express.static(path.join(__dirname, "public/downloads")),
  );
  app.use("/images", express.static(path.join(__dirname, "public/images")));

  // Cache for projects
  let cachedProjects = null;
  let lastCacheTime = 0;

  app.get("/api", async (req, res) => {
    const now = Date.now();
    if (cachedProjects && now - lastCacheTime < 60000) {
      return res.json({ projects: cachedProjects });
    }

    try {
      const rows = await db.all("SELECT * FROM projects");
      cachedProjects = rows.map((project) => ({
        ...project,
        tech_stack: JSON.parse(project.tech_stack || "[]"),
      }));
      lastCacheTime = Date.now();

      res.json({ projects: cachedProjects });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  });

  app.listen(port, "0.0.0.0", () => {
    console.log(`App is listening on ${port}`);
  });
}

// Start server
startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
