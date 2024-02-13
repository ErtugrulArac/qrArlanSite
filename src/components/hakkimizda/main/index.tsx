import React from 'react'

const index = () => {
    return (
        <div className='mt-44 max-md:py-12  max-md:mt-0 py-14  text-black bg-white'>
    <div className='flex w-[60%] max-md:w-full m-auto items-center justify-around max-lg:flex-col max-md:gap-9 max-lg:gap-10'>
                <div className='flex flex-col gap-7 max-md:w-[95%] max-md:mt-20 '>
                    <h3 className='text-6xl max-md:text-4xl font-fontpopins font-bold max-xl:text-5xl'>Hakkımızda</h3>
                    <p className='text-2xl max-md:text-base leading-relaxed font-medium w-[90%] max-md:opacity-70'>We're a diverse bunch of individuals with a passion for creating brands and websites we can all be proud of.</p>
                </div>
                <img className='w-[500px] rounded-3xl max-md:rounded-none  max-md:w-full max-xl:ml-10 max-lg:ml-0' src="arlan.gif" alt="" />
            </div>
        </div>
    )
}

export default index