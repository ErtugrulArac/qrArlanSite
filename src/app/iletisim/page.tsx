import React from 'react'
import Map from '../../components/iletisim/map'
import Bilgi from "@/components/iletisim/bilgiler"

const page = () => {
  return (
    <div className='bg-white mt-20 py-16'>
        <Map />
        <Bilgi />
    </div>
  )
}

export default page