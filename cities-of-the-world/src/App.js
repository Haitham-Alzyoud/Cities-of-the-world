import { Router } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Pricing } from "./Components/Pricing";
import React from "react";
import Features from "./Components/Features";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
