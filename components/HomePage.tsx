"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function HomePage() {
  const initial = { opacity: 0, y: 150 };
  const whileInView = { opacity: 1, y: 0 };
  return (
    <div
      className="flex flex-col justify-center relative max-w-[1300px] h-screen m-auto px-5 text-slate-100"
      id="home"
    >
      <div className="absolute -top-20 lg:top-0 -right-64">
        <Image
          className="object-cover"
          src={"/img/Vector1.svg"}
          width={752}
          height={649}
          alt="vector1"
        />
      </div>
      <div className="absolute top-96 -right-20 lg:right-28 h-auto w-auto">
        <Image
          className="object-cover"
          src={"/img/Vector2.svg"}
          width={438}
          height={458}
          alt="vector2"
        />
      </div>

      <Link
        href="/#home"
        className="absolute top-20 left-5 text-3xl font-bold font-serif text-greatBlue"
      >
        victorH.
      </Link>
      <div>
        <motion.h1
          initial={initial}
          whileInView={whileInView}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl font-bold mb-5 text-subtleBlue"
        >
          UI/UX & Frontend <br /> Developer
        </motion.h1>
        <motion.p
          initial={initial}
          whileInView={whileInView}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="sm:text-lg font-normal text-subtleBlue"
        >
          Hello! I&lsquo;m{" "}
          <span className="text-greatBlue font-bold">Victor Higoy Jr</span>, an
          experienced UI designer <br className="hidden sm:block" />
          specializing in crafting exceptional user interfaces{" "}
          <br className="hidden sm:block" /> with modern frontend web
          technologies.
        </motion.p>
        <motion.button
          initial={initial}
          whileInView={whileInView}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          type="button"
          className="btn border text-greatBlue sm:text-lg font-semibold mt-10 py-3 px-5 rounded border-greatBlue transition-colors hover:bg-greatBlue hover:bg-opacity-10"
        >
          Recent Project
        </motion.button>
      </div>
    </div>
  );
}

export default HomePage;
