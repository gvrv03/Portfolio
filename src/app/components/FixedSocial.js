import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const FixedSocial = () => {
  return (
    <div className="fixed left-0 right-0  bottom-5 flex items-center justify-center ">
      <div className="border border-gray-900 p-2 px-4 flex items-center justify-center gap-5 rounded-full bg-black">
        <Instagram/>
        <Github/>
        <Linkedin/>
      </div>
    </div>
  );
};

export default FixedSocial;
