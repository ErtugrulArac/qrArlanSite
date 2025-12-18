"use client";

import React from "react";
import Email from "@/components/footer/email";
import Son from "@/components/footer/son";

const Footer = () => {
  return (
    <footer className="relative text-white bg-gradient-to-br from-slate-950 via-black to-slate-950 border-t border-slate-800/50">
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Email />
        <div className="my-8 max-w-6xl mx-auto border-t border-slate-800/50"></div>
        <Son />
      </div>
    </footer>
  );
};

export default Footer;
