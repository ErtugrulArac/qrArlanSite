"use client";
import Spline from "@splinetool/react-spline";
import Faq from "@/components/sorular/faq";


export default function Home() {
  return (
    <div className="bg-white py-12">
      <div className="flex w-[80%] m-auto justify-center items-center gap-5 max-lg:flex-col ">
        <div className="w-[50%] h-[50%] max-lg:w-[350px] max-lg:h-[350px] ">
          <Spline className="w-[20%] h-[40%] " scene="https://prod.spline.design/NIpG15Cwol1z87LK/scene.splinecode" />
        </div >
        <div className="w-[50%] max-lg:w-[95%]">
          <Faq />
        </div>
      </div>
    </div>
  );
}