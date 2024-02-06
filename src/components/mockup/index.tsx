import React from 'react'
import Mock from "@/components/mockup/img"

const index = () => {
    return (
        <div className='bg-white'>
            <div className='max-md:w-[90%] flex justify-center items-center m-auto max-lg:flex-col  '>
                <div className='flex-1 flex justify-center items-center mt-24 max-md:mt-10 mb-28 max-md:mb-0'>
                    <img className='size-[550px] object-cover max-lg:size-[100%] ' src="a4yatay.png" alt="" />
                </div>
                <Mock />
            </div>
        </div>
    )
}

export default index