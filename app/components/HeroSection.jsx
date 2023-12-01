"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const HeroSection = () => {

  const pdfUrl = "/pdf/Darijo_Tepic_Resume.pdf"; 

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Darijo",
                1000,
                "Full Stack Developer",
                1000,
                "Mobile Developer",
                1000,
                "Backend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <div>
            <a
            href={pdfUrl}
              className="px-1 inline-block py-1 w-full sm:w-fit mt-3 rounded-full bg-gradient-to-br from-[#2869d9] to-[#46caef] hover:bg-[#1e293b] text-white whitespace-nowrap"
              passhref="true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="My Resume - Download Darijo Online Resume"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                My Resume
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/personal-image.webp"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;