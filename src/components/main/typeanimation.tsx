"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Button } from '../ui/button';
import Resim from './resim';

const typeanimation = () => {
    return (
        <div className='text-white flex flex-col justify-center items-center  gap-5'>
            <h2 className='w-[580px] max-md:w-[85%] text-5xl font-fontum font-black max-md:text-4xl  text-center'>saniyeler içinde qr menünüz <br /> hazır!

                <span className='ml-3 text-4xl max-md:text-3xl'>
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
            </h2>

            <p className='font-fontum font-extrabold text-center text-3xl max-md:text-xl opacity-90'> işletmeniz için özel qr çözümleri</p>
            <div className='xl:hidden'>
                <Resim />
            </div>
            <a className='px-7 py-2 rounded-lg font-semibold bg-[#333333] text-white opacity-100 whitespace-nowrap xl:text-lg' href="#inceleyin">inceleyin</a>
            <a className='px-7 py-2 rounded-lg font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg' href="/iletisim">bilgi alın</a>
        </div>
    )
}

export default typeanimation