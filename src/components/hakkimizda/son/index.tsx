"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const Index = () => {
  return (
    <div className="bg-white py-20">
      <motion.div
        className="w-[40%] max-lg:w-[80%] max-md:w-[95%] m-auto flex flex-col gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h3 className="text-4xl font-fontpopins font-bold">Ne yapıyoruz?</h3>
        <p className="w-full font-semibold ">
          Arlan Medya olarak, müşterilerimize çeşitli dijital pazarlama hizmetleri sunuyoruz. Bu hizmetler arasında web tasarımı, sosyal medya yönetimi, dijital reklam kampanyaları, içerik pazarlaması ve SEO (Arama Motoru Optimizasyonu) stratejileri gibi alanlarda uzmanlık bulunmaktadır. Müşterilerimizin ihtiyaçlarına göre özelleştirilmiş çözümler sunarak, işletmelerinin dijital varlıklarını güçlendirmeye ve çevrimiçi başarılarını artırmaya odaklanıyoruz. Müşteri memnuniyetini ve başarısını en üst düzeyde tutarak, her zaman kaliteli ve etkili hizmetler sunmaya çalışıyoruz.
        </p>
      </motion.div>

      <motion.div
        className="w-[40%] max-lg:w-[80%] max-md:w-[95%] m-auto mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <img
          className="rounded-3xl"
          src="hakmock.webp"
          alt="qr mockup"
        />
      </motion.div>

      <motion.div
        className="w-[40%] max-lg:w-[80%] max-md:w-[95%] flex flex-col gap-7 m-auto mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h3 className="text-4xl font-fontpopins font-bold">Neden Bizi Seçmelisiniz?</h3>

        <div className="flex gap-10 max-md:flex-col">
          <p className="text-sm font-semibold">
            Arlan Medya olarak, müşterilerimize sunduğumuz özelleştirilmiş dijital pazarlama çözümleriyle işletmelerinin çevrimiçi varlığını güçlendiriyoruz. Deneyimli ve uzman ekibimiz, her müşterinin benzersiz ihtiyaçlarına uygun stratejiler geliştirerek, onların dijital hedeflerine ulaşmalarına yardımcı oluyor. Müşteri memnuniyetini her zaman öncelik olarak belirleyerek, etkili ve sonuç odaklı çalışmalarımızla sektörde fark oluşturuyoruz!
          </p>
          <p className="text-sm font-semibold">
            Müşterilerimiz için en iyi sonuçları elde etmek adına sürekli olarak kendimizi yeniliyor ve geliştiriyoruz. Size özel çözümler sunmak ve işletmenizi çevrimiçi başarıya taşımak için Arlan Medya'yı tercih etmeniz, dijital hedeflerinizi gerçekleştirmeniz için en doğru adım olacaktır.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
