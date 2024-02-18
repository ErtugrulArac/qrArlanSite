import React from 'react'

const email = () => {
    return (
        <div className='flex flex-col max-md:w-[85%] m-auto items-center justify-center text-center gap-5 max-md:gap-4 mt-14 max-md:mt-9'>
            <h6 className='text-5xl max-md:text-2xl font-passion'>Arlan Medya QR Menü Sistemleri</h6>
            <p className='max-md:text-xs'>Hızlı, hijyenik, pratik: Arlan Medya QR Menüleri ile işletmenizin müşterilerine lezzeti keşfettirin!</p>
            <div className='flex gap-16 max-md:mt-5 max-md:gap-8'>
                <a title='Arlan Medya'  className='bg-[#131313] py-1 w-36 flex items-center gap-3 rounded-xl text-center justify-center' href="/hakkimizda">
                    <img className='size-5' src="göz.svg" alt="Qr menü site" />Hakkımızda</a>
                <a title='Arlan Medya' className='bg-[#131313] py-1 w-36 flex items-center gap-3 rounded-xl text-center justify-center' href="/iletisim">
                    <img className='size-5' src="el.svg" alt="Cafe qr menü" />İletişim</a>
            </div>
        </div>
    )
}

export default email