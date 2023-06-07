import React from "react";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HomePage />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
