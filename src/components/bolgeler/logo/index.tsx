"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { logolar } from "./logolar";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { motion } from "framer-motion";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: -40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function CarouselSpacing() {
  return (
    <div className="relative flex justify-center items-center w-full bg-white py-24 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
        className="relative z-10 w-full max-w-[90%] max-sm:w-[90%] max-lg:w-[80%]"
      >
        <CarouselContent
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="-ml-1 flex gap-6 justify-center"
        >
          {logolar.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-[70%] md:basis-[35%] lg:basis-[20%] max-sm:basis-[80%]"
            >
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className="p-5 cursor-pointer rounded-2xl bg-white shadow-lg flex justify-center items-center"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-[140px] md:max-w-[160px] lg:max-w-[180px] h-auto"
                  draggable={false}
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
