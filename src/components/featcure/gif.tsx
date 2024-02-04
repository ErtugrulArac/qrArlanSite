import React from 'react'
import Image from 'next/image'

const gif = () => {
  return (
    <div className='w-96 h-96 mt-32 max-md:mt-0 max-md:w-full max-md:h-72 max-md:mb-10 mb-32'>
        <Image className='w-96 h-96 object-cover max-md:w-full max-md:h-72' src="/site.gif" alt='gif' width={200} height={200} />
    </div>
  )
}

export default gif