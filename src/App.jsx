import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const projects = [
    {
      title: "Snake in C++",
      imgLink: "https://picsum.photos/400/300",
      description: "The classic game built using C++ and SFML",
      githubLink: "https://github.com/Mellenker/snake",
      downloadLink: null,
    },
    {
      title: "Student Queue",
      imgLink: "https://picsum.photos/400/300",
      description:
        "A distributed queuing system for students and their supervisors. Built in Java and Python using the ZeroMQ middleware.",
      githubLink: null,
      downloadLink: "archives/StudentQueue.zip",
    },
    {
      title: "This portfolio",
      imgLink: "https://picsum.photos/400/300",
      description:
        "This project aims to create a versatile and user-focused solution designed to simplify complex tasks and improve overall productivity. By combining clear design principles with reliable functionality, it provides a structured approach to organizing information, supporting decision-making, and streamlining day-to-day operations. The project is built to be adaptable, allowing it to fit a wide range of use cases while remaining easy to maintain and expand as needs evolve.",
      githubLink: "https://github.com/Mellenker/portfolio",
      downloadLink: "https://google.com",
    },
  ];
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectList projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
