import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Artists from "./components/Artists"; 
import Library from "./pages/Library";
import Register from "./pages/Register";
import WelcomePage from "./pages/WelcomePage";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-accent">
      {/* Header con nav */}
      <header className="flex items-center justify-center bg-primary">
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:artistId" element={<Library />} /> 
      </Routes>
      </header>
    </div>
  );
}
