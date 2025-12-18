import React from 'react'
import Map from '../../components/iletisim/map'
import Bilgi from "@/components/iletisim/bilgiler"

const page = () => {
  return (
    <div className='bg-gradient-to-br from-slate-950 via-black to-slate-900 mt-20 py-16 min-h-screen'>
        <Map />
        <Bilgi />
    </div>
  )
}

export default page