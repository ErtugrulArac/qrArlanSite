import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Arlan Medya - Erzurum Qr Menu",
    description: "Arlan Medya, Erzurumdaki işletmeler için tamamen modern şık qr menü çözümleri sunar.",
  };

const layout =({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default layout