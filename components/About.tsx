"use client";
import React, { Fragment } from "react";
import ArrowRight from "@/svg/Icons/ArrowRight";
import Link from "next/link";
import ReactIcon from "@/svg/TechStack/ReactIcon";
import NextIcon from "@/svg/TechStack/NextIcon";
import TypeScriptIcon from "@/svg/TechStack/TypeScriptIcon";
import TailWindIcon from "@/svg/TechStack/TailwindIcon";
import BootstrapIcon from "@/svg/TechStack/BootstrapIcon";
import FigmaIcon from "@/svg/TechStack/FigmaIcon";
import SassIcon from "@/svg/TechStack/SassIcon";
import FirebaseIcon from "@/svg/TechStack/FirebaseIcon";
import MongoDbIcon from "@/svg/TechStack/MongoDbIcon";
import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  const list = { hidden: { opacity: 1 } };
  const item = { hidden: { x: -10, opacity: 1 } };

  const socialLinks = [
    {
      link: "https://web.facebook.com/victor.higoy000/",
      name: "Facebook",
      duration: 0.03,
    },
    {
      link: "https://www.linkedin.com/in/victor-higoy-jr-6a770320b/",
      name: "LinkedIn",
      duration: 0.05,
    },
    { link: "https://github.com/VictorHigoy", name: "Github", duration: 0.07 },
    {
      link: "https://www.instagram.com/victorhigoy_/",
      name: "Instagram",
      duration: 0.09,
    },
    {
      link: "https://twitter.com/higoyvictor000?t=sVQFo0bp8ELWoh7_5lndHg&s=09&fbclid=IwAR0jKe4lvHgoxWMe4zDz6JSbvR5SsqP4fEPJfWYUKGcsamMIYvBuyYrcco8",
      name: "Twitter",
      duration: 0.11,
    },
  ];

  const technologyStack = [
    {
      id: 1,
      duration: 0.03,
      name: "React.js",
      icon: <ReactIcon />,
      pXaxis: "px-[18px]",
      pYaxis: "py-5",
    },
    {
      id: 2,
      duration: 0.05,
      name: "Next.js",
      icon: <NextIcon />,
      pXaxis: "px-5",
      pYaxis: "py-5",
    },
    {
      id: 3,
      duration: 0.07,
      name: "Typescript",
      icon: <TypeScriptIcon />,
      pXaxis: "px-5",
      pYaxis: "py-5",
    },
    {
      id: 4,
      duration: 0.09,
      name: "Tailwindcss",
      icon: <TailWindIcon />,
      pXaxis: "px-5",
      pYaxis: "py-5",
    },
    {
      id: 5,
      duration: 0.11,
      name: "Bootstrap5",
      icon: <BootstrapIcon />,
      pXaxis: "px-5",
      pYaxis: "py-5",
    },
    {
      id: 6,
      duration: 0.13,
      name: "Figma",
      icon: <FigmaIcon />,
      pXaxis: "px-[30.5px]",
      pYaxis: "py-5",
    },
    {
      id: 7,
      duration: 0.15,
      name: "Sass",
      icon: <SassIcon />,
      pXaxis: "px-5",
      pYaxis: "py-5",
    },
    {
      id: 8,
      duration: 0.17,
      name: "Firebase",
      icon: <FirebaseIcon />,
      pXaxis: "px-7",
      pYaxis: "py-5",
    },
    {
      id: 9,
      duration: 0.19,
      name: "MongoDB",
      icon: <MongoDbIcon />,
      pXaxis: "px-[35px]",
      pYaxis: "py-4",
    },
  ];

  return (
    <div
      className="relative max-w-[1300px] m-auto mb-32 px-5 lg:px-10 text-slate-100"
      id="about"
    >
      <div className="absolute top-3/4 lg:top-72 -right-0 h-auto w-auto">
        <Image
          className="object-cover"
          src={"/img/Vector2.svg"}
          width={438}
          height={458}
          alt="vector2"
        />
      </div>

      <div className="relative my-20">
        <h2 className="relative text-2xl sm:text-4xl font-bold mb-10 sm:mb-16 text-greatBlue">
          About
          <span className="absolute -bottom-3 left-0 w-[60px] h-[2px]  bg-subtleBlue"></span>
        </h2>
        <div className="block md:flex space-y-8 md:space-y-0 md:space-x-20 lg:space-x-28 mb-8">
          <div className="basis-full md:basis-2/3">
            <p className="sm:text-lg font-normal text-subtleBlue">
              As a Frontend Developer, I possess a diverse skill set that allows
              me to create engaging and intuitive user interfaces. With a strong
              understanding of modern frontend technology, I have the ability to
              transform designs into pixel-perfect, responsive websites.
              <br />
              <br />
              Additionally, I have experience in optimizing website performance,
              ensuring cross-browser compatibility, and implementing
              accessibility standards. With a keen eye for design and a passion
              for delivering seamless user experiences, I am committed to
              crafting visually appealing and functional websites that leave a
              lasting impression.
            </p>
          </div>
          <div className="basis-full md:basis-1/3">
            <p className="text-greatBlue font-bold mb-3">Social Links</p>
            <div className="space-y-2">
              {socialLinks.map((social, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, x: 150 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: social.duration * 0.8 }}
                    key={index}
                    className="flex items-center"
                  >
                    <ArrowRight />
                    <Link href={social.link} target="_blank">
                      <p className="ms-5 sm:text-lg font-normal text-subtleBlue transition-all hover:text-greatBlue">
                        {social.name}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl sm:text-3xl font-bold mb-10 sm:mb-16 text-greatBlue">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center sm:justify-start gap-5">
            {technologyStack.map((tech, index) => {
              return (
                <Fragment key={tech.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: tech.duration * 0.8 }}
                    className={`${tech.pXaxis} ${tech.pYaxis} cursor-pointer overflow-hidden group relative flex items-center bg-greatBlueOpacity rounded-md shadow-xl`}
                  >
                    {tech.icon}
                    <p className="sm:text-md font-bold text-greatBlue p-5 invisible duration-300 ease-out transition  group-hover:visible absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-greatBlueOpacity">
                      {tech.name}
                    </p>
                  </motion.div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
