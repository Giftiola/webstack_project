"use client";
import React, { useCallback } from "react";
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

const Tabs = ({ currentTab, onTabChange }) => {
  const handleTabChange = useCallback(
    (newTab) => {
      onTabChange(newTab);
    },
    [onTabChange]
  );

  return (
    <div>
      <div className="flex flex-row justify-start mt-8">
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
  );
};

export default Tabs;
