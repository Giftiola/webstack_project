"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white mt-auto">
    <div className="container mx-auto p-4 flex justify-between items-center">
        <Image 
        src="/logo.png"
        className="w-10 h-10 lg:w-16 lg:h-16  rounded-full"
        width={100}
        height={100}
        alt="image" />
 <p className="text-center lg:text-left text-primary-300">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
