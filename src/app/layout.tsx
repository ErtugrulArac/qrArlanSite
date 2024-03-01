import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer/index"
import Wp from "@/components/wp"
import Script from 'next/script'



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arlan Medya - Qr Menü ",
  description: "Arlan Medya, işletmelerin dijital dönüşümünde Qr menü çözümleri sunuyor. Qr menünüzle müşterilerinizin menülerinize temassız erişimini mümkün kılıyoruz.",
  authors:[{ name: 'Arlan Medya', url: 'https://www.arlanmedya.com/' }],
  publisher:"Arlan Medya"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="!scroll-smooth" lang="tr">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GK6W4YENV3"></Script>
        <Script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GK6W4YENV3');
          `}
        </Script>
      </head>
      <body className="bg-black">
        <main className="font-fontum bg-black">
        <Wp />
          <Navbar />
          {children}
          <Footer />
          </main>
           
      </body>
    </html>
  );
}
