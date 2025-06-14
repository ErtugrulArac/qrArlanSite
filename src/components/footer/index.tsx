"use client";

import React from "react";
import Email from "@/components/footer/email";
import Son from "@/components/footer/son";

const Footer = () => {
  return (
    <footer className="text-white bg-black py-10">
      <Email />
      <Son />
    </footer>
  );
};

export default Footer;
