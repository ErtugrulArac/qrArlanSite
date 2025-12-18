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
            className="px-2 sm:px-3 py-1 sm:py-2 bg-gradient-to-r from-purple-800 to-indigo-800 rounded-lg text-purple-50"
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
        className="px-7 py-2 rounded-lg font-semibold bg-gradient-to-r from-purple-800 to-indigo-800 text-white hover:from-purple-900 hover:to-indigo-900 transition opacity-100 whitespace-nowrap xl:text-lg"
        href="#inceleyin"
      >
        inceleyin
      </a>
      <a
        title="qr menü bilgi al"
        className="px-7 py-2 rounded-lg font-semibold bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 transition whitespace-nowrap xl:text-lg"
        href="/iletisim"
      >
        bilgi alın
      </a>
    </motion.div>
  );
};

export default TypeAnimationComponent;
