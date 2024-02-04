
import React, { use } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Typ from "@/components/main/typeanimation"


const index = () => {
    return (
        <div className='mt-16 py-10 flex justify-center items-center relative'>
            <div className='max-xl:hidden'>
                <img className='w-96 ' src="15prosol.png" alt="" />
            </div>
            <div>
            <Typ/>
            </div>
            <div className='max-xl:hidden'>
                <img className='w-96' src="15prosağ.png" alt="" />
            </div>
        </div>
    )
}

export default index