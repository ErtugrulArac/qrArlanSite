import React from 'react'
import Image from 'next/image'

const gif = () => {
  return (
    <div className='w-96 h-96 mt-32 max-md:mt-0 max-md:w-full max-md:h-92 max-md:mb-0 mb-28'>
        <Image className='w-96 h-96 object-cover max-md:w-full max-md:h-92 md:rounded-xl ' src="/site.gif" alt='qr menü sitemleri' width={200} height={200} />
    </div>
  )
}

export default gif