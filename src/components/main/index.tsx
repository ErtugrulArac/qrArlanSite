
import React, { use } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Typ from "@/components/main/typeanimation"


const index = () => {
    return (
        <div className='mt-16 py-10 flex justify-center items-center relative xl:mt-20'>
            <div className='max-xl:hidden'>
                <img className='w-[550px] ' src="mockupsağ.png" alt="" />
            </div>
            <div>
            <Typ/>
            </div>
            <div className='max-xl:hidden'>
                <img className='w-[550px]' src="mockupsol.png" alt="" />
            </div>
        </div>
    )
}

export default index