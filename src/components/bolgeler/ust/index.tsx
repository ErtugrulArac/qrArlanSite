import React from 'react'

const index = () => {
    return (
        <div className='bg-white pt-20  '>
            <div className='w-[80%] m-auto flex max-lg:flex-col max-lg:w-full items-center justify-around max-lg:gap-14'>
                <img className="size-[600px] max-lg:size-[100%]" src="Mockup3te.webp" alt="" />
                <div className='w-[40%] max-lg:w-[90%] flex flex-col gap-7 max-lg:gap-4'>
                    <h1 className='text-6xl max-lg:text-4xl  leading-[70px] w-full'>Arlan Medya Erzurum <b>Qr Menü Sistemleri</b></h1>
                    <p className='text-base max-lg:text-sm leading-[22px] opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consequatur tempore iusto repellat id ducimus distinctio soluta dolores. Recusandae architecto qui harum officiis quisquam, obcaecati natus! Id magnam eaque aperiam.</p>
                    <a title='qr menü info' className='w-max px-7 py-2 rounded-xl font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg mt-3' href="/hakkimizda"> şimdi bilgi alın</a>
                </div>
            </div>
        </div>
    )
}

export default index