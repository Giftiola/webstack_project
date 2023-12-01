"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TabButton = dynamic(() => import("./TabButton"), {
  ssr: false,
});

const TAB_DATA = {
  skills: {
    title: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  education: {
    title: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>college..</li>
        <li>University of...</li>
      </ul>
    ),
  },
};

const AboutSection = () => {
  const [currentTab, setCurrentTab] = useState("skills");

  const handleTabChange = useCallback((newTab) => {
    setCurrentTab(newTab);
  }, []);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.webp"
          width={400}
          height={400}
          alt="image"
          priority
          className="relative mt-20 w-64 h-64 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-96 xl:h-96 mb- sm:mb-2 md:mb-24 lg:mb-96 object-fill bg-cover rounded-3xl overflow-hidden"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 mb-2">
        {Object.keys(TAB_DATA).map((tabKey) => (
          <TabButton
            key={tabKey}
            selectTab={() => handleTabChange(tabKey)}
            active={currentTab === tabKey}
          >
            {TAB_DATA[tabKey].title}
          </TabButton>
        ))}
      </div>
      <div className="transition-all duration-900">
        {TAB_DATA[currentTab]?.content}
      </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
