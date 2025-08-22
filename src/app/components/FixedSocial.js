import { socialLinks } from "@/JSONData/DATAGVRV";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const FixedSocial = () => {
  return (
    <div className="fixed left-0 right-0 z-10  bottom-5 flex items-center justify-center ">
      <div className="border border-gray-900 p-2 px-4 flex items-center justify-center gap-5 rounded-full bg-black">
        {socialLinks?.map((item, index) => {
          return (
            <Link key={index} href={item?.href} target="_blank" >
              {item?.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FixedSocial;
