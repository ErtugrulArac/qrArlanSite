import React from 'react'
import { RiHome5Line } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";



const responsivelink = () => {
    return (
        <div className='gap-11   rounded-lg px-1 py-6 flex w-full flex-col justify-start'>
            <a className='flex  items-center gap-6 text-lg font-semibold' href="/">
                <RiHome5Line size={30} /> Anasayfa
            </a>
            <a className='flex  items-center gap-6 text-lg font-medium opacity-90' href="/hakkimizda">
                <CiBoxList size={30} />Hakkımda
            </a> <a className='flex  items-center gap-6 text-lg font-medium opacity-90' href="/iletisim">
                <RiContactsLine size={30} /> İletişim
            </a> <a className='flex  items-center gap-6 text-lg font-medium opacity-90' href="">
                <MdOutlineRestaurantMenu size={30} /> Menüler
            </a> <a className='flex  items-center gap-6 text-lg font-medium opacity-90' href="">
                <FaRegComment size={30} /> Yorumlar
            </a>

        </div>
    )
}

export default responsivelink