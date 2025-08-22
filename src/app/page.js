"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ContactForm } from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import PrefessionalSkills from "./components/PrefessionalSkills";
import { Skills } from "./components/Skills";


export default function HomeWithSkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // fake 2s load
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className=" space-y-6 animate-pulse">
        {/* Hero Section */}
        <div className="flex justify-between items-center p-2 border border-gray-800 rounded-lg bg-black">
          <div className="space-y-4 w-2/3">
            <div className="h-6 w-40 bg-gray-800 rounded"></div>
            <div className="h-4 w-56 bg-gray-800 rounded"></div>
            <div className="h-3 w-72 bg-gray-800 rounded"></div>
            <div className="flex gap-2 mt-4">
              <div className="h-8 w-28 bg-gray-700 rounded"></div>
              <div className="h-8 w-28 bg-gray-700 rounded"></div>
            </div>
          </div>
          <div className="w-24 h-24 bg-gray-800 rounded-full"></div>
        </div>

        {/* Academics */}
        <div className="p-2 border border-gray-800 rounded-lg bg-black space-y-4">
          <div className="h-5 w-32 bg-gray-700 rounded"></div>
          <div className="flex justify-between items-center">
            <div className="h-4 w-60 bg-gray-800 rounded"></div>
            <div className="h-4 w-16 bg-gray-800 rounded"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-4 w-52 bg-gray-800 rounded"></div>
            <div className="h-4 w-16 bg-gray-800 rounded"></div>
          </div>
        </div>

        {/* Skills */}
        <div className="p-2 border border-gray-800 rounded-lg bg-black space-y-4">
          <div className="h-5 w-40 bg-gray-700 rounded"></div>
          <div className="grid grid-cols-5 gap-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-10 w-full bg-gray-800 rounded"></div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="p-2 border border-gray-800 rounded-lg bg-black space-y-4">
          <div className="h-5 w-48 bg-gray-700 rounded"></div>
          <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                <div className="h-4 w-32 bg-gray-800 rounded mb-2"></div>
                <div className="h-2 w-full bg-gray-900 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // When loading is done → show real website
  return (
    <>
       <HeroSection />
      <EducationSection />
      <PrefessionalSkills />
      <Skills />
      <ExperienceSection />
      <ContactForm />
    </>
  );
}

