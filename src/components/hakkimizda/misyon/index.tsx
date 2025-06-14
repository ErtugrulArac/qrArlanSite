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
      className="w-[65%] max-md:w-[95%] m-auto max-lg:w-[85%] max-xl:w-[80%] flex flex-col gap-20 max-md:gap-10 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <motion.p
        className="text-white mt-10 font-fontpopins font-semibold text-lg w-[55%] max-xl:w-full max-lg:w-full max-md:opacity-90 max-md:text-sm"
        variants={fadeUp}
      >
        Arlan Medya olarak, kısa süre içinde Erzurum'un önde gelen medya şirketlerinden biri haline geldik. Müşterilerimize sunduğumuz yenilikçi çözümler ve profesyonel hizmetlerimiz sayesinde işletmelerinin dijital dünyada başarılı olmalarına katkıda bulunduk.
      </motion.p>
      <Sayac />
    </motion.div>
  );
};

export default Index;
