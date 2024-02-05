import React from 'react'


const index = () => {
  return (
    <div className='flex items-center justify-center mt-20 w-[70%] m-auto max-lg:flex-col max-lg:gap-16 '>
      <div className='flex flex-col gap-10 max-md:gap-6'>
        <h2 className='text-white font-fontpopins text-4xl w-[80%] font-extrabold max-lg:text-3xl  max-md:text-2xl max-lg:w-full'>İşeltmenize Özel Qr Menü Oluşturmanın Adımları</h2>
        <ul className='flex flex-col gap-3 mt-7 text-white'>
          <li className='flex items-center gap-2'>
            <img className='max-md:size-5' src="koksal.svg" alt="" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-md:text-base'>İşletmenize en uygun qr menu temasını seçin.</p>
          </li>
          <li className='flex items-center gap-2'>
            <img className='max-md:size-5' src="koksal.svg" alt="" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-md:text-base'>Seçtiğiniz tema ile birlikte kolayca bizle iletişime geçin.</p>

          </li>
          <li className='flex items-center gap-2'>
            <img className='max-md:size-5' src="koksal.svg" alt="" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-md:text-base'>Gerekli kafe bilgilerini iletin.</p>

          </li>
          <li className='flex items-center gap-2'>
            <img className='max-md:size-5' src="koksal.svg" alt="" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-md:text-base'>Menü entegrasyonu için menünüzü iletin.</p>

          </li>
          <li className='flex items-center gap-2'>
            <img className='max-md:size-5' src="koksal.svg" alt="" /> <p className='text-xl font-medium tracking-wide opacity-80 max-md:text-base'>Qr kod tasarımını seçtikten sonra her şey hazır.</p>

          </li>
        </ul>
        <a className='w-max px-7 py-2 rounded-xl font-semibold bg-[#8b38cb] text-white whitespace-nowrap xl:text-lg max-md:text-base mt-3' href="">şimdi bilgi alın</a>
      </div>
      <img className='w-[550px] max-md:object-cover max-md:w-[700px] rounded-md' src="kucukkoksal.png" alt="" />
    </div>
  )
}

export default index