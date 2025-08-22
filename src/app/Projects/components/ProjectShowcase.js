"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { projects } from "@/JSONData/DATAGVRV";
import Image from "next/image";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

export function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="mb-16">
      {/* Category Filter */}
      <div className="flex  flex-col p-2 sticky top-0 bg-black  overflow-x-auto  mb-6 scrollbar-hide">
        <h2 className=" bg-black flex items-center gap-2 text-2xl font-bold text-white mb-5">
         <Link href="/" >
         <ArrowBigLeft/>
         </Link>
          Projects
        </h2>
        <div className="flex gap-2">
          {categories.map((cat, i) => (
            <Button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                selectedCategory === cat
                  ? "bg-white text-black font-semibold"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="border flex w-full border-gray-800 rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Project Details */}
            <div className="p-4 flex-col justify-between w-full flex gap-3">
              <h3 className="text-lg font-semibold  text-white flex justify-between items-center">
                <p>{project.title}</p>
                <p className="text-[10px] p-2 border-gray-900 border w-fit rounded-md font-light">
                  {project.category}
                </p>
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {project.repo && (
                  <Link
                    href={project.repo}
                    target="_blank"
                    className="py-1 px-2 rounded-md bg-transparent border border-gray-800"
                  >
                    Repository
                  </Link>
                )}
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="py-1 px-2 rounded-md bg-gray-900"
                  >
                    View Demo
                  </Link>
                )}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
