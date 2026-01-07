import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const name = "Melker Stafverfeldt";

  const title = "Yo! :D";
  const body = "Welcome to my portfolio.";

  const [apiData, setApiData] = useState({ projects: [] });
  const [error, setError] = useState(null);

  // Fetch data from backend
  useEffect(() => {
    const controller = new AbortController();

    // Use await instead of promises?
    fetch("/api", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setApiData(data))
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
      {error ? (
        <p>Error loading data: {error}</p>
      ) : apiData.projects.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header name={name} />
          <About title={title} body={body} />
          <ProjectList projects={apiData.projects} />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
