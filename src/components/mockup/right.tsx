"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInRight = {
hidden: { opacity: 0, x: 40 },
visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut", delay: 0.5 } },
};

const Right = () => {
return (
<motion.div
className="w-[44%] max-lg:w-[90%] gap-5 flex flex-col"
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
variants={fadeInRight}
>
<p className="text-5xl w-[55%] max-xl:w-[100%] max-2xl:w-[90%] leading-[70px]  max-md:w-full">
Her zaman & <b>Her yerde</b>
</p>
<div className="bg-[#00af74] h-1 w-[30%] max-md:w-[50%]"></div>
<p className="font-medium text-sm leading-[22px] w-[70%] max-md:w-full ">
İşletmenizin benzersiz lezzetlerini ve özel menülerini en iyi şekilde tanıtmak için özel QR menülerimizle tanışın! İşletmelerinizin tarzına, menü çeşitliliğine ve müşteri ihtiyaçlarına göre esneklik sağlayan QR menü tasarımımız, her işletmeye uyum sağlar.
</p>
<a title="qr menü info" className="w-max px-7 py-2 rounded-full font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg mt-3" href="/hakkimizda" >
hemen şimdi bilgi alın
</a>
<p className="w-[90%] text-xs text-[#00af74] mt-5 ml-5 ">
Arlan Medya İşletmelere Özel Qr Menü Sistemleri
</p>
</motion.div>
);
};

export default Right;