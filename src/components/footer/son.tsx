import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link'

const son = () => {
    return (
        <div className='flex justify-around items-center max-md:mb-4  mt-12'>
            <a title='Arlan Medya Qr menü sistemleri' href="/"> <img className='w-24 max-md:hidden' src="logobeyaz.png" alt="Arlan Qr Menü Sistemleri" /></a>
            <p className='max-md:text-xs'>copyright <Link target='_blank' title='Arlan Medya'   href="https://www.arlanmedya.com/"><b>Arlan Medya</b></Link>  © 2021 Tüm Hakları Saklıdır.</p>
            <div className='flex max-md:hidden  items-center justify-center gap-6'>
                <a title='erzurum qr menü' className='border p-2  rounded-full ' target='_blank' rel="nofollow"  href="https://www.facebook.com/profile.php?id=61552451652567&paipv=0&eav=Afazva3lQXsO8wlU165om_7H6NcrVX-jTE6xkmllfgDo-svhTgWjynqU3FpaGMYRFdo">
                    <FaFacebookF />
                </a>
                <a title='erzurum qr menü sistem' className='border p-2 rounded-full' target='_blank' rel="nofollow"  href="https://www.linkedin.com/company/arlan-medya">
                    <FaLinkedinIn />
                </a>
                <a title='erzurum qr menü sistemleri' className='border p-2 rounded-full' target='_blank' rel="nofollow"  href="https://www.instagram.com/arlanmedya/">
                    <FaInstagram />
                </a>
            </div>
        </div>
    )
}

export default son