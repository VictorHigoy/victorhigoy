import React from "react";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata = {
  title: "Victor Higoy Jr",
  description: "Frontend Developer based in the Philippines",
  openGraph: {
    title: "Victor Higoy Jr",
    description: "Frontend Developer based in the Philippines",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "/img/VictorPortfolioMetaBuilder.png",
        width: 800,
        height: 600,
      },
      {
        url: "/img/VictorPortfolioMetaBuilder.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

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
