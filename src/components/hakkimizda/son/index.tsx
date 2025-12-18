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
    <div className="py-20 max-md:py-12">
      {/* What We Do Section */}
      <motion.div
        className="w-[90%] max-w-6xl mx-auto flex flex-col gap-10 md:gap-12 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Ne yapıyoruz?
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded"></div>
        </div>

        <motion.div
          className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 md:p-8 border border-purple-500/30 hover:border-purple-500/70 transition"
          variants={fadeUp}
        >
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            Arlan Medya olarak, müşterilerimize çeşitli dijital pazarlama hizmetleri sunuyoruz. Bu hizmetler arasında web tasarımı, sosyal medya yönetimi, dijital reklam kampanyaları, içerik pazarlaması ve SEO (Arama Motoru Optimizasyonu) stratejileri gibi alanlarda uzmanlık bulunmaktadır. Müşterilerimizin ihtiyaçlarına göre özelleştirilmiş çözümler sunarak, işletmelerinin dijital varlıklarını güçlendirmeye ve çevrimiçi başarılarını artırmaya odaklanıyoruz. Müşteri memnuniyetini ve başarısını en üst düzeyde tutarak, her zaman kaliteli ve etkili hizmetler sunmaya çalışıyoruz.
          </p>
        </motion.div>

        <motion.div
          className="relative group"
          variants={fadeUp}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <img
            className="relative w-full rounded-3xl shadow-2xl object-cover"
            src="hakmock.webp"
            alt="qr mockup"
          />
        </motion.div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="w-[90%] max-w-6xl mx-auto flex flex-col gap-8 md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Neden Bizi Seçmelisiniz?
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 md:p-8 border border-indigo-500/30 hover:border-indigo-500/70 transition"
            variants={fadeUp}
          >
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Arlan Medya olarak, müşterilerimize sunduğumuz özelleştirilmiş dijital pazarlama çözümleriyle işletmelerinin çevrimiçi varlığını güçlendiriyoruz. Deneyimli ve uzman ekibimiz, her müşterinin benzersiz ihtiyaçlarına uygun stratejiler geliştirerek, onların dijital hedeflerine ulaşmalarına yardımcı oluyor. Müşteri memnuniyetini her zaman öncelik olarak belirleyerek, etkili ve sonuç odaklı çalışmalarımızla sektörde fark oluşturuyoruz!
            </p>
          </motion.div>
          
          <motion.div
            className="bg-gradient-to-br from-indigo-800/60 to-slate-900/60 rounded-xl p-6 md:p-8 border border-purple-500/30 hover:border-purple-500/70 transition"
            variants={fadeUp}
          >
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              Müşterilerimiz için en iyi sonuçları elde etmek adına sürekli olarak kendimizi yeniliyor ve geliştiriyoruz. Size özel çözümler sunmak ve işletmenizi çevrimiçi başarıya taşımak için Arlan Medya'yı tercih etmeniz, dijital hedeflerinizi gerçekleştirmeniz için en doğru adım olacaktır.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
