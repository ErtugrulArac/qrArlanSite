"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Vizyon = () => {
  return (
    <div className="py-20 max-md:py-12">
      <motion.div
        className="w-[90%] max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="flex flex-col gap-2 mb-12">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Vizyonumuz
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 md:p-8 border border-purple-500/30 hover:border-purple-500/70 transition"
            variants={fadeInUp}
          >
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Arlan Medya, 2021 yılında Erzurum'da kurulan bir yazılım-medya şirketidir.
              Amacımız, müşterilerimize dijital pazarlama, web tasarımı, sosyal medya yönetimi
              ve grafik tasarım gibi alanlarda yenilikçi çözümler sunarak işletmelerini dijital dünyada başarıya taşımaktır.
              Profesyonel ekibimiz, müşterilerimizin ihtiyaçlarına özel stratejiler geliştirir ve etkili sonuçlar elde etmelerine yardımcı olur.
              Arlan Medya olarak, müşterilerimizin başarısı için sürekli olarak kendimizi geliştiriyor ve en son teknolojileri takip ediyoruz.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-br from-indigo-800/60 to-slate-900/60 rounded-xl p-6 md:p-8 border border-indigo-500/30 hover:border-indigo-500/70 transition"
            variants={fadeInUp}
          >
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Vizyonumuz, müşterilerimizin dijital dünyada ön plana çıkmasını sağlayarak işletmelerini büyütmelerine yardımcı olmaktır.
              Yenilikçi ve etkili çözümlerimizle müşterilerimizin dijital varlığını güçlendirerek, onların sektörde lider konuma gelmelerine katkıda bulunmak istiyoruz.
              Müşterilerimizin başarısı bizim başarımızdır ve bu doğrultuda kendimizi sürekli geliştirerek, en kaliteli hizmeti sunmayı hedefliyoruz.
              Müşterilerimizin ihtiyaçlarına özel çözümler üretmek ve onların memnuniyetini sağlamak, Arlan Medya'nın vizyonunun temelini oluşturur.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Vizyon;
