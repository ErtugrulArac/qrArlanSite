"use client";

import { motion } from "framer-motion";
import { QrCode, Zap, TrendingUp, BarChart3, Smartphone, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: Smartphone,
    title: "Mobil Optimized",
    description: "Tüm cihazlarda mükemmel görünüm ve deneyim",
  },
  {
    icon: Zap,
    title: "Hızlı Yükleme",
    description: "Saniyeler içinde menüye erişim ve sipariş",
  },
  {
    icon: BarChart3,
    title: "Analitik",
    description: "Müşteri davranışlarını gerçek zamanlı izleyin",
  },
  {
    icon: TrendingUp,
    title: "Satış Artırma",
    description: "Özel teklifler ve promosyonlarla satışlarınızı %40 artırın",
  },
  {
    icon: QrCode,
    title: "Basit QR Kodu",
    description: "Tek bir QR kodla tüm menüye erişim",
  },
  {
    icon: Shield,
    title: "Güvenli",
    description: "Verileriniz en güvenli şekilde korunur",
  },
];

export default function QRMenuShowcase() {
  const [showQRScan, setShowQRScan] = useState(false);
  const router = useRouter();

  const handleDemoClick = () => {
    setShowQRScan(true);
    setTimeout(() => {
      router.push("/demo");
    }, 2000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-xl"
          >
            <QrCode className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              İşletmenizi Dijitalleştirin
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Müşterilerinize en modern QR menü deneyimini sunun. Sipariş alımı, ödeme
            sistemi ve analitikler - hepsi tek platformda.
          </p>

          <motion.button
            onClick={handleDemoClick}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(249, 115, 22, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-600 hover:from-purple-700 hover:via-indigo-600 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 overflow-hidden mx-auto"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <span className="relative">Demoyu Hemen Deneyin</span>
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, borderColor: "rgb(249, 115, 22)" }}
                className="relative group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 transition duration-300"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block bg-gradient-to-br from-purple-500 to-indigo-500 p-4 rounded-xl mb-4"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Demo Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-slate-800/50 via-black to-slate-900 rounded-3xl p-12 border border-slate-700 overflow-hidden"
        >
          {/* Decorative blur */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Müşterileriniz Neler Deneyimleyecek?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Restoranınızın dijital menüsünü, sepet sistemini, sipariş takibini
                ve hatta ödemelerini bu modern arayüz üzerinden yapabilirler.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "✨ Ultra hızlı sayfa yükleme",
                  "🎯 Kategoriye göre menü filtreleme",
                  "🔍 Ürün arama ve filtreleme",
                  "🛒 Sepete ekleme ve yönetme",
                  "⭐ Ürün puanları ve müşteri yorumları",
                  "📱 Mobil-first responsive tasarım",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={handleDemoClick}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(249, 115, 22, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-600 hover:from-purple-700 hover:via-indigo-600 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative">Demoyu Hemen Deneyin</span>
              </motion.button>
            </div>

            {/* Right 3D Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-80 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotateY: 360, rotateX: 10 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  perspective: 1200,
                  transformStyle: "preserve-3d",
                }}
                className="relative"
              >
                <div className="w-48 h-48 bg-gradient-to-br from-purple-600 via-indigo-500 to-purple-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-600/50">
                  <QrCode className="w-24 h-24 text-white drop-shadow-lg" />
                </div>
                {/* Glow effect */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-3xl opacity-30 blur-2xl"
                ></motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-4xl font-bold text-white mb-4 text-center">
            Neden <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">QR Menü</span>?
          </h3>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg">
            Restoranınızı dijitalleştirerek müşteri memnuniyetini arttırın ve satışlarınızı maksimize edin
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Hızlı & Verimli",
                desc: "Müşteriler saniyeler içinde menüye erişir"
              },
              {
                icon: "💰",
                title: "Satış Artışı",
                description: "Ortalama %40'a kadar satış artışı"
              },
              {
                icon: "📊",
                title: "Analitikler",
                description: "Gerçek zamanlı satış raporları"
              },
              {
                icon: "🎯",
                title: "Hedefli Pazarlama",
                description: "Özel tekliflerle müşteri sadakati"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition duration-300">{benefit.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.desc || benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-purple-600/20 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/30 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hazır mısınız işletmenizi dijitalleştirmeye?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            QR menü sistemimiz ile müşteri deneyimini dönüştürün ve satışlarınızı artırın
          </p>
          <motion.button
            onClick={handleDemoClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-600 hover:from-purple-700 hover:via-indigo-600 hover:to-indigo-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mx-auto overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <span className="relative">Demoyu Hemen Başlat</span>
            <span className="relative">→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* QR Scan Modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showQRScan ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: showQRScan ? "auto" : "none" }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0, y: 50 }}
          animate={{ scale: showQRScan ? 1 : 0, y: showQRScan ? 0 : 50 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
          className="relative mx-4 sm:mx-0"
        >
          {/* White Card Container */}
          <div className="bg-gradient-to-br from-slate-50 via-purple-100 to-indigo-100 rounded-3xl sm:rounded-4xl px-6 sm:px-10 md:px-12 py-10 sm:py-16 flex flex-col items-center justify-center shadow-2xl shadow-purple-600/50 border border-purple-300/50">
            {/* Scanner Frame with Gradient Border */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden p-1 bg-gradient-to-br from-purple-400 via-indigo-400 to-cyan-400 mb-6 sm:mb-8 md:mb-10">
              <div className="relative w-full h-full bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 rounded-2xl overflow-hidden">
                {/* Animated scan line */}
                <motion.div
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent z-10"
                />

                {/* Corner brackets */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-5 sm:w-6 h-5 sm:h-6 border-t-2 border-l-2 border-purple-500"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-5 sm:w-6 h-5 sm:h-6 border-t-2 border-r-2 border-cyan-500"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-5 sm:w-6 h-5 sm:h-6 border-b-2 border-l-2 border-cyan-500"></div>
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-5 sm:w-6 h-5 sm:h-6 border-b-2 border-r-2 border-purple-500"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 p-3 opacity-25">
                  {Array(16)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="bg-gradient-to-br from-purple-300 to-cyan-300 rounded-sm" />
                    ))}
                </div>

                {/* QR Code Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{ rotate: { duration: 3, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                  >
                    <QrCode className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 text-purple-600 drop-shadow-2xl" strokeWidth={1.5} />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center px-2 sm:px-0"
            >
              <p className="text-purple-600 font-bold text-xl sm:text-2xl md:text-3xl">QR Kod Taranıyor...</p>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 sm:mt-3">Demo sayfasına yönlendiriliyorsunuz</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
