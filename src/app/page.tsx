import Image from "next/image";
import Navbar from "@/components/navbar"
import Main from "@/components/main"
import Ozellik from "@/components/featcure/index"
import Koksal from "@/components/koksalbaba/index"
import Sayac from "@/components/sayac/index"
import Mockup from "@/components/mockup/index"
import Sorular from "@/components/sorular/index"
import Arka from "@/components/arkaplan/index"
import Referans from "@/components/referanslar/index"
import Yorumlar from "@/components/yorumlar/index"
import QRMenuShowcase from "@/components/demo/showcase"
import Head from "next/head";
import Referanslar from "@/components/bolgeler/logo"


export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <link rel="canonical" href="https://www.arlanqrmenu.com/" />
      </Head>
      <Main />
      <QRMenuShowcase />
      
      <Ozellik />
      <Koksal />
      <Sayac />
      <Mockup />
      <Sorular/>
      <Arka/>
      <Referans/>
      <Referanslar/>
      <Yorumlar/>
    </div>

  );
}
