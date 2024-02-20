import React from 'react'
import Right from './referans'


const index = () => {
    return (
        <div className='bg-white text-black max-md:py-20 py-16'>
          <div className='xl:w-[66%] flex justify-between items-center max-lg:flex-col max-lg:w-[90%] max-xl:w-[90%]  m-auto max-lg:gap-14'>
            <img className='w-[40%] max-md:w-[100%]' src="referanslar.webp" alt="qr menu referanslar" />
            <Right />
          </div>
        </div>
    )
}

export default index