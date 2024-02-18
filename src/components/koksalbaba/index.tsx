import React from 'react'


const index = () => {
  return (
    <div id='inceleyin' className='scroll-mt-[100px] flex justify-center items-center w-[60%] m-auto mt-20 max-lg:flex-col max-lg:w-full max-xl:w-[90%]'>
      <div className=' flex items-center justify-center    m-auto max-lg:flex-col max-lg:gap-16 max-lg:w-[70%] '>
        <div className='flex flex-col gap-10 max-md:gap-6'>
          <h2 className='text-white font-fontpopins text-4xl w-[80%] font-extrabold max-lg:text-3xl max-xl:text-3xl  max-md:text-2xl max-lg:w-full'>İşletmenize Özel Qr Menü Oluşturmanın Adımları</h2>
          <ul className='flex flex-col gap-3 mt-7 text-white'>
            <li className='flex items-center gap-2'>
              <img className='max-md:size-5 ' src="koksal.svg" alt="qr menü teması" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-xl:text-lg max-md:text-base'>İşletmenize en uygun qr menu temasını seçin.</p>
            </li>
            <li className='flex items-center gap-2'>
              <img className='max-md:size-5' src="koksal.svg" alt="qr menü iletişim" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-xl:text-lg max-md:text-base'>Seçtiğiniz qr teması ile birlikte kolayca bizle iletişime geçin.</p>
            </li>
            <li className='flex items-center gap-2'>
              <img className='max-md:size-5' src="koksal.svg" alt="qr menü işletme hesabı" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-xl:text-lg max-md:text-base'>Qr menü için gerekli işletme bilgilerini iletin.</p>

            </li>
            <li className='flex items-center gap-2'>
              <img className='max-md:size-5' src="koksal.svg" alt="qr menü entegrasyon" /> <p className='text-xl font-medium  tracking-wide opacity-80 max-xl:text-lg max-md:text-base'>Qr menü entegrasyonu için menünüzü iletin.</p>
            </li>
            <li className='flex items-center gap-2'>
              <img className='max-md:size-5' src="koksal.svg" alt="qr menü hazır" /> <p className='text-xl font-medium tracking-wide opacity-80 max-xl:text-lg max-md:text-base'>Qr kod tasarımını seçtikten sonra her şey hazır.</p>

            </li>
          </ul>
          <a title='qr menü bilgi' className='w-max px-7 py-2 rounded-xl font-semibold bg-[#8b38cb] text-white whitespace-nowrap xl:text-lg max-md:text-base mt-3' href="/iletisim">şimdi bilgi alın</a>
        </div>
      </div>
      <div className='flex items-center justify-center max-lg:w-[95%] max-lg:mt-10  m-auto max-lg:flex-col max-lg:gap-16 '>
        <img className='w-[550px]  max-md:object-cover max-md:w-[700px]   rounded-md' src="kucukkoksal.png" alt="qr menü sistemleri" />
      </div>
    </div>
  )
}

export default index