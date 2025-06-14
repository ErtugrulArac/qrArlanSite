"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.3 } },
};

export default function Index() {
  return (
    <div className="foto bg-[#006341] flex justify-between max-md:flex-col max-md:items-center max-md:gap-10 max-md:px-6 py-10">
      {/* Sol Görsel */}
      <motion.img
        src="genel1.webp"
        alt="Qrmenü"
        className="max-md:hidden max-lg:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInScale}
      />

      {/* Orta Metin Kısmı */}
      <motion.div
        className="text-white w-full flex flex-col items-center justify-center text-center gap-14 max-md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h4 className="text-7xl mt-7 max-md:text-4xl">
          <b>Arlan Medya</b> qr menü
        </h4>
        <p className="text-sm max-md:w-[70%] max-md:text-[15px] font-semibold">
          İşletmenizi güzelleştirecek küçük maliyetli qr menüler
        </p>
        <p className="text-9xl font-black font-bebas">218</p>
        <p>+ kayıtlı işletme</p>
        <a
          className="w-max px-7 py-2 rounded-full font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg mt-3 shadow-lg mb-9"
          title="qr menu whatsapp"
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=905447824655&text=Merhabalar%2C%20Arlan%20Medya%20Qr%20sistemleri%20websitenizden%20yaz%C4%B1yorum."
        >
          şimdi ulaş
        </a>
      </motion.div>

      {/* Sağ Görsel */}
      <motion.img
        src="genel1.webp"
        alt="Qrmenü"
        className="max-md:hidden max-lg:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInScale}
      />
    </div>
  );
}
