import React from 'react'

const email = () => {
    return (
        <div className='flex flex-col max-md:w-[85%] m-auto items-center justify-center text-center gap-5 max-md:gap-4 mt-14 max-md:mt-9'>
            <h2 className='text-5xl max-md:text-2xl font-passion'>Arlan Medya QR Menü Sistemleri</h2>
            <p className='max-md:text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate velit vero in. Perspiciatis explicabo dolores quod.</p>
            <div className='flex gap-16 max-md:mt-5 max-md:gap-8'>
                <a  className='bg-[#131313] py-1 w-36 flex items-center gap-3 rounded-xl text-center justify-center' href="">
                    <img className='size-5' src="göz.svg" alt="" />Hakkımızda</a>
                <a className='bg-[#131313] py-1 w-36 flex items-center gap-3 rounded-xl text-center justify-center' href="">
                    <img className='size-5' src="el.svg" alt="" />İletişim</a>
            </div>
        </div>
    )
}

export default email