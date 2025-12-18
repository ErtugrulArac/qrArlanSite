"use client";

import { motion } from "framer-motion";
import { QrCode, Smartphone, BarChart3, Users, Settings, TrendingUp, Zap, DollarSign, Globe } from "lucide-react";

export default function QRDemoLanding() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-black to-slate-900 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center pt-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-2xl"
          >
            <QrCode className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
            QR Menü Sistemi ile<br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              İşletmenizi Dijitalleştirin
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Müşteri memnuniyetini artırın, işletme verimliliğini maksimize edin ve satışlarınızı %40'a kadar arttırın.
            Binlerce restoran zaten QR menü sistemimize güvenmelidir.
          </p>
        </motion.div>

        {/* Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-8 sm:p-16 border border-purple-500/30 overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
              Demoyu <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Hemen Deneyin</span>
            </h2>
            
            <p className="text-lg text-gray-200 text-center mb-12 max-w-3xl mx-auto">
              QR Menü sistemimizin tüm güçlü özelliklerini keşfedin. Gerçek bir restoranın menü, sipariş ve ödeme sistemini test edin.
            </p>

            {/* Demo Info Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {/* Customer Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-600 hover:border-cyan-500/50 transition"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl">👥</span>
                  <span>Müşteri Deneyimi</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "QR kodu tarayan müşterinin göreceği menü arayüzü",
                    "Ürünleri kategoriye göre göz atma",
                    "Detaylı ürün bilgileri ve görselleri",
                    "Sepete ekleme ve sipariş yönetimi",
                    "Siparişi takip etme",
                    "Güvenli ödeme seçenekleri"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="flex items-start gap-2 sm:gap-3 text-gray-200 text-sm sm:text-base"
                    >
                      <span className="text-cyan-500 font-bold text-base sm:text-lg mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Admin Dashboard */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-600 hover:border-cyan-500/50 transition"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl">🔐</span>
                  <span>Admin Paneli</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Menüyü düzenle ve güncelle",
                    "Ürün fiyatlarını yönet",
                    "Gelen siparişleri izle",
                    "Günlük satış raporları",
                    "Müşteri yorumlarını yönet",
                    "Sistem ayarlarını kontrol et"
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="flex items-start gap-2 sm:gap-3 text-gray-200 text-sm sm:text-base"
                    >
                      <span className="text-cyan-500 font-bold text-base sm:text-lg mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {/* Demo Button */}
              <motion.a
                href="https://qr-menu-system-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(34, 211, 238, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 hover:from-cyan-600 hover:via-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all flex flex-col items-center justify-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <QrCode className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
                <span className="relative text-center">👤 Müşteri Tarafından Gör</span>
              </motion.a>

              {/* Admin Panel Button */}
              <motion.a
                href="https://qr-menu-system-five.vercel.app/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(34, 211, 238, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 border-2 border-cyan-500/50 hover:border-cyan-500 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all flex flex-col items-center justify-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🔧
                </motion.div>
                <span className="relative text-center">🏪 İşletmeci Paneli</span>
              </motion.a>
            </div>

            {/* Admin Panel Info Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 text-center"
            >
              <p className="text-gray-400 text-sm sm:text-base">
                <span className="font-semibold text-white">Admin Panel Şifresi:</span>{" "}
                <code className="bg-slate-800 text-cyan-400 px-3 py-1 rounded text-sm font-mono font-bold">admin123</code>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Nasıl QR Menü <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Sahibi Olunur?</span>
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg">
            Basit 4 adımda işletmenizi dijitalleştirin
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                icon: "📝",
                title: "İşletme Bilgileri",
                desc: "Adınız, adresiniz ve iletişim bilgilerinizi girin"
              },
              {
                step: 2,
                icon: "🍽️",
                title: "Menü Oluştur",
                desc: "Ürünlerinizi kategoriye göre ekleyin ve görselleri yükleyin"
              },
              {
                step: 3,
                icon: "📱",
                title: "QR Kodu Al",
                desc: "Otomatik olarak oluşturulan QR kodunuzu masalara yapıştırın"
              },
              {
                step: 4,
                icon: "🚀",
                title: "Canlı Yayına Al",
                desc: "Müşteriler QR kodu tarayarak siparişlerine başlayabilirler"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-purple-500/50 transition relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                  Adım {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advantages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Neden QR Menü <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Seçmelisiniz?</span>
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto text-lg">
            İşletmenizin verimliliğini arttıracak güçlü özellikler
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Garson Modülü",
                desc: "Garsonlarınız tablet üzerinden siparişleri almaya, yönetmeye ve müşteri notlarını görebilirler"
              },
              {
                icon: BarChart3,
                title: "Masa Yönetimi",
                desc: "Her masanın durumunu gerçek zamanlı olarak takip edin. Boş ve dolu masaları anında görün"
              },
              {
                icon: TrendingUp,
                title: "Sipariş Takibi",
                desc: "Tüm siparişleri merkezi panelden takip edin, hazırlanma durumunu ve teslim zamanını kontrol edin"
              },
              {
                icon: DollarSign,
                title: "Masa Kazancı",
                desc: "Her masa ne kadar kazandırdığını görmek. Hangi saatler en kazançlı olduğunu analiz edin"
              },
              {
                icon: Globe,
                title: "Çok Dilli Destek",
                desc: "Müşteri arayüzünü istediğiniz dilde sunun. Turist misafirleriniz kendi dillerinde sipariş verebilirler"
              },
              {
                icon: Zap,
                title: "Anlık Admin Bilgilendirme",
                desc: "Müşteri siparişi verdiğinde admin paneline anında düşer. Sipariş detaylarını hemen görebilirsiniz"
              },
              {
                icon: Settings,
                title: "Kolay Admin Paneli",
                desc: "Teknik bilgi gerektirmeyen, sezgisel arayüz. 5 dakikada menüyü güncelleyebilirsiniz"
              },
              {
                icon: Smartphone,
                title: "Mobil Optimized",
                desc: "Tüm cihazlarda mükemmel görünüm. Telefonunuzdan yönetebilirsiniz"
              },
              {
                icon: QrCode,
                title: "Sınırsız QR Kodlar",
                desc: "Kaç masanız varsa o kadar QR kodu oluşturun. Tüm kodlar aynı menüye yönlendirir"
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700 hover:border-cyan-500/50 transition group hover:bg-slate-700/40"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-cyan-500/30 text-center"
        >
          <p className="text-gray-200 mb-8 text-base sm:text-lg font-medium">
            Demoyu test etmek için hiçbir kaydın yok. Hemen başla!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
              href="/iletisim"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.4)" }}
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base cursor-pointer transition-all"
            >
              Teklif Al
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
