"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Resim from "./resim";

const TypeAnimationComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-white flex flex-col justify-center items-center gap-5"
    >
      <h2 className="w-[580px] max-md:w-[85%] text-5xl font-fontum font-black max-md:text-4xl text-center">
        saniyeler içinde qr menünüz
        <br />
        hazır!
        <span className="ml-3 text-4xl max-md:text-3xl">
          <TypeAnimation
            className="px-1 py-1 bg-zinc-700 rounded-lg"
            sequence={[
              "pratik",
              1000,
              "şık",
              1000,
              "yenilikçi",
              1000,
              "hızlı",
              1000,
              "masrafsız",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h2>

      <p className="font-fontum font-extrabold text-center text-3xl max-md:text-xl opacity-90">
        işletmeniz için özel qr çözümleri
      </p>

      <div className="xl:hidden">
        <Resim />
      </div>

      <a
        title="qr menü incele"
        className="px-7 py-2 rounded-lg font-semibold bg-[#333333] text-white opacity-100 whitespace-nowrap xl:text-lg"
        href="#inceleyin"
      >
        inceleyin
      </a>
      <a
        title="qr menü bilgi al"
        className="px-7 py-2 rounded-lg font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg"
        href="/iletisim"
      >
        bilgi alın
      </a>
    </motion.div>
  );
};

export default TypeAnimationComponent;
