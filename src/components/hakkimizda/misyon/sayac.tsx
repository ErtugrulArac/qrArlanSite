"use client"
import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const yantaraf = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const StatItem = ({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) => (
        <motion.div
            className='flex flex-col gap-3 items-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <p className='text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent'>
                {inView && <CountUp duration={3} end={value} suffix={suffix} />}
            </p>
            <span className='text-sm md:text-base font-semibold text-gray-300'>{label}</span>
        </motion.div>
    );

    return (
        <div className='flex items-center justify-around gap-8 md:gap-12 flex-wrap w-full' ref={ref}>
            <StatItem value={100} label="Tamamlanan Proje" suffix="+" />
            
            <div className='hidden md:block w-0.5 h-32 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500 rounded opacity-50'></div>
            
            <StatItem value={20} label="Marka" suffix="+" />
            
            <div className='hidden md:block w-0.5 h-32 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500 rounded opacity-50'></div>
            
            <StatItem value={14} label="Tıklanma" suffix="B" />
            
            <div className='hidden md:block w-0.5 h-32 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500 rounded opacity-50'></div>
            
            <StatItem value={7} label="Aylık Kahve" suffix="kg" />
        </div>
    )
}

export default yantaraf