"use client";

import React from "react";
import { motion } from "framer-motion";
import Typ from "@/components/main/typeanimation";

const Index = () => {
  return (
    <div className="mt-16 pt-6 sm:pt-10 md:pt-16 py-10 flex justify-center items-center relative xl:mt-36">
      <motion.div
        className="max-xl:hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          className="w-[550px]"
          src="mockupsağ.webp"
          alt="mockup sağ qr menü"
          draggable={false}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="mx-6"
      >
        <Typ />
      </motion.div>

      <motion.div
        className="max-xl:hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <img
          className="w-[550px]"
          src="mockupsol.webp"
          alt="mockup sol qr menü"
          draggable={false}
        />
      </motion.div>
    </div>
  );
};

export default Index;
