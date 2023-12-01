"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
// import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] justify-center sm:justify-start">
    <div className="container mt-0 sm:mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        {/* <ProjectsSection /> */}
        <EmailSection />
      </div>
    </main>
  );
}
