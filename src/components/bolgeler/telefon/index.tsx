import React from 'react'

interface Props {
    header: string;
    text: string;
    list: string[];
}

const index = ({header, text, list}: Props) => {
    return (
        <div className='bg-white pb-20  '>
            <div className='w-[80%] m-auto flex max-lg:flex-col max-lg:w-full items-center justify-around max-lg:gap-14'>
                <div className='w-[40%] max-lg:w-[90%] flex flex-col gap-7 max-lg:gap-4'>
                    <h2 className='text-6xl max-lg:text-4xl  leading-[70px] w-full'>{header}</h2>
                    <p className='text-base max-lg:text-sm leading-[22px] opacity-80'>{text}</p>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex max-md:text-sm gap-4 opacity-80 font-bold'><img src="koksal.svg" alt="" />{list[0]}</li>
                        <li className='flex max-md:text-sm gap-4 opacity-80 font-bold'><img src="koksal.svg" alt="" />{list[1]}</li>
                        <li className='flex max-md:text-sm gap-4 opacity-80 font-bold'><img src="koksal.svg" alt="" />{list[2]}</li>
                        <li className='flex max-md:text-sm gap-4 opacity-80 font-bold'><img src="koksal.svg" alt="" />{list[3]}</li>
                    </ul>
                    <a title='qr menü info' className='w-max px-7 py-2 rounded-xl font-semibold bg-[#8b38cb] text-white whitespace-nowrap xl:text-lg mt-3' href="/hakkimizda"> şimdi bilgi alın</a>
                </div>
                <img className="w-[600px] max-lg:size-[100%]" src="uctel.webp" alt="" />

            </div>
        </div>
    )
}

export default index