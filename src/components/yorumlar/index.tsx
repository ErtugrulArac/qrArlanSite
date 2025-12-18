import React from 'react'
import CommentsCarousel from './comments'

const index = () => {
  return (
    <section id='yorumlar' className='relative bg-gradient-to-br from-slate-950 via-black to-slate-900 scroll-mt-[100px] py-16 sm:py-20 md:py-24 max-md:pt-12 max-md:pb-20 flex flex-col gap-20 sm:gap-24 md:gap-32 overflow-hidden'>
      {/* Animated Background */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-1/4 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700'></div>
      </div>

      {/* Header */}
      <div className='relative z-10 text-center px-4'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4'>
          Müşteri <span className='bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent'>Yorumları</span>
        </h2>
        <p className='text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2'>
          Arlan QR Menü ile işletmelerini değiştiren müşterilerimizin deneyimleri
        </p>
      </div>

      {/* Comments Carousel */}
      <div className='relative z-10 w-full'>
        <CommentsCarousel />
      </div>
    </section>
  )
}

export default index