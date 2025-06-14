"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { ease: "easeOut", duration: 0.8 } 
  },
};

const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeInOut" },
};

const Index = () => {
  return (
    <motion.div 
      id="inceleyin"
      className="scroll-mt-[100px] max-w-[1200px] w-full px-4 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <motion.div 
        className="flex-1 min-w-[280px]"
        variants={fadeInUp}
      >
        <h2 className="text-white font-fontpopins text-4xl font-extrabold mb-6 max-lg:text-3xl max-md:text-2xl">
          İşletmenize Özel <strong>Qr Menü</strong> Oluşturmanın Adımları
        </h2>
        <ul className="flex flex-col gap-4 text-white text-lg max-md:text-base">
          {[
            "İşletmenize en uygun qr menu temasını seçin.",
            "Seçtiğiniz qr teması ile birlikte kolayca bizle iletişime geçin.",
            "Qr menü için gerekli işletme bilgilerini iletin.",
            "Qr menü entegrasyonu için menünüzü iletin.",
            "Qr kod tasarımını seçtikten sonra her şey hazır.",
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-3">
              <img
                className="w-6 h-6 max-md:w-5 max-md:h-5"
                src="koksal.svg"
                alt="qr menü ikon"
              />
              <span className="opacity-80">{text}</span>
            </li>
          ))}
        </ul>
        <motion.a
          whileHover={buttonHover}
          whileTap={{ scale: 0.95 }}
          title="qr menü bilgi"
          className="inline-block mt-6 px-8 py-3 rounded-xl font-semibold bg-[#8b38cb] text-white whitespace-nowrap text-lg max-md:text-base"
          href="/iletisim"
        >
          şimdi bilgi alın
        </motion.a>
      </motion.div>

      <motion.div
        className="flex-1 min-w-[280px] flex justify-center"
        variants={fadeInUp}
      >
        <img
          className="rounded-md w-full max-w-[550px] object-cover"
          src="kucukkoksal.webp"
          alt="qr menü sistemleri"
        />
      </motion.div>
    </motion.div>
  );
};

export default Index;
