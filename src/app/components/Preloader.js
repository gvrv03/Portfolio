"use client";
import { motion } from "framer-motion";

const Preloader = ({ label = "Loading" }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black"
    >
      {/* Spinning ring */}
      <motion.div
        className="h-14 w-14 rounded-full border-2 border-gray-800 border-t-white"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
      />

      {/* Animated label */}
      <div className="flex items-center gap-1">
        {label.split("").map((char, i) => (
          <motion.span
            key={i}
            className="text-sm font-medium tracking-widest text-gray-300 uppercase"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              delay: i * 0.08,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
