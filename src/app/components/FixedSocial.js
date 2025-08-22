"use client";
import { socialLinks } from "@/JSONData/DATAGVRV";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const FixedSocial = () => {
  const pathname = usePathname();

  // Check if current route is /Projects
  const isProjects = pathname.startsWith("/Projects");

  return (
    <div className="fixed flex-col left-0 right-0 bottom-2 z-20 flex items-center justify-center gap-2">
      {/* Social Links Bar */}
      <div className="border border-gray-900 p-2 px-4 flex items-center justify-center gap-5 rounded-full bg-black shadow-md">
        {socialLinks?.map((item, index) => (
          <Link key={index} href={item?.href} target="_blank">
            <span className="text-gray-300 hover:text-white transition">
              {item?.icon}
            </span>
          </Link>
        ))}
      </div>

      {/* Navigation Switch */}
      <div className="relative bg-black p-1 grid grid-cols-2 md:max-w-[220px] w-[80%] rounded-full border border-gray-800 shadow-md overflow-hidden">
        {/* Animated Highlight */}
        <motion.div
          className="absolute top-1 bottom-1 w-1/2 rounded-full bg-gray-800"
          initial={false}
          animate={{ x: isProjects ? "100%" : "0%" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />

        <Link
          href="/"
          className={`relative z-10 rounded-full w-full py-1 text-center transition ${
            !isProjects ? "text-white" : "text-gray-400"
          }`}
        >
          Home
        </Link>

        <Link
          href="/Projects"
          className={`relative z-10 rounded-full w-full py-1 text-center transition ${
            isProjects ? "text-white" : "text-gray-400"
          }`}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default FixedSocial;
