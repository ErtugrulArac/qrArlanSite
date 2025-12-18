"use client";

import React from "react";
import Yantaraf from "./yantaraf";

const Index = () => {
  return (
    <div className="flex justify-center items-center mt-32 gap-20 max-lg:flex-col max-md:mb-10 mb-16 px-4">
      <div className="text-white flex flex-col gap-5 max-w-[600px] max-lg:max-w-full">
        <h3 className="text-5xl font-fontpopins font-bold max-xl:text-4xl max-xl:w-[400px] max-md:w-full max-md:m-auto max-md:text-2xl">
          Bir Qr Menüye Neden Mi İhtiyacınız Var?
        </h3>
        <p className="text-lg opacity-70 mt-8 max-xl:text-base max-xl:w-[400px] max-md:w-full max-md:m-auto max-md:text-sm">
          Sayısal verileri inceledik ve Erzurum'daki işletmelerimiz, QR kodlu menülerle hem maliyet tasarrufu sağlayabiliyor hem de daha fazla gelir elde edebiliyor.
        </p>
      </div>
      <Yantaraf />
    </div>
  );
};

export default Index;
