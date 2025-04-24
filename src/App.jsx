import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Project';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
