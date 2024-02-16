import React from 'react'
import Comments from './comments'

const index = () => {
  return (
    <div id='yorumlar' className='bg-white scroll-mt-[100px]  py-20 flex flex-col gap-20'>
      <Comments />
    </div>
  )
}

export default index