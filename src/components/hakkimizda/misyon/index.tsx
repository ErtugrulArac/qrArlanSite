import React from 'react'
import Sayac from "@/components/hakkimizda/misyon/sayac"

const index = () => {
  return (
    <div className='w-[65%] max-md:w-[95%] m-auto max-lg:w-[85%] max-xl:w-[80%] flex flex-col gap-20 max-md:gap-10'>
        <p className='text-white  mt-10 font-fontpopins font-semibold text-lg w-[55%] max-xl:w-full max-lg:w-full max-md:opacity-90 max-md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium nam vitae sapiente eum laborum hic rem numquam! Atque sit commodi cupiditate, magni fugit laboriosam ducimus voluptates possimus! Necessitatibus, rerum dolor.</p>
        <Sayac/>
    </div>
  )
}

export default index