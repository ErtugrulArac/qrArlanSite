"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Vizyon = () => {
  return (
    <div className="bg-white">
      <motion.div
        className="w-[60%] max-md:w-[95%] m-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <h3 className="text-3xl font-fontpopins font-bold">Vizyonumuz</h3>
        <div className="flex max-lg:flex-col gap-36 max-md:gap-8 max-lg:gap-12 mt-10 max-md:mt-7">
          <p className="font-semibold max-md:text-sm max-md:opacity-70">
            Arlan Medya, 2021 yılında Erzurum'da kurulan bir yazılım-medya şirketidir.
            Amacımız, müşterilerimize dijital pazarlama, web tasarımı, sosyal medya yönetimi
            ve grafik tasarım gibi alanlarda yenilikçi çözümler sunarak işletmelerini dijital dünyada başarıya taşımaktır.
            Profesyonel ekibimiz, müşterilerimizin ihtiyaçlarına özel stratejiler geliştirir ve etkili sonuçlar elde etmelerine yardımcı olur.
            Arlan Medya olarak, müşterilerimizin başarısı için sürekli olarak kendimizi geliştiriyor ve en son teknolojileri takip ediyoruz.
          </p>
          <p className="font-semibold max-md:text-sm max-md:opacity-70 mb-20">
            Vizyonumuz, müşterilerimizin dijital dünyada ön plana çıkmasını sağlayarak işletmelerini büyütmelerine yardımcı olmaktır.
            Yenilikçi ve etkili çözümlerimizle müşterilerimizin dijital varlığını güçlendirerek, onların sektörde lider konuma gelmelerine katkıda bulunmak istiyoruz.
            Müşterilerimizin başarısı bizim başarımızdır ve bu doğrultuda kendimizi sürekli geliştirerek, en kaliteli hizmeti sunmayı hedefliyoruz.
            Müşterilerimizin ihtiyaçlarına özel çözümler üretmek ve onların memnuniyetini sağlamak, Arlan Medya'nın vizyonunun temelini oluşturur.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Vizyon;
