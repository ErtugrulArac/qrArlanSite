"use client";
<<<<<<< HEAD

=======
import Spline from "@splinetool/react-spline";
>>>>>>> ef979dc3f6703ef5f6d5ba2fc307a9aedfc35bba
import Faq from "@/components/sorular/faq";


export default function Home() {
  return (
    <div className="bg-white py-12">
<<<<<<< HEAD
      <div className="flex m-auto justify-center items-center gap-5 max-lg:flex-col ">
        <div className="flex justify-center items-center flex-col">
          <img className="w-[30%] max-md:w-[60%]" src="soruisareti.png" alt="" />
          <p className="text-4xl max-md:text-3xl max-lg:w-[90%] font-fontum font-black w-[40%] text-center tracking-wider max-md:w-full">Sıkça Sorulan Sorular (SSS)</p>
=======
      <div className="flex w-[80%] m-auto justify-center items-center gap-5 max-lg:flex-col ">
        <div className="w-[50%] h-[50%] max-lg:w-[350px] max-lg:h-[350px] ">
          <Spline className="w-[20%] h-[40%] " scene="https://prod.spline.design/NIpG15Cwol1z87LK/scene.splinecode" />
>>>>>>> ef979dc3f6703ef5f6d5ba2fc307a9aedfc35bba
        </div >
        <div className="w-[50%] max-lg:w-[95%]">
          <Faq />
        </div>
      </div>
    </div>
  );
}