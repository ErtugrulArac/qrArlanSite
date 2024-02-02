import React from 'react'
import { RiHome4Line } from "react-icons/ri";

const responsivelink = () => {
    return (
        <div className='shadow-lg shadow-black  rounded-lg px-6 py-6'>
            <div className='bg-black rounded-lg'>
                <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md  from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                >

                    <div className="mb-2 mt-4 text-lg font-medium flex items-center flex-col text-white ">
                        <RiHome4Line size={70} />
                        <p className="font-bold opacity-80">Anasayfa</p>
                    </div>

                    <p className="text-xs leading-tight text-muted-foreground text-white flex text-center opacity-70  ">
                        Anasayfa'ya dönerek Qr Menü sistemlerimiz hakkında detaylı bilgi alabilirsiniz.
                    </p>
                </a>
            </div>
            <div className='flex flex-col gap-6 mt-5 w-[96%] m-auto'>
                <a href="https://oddmenu.com/">
                    <h2 className='font-semibold'>Untrodoction</h2>
                    <p className='text-xs opacity-85 mt-1 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
                </a>
                <a href="">
                    <h2 className='font-semibold'>Untrodoction</h2>
                    <p className='text-xs opacity-85 mt-1 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
                </a>
                <a href="">
                    <h2 className='font-semibold'>Untrodoction</h2>
                    <p className='text-xs opacity-85 mt-1 tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
                </a>
            </div>
            <div className='flex justify-center items-center gap-4 mt-7'>
               <a href="https://api.whatsapp.com/send?phone=905307464899&text=Merhaba.%20Qr%20Web%20Siteniz%20%C3%BCzerinden%20ileti%C5%9Fime%20ge%C3%A7iyorum%20yard%C4%B1mc%C4%B1%20olabilir%20misiniz%3F">
                <img className='w-8' src="wp.svg" alt="" />
               </a>
               <a href="https://www.instagram.com/arlanmedya/">
                <img className='w-8' src="instagram.svg" alt="" />
               </a><a href="mailto:arlanmedya@gmail.com">
                <img className='w-8' src="mail.svg" alt="" />
               </a>
              
            </div>
        </div>
    )
}

export default responsivelink