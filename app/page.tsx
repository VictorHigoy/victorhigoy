import React from "react";
import HomePage from "@/components/HomePage";
import About from "@/components/About";

function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <HomePage />
      <About />
    </div>
  );
}

export default Home;
