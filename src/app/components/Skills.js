"use client";
import { useState } from "react";
import { experiences, ProfessionalSKills } from "@/JSONData/DATAGVRV";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">
        Professional Skills
      </h2>
      <div className="space-y-4">
        {ProfessionalSKills.map((exp, index) => (
          <div className="w-full" key={index}>
            {/* Header Row */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex w-full items-center gap-4">
                <div className="  rounded-full  flex items-center justify-center text-black text-xl font-bold">
                  <Image
                    src={exp?.logo}
                    alt={exp?.company}
                    width={100}
                    height={100}
                    className="w-12  rounded-full  bg-white"
                  />
                </div>
                <div className=" w-full">
                  <h3 className="text-white  font-semibold">{exp.Name}</h3>
                  {/* Progress Bar  */}
                  {/* Progress Bar */}
                  <div className="rounded-full bg-gray-600 h-1 mt-1">
                    <div
                      className="h-1 bg-white rounded-full transition-all duration-500"
                      style={{ width: exp.level }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-400 text-sm">{exp.level}%</p>
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
                openIndex === index
                  ? "max-h-96 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-3 border rounded-md text-gray-300 text-sm border-gray-800 pt-3">
                <p className="text-justify">{exp.details}</p>
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
