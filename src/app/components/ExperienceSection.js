"use client";
import { useState } from "react";
import { experiences } from "@/JSONData/DATAGVRV";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">
        Cool places I worked at
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index}>
            {/* Header Row */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black text-xl font-bold">
                  <Image
                    src={exp?.logo}
                    alt={exp?.company}
                    width={100}
                    height={100}
                    className="w-[70%]"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{exp.company}</h3>
                  <p className="text-gray-400 text-sm">{exp.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-400 text-sm">{exp.period}</p>
                {openIndex === index ? (
                  <ChevronUp className="text-white" />
                ) : (
                  <ChevronDown className="text-white" />
                )}
              </div>
            </div>

            {/* Animated Dropdown */}
            <div
              className={`transition-all duration-500 ease-linear overflow-hidden ${
                openIndex === index ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-3 border rounded-md text-gray-300 text-sm border-gray-800 pt-3">
                <p className="text-justify" >{exp.details}</p>
                {exp.technologies && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 px-2 py-1 text-xs rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
