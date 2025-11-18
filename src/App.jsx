import './App.css'
import Header from './components/Header'
import About from './components/About';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const projects = [
    {
      title: "Snake in C++",
      description: "The classic game built using C++ and SFML",
      link:"https://github.com/Mellenker/snake"
    },
    {
      title: "Project Two",
      description: "Something something...",
      link: "/StudentQueue.zip" 
    },
    {
      title: "Project Three",
      description: "Something something...",
      link:"#"
    },
    {
      title: "Project Four",
      description: "Something something...",
      link:"#"
    }
  ]
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

export default App

