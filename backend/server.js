const express = require("express");
const app = express();
const port = 3000;

const { DatabaseSync } = require("node:sqlite");
const database = new DatabaseSync("./database.db");
const path = require("path");

// database.exec(`
//   CREATE TABLE IF NOT EXISTS projects(
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     title TEXT NOT NULL,
//     description TEXT,
//     tech_stack TEXT,
//     github_url TEXT,
//     download_url TEXT,
//     image_url TEXT,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//   )
// `);

database.exec(`
  DROP TABLE projects 
`);

database.exec(`
  CREATE TABLE IF NOT EXISTS projects(
    title TEXT NOT NULL,
    description TEXT,
    technologies TEXT,
    githubLink TEXT,
    downloadLink TEXT,
    imgLink TEXT
  )
`);

database.exec(`
  insert into projects (title, description, technologies, githubLink, downloadLink, imgLink)
  values ('Test project', 'This is a test project description', '["React", "Java"]', 'google.com', 'bing.com', 'https://picsum.photos/400/300');
`);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/api", (req, res) => {
  const query = database.prepare("SELECT * FROM projects");
  let projects = query.all();

  // Parse technologies from JSON string to array
  projects = projects.map((project) => ({
    ...project,
    technologies: JSON.parse(project.technologies),
  }));

  res.json({ projects });
});

// Accept traffic from all IPs
app.listen(port, "0.0.0.0", () => {
  console.log(`App is listening on ${port}`);
});
