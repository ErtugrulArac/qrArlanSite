"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className="mt-44 max-md:py-12 max-md:mt-0 py-14 text-black bg-white">
      <div className="flex w-[60%] max-md:w-full m-auto items-center justify-around max-lg:flex-col max-md:gap-9 max-lg:gap-10">
        <motion.div
          className="flex flex-col gap-7 max-md:w-[95%] max-md:mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <h2 className="text-6xl max-md:text-4xl font-fontpopins font-bold max-xl:text-5xl">
            Hakkımızda
          </h2>
          <p className="text-2xl max-md:text-base leading-relaxed font-medium w-[90%] max-md:opacity-70">
            Arlan Medya olarak, Erzurum'daki ofisimizde 2021 yılından beri müşterilerimize hizmet vermekteyiz.
          </p>
        </motion.div>

        <motion.img
          className="w-[500px] rounded-3xl max-md:rounded-none max-md:w-full max-xl:ml-10 max-lg:ml-0"
          src="arlan.gif"
          alt="kolay qr menü"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
        />
      </div>
    </div>
  );
};

export default About;
