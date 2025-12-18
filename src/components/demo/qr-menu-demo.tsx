"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Search, Star, QrCode } from "lucide-react";
import Image from "next/image";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  popular: boolean;
  spicy?: number;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Tenderloin Steak",
    description: "Premium cuts grilled to perfection with garlic butter",
    price: 45.99,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop",
    rating: 4.9,
    popular: true,
  },
  {
    id: 2,
    name: "Salmon Fillet",
    description: "Fresh Atlantic salmon with lemon herb sauce",
    price: 38.99,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop",
    rating: 4.8,
    popular: true,
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description: "Traditional Italian pizza with fresh basil and mozzarella",
    price: 16.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=500&fit=crop",
    rating: 4.7,
    popular: false,
  },
  {
    id: 4,
    name: "Spicy Thai Curry",
    description: "Aromatic Thai curry with coconut milk and vegetables",
    price: 22.99,
    category: "Asian",
    image: "https://images.unsplash.com/photo-1455521521206-cf6b5a0c3e6f?w=500&h=500&fit=crop",
    rating: 4.6,
    popular: false,
    spicy: 3,
  },
  {
    id: 5,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with parmesan and croutons",
    price: 12.99,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop",
    rating: 4.5,
    popular: false,
  },
  {
    id: 6,
    name: "Grilled Chicken Breast",
    description: "Herb-marinated chicken with seasonal vegetables",
    price: 28.99,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop",
    rating: 4.8,
    popular: true,
  },
  {
    id: 7,
    name: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with molten center",
    price: 8.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=500&fit=crop",
    rating: 4.9,
    popular: true,
  },
  {
    id: 8,
    name: "Tiramisu",
    description: "Classic Italian dessert with mascarpone and espresso",
    price: 7.99,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&h=500&fit=crop",
    rating: 4.7,
    popular: false,
  },
  {
    id: 9,
    name: "Espresso",
    description: "Rich and bold single shot espresso",
    price: 3.99,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=500&fit=crop",
    rating: 4.8,
    popular: true,
  },
  {
    id: 10,
    name: "Fresh Fruit Smoothie",
    description: "Blend of seasonal fruits and yogurt",
    price: 6.99,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1505252585461-04db1267ae5b?w=500&h=500&fit=crop",
    rating: 4.6,
    popular: false,
  },
];

interface CartItem extends MenuItem {
  quantity: number;
}

export default function QRMenuDemo() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showDetails, setShowDetails] = useState<MenuItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...Array.from(new Set(MENU_ITEMS.map((item) => item.category)))];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => prev.filter((i) => i.id !== itemId));
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity } : i))
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 pt-32 pb-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="text-center mb-12">
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{
              perspective: 1200,
            }}
            className="inline-block mb-4 bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl"
          >
            <QrCode className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            QR Menü <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Demo</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Restoranınızın dijital menüsünü bu modern arayüz ile deneyimleyin
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 cursor-pointer"
            >
              <QrCode className="w-5 h-5" />
              Hemen Başla
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold border border-slate-700 hover:border-orange-500 transition cursor-pointer"
            >
              Daha Fazla Bilgi
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* 3D Icon */}
            <div className="relative h-48 flex items-center justify-center perspective">
              <motion.div
                animate={{ rotateY: 360, rotateX: 10 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  perspective: 1200,
                  transformStyle: "preserve-3d",
                }}
                className="relative"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-orange-500/50">
                  <QrCode className="w-16 h-16 text-white drop-shadow-lg" />
                </div>
                {/* Glow effect */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl opacity-30 blur-xl"
                ></motion.div>
              </motion.div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Menü ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition"
              />
            </div>

            {/* Categories */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
              <h3 className="text-white font-semibold mb-4">Kategoriler</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                        : "text-gray-300 hover:bg-slate-700"
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Cart Summary */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowCart(true)}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 relative group"
            >
              <ShoppingCart className="w-5 h-5" />
              Sepet
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-yellow-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>
          </motion.div>

          {/* Menu Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-3"
          >
            {filteredItems.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">Aradığınız ürün bulunamadı.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence>
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="group relative"
                    >
                      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500 transition duration-300 h-full flex flex-col"
                      >
                        {/* Image Container */}
                        <div className="relative h-48 overflow-hidden bg-slate-900">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-110 transition duration-500"
                          />
                          {item.popular && (
                            <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                              <Star className="w-4 h-4 fill-current" />
                              Popüler
                            </div>
                          )}
                          {item.spicy && (
                            <div className="absolute bottom-3 right-3 flex gap-1">
                              {Array(item.spicy).fill(0).map((_, i) => (
                                <span key={i} className="text-2xl">🌶️</span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4 flex flex-col">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-gray-300 text-sm mb-4 flex-1">{item.description}</p>

                          {/* Rating and Price */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-yellow-400 font-semibold text-sm">{item.rating}</span>
                            </div>
                            <span className="text-2xl font-bold text-orange-500">${item.price.toFixed(2)}</span>
                          </div>

                          {/* Buttons */}
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => setShowDetails(item)}
                              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg transition font-medium"
                            >
                              Detay
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => addToCart(item)}
                              className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2 rounded-lg transition font-medium"
                            >
                              Ekle
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Cart Modal */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800 rounded-2xl max-w-md w-full max-h-96 flex flex-col border border-slate-700"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <h2 className="text-2xl font-bold text-white">Sepet</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">Sepetiniz boş</p>
                ) : (
                  cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between bg-slate-700/50 p-3 rounded-lg"
                    >
                      <div className="flex-1">
                        <p className="text-white font-semibold text-sm">{item.name}</p>
                        <p className="text-gray-400 text-xs">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-slate-600 hover:bg-slate-500 text-white w-6 h-6 rounded flex items-center justify-center text-sm transition"
                        >
                          −
                        </button>
                        <span className="text-white font-semibold w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-slate-600 hover:bg-slate-500 text-white w-6 h-6 rounded flex items-center justify-center text-sm transition"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 ml-2"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="border-t border-slate-700 p-6 space-y-3">
                  <div className="flex items-center justify-between text-lg font-bold text-white">
                    <span>Toplam:</span>
                    <span className="text-orange-500">${cartTotal.toFixed(2)}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg font-semibold transition"
                  >
                    Sipariş Onayla
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetails(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800 rounded-2xl max-w-2xl w-full border border-slate-700 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-auto bg-slate-900">
                  <Image
                    src={showDetails.image}
                    alt={showDetails.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-2">{showDetails.name}</h2>
                        <p className="text-gray-400">{showDetails.category}</p>
                      </div>
                      <button
                        onClick={() => setShowDetails(null)}
                        className="text-gray-400 hover:text-white transition"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{showDetails.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Puan:</span>
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-white font-semibold">{showDetails.rating}/5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-orange-500">${showDetails.price.toFixed(2)}</div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        addToCart(showDetails);
                        setShowDetails(null);
                      }}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg font-semibold transition"
                    >
                      Sepete Ekle
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
