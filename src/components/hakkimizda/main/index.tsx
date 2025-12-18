"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const About = () => {
  return (
    <section className="py-20 max-md:py-12">
      <div className="flex w-[90%] max-w-6xl mx-auto items-center justify-between max-lg:flex-col max-md:gap-8 max-lg:gap-12 gap-16">
        {/* Left Content */}
        <motion.div
          className="flex flex-col gap-6 max-lg:w-full flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Hakkımızda
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Arlan Medya olarak, Erzurum'daki ofisimizde 2021 yılından beri müşterilerimize hizmet vermekteyiz.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {[
              { number: "500+", label: "Memnun Müşteri" },
              { number: "3+", label: "Yıl Deneyim" },
              { number: "24/7", label: "Destek Hizmeti" },
              { number: "100%", label: "Müşteri Memnuniyeti" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-lg p-4 border border-purple-500/30"
              >
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 max-lg:w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <img
              className="relative w-full rounded-3xl shadow-2xl object-cover"
              src="arlan.gif"
              alt="Arlan Medya"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
