"use client";

import React from "react";
import { motion } from "framer-motion";
import Sayac from "@/components/hakkimizda/misyon/sayac";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Index = () => {
  return (
    <motion.div
      className="w-[90%] max-w-6xl mx-auto py-20 max-md:py-12 flex flex-col gap-16 md:gap-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Misyonumuz
        </h3>
        <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded"></div>
      </div>

      <motion.div
        className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 md:p-8 border border-purple-500/30 hover:border-purple-500/70 transition"
        variants={fadeUp}
      >
        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          Arlan Medya olarak, kısa süre içinde Erzurum'un önde gelen medya şirketlerinden biri haline geldik. Müşterilerimize sunduğumuz yenilikçi çözümler ve profesyonel hizmetlerimiz sayesinde işletmelerinin dijital dünyada başarılı olmalarına katkıda bulunduk.
        </p>
      </motion.div>
      <Sayac />
    </motion.div>
  );
};

export default Index;
