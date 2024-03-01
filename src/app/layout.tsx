import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer/index"
import Wp from "@/components/wp"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arlan Medya - Qr Menü ",
  description: "Arlan Medya, işletmelerin dijital dönüşümünde QR menüleriyle etkili çözümler sunuyor. Müşterilerin menülere hızlı erişimini sağlayarak hijyenik ve modern bir deneyim sunuyoruz.",
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
