import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const son = () => {
    return (
        <div className='flex justify-around items-center max-md:mb-4  mt-12'>
            <img className='w-24 max-md:w-8' src="logobeyaz.png" alt="" />
            <p className='max-md:text-xs'>copyright © 2021 Tüm Hakları Saklıdır.</p>
            <div className='flex max-md:gap-1  items-center justify-center gap-6'>
                <a className='border p-2  rounded-full' href="">
                    <FaFacebookF />
                </a>
                <a className='border p-2 rounded-full' href="">
                    <FaLinkedinIn />
                </a>
                <a className='border p-2 rounded-full' href="">
                    <FaInstagram />
                </a>
            </div>
        </div>
    )
}

export default son