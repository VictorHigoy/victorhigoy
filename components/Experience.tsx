import React from "react";

function Experience() {
  return (
    <div
      className="relative max-w-[1300px] m-auto mb-32 px-5 lg:px-10 text-slate-100"
      id="experience"
    >
      <div className="my-20">
        <h2 className="relative text-2xl sm:text-4xl font-bold mb-10 sm:mb-16 text-greatBlue">
          Experience
          <span className="absolute -bottom-3 left-0 w-[70px] h-[2px] bg-subtleBlue"></span>
        </h2>
        <div className="space-y-28">
          <div className="relative bg-greatBlueOpacity rounded-sm p-5 max-w-[550px] m-auto">
            <h3 className="text-2xl font-bold text-greatBlue mb-1">
              Graduation
            </h3>
            <p className="sm:text-lg font-medium text-subtleBlue mb-3">
              Bestlink College of the Philippines
            </p>
            <p className="sm:text-lg font-light text-subtleBlue">
              Bachelor of Science in Information Technology
            </p>
            <span className="absolute top-[216px] xsm:top-[192px] sm:top-[200px] sm:bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-1 h-[112px]  bg-subtleBlue/20"></span>
          </div>

          <div className="bg-greatBlueOpacity rounded-sm p-5 max-w-[550px] m-auto">
            <h3 className="text-2xl font-bold text-greatBlue mb-1">
              Internship
            </h3>
            <p className="sm:text-lg font-medium text-subtleBlue mb-3">
              Zkript Solutions OPC
            </p>
            <p className="sm:text-lg font-light text-subtleBlue">
              Performed software development tasks, contributed to the design
              and architecture of software applications, and maintained close
              communication with senior software engineers.
            </p>
          </div>

          <div className="bg-greatBlueOpacity rounded-sm p-5 max-w-[550px] m-auto">
            <h3 className="text-2xl font-bold text-greatBlue mb-3">
              Freelance
            </h3>
            <p className="sm:text-lg font-light text-subtleBlue">
              Collaborated closely with clients to deliver custom software
              solutions, ensuring seamless functionality, exceeding their
              expectations, and providing timely support throughout the
              development process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
