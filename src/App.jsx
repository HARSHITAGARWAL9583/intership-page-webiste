import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Roles from "./components/Roles";
import FAQ from "./components/FAQ";
import ApplySection from "./components/ApplySection";

function App() {
  return (
    <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 min-h-screen text-white">
      <Hero />
      <About />
      <Roles />
      <FAQ />
      <ApplySection />
    </div>
  );
}

export default App;
