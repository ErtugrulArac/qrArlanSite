import React from "react";
import { motion } from "framer-motion";

const Orta = () => {
  return (
    <div className="max-md:w-[80%] mx-auto">
      <div className="flex flex-col mt-32 max-md:mt-10 mb-28 max-md:mb-0">
        <p className="leading-normal text-5xl">
          <b>Özellikler</b> Avantajlar
        </p>
        <div className="h-[4px] w-20 bg-[#00af74] rounded-xl mt-3"></div>
        <p className="w-[80%] mt-7">
          İşletmenizde Arlan Medya Qr Menu sistemlerimizi kullanmanız için{" "}
          <b>5</b> neden.
        </p>
        <ul className="flex flex-col gap-3 mt-7">
          <li className="flex items-center gap-2 ">
            <img className="size-6" src="verified.svg" alt="qr menü erzurum" />{" "}
            <p className="text-xl font-semibold tracking-wide">
              5 farklı qr kod teması.
            </p>
          </li>
          <li className="flex items-center gap-2 ">
            <img className="size-6" src="verified.svg" alt="qr menü erzurum" />{" "}
            <p className="text-xl font-semibold tracking-wide ">
              Hızlı ve pratik kurulur.
            </p>
          </li>
          <li className="flex items-center gap-2 ">
            <img className="size-6" src="verified.svg" alt="qr menü erzurum" />{" "}
            <p className="text-xl font-semibold tracking-wide ">
              Sipariş sürecini hızlandırır.
            </p>
          </li>
          <li className="flex items-center gap-2 ">
            <img className="size-6" src="verified.svg" alt="qr menü erzurum" />{" "}
            <p className="text-xl font-semibold tracking-wide ">
              Tek seferlik ödeme.
            </p>
          </li>
          <li className="flex items-center gap-2 ">
            <img className="size-6" src="verified.svg" alt="qr menü erzurum" />{" "}
            <p className="text-xl font-semibold tracking-wide ">
              Müşteri sağlığını korur.
            </p>
          </li>
        </ul>

        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-max px-7 py-2 rounded-xl font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg mt-3 inline-block"
          title="Arlan Medya İletişim"
          href="/iletisim"
        >
          bilgi alın
        </motion.a>

        <p className="w-[70%] max-md:w-full text-xs text-[#00af74] mt-5">
          Daha birçok qr menü özelliklerinden ve avantajlarından yararlanarak işletmenizi öne çıkarmak için iletişime geçin.
        </p>
      </div>
    </div>
  );
};

export default Orta;
