import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div>
    <Link target='_blank' rel="nofollow" title='arlan medya iletişim'  className='fixed bottom-7 right-7 max-md:bottom-4 max-md:right-4 z-[100]' href={"https://api.whatsapp.com/send?phone=905307464899&text=Merhaba%20Arlan%20Medya%2C%20web%20siteniz%20%C3%BCzerinden%20ileti%C5%9Fime%20ge%C3%A7iyorum."}>
        <img className='size-11 max-md:size-9' src="wp.svg" alt="whatsapp arlan medya" style={{filter:"invert(0)"}} />
        </Link>
        </div>
  )
}

export default index