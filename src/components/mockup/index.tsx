"use client";

import React from "react";
import { motion } from "framer-motion";
import Right from "./right";

const fadeInLeft = {
hidden: { opacity: 0, x: -40 },
visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const Index = () => {
return (
<div className="bg-white text-black max-md:py-8 py-16">
<div className="xl:w-[66%] flex justify-between items-center max-lg:flex-col max-lg:w-[90%] max-xl:w-[90%] m-auto">
<motion.img
className="w-[40%] max-md:w-[100%]"
src="a4yatay.webp"
alt="menu"
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.5 }}
variants={fadeInLeft}
/>
<Right />
</div>
</div>
);
};

export default Index;