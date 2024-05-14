import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer/index"
import Wp from "@/components/wp"
import Script from 'next/script'

const meta = {
  title: 'Arlan Medya - Qr Menü',
  description: 'Arlan Medya, işletmelerin dijital dönüşümünde Qr menü çözümleri sunuyor. Qr menünüzle müşterilerinizin menülerinize temassız erişimini mümkün kılıyoruz.',
  cardImage: '/og.png',
  favicon: '/favicon.ico',
  url: "https://www.arlanqrmenu.com"
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    robots: 'index, follow',
    referrer: 'origin-when-cross-origin',
    authors: [{ name: 'arlanmedya', url: 'arlanmedya.com' }],
    creator: 'arlanmedya',
    publisher: 'Arlanmedya',
    icons: { icon: meta.favicon },
    metadataBase: new URL(meta.url),
    openGraph: {
      url: meta.url,
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage],
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Arlanmedya',
      creator: '@Arlanmedya',
      title: meta.title,
      description: meta.description,
      images: [meta.cardImage]
    }
  };
}

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
