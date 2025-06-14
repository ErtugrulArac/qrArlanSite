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
      className="flex flex-col md:flex-row justify-around items-center max-md:mb-4 mt-12 gap-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        title="Arlan Medya Qr menü sistemleri"
        href="/"
        className="cursor-pointer"
        variants={item}
      >
        <img
          className="w-24 max-md:hidden"
          src="logobeyaz.webp"
          alt="Arlan Qr Menü Sistemleri"
        />
      </motion.a>

      <motion.p
        className="max-md:text-xs text-center md:text-left"
        variants={item}
      >
        copyright{" "}
        <Link
          target="_blank"
          title="Arlan Medya"
          rel="nofollow"
          href="https://www.arlanmedya.com/"
          className="font-semibold hover:text-[#00af74] transition-colors"
        >
          Arlan Medya
        </Link>{" "}
        © 2021 Tüm Hakları Saklıdır.
      </motion.p>

      <motion.div
        className="flex max-md:hidden items-center justify-center gap-6"
        variants={item}
      >
        <a
          title="erzurum qr menü"
          className="border p-2 rounded-full hover:bg-[#00af74] hover:text-white transition-colors"
          target="_blank"
          rel="nofollow"
          href="https://www.facebook.com/profile.php?id=61552451652567&paipv=0&eav=Afazva3lQXsO8wlU165om_7H6NcrVX-jTE6xkmllfgDo-svhTgWjynqU3FpaGMYRFdo"
        >
          <FaFacebookF />
        </a>
        <a
          title="erzurum qr menü sistem"
          className="border p-2 rounded-full hover:bg-[#00af74] hover:text-white transition-colors"
          target="_blank"
          rel="nofollow"
          href="https://www.linkedin.com/company/arlan-medya"
        >
          <FaLinkedinIn />
        </a>
        <a
          title="erzurum qr menü sistemleri"
          className="border p-2 rounded-full hover:bg-[#00af74] hover:text-white transition-colors"
          target="_blank"
          rel="nofollow"
          href="https://www.instagram.com/arlanmedya/"
        >
          <FaInstagram />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Son;
