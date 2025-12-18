"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, QrCode, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const index = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [desktopMenuOpen, setDesktopMenuOpen] = useState(false)

    const navLinks = [
        { name: 'Anasayfa', href: '/', icon: '🏠' },
        { name: 'Hakkımızda', href: '/hakkimizda', icon: 'ℹ️' },
        { name: 'İletişim', href: '/iletisim', icon: '📧' },
        { name: 'Demo', href: '/demo', icon: '🎮' },
    ]

    const menuVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.9,
            y: -10
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: -10,
            transition: {
                duration: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.2 }
        }
    }

    return (
        <>
            {/* Animated Background Gradient */}
            <div className='fixed top-0 left-0 right-0 h-40 z-40 pointer-events-none'>
                <div className='absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-transparent'></div>
                <motion.div 
                    className='absolute -top-20 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl'
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                    className='absolute -top-20 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl'
                    animate={{
                        y: [0, 30, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                ></motion.div>
            </div>

            {/* Main Navbar */}
            <nav className='fixed top-0 w-full z-50 pt-4'>
                <div className='relative mx-4 md:mx-auto md:max-w-6xl'>
                    {/* Glassmorphism Container */}
                    <div className='relative backdrop-blur-2xl bg-gradient-to-r from-slate-900/40 via-slate-900/30 to-slate-900/40 border border-white/10 rounded-2xl shadow-2xl overflow-visible'>
                        {/* Animated Gradient Border */}
                        <motion.div 
                            className='absolute inset-0 rounded-2xl'
                            initial={{ backgroundPosition: '0% 0%' }}
                            animate={{ backgroundPosition: '100% 100%' }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                            style={{
                                background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2), rgba(34, 211, 238, 0.2))',
                                backgroundSize: '200% 200%',
                                opacity: 0.5,
                                pointerEvents: 'none'
                            }}
                        />

                        <div className='relative px-4 md:px-8 py-3.5 flex items-center justify-between'>
                            
                            {/* Logo */}
                            <Link href="/" className='relative group flex items-center gap-3 flex-shrink-0'>
                                <motion.div 
                                    className='relative'
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {/* Logo Glow */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500'></div>
                                    
                                    {/* Logo Background */}
                                    <div className='relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-2 border border-purple-500/50 group-hover:border-cyan-400/80 transition duration-300'>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                        >
                                            <QrCode className='w-6 h-6 text-cyan-400 group-hover:text-white transition duration-300' />
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <div className='flex flex-col gap-0.5'>
                                    <motion.h1 
                                        className='text-white font-black text-xs sm:text-sm md:text-base bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent'
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        Arlan Medya
                                    </motion.h1>
                                    <motion.p 
                                        className='text-[10px] sm:text-xs font-bold tracking-widest bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent opacity-80'
                                        whileHover={{ letterSpacing: '0.1em', opacity: 1 }}
                                    >
                                        QR MENU
                                    </motion.p>
                                </div>
                            </Link>

                            {/* Desktop Menu */}
                            <div className='hidden lg:block ml-auto'>
                                <div className='relative'>
                                    <button
                                        onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                                        type='button'
                                        className='px-5 py-2 text-white font-semibold text-sm uppercase tracking-wide border border-white/20 hover:border-white/40 rounded-lg transition duration-300 flex items-center gap-2'
                                    >
                                        Menü
                                        <motion.div
                                            animate={{ rotate: desktopMenuOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown size={16} />
                                        </motion.div>
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {desktopMenuOpen && (
                                            <motion.div
                                                variants={menuVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className='fixed left-0 right-0 top-24 w-full z-50'
                                            >
                                                <div className='mx-4 md:mx-auto md:max-w-6xl'>
                                                    <div className='relative backdrop-blur-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/50 border border-white/10 rounded-2xl shadow-2xl overflow-hidden'>
                                                        <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none'></div>

                                                        <div className='relative px-4 md:px-8 py-6'>
                                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                                                                {navLinks.map((link) => (
                                                                    <motion.div
                                                                        key={link.name}
                                                                        variants={itemVariants}
                                                                    >
                                                                        <Link 
                                                                            href={link.href}
                                                                            onClick={() => setDesktopMenuOpen(false)}
                                                                            className='block h-full'
                                                                        >
                                                                            <motion.div
                                                                                className='px-6 py-4 rounded-lg border border-white/10 hover:border-white/20 transition flex flex-col items-center gap-3 font-semibold text-white bg-white/[0.02] h-full'
                                                                                whileHover={{ 
                                                                                    y: -4,
                                                                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                                                                    boxShadow: '0 0 12px rgba(34, 211, 238, 0.2)',
                                                                                }}
                                                                                whileTap={{ scale: 0.98 }}
                                                                            >
                                                                                <span className='text-3xl'>{link.icon}</span>
                                                                                <span className='text-center'>{link.name}</span>
                                                                            </motion.div>
                                                                        </Link>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <motion.button 
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className='lg:hidden text-white p-2 rounded-lg hover:bg-purple-500/20 border border-transparent hover:border-purple-500/50 transition'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                                </motion.div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className='fixed top-20 left-4 right-4 z-40 lg:hidden'
                    >
                        <div className='bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden'>
                            <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none'></div>

                            <div className='relative px-4 py-6 space-y-3'>
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                    >
                                        <Link 
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className='block'
                                        >
                                            <motion.div
                                                className='px-4 py-3.5 rounded-xl border border-white/10 hover:border-white/20 transition flex items-center gap-3 font-semibold text-white bg-white/[0.02]'
                                                whileHover={{ 
                                                    x: 4,
                                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                                    boxShadow: '0 0 12px rgba(34, 211, 238, 0.2)',
                                                }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <span className='text-lg'>{link.icon}</span>
                                                <span>{link.name}</span>
                                            </motion.div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default index
