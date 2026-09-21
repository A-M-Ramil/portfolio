// 1. Updated FuzzyOverlay.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      style={{
        // Pointing to the public folder
        backgroundImage: 'url("/noise.png")',
      }}
      // Added z-0 here
      className="pointer-events-none absolute -inset-[100%] opacity-[15%] z-0"
    />
  );
};

export default FuzzyOverlay;
