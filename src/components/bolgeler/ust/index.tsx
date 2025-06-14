"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  header: string;
  text: string;
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Index = ({ header, text }: Props) => {
  return (
    <div className="bg-white pt-20">
      <motion.div
        className="w-[80%] m-auto flex max-lg:flex-col max-lg:w-full items-center justify-around max-lg:gap-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInLeft}
      >
        <motion.img
          className="w-[600px] max-lg:w-full max-lg:h-auto"
          src="Mockup3te.webp"
          alt="arlanmedyatelefon"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="w-[40%] max-lg:w-[90%] flex flex-col gap-7 max-lg:gap-4">
          <h2 className="text-6xl max-lg:text-4xl leading-[70px] w-full">
            {header} <b>Qr Menü Sistemleri</b>
          </h2>
          <p className="text-base max-lg:text-sm leading-[22px] opacity-80">{text}</p>
          <a
            title="qr menü info"
            className="w-max px-7 py-2 rounded-xl font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg mt-3"
            href="/"
          >
            Hemen Qr Menü Sahibi Olun
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
