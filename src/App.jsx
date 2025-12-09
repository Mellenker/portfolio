import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const name = "Melker Stafverfeldt";
  const projects = [
    {
      title: "Snake in C++",
      imgLink: "./images/snake.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla mi, lobortis eleifend leo sit amet, bibendum tincidunt lacus. Proin in leo ac dolor elementum aliquam nec volutpat risus. Duis semper porttitor eros, scelerisque consequat turpis aliquet id. Sed vitae libero eu nibh auctor mollis quis vel purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet enim at eros mattis dictum. Suspendisse lacus urna, tristique in est a, fermentum blandit quam. Vestibulum faucibus justo sed enim finibus auctor. Morbi sit amet rhoncus augue. Pellentesque consequat consectetur dignissim.",
      githubLink: "https://github.com/Mellenker/snake",
      downloadLink: null,
      technologies: ["C++", "SFML"],
    },
    {
      title: "Student Queue",
      imgLink: "https://picsum.photos/400/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla mi, lobortis eleifend leo sit amet, bibendum tincidunt lacus. Proin in leo ac dolor elementum aliquam nec volutpat risus. Duis semper porttitor eros, scelerisque consequat turpis aliquet id. Sed vitae libero eu nibh auctor mollis quis vel purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet enim at eros mattis dictum. Suspendisse lacus urna, tristique in est a, fermentum blandit quam. Vestibulum faucibus justo sed enim finibus auctor. Morbi sit amet rhoncus augue. Pellentesque consequat consectetur dignissim.",
      githubLink: null,
      downloadLink: "archives/StudentQueue.zip",
      technologies: ["Python", "Java"],
    },
    {
      title: "This portfolio",
      imgLink: "https://picsum.photos/400/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla mi, lobortis eleifend leo sit amet, bibendum tincidunt lacus. Proin in leo ac dolor elementum aliquam nec volutpat risus. Duis semper porttitor eros, scelerisque consequat turpis aliquet id. Sed vitae libero eu nibh auctor mollis quis vel purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquet enim at eros mattis dictum. Suspendisse lacus urna, tristique in est a, fermentum blandit quam. Vestibulum faucibus justo sed enim finibus auctor. Morbi sit amet rhoncus augue. Pellentesque consequat consectetur dignissim.",
      githubLink: "https://github.com/Mellenker/portfolio",
      downloadLink: "https://google.com",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Node", "Vite"],
    },
  ];
  return (
    <div className="App">
      <Header name={name} />
      <About />
      <ProjectList projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
