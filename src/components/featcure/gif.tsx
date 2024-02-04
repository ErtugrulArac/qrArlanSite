import React from 'react'
import Image from 'next/image'

const gif = () => {
  return (
    <div className='w-96 h-96 mt-32 max-md:mt-0'>
        <Image className='w-96 h-96 object-cover' src="/site.gif" alt='gif' width={200} height={200} />
    </div>
  )
}

export default gif