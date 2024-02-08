import React from 'react'

const index = () => {
    return (
        <div className='foto bg-[#006341] flex justify-between '>
            <img className='max-md:hidden max-lg:hidden' src="genel1.png" alt="" />
            <div className=' text-white w-full flex flex-col items-center justify-center text-center gap-14 max-md:gap-8  '>
                <h2 className='text-7xl mt-7 max-md:text-4xl'><b>QR code</b> menü</h2>
                <p className='text-sm max-md:w-[70%] max-md:text-[15px] font-semibold'>İşletmenizi güzelleştirecek küçük maliyetli qr menüler</p>
                <p className='text-9xl font-black font-bebas'>218</p>
                <p>+ kayıtlı işletme</p>
                <a className='w-max px-7 py-2 rounded-full font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg mt-3 shadow-lg mb-9' href="">şimdi ulaş</a>
            </div>
            <img className='max-md:hidden max-lg:hidden' src="genel1.png" alt="" />
        </div>
    )
}

export default index