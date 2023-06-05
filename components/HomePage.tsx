import React from "react";
import Vector1 from "@/svg/BlurredColor/Vector1";
import Vector2 from "@/svg/BlurredColor/Vector2";
import Link from "next/link";

function HomePage() {
  return (
    <div
      className="flex flex-col justify-center relative max-w-[1300px] h-screen max-h-screen m-auto px-5 text-slate-100"
      id="home"
    >
      <div className="absolute top-0 -right-64 h-auto w-auto">
        <Vector1 />
      </div>
      <div className="absolute top-96 right-28 h-auto w-auto">
        <Vector2 />
      </div>
      <Link
        href="/#home"
        className="absolute top-20 left-5 text-3xl font-bold font-serif text-greatBlue"
      >
        victorH.
      </Link>
      <div>
        <h1 className="text-5xl sm:text-6xl font-bold mb-5 text-subtleBlue">
          Frontend Developer
        </h1>
        <p className="text-base text-subtleBlue">
          Hello! I'm{" "}
          <span className="text-greatBlue font-bold">Victor Higoy Jr</span>, an
          experienced UI designer <br className="hidden sm:block" />
          specializing in crafting exceptional user interfaces{" "}
          <br className="hidden sm:block" /> with modern frontend web
          technologies.
        </p>
        <button
          type="button"
          className="btn border text-greatBlue mt-8 py-3 px-5 rounded border-greatBlue transition-all hover:bg-greatBlue/10"
        >
          Recent Project
        </button>
      </div>
    </div>
  );
}

export default HomePage;
