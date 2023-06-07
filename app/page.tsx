import React from "react";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Experience from "@/components/Experience";

function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HomePage />
      <About />
      <Experience />
    </div>
  );
}

export default Home;
