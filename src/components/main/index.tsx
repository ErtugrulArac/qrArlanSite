
import React, { use } from 'react'
import { TypeAnimation } from 'react-type-animation';
import Typ from "@/components/main/typeanimation"


const index = () => {
    return (
        <div className='mt-16 py-10 flex justify-center items-center relative xl:mt-36'>
            <div className='max-xl:hidden'>
                <img className='w-[550px] ' src="mockupsağ.webp" alt="mockup sağ qr menü" />
            </div>
            <div>
            <Typ/>
            </div>
            <div className='max-xl:hidden'>
                <img className='w-[550px]' src="mockupsol.webp" alt="mockup ssol qr menü" />
            </div>
        </div>
    )
}

export default index