import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

function App() {
  return (
    <Router>

      <Routes>

        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Education />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />

        {/* Admin Page */}
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>

    </Router>
  );
}

export default App;