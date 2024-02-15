import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div>
    <Link target='_blank' className='fixed bottom-7 right-7 max-md:bottom-4 max-md:right-4' href={"https://api.whatsapp.com/send?phone=905447824655&text=Merhabalar%2C%20Arlan%20Medya%20Qr%20sistemleri%20websitenizden%20yaz%C4%B1yorum."}>
        <img className='size-11 max-md:size-9' src="wp.svg" alt="whatsapp arlan medya" />
        </Link>
        </div>
  )
}

export default index