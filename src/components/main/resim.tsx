"use client";

import React from "react";
import { motion } from "framer-motion";

const Resim = () => {
  return (
    <motion.div
      className="relative flex justify-center gap-7 w-72 h-72"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img
        className="absolute w-72 ml-10"
        src="mockupsol.webp"
        alt="mockup sol qr menü"
        draggable={false}
      />
      <img
        className="absolute w-72"
        src="mockupsağ.webp"
        alt="mockup sağ qr menü"
        draggable={false}
      />
    </motion.div>
  );
};

export default Resim;
