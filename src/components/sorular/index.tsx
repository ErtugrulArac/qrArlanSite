"use client";

import React from "react";
import Faq from "@/components/sorular/faq";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="bg-white py-12">
      <div className="flex w-[90%] max-xl:w-[90%] m-auto justify-center items-center gap-12 max-lg:flex-col">
        {/* Sol Kısım */}
        <motion.div
          className="flex justify-center items-center flex-col max-xl:flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <img
            className="w-[30%] max-md:w-[60%]"
            src="soruisareti.webp"
            alt="qr menü soru cevap"
            draggable={false}
          />
          <p className="text-4xl max-md:text-3xl max-lg:w-[90%] font-fontum font-black w-[40%] text-center tracking-wider max-md:w-full mt-6">
            Sıkça Sorulan Sorular (SSS)
          </p>
        </motion.div>

        {/* Sağ Kısım */}
        <motion.div
          className="w-[50%] max-lg:w-[95%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
          variants={fadeUp}
        >
          <Faq />
        </motion.div>
      </div>
    </div>
  );
}
