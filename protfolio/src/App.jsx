import { Route, Routes } from "react-router";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
     <Navbar />
     <main className="min-h-screen pt-32 px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contcat" element={<Contact />} />
      </Routes>
     </main>
    </>
  )
}

export default App
