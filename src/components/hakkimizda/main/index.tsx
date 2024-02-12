import React from 'react'

const index = () => {
    return (
        <div className='mt-44 max-md:py-28 max-md:mt-0 py-14  text-black bg-white'>
    <div className='flex w-[60%] max-md:w-full m-auto items-center justify-around max-md:flex-col max-md:gap-9'>
                <div className='flex flex-col gap-7 max-md:w-[95%] '>
                    <h3 className='text-8xl max-md:text-5xl font-roboto font-medium '>Hakkımızda</h3>
                    <p className='text-2xl max-md:text-xl leading-relaxed font-medium w-[90%]'>We're a diverse bunch of individuals with a passion for creating brands and websites we can all be proud of.</p>
                </div>
                <img className='w-[500px] rounded-3xl max-md:rounded-none  max-md:w-full' src="arlan.gif" alt="" />
            </div>
        </div>
    )
}

export default index