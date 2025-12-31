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

  const [frontendData, setFrontendData] = useState({ projects: [] }); // Fix: Start with correct structure

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((backendData) => {
        setFrontendData(backendData);
      });
  }, []);

  return (
    <div className="App">
      {frontendData.projects.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header name={name} />
          <About title={title} body={body} />
          <ProjectList projects={frontendData.projects} />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
