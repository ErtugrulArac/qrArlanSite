import React from 'react'

const img = () => {
    return (

        <div className='flex flex-col mt-24 max-lg:mt-0 max-md:mt-10 mb-28 max-md:mb-0 flex-1 '>
            <h2 className='leading-normal text-6xl max-md:text-3xl max-lg:w-[70%] max-xl:w-[90%] max-md:w-full w-[40%]'>Her zaman & <b>Her yerde</b></h2>
            <div className='h-[4px] w-20 bg-[#00af74] rounded-xl mt-3'></div>
            <p className='w-[50%] max-lg:w-[70%] max-md:w-[98%] max-md:text-sm mt-7'>Restoranınızın benzersiz lezzetlerini ve özel menülerini en iyi şekilde tanıtmak için özel QR menülerimizle tanışın! Restoranınızın tarzına, menü çeşitliliğine ve müşteri ihtiyaçlarına göre esneklik sağlayan QR menü tasarımımız, her restorana uyum sağlar. </p>

            <a className='w-max px-7 py-2 rounded-xl font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg mt-3 max-md:mt-8' href="">hemen şimdi sahip ol</a>
            <p className='w-[90%] text-xs text-[#00af74] mt-5 max-md:mt-2 max-md:ml-2  '>
                Nasıl qr menu sahibi olabilirim?
            </p>
        </div>

    )
}

export default img