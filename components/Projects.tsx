"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Singh Signs",
      tech: [
        { name: "Next.js", duration: 0.03 },
        { name: "Typescript", duration: 0.05 },
        { name: "Tailwindccs", duration: 0.07 },
        { name: "Figma", duration: 0.08 },
      ],
      description:
        "Singh Signs is a versatile web application that offers services like engraving, engineering, design, permits, and the sign master program. It provides users with essential information about its services.",
      image: "/img/SinghSignProject.png",
      link: "https://singh-signs.vercel.app/",
    },
    {
      title: "Fitness Calculation",
      tech: [
        { name: "Next.js", duration: 0.03 },
        { name: "Typescript", duration: 0.05 },
        { name: "Bootstrap", duration: 0.07 },
        { name: "Figma", duration: 0.08 },
      ],
      description:
        "Fitness Calculation is a web application that enables you to calculate your BMI and calories based on your goal, including diet plans. It offers valuable insights about training and nutrition for enhanced knowledge in these areas.",
      image: "/img/FitnessCalculationProject.png",
      link: "https://fitness-calculation.vercel.app/",
    },
    {
      title: "Alumni Management System",
      tech: [
        { name: "React.js", duration: 0.03 },
        { name: "Bootstrap", duration: 0.05 },
        { name: "Sass", duration: 0.07 },
        { name: "Laravel", duration: 0.08 },
        { name: "MySQL", duration: 0.1 },
      ],
      description:
        "Alumni Management System is a capstone project designed for six users. It offers a comprehensive approach in managing learning materials, account creation, subject tagging, and more in a systematic manner. <br /> <br /> Features: Random Snapshot, bulk creation and tagging of subjects, email notifications, robust exam interface, and faster transaction requests.",
      image: "/img/lmsProject.png",
      link: "hhttps://lms.bcpsms.com/",
    },
  ];

  return (
    <div
      className="relative max-w-[1300px] m-auto mb-32 px-5 lg:px-10 text-slate-100"
      id="projects"
    >
      <div className="absolute -top-20 lg:top-0 -right-0 lg:right-96 h-auto w-auto">
        <Image
          className="object-cover"
          src={"/img/Vector2.svg"}
          width={438}
          height={458}
          alt="vector2"
        />
      </div>
      <div className="absolute top-1/4 lg:top-54 -right-64  h-auto w-auto">
        <Image
          className="object-cover z-0"
          src={"/img/Vector3.svg"}
          width={599}
          height={649}
          alt="vector3"
        />
      </div>
      <div className="absolute bottom-0 -left-20  h-auto w-auto">
        <Image
          className="object-cover z-0"
          src={"/img/Vector5.svg"}
          width={230}
          height={179}
          alt="vector5"
        />
      </div>
      <div className="relative my-20">
        <h2 className="relative text-2xl sm:text-4xl font-bold mb-10 sm:mb-16 text-greatBlue">
          Recent Projects
          <span className="absolute -bottom-3 left-0 w-[60px] h-[2px]  bg-subtleBlue"></span>
        </h2>
        <div className="space-y-28">
          {projects.map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-2 m-auto items-center justify-center"
              >
                <div className="space-y-6 mb-10 sm:mb-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-subtleBlue mb-1">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {item.tech.map((tech, index) => {
                      return (
                        <motion.p
                          initial={{ opacity: 0, y: 150 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: tech.duration * 0.8,
                          }}
                          key={index}
                          className="bg-greatBlueOpacity sm:text-lg font-medium text-greatBlue py-1 px-5 rounded-sm"
                        >
                          {tech.name}
                        </motion.p>
                      );
                    })}
                  </div>
                  <p
                    className="sm:text-lg font-light text-subtleBlue"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="m-auto flex items-start"
                >
                  <Image
                    src={item.image}
                    width={400}
                    height={399}
                    alt={item.title}
                  ></Image>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
