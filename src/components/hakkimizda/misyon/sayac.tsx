"use client"
import React, { use } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const yantaraf = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Sadece bir kez tetikle
    });
    return (
        <div className='text-white flex items-center justify-around gap-10 max-lg:flex-wrap' ref={ref}>

                <p className='text-8xl  max-md:text-5xl font-black flex flex-col gap-5 text-center' >{inView && <CountUp  suffix='+' duration={4} end={100} />} <span className='text-sm font-fontpopins font-semibold'>Tamamlanan proje</span></p>
                <div className='w-0.5 h-28 opacity-80 bg-white max-lg:hidden'>

                </div>
                <p className='text-8xl  max-md:text-5xl font-black flex flex-col gap-5 text-center' >{inView && <CountUp  suffix='+' duration={4} end={20} />} <span className='text-sm font-fontpopins font-semibold'>Marka</span></p>
                <div className='w-0.5 h-28 opacity-80 bg-white max-lg:hidden'>

                </div> <p className='text-8xl  max-md:text-5xl font-black flex flex-col gap-5 text-center' >{inView && <CountUp  suffix='B' duration={4} end={14} />} <span className='text-sm font-fontpopins font-semibold'>Tıklanma</span></p>
                <div className='w-0.5 h-28 opacity-80 bg-white max-lg:hidden'>

                </div> <p className='text-8xl  max-md:text-5xl font-black flex flex-col gap-5 text-center' >{inView && <CountUp  suffix='kg' duration={4} end={7} separator=',' />} <span className='text-sm font-fontpopins font-semibold'>Aylık kahve</span></p>
                
        </div>
    )
}

export default yantaraf