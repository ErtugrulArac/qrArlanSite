import React from 'react'
import Right from './right'


const index = () => {
    return (
        <div className='bg-white text-black max-md:py-8'>
          <div className='xl:w-[66%] flex justify-between items-center max-lg:flex-col max-lg:w-[90%] max-xl:w-[90%]  m-auto'>
            <img className='w-[40%] max-md:w-[100%]' src="a4yatay.png" alt="menu" />
            <Right />
          </div>
        </div>
    )
}

export default index