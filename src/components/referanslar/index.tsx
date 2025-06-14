"use client";

import React from "react";
import { motion } from "framer-motion";
import Right from "./referans";

const fadeIn = {
hidden: { opacity: 0, x: -30 },
visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Index = () => {
return (
<div className="bg-white text-black max-md:pt-12 md:py-16 max-md:pb-3">
<div className="xl:w-[66%] flex justify-between items-center max-lg:flex-col max-lg:w-[90%] max-xl:w-[90%] m-auto max-lg:gap-14">
<motion.img
className="w-[40%] max-md:w-[100%]"
src="referanslar.webp"
alt="qr menu referanslar"
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
variants={fadeIn}
/>
<Right />
</div>
</div>
);
};

export default Index;