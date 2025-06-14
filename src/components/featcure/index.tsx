"use client";

import React from "react";
import { motion } from "framer-motion";
import Orta from "./orta";
import Gif from "./gif";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.8 } },
};

const Index = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-16 px-4 md:px-0 max-w-7xl">
        {/* Yazı alanı */}
        <motion.div
          className="flex-1 min-w-[280px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          style={{ position: "relative", zIndex: 10 }}
        >
          <Orta />
        </motion.div>

        {/* Gif alanı */}
        <motion.div
          className="flex-1 min-w-[280px] flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          style={{ position: "relative", zIndex: 1 }}
        >
          <Gif />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
