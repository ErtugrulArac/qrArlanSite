import React, { use } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const yantaraf = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Sadece bir kez tetikle
    });
    return (
        <div ref={ref}>
            <div className='text-white text-center   '>
                <p className='font-extrabold font-fontum text-4xl text-[#8b38cb]'>{inView && <CountUp prefix='₺' duration={4} end={7900} />}</p>
                <p className='font-light opacity-70 mt-5 tracking-wider max-md:text-xs max-md:mb-4'>Yıllık ortalama ₺7900 basım maliyeti tasarrufu </p>
                <div className='h-[1px] w-[500px] bg-white mt-4 opacity-70 max-md:w-[98%] max-md:m-auto'></div>
            </div>
            <div className='text-white text-center mt-10    '>
                <p className='font-extrabold  font-fontum text-4xl text-[#8b38cb]'>{inView && <CountUp prefix='%' duration={4} end={26} />}</p>
                <p className='font-light opacity-70 mt-5 tracking-wider w-[500px] max-md:text-xs max-md:w-[300px]  max-md:mb-4'>Müşterilerin kendilerinin sipariş vermesine olanak tanıyarak masa cirosunu %26 artışı </p>
                <div className='h-[1px] w-[500px] bg-white mt-4 opacity-70 max-md:w-[98%] max-md:m-auto'></div>
            </div>
            <div className='text-white text-center mt-10   '>
                <p className='font-extrabold font-fontum text-4xl text-[#8b38cb]'>{inView && <CountUp prefix='%' duration={4} end={17} />}</p>
                <p className='font-light opacity-70 mt-5 tracking-wider w-[500px] max-md:text-xs max-md:w-[300px]  max-md:mb-4'>Qr Menü sayesinde siparişlerinizi %17 artırın ve daha fazla gelir elde edin </p>
                <div className='h-[1px] w-[500px] bg-white mt-4 opacity-70 max-md:w-[98%] max-md:m-auto '></div>
            </div>
        </div>
    )
}

export default yantaraf