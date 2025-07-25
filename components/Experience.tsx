"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Experience() {
  const experiences = [
    {
      id: 6,
      title: "Frontend Developer - Fulltime",
      date: "January 2025 - Present Date",
      company: "Futr Mobii",
      description:
        "Built responsive Web 3.0 interfaces with optimized performance for real-time blockchain interactions. Integrated smart contracts and Web3 APIs in collaboration with backend and blockchain teams",
    },
    {
      id: 5,
      title: "UI/UX Web Developer - Contractual",
      date: "August 2023 - January 2025",
      company: "Van Law Firm",
      description:
        "Developing and maintaining multiple websites for the company, fixing bugs and errors, ensuring optimal performance, and improving user experience across various platforms",
    },
    {
      id: 4,
      title: "Software Developer",
      date: "August 2023 - January 2024",
      company: "Zkript Solutions OPC",
      description:
        "Designing and implementing versatile applications, seamlessly integrating frontend and backend technologies. Ensuring cross-platform compatibility and collaborate closely with teams for effective software solutions",
    },
    {
      id: 3,
      title: "Freelance",
      date: "April 2022 - Present Date",
      description:
        "Designing and developing responsive and user-friendly websites for various clients, ensuring an engaging and seamless user experience. Implemented modern frameworks and technologies to optimize website performance and enhance overall functionality",
    },
    {
      id: 2,
      title: "Graduation - Magna Cum Laude",
      date: "2019 - 2023",
      company: "Bestlink College of the Philippines",
      description:
        "Bachelor of Science in Information Technology - Major in Information Management. Top Research Paper – among more than 900 research paper presented during the 5th SIMP-AAG-BCP Multidisciplinary Research Festival",
    },
    {
      id: 1,
      title: "Internship",
      date: "April 2023 - July 2023",
      company: "Zkript Solutions OPC",
      description:
        "Performed software development tasks, contributed to the design and architecture of software applications, and maintained close communication with senior software engineers",
    },
  ];

  return (
    <div
      className="relative max-w-[1300px] m-auto mb-32 px-5 lg:px-10 text-slate-100"
      id="experience"
    >
      <div className="absolute top-20 lg:top-0 -right-64  h-auto w-auto">
        <Image
          className="object-cover z-0"
          src={"/img/Vector3.svg"}
          width={599}
          height={649}
          alt="vector3"
        />
      </div>
      <div className="absolute -bottom-40 -left-96 lg:-left-64 h-auto w-auto">
        <Image
          className="object-cover z-0"
          src={"/img/Vector4.svg"}
          width={599}
          height={649}
          alt="vector4"
        />
      </div>

      <div className="relative my-20">
        <h2 className="relative text-2xl sm:text-4xl font-bold mb-10 sm:mb-16 text-greatBlue">
          Experience
          <span className="absolute -bottom-3 left-0 w-[70px] h-[2px] bg-subtleBlue"></span>
        </h2>
        <div>
          {experiences.map((item, index) => {
            return (
              <div key={item.id}>
                <div className="bg-greatBlueOpacity rounded-sm p-5 max-w-[550px] m-auto shadow-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-greatBlue mb-1">
                    {item.title}
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="sm:text-lg font-medium text-subtleBlue mb-0">
                      {item.company}
                    </p>
                    <p className="font-sm text-md text- mb-3 text-gray-400">
                      {item.date}
                    </p>
                    <p className="sm:text-lg font-light text-subtleBlue">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
                {item.id !== 1 && (
                  <div className="divider-container flex flex-col items-center -mt-2">
                    <div className="w-4 h-4 bg-greatBlue/90 rounded-full z-10">
                      <div className="w-4 h-4 bg-greatBlue/90 rounded-full z-10 animate-ping"></div>
                    </div>
                    <div className="w-1 h-20 lg:h-24 bg-subtleBlue/20 rounded-full -mt-2"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
