import React from "react";
import Nav from "./Nav";
import About from "./About";
import Work from "./Work";
import Projects from "./Projects";

const Page = () => {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-gradient-to-b from-[#07131c] to-[#305472] text-gray-200">
      <Nav />
      <About />
      <Work />
      <Projects />
      
    </div>
  );
};

export default Page;
