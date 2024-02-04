import React from 'react'

const orta = () => {
    return (
        <div>
            <div className='flex flex-col mt-32 max-md:mt-10'>
                <h2 className='leading-normal text-5xl'><b className=''>Özellikler</b> Avantajlar</h2>
                <div className='h-[4px] w-20 bg-[#00af74] rounded-xl mt-3'></div>
                <p className='w-[80%] mt-7'>İşletmenizde Qr Menu sistemlerimizi kullanmanız için <b>5</b> neden.</p>
                <ul className='flex flex-col gap-3 mt-7'>
                    <li className='flex items-center gap-2 '>
                        <img className='size-6' src="verified.svg" alt="" /> <p className='text-xl font-semibold tracking-wide'>5 farklı qr kod teması.</p>
                    </li>
                    <li className='flex items-center gap-2 '>
                        <img className='size-6' src="verified.svg" alt="" /> <p className='text-xl font-semibold tracking-wide'>Hızlı ve pratik kurulur.</p>
                    </li>
                    <li className='flex items-center gap-2 '>
                        <img className='size-6' src="verified.svg" alt="" /> <p className='text-xl font-semibold tracking-wide'>Sipariş sürecini hızlandırır.</p>
                    </li>
                    <li className='flex items-center gap-2 '>
                        <img className='size-6' src="verified.svg" alt="" /> <p className='text-xl font-semibold tracking-wide'>Tek seferlik ödeme.</p>
                    </li>
                    <li className='flex items-center gap-2 '>
                        <img className='size-6' src="verified.svg" alt="" /> <p className='text-xl font-semibold tracking-wide'>Müşteri sağlığını korur.</p>
                    </li>
                </ul>
                <a className='w-max px-7 py-2 rounded-xl font-semibold bg-[#00af74] text-white whitespace-nowrap xl:text-lg mt-3' href="">bilgi alın</a>
                <p className='w-[90%] text-xs text-[#00af74] mt-5 '>
                    Daha birçok özellik ve avantajdan yararlanarak işletmenizi öne çıkarmak için iletişime geçin.
                </p>
            </div>
        </div>
    )
}

export default orta