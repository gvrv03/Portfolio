"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projects } from "@/JSONData/DATAGVRV";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import Preloader from "@/app/components/Preloader";

const ProjectShowcase = ()=> {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // fake 1.5s load
    return () => clearTimeout(timer);
  }, []);

  // Extract unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Preloader */}
      <AnimatePresence>{loading && <Preloader label="Projects" />}</AnimatePresence>

      <section className="mb-16">
        {/* Category Filter */}
        <div className="flex flex-col p-2 sticky top-0 z-10 bg-black mb-6">
          <h2 className="bg-black flex items-center gap-2 text-2xl font-bold text-white mb-5">
            <Link href="/">
              <ArrowBigLeft />
            </Link>
            Projects
          </h2>

          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 2) * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="border flex w-full border-gray-800 rounded-md overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
              >
                {/* Project Details */}
                <div className="p-4 flex-col justify-between w-full flex gap-3">
                  <h3 className="text-lg font-semibold text-white flex justify-between items-center">
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
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

export default ProjectShowcase