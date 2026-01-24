import { Route, Routes } from "react-router";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects"
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./layouts/Footer";

function App() {

  return (
    <div className=" text-white">
      <Navbar />
     <main className="min-h-screen pt-20">
      <section id="home" className="min-h-screen">
        <Home />
      </section>
      <section id="resume" className="min-h-screen">
        <Resume />
      </section>
      {/* <section id="services" className="min-h-screen">
        <Services />
      </section> */}
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
     </main>
     {/* <Footer /> */}
    </div>
    
  )
}

export default App
