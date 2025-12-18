"use client";

import Navbar from "@/components/navbar";
import QRDemoLanding from "@/components/demo/qr-landing";

export default function DemoPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <QRDemoLanding />
    </div>
  );
}
