import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";

function App() {
  const name = "Melker Stafverfeldt";

  const title = "Välkommen";
  const body =
    "Mitt namn är Melker Stafverfeldt och jag är en systemutvecklare.";

  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data from backend
  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/projects", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Error fetching data:", error);
          setError(error.message);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <div className="App">
      <>
        <Header name={name} />
        <main className="page">
          <Hero title={title} body={body} />
          {error ? (
            <p>Error loading data: {error}</p>
          ) : projects && projects.length > 0 ? (
            <ProjectList projects={projects} />
          ) : (
            <p>Loading projects...</p>
          )}
          <Contact />
        </main>
      </>
    </div>
  );
}

export default App;
