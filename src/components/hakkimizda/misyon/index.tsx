import React from 'react'
import Sayac from "@/components/hakkimizda/misyon/sayac"

const index = () => {
  return (
    <div className='w-[65%] max-md:w-[95%] m-auto max-lg:w-[85%] max-xl:w-[80%] flex flex-col gap-20 max-md:gap-10 mb-20'>
        <p className='text-white  mt-10 font-fontpopins font-semibold text-lg w-[55%] max-xl:w-full max-lg:w-full max-md:opacity-90 max-md:text-sm'>Arlan Medya olarak, kısa süre içinde Erzurum'un önde gelen medya şirketlerinden biri haline geldik. Müşterilerimize sunduğumuz yenilikçi çözümler ve profesyonel hizmetlerimiz sayesinde işletmelerinin dijital dünyada başarılı olmalarına katkıda bulunduk.</p>
        <Sayac/>
    </div>
  )
}

export default index