import React from 'react'

const right = () => {
    return (
        <div className='w-[44%] max-lg:w-[90%] gap-5 flex flex-col'>
            <p className='text-5xl w-[55%] max-xl:w-[100%] max-2xl:w-[90%] leading-[70px]'>Müşterilerimiz <b>bizde</b> değerli</p>
            <div className='bg-[#00af74] h-1 w-[30%]'></div>
            <p className='font-medium text-sm leading-[22px] w-[70%] max-md:w-full'>
                Müşterilerimiz, bizim için sadece iş yapmak için değil, aynı zamanda birlikte büyüdüğümüz, ortak bir vizyonda birleştiğimiz değerli ortaklardır. Onların memnuniyeti ve güveni her zaman önceliğimiz olmuştur. Her adımda yanlarında olmaktan büyük mutluluk duyuyoruz. </p>
            <a title='qr menü bilgi' className='w-max px-7 py-2 rounded-xl font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg max-md:text-base mt-3' href="/erzurum-qr-menu">Gözat</a>

        </div>
    )
}

export default right