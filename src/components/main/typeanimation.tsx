"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Button } from '../ui/button';
import Resim from './resim';

const typeanimation = () => {
    return (
        <div className='text-white flex flex-col justify-center items-center  gap-5'>
            <p className='w-[580px] max-md:w-[85%] text-4xl font-fontum font-black max-md:text-3xl  text-center'>saniyeler İçinde qr menünüz <br /> hazır!

                <span className='ml-3 text-3xl max-md:text-2xl'>
                    <TypeAnimation className='px-1 py-1 bg-zinc-700 rounded-lg'
                        sequence={[
                            'pratik',
                            1000,
                            'şık',
                            1000,
                            'yenilikçi',
                            1000,
                            'hızlı',
                            1000,
                            'masrafsız',
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </span>
            </p>

            <p className='font-fontum font-extrabold text-center text-2xl max-md:text-xl opacity-90'> işletmeniz için özel qr çözümleri</p>
            <div className='xl:hidden'>
                <Resim />
            </div>
            <a className='px-7 py-2 rounded-lg font-semibold bg-[#333333] text-white opacity-100 whitespace-nowrap' href="">menüler</a>
            <a className='px-7 py-2 rounded-lg font-semibold bg-[#514fe0] text-white whitespace-nowrap' href="">bilgi alın</a>


        </div>
    )
}

export default typeanimation