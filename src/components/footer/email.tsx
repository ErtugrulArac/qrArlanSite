"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Email = () => {
  return (
    <motion.div
      className="flex flex-col max-md:w-[90%] m-auto items-center justify-center text-center gap-6 max-md:gap-4 py-12 max-md:py-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h5 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent" variants={item}>
        Arlan Medya QR Menü
      </motion.h5>
      <motion.p className="max-md:text-sm text-gray-300 max-w-2xl leading-relaxed" variants={item}>
        Hızlı, hijyenik ve pratik: Arlan Medya QR Menüleri ile işletmenizin müşterilerine lezzeti keşfettirin!
      </motion.p>
      <motion.div className="flex flex-col sm:flex-row gap-4 max-md:mt-2 max-md:gap-3" variants={item}>
        <a
          title="Arlan Medya Hakkımızda"
          className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 hover:from-purple-600/40 hover:to-indigo-600/40 border border-purple-500/30 hover:border-purple-500/60 py-2 px-6 w-full sm:w-40 flex items-center gap-3 rounded-lg text-center justify-center transition-all duration-300"
          href="/hakkimizda"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
          </svg>
          Hakkımızda
        </a>
        <a
          title="Arlan Medya İletişim"
          className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 hover:from-purple-600/40 hover:to-indigo-600/40 border border-purple-500/30 hover:border-purple-500/60 py-2 px-6 w-full sm:w-40 flex items-center gap-3 rounded-lg text-center justify-center transition-all duration-300"
          href="/iletisim"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          İletişim
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Email;
