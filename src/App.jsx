import { useState } from "react";
import Navbar from "./Components/navbar";
import Herosection from "./Components/herosection";
import SKILLS from "./Components/skills/skills";
import AboutMe from "./Components/Aboutme";
import Projects from "./Components/Projects/Projects";
import Headroom from "react-headroom";
import Contect from "./Components/Contect"
import Footer from "./Components/Footer"
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="m-auto text-white bg-blue-950">
        <Headroom>
        <Navbar />
        </Headroom>
        <div className="bg-[#061840]">
        <Herosection />
        </div>
        <div className="bg-slate-950">
          <AboutMe />
          <SKILLS />
          <Projects/>
          <Contect/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
