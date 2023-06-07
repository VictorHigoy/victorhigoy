"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Facebook from "@/svg/Social/Facebook";
import LinkeIn from "@/svg/Social/LinkeIn";
import Github from "@/svg/Social/Github";
import Instagram from "@/svg/Social/Instagram";
import Twitter from "@/svg/Social/Twitter";

function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  console.log(hoveredIndex);

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const socialLinks = [
    {
      socialComponent: <Facebook hoveredIndex={hoveredIndex} />,
      link: "https://web.facebook.com/victor.higoy000/",
      name: "Facebook",
    },
    {
      socialComponent: <LinkeIn hoveredIndex={hoveredIndex} />,
      link: "https://www.linkedin.com/in/victor-higoy-jr-6a770320b/",
      name: "LinkedIn",
    },
    {
      socialComponent: <Github hoveredIndex={hoveredIndex} />,
      link: "https://github.com/VictorHigoy",
      name: "Github",
    },
    {
      socialComponent: <Instagram hoveredIndex={hoveredIndex} />,
      link: "https://www.instagram.com/victorhigoy_/",
      name: "Instagram",
    },
    {
      socialComponent: <Twitter hoveredIndex={hoveredIndex} />,
      link: "https://twitter.com/higoyvictor000?t=sVQFo0bp8ELWoh7_5lndHg&s=09&fbclid=IwAR0jKe4lvHgoxWMe4zDz6JSbvR5SsqP4fEPJfWYUKGcsamMIYvBuyYrcco8",
      name: "Twitter",
    },
  ];

  return (
    <div className="relative max-w-[1300px] m-auto mb-32 px-5 lg:px-10 text-slate-100">
      <div className="my-20 text-center max-w-[580px] m-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-greatBlue mb-3">
          Get in touch, let's talk.
        </h3>
        <motion.p
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
          }}
          className="sm:text-lg font-light text-subtleBlue"
        >
          Feel free to get in touch with me regarding any inquiries, project
          collaborations, or opportunities. Email me at{" "}
          <span className="text-greatBlue font-semibold">
            higoyvictor21@gmail.com
          </span>
          . I'm always open to discussing your unique needs and how we can work
          together to achieve your goals.
        </motion.p>
      </div>
      <div className="bg-greatBlueOpacity w-full h-[3px] mb-3"></div>
      <div className="flex flex-col xsm:flex-row items-center xsm:justify-between">
        <p className="text-greatBlue font-bold text-xl mb-3 xsm:mb-0">
          Victor Higoy Jr
        </p>
        <div className="flex items-center space-x-4">
          {socialLinks.map((social, index) => {
            return (
              <Link
                href={social.link}
                className="cursor-pointer"
                target="_blank"
              >
                <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer"
                >
                  {social.socialComponent}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
