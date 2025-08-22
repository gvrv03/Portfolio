"use client";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="pb-5 ">
      <div className=" items-center flex gap-5">
        <div className="flex  flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold">Hi, Gaurav here</h1>
          <div className="font-semibold  text-base text-gray-300">
            Full Stack Developer
          </div>
          <p className="text-xs md:text-sm text-gray-400">
            Detail-oriented and passionate Full Stack Developer with expertise
            in building dynamic, responsive, and scalable web applications.
          </p>
        </div>
        <div className=" border-dashed border  p-2  rounded-full  ">
          <Image
            src="/Profile.png"
            width={200}
            height={200}
            className="  rounded-full"
            alt="author"
          />
        </div>
      </div>
      <div className="flex mt-5 md:mt-0 gap-5">
        <Link
          href="GauravResume.pdf"
          download={true}
className="flex gap-2 items-center text-sm border border-gray-800 rounded-md px-3"
>
          Download CV <Download className="ml-2 h-4 w-4" />
        </Link>

        <Button
          className="cursor-pointer"
          onClick={() => {
            router.push("Projects");
          }}
        >
          View Projects
          <ExternalLink />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
