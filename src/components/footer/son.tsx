"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 0.7,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Son = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-center max-md:mb-4 py-8 gap-6 max-w-6xl mx-auto px-4 sm:px-6"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        title="Arlan Medya QR Menü Sistemleri"
        href="/"
        className="cursor-pointer hover:opacity-80 transition-opacity"
        variants={item}
      >
        <img
          className="w-28 max-md:w-24 max-md:block"
          src="logobeyaz.webp"
          alt="Arlan QR Menü Sistemleri"
        />
      </motion.a>

      <motion.p
        className="max-md:text-xs text-center md:text-left text-gray-400 text-sm"
        variants={item}
      >
        <span className="text-gray-300">© 2021-2025</span>{" "}
        <Link
          target="_blank"
          title="Arlan Medya"
          rel="nofollow"
          href="https://www.arlanmedya.com/"
          className="font-semibold text-white hover:text-purple-400 transition-colors"
        >
          Arlan Medya
        </Link>{" "}
        <span className="text-gray-300">Tüm Hakları Saklıdır.</span>
      </motion.p>

      <motion.div
        className="flex items-center justify-center gap-4"
        variants={item}
      >
        <a
          title="Arlan Medya Facebook"
          className="bg-gradient-to-br from-blue-600/20 to-blue-500/20 border border-blue-500/30 p-3 rounded-full hover:from-blue-600/40 hover:to-blue-500/40 hover:border-blue-500/60 transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="nofollow"
          href="https://www.facebook.com/profile.php?id=61552451652567&paipv=0&eav=Afazva3lQXsO8wlU165om_7H6NcrVX-jTE6xkmllfgDo-svhTgWjynqU3FpaGMYRFdo"
        >
          <FaFacebookF className="text-blue-400" />
        </a>
        <a
          title="Arlan Medya LinkedIn"
          className="bg-gradient-to-br from-blue-700/20 to-blue-600/20 border border-blue-500/30 p-3 rounded-full hover:from-blue-700/40 hover:to-blue-600/40 hover:border-blue-500/60 transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="nofollow"
          href="https://www.linkedin.com/company/arlan-medya"
        >
          <FaLinkedinIn className="text-blue-300" />
        </a>
        <a
          title="Arlan Medya Instagram"
          className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-500/30 p-3 rounded-full hover:from-pink-600/40 hover:to-purple-600/40 hover:border-pink-500/60 transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="nofollow"
          href="https://www.instagram.com/arlanmedya/"
        >
          <FaInstagram className="text-pink-400" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Son;
