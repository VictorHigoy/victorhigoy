"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Experience() {
  const experiences = [
    {
      id: 3,
      title: "Graduation",
      company: "Bestlink College of the Philippines",
      description: "Bachelor of Science in Information Technology",
    },
    {
      id: 2,
      title: "Internship",
      company: "Zkript Solutions OPC",
      description:
        "Performed software development tasks, contributed to the design and architecture of software applications, and maintained close communication with senior software engineers.",
    },
    {
      id: 1,
      title: "Freelance",
      description:
        "Performed software development tasks, contributed to the design and architecture of software applications, and maintained close communication with senior software engineers.",
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
                    <p className="sm:text-lg font-medium text-subtleBlue mb-3">
                      {item.company}
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
