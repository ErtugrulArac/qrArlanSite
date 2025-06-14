import React from "react";
import Image from "next/image";

const Gif = () => {
  return (
    <div className="w-96 h-96 mt-16 max-md:mt-0 max-md:w-full max-md:h-80 max-md:mb-0 mb-20 rounded-xl overflow-hidden shadow-lg">
      <Image
        className="object-cover w-full h-full"
        src="/site.gif"
        alt="qr menü sistemleri"
        width={384}
        height={384}
        priority
      />
    </div>
  );
};

export default Gif;
