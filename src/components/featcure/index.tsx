import React from 'react'
import Orta from './orta'
import Gif from './gif'


const index = () => {
    return (
        <div className='bg-white '>
            <div className='bgimg flex items-center justify-center w-[95%] gap-40 max-md:gap-16 max-md:flex-col max-md:m-auto max-md:w-[100%]  '>
               {/* <img className='w-[200px] h-[400px] ' src="salat.png" alt="" /> */}
               <Orta/>
               <Gif/>
            </div>
        </div>
    )
}

export default index