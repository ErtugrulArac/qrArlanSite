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
      className="flex flex-col max-md:w-[85%] m-auto items-center justify-center text-center gap-5 max-md:gap-4 mt-14 max-md:mt-9"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h5 className="text-5xl max-md:text-2xl font-passion" variants={item}>
        Arlan Medya QR Menü Sistemleri
      </motion.h5>
      <motion.p className="max-md:text-xs" variants={item}>
        Hızlı, hijyenik, pratik: Arlan Medya QR Menüleri ile işletmenizin müşterilerine lezzeti keşfettirin!
      </motion.p>
      <motion.div className="flex gap-16 max-md:mt-5 max-md:gap-8" variants={item}>
        <a
          title="Arlan Medya"
          className="bg-[#131313] py-1 w-36 flex items-center gap-3 rounded-xl text-center justify-center hover:bg-[#00af74] transition-colors duration-300"
          href="/hakkimizda"
        >
          <img className="w-5 h-5" src="göz.svg" alt="Qr menü site" />
          Hakkımızda
        </a>
        <a
          title="Arlan Medya"
          className="bg-[#131313] py-1 w-36 flex items-center gap-3 rounded-xl text-center justify-center hover:bg-[#00af74] transition-colors duration-300"
          href="/iletisim"
        >
          <img className="w-5 h-5" src="el.svg" alt="Cafe qr menü" />
          İletişim
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Email;
