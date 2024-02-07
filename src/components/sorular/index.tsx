"use client";

import Faq from "@/components/sorular/faq";


export default function Home() {
  return (
    <div className="bg-white py-12">
      <div className="flex w-[90%] max-xl:w-[90%] m-auto justify-center items-center gap-12 max-lg:flex-col ">
        <div className="flex justify-center items-center flex-col max-xl:flex-1">
          <img className="w-[30%] max-md:w-[60%]" src="soruisareti.png" alt="" />
          <p className="text-4xl max-md:text-3xl max-lg:w-[90%] font-fontum font-black w-[40%] text-center tracking-wider max-md:w-full">Sıkça Sorulan Sorular (SSS)</p>
        </div >
        <div className="w-[50%] max-lg:w-[95%]">
          <Faq />
        </div>
      </div>
    </div>
  );
}