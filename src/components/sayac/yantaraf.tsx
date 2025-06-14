"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // Her çocuk animasyonu 0.5 saniye arayla başlar
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1.5 } },
};

const stats = [
  {
    id: 1,
    prefix: "₺",
    value: 7900,
    description: "Yıllık ortalama ₺7900 basım maliyeti tasarrufu",
  },
  {
    id: 2,
    prefix: "%",
    value: 26,
    description:
      "Müşterilerin kendilerinin sipariş vermesine olanak tanıyarak masa cirosunu %26 artırır",
  },
  {
    id: 3,
    prefix: "%",
    value: 17,
    description:
      "Qr Menü sayesinde siparişlerinizi %17 artırın ve daha fazla gelir elde edin",
  },
];

const Yantaraf = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-8 max-w-md w-full"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {stats.map(({ id, prefix, value, description }) => (
        <motion.div
          key={id}
          className="bg-[#121212] rounded-xl p-6 text-center shadow-lg"
          variants={fadeInUp}
        >
          <p className="text-4xl font-extrabold text-green-500">
            {inView && <CountUp prefix={prefix} end={value} duration={5} />}
          </p>
          <p className="mt-3 text-white opacity-80">{description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Yantaraf;
