import React from "react";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victor Higoy",
  description: "Frontend Developer based in the Philippines",
  openGraph: {
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "/img/VictorPortfolioMetaBuilder.png",
        width: 1920,
        height: 1080,
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
