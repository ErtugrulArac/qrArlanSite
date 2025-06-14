"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  header: string;
  text: string;
  list: string[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Index = ({ header, text, list }: Props) => {
  return (
    <div className="bg-white pb-20">
      <motion.div
        className="w-[80%] m-auto flex max-lg:flex-col max-lg:w-full items-center justify-around max-lg:gap-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
      >
        <div className="w-[40%] max-lg:w-[90%] flex flex-col gap-7 max-lg:gap-4">
          <h2 className="text-6xl max-lg:text-4xl leading-[70px] w-full">{header}</h2>
          <p className="text-base max-lg:text-sm leading-[22px] opacity-80">{text}</p>
          <ul className="flex flex-col gap-4">
            {list.map((item, i) => (
              <li key={i} className="flex max-md:text-sm gap-4 opacity-80 font-bold">
                <img src="koksal.svg" alt="qrmenü icon" /> {item}
              </li>
            ))}
          </ul>
          <a
            title="qr menü info"
            className="w-max px-7 py-2 rounded-xl font-semibold bg-[#8b38cb] text-white whitespace-nowrap xl:text-lg mt-3"
            href="/iletisim"
          >
            şimdi bilgi alın
          </a>
        </div>
        <motion.img
          className="w-[600px] max-lg:w-full max-lg:h-auto"
          src="uctel.webp"
          alt="arlanmedya"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
};

export default Index;
