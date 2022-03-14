import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home"
import Project from "./components/Project";


import './general.css';

export default function App() {

  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  )
}

