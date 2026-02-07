import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";

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
