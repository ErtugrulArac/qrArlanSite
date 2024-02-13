import React from 'react'
import Main from "@/components/hakkimizda/main/"
import Mockup from "@/components/hakkimizda/mockup/index"
import Vizyon from "@/components/hakkimizda/vizyon/index"
import Misyon from "@/components/hakkimizda/misyon/index"

const page = () => {
    return (
        <div >
            <Main />
            <Mockup />
            <Vizyon />
            <Misyon />
        </div>
    )
}

export default page