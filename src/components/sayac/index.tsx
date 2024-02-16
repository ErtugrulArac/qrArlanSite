"use client"
import React from 'react'
import Yantaraf from './yantaraf'

const index = () => {
    return (
        <div className='flex justify-center items-center mt-32 gap-20  max-lg:flex-col max-md:mb-10 mb-16'>
            <div className='text-white flex flex-col gap-5'>
                <h2 className='text-5xl font-fontpopins font-bold w-[600px] max-xl:text-4xl max-xl:w-[400px] max-md:w-[90%] max-md:m-auto max-md:text-2xl'>Bir Qr Menüye Neden İhtiyacınız Var?</h2>
                <p className='text-lg w-[600px] opacity-70 mt-8 max-xl:text-base max-xl:w-[400px] max-md:w-[90%] max-md:m-auto max-md:text-sm  '>
                    Sayısal verileri inceledik ve Erzurum'daki işletmelerimiz, QR kodlu menülerle hem maliyet tasarrufu sağlayabiliyor hem de daha fazla gelir elde edebiliyor.
                </p>
            </div>
            <Yantaraf />
        </div>
    )
}

export default index