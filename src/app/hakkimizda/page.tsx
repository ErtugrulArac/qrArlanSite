import React from 'react'
import Main from "@/components/hakkimizda/main/"
import Vizyon from "@/components/hakkimizda/vizyon/index"
import Misyon from "@/components/hakkimizda/misyon/index"
import Son from "@/components/hakkimizda/son/index"

const page = () => {
    return (
        <div className="bg-gradient-to-br from-slate-950 via-black to-slate-900 pt-20">
            <Main />
            <Vizyon />
            <Misyon />
            <Son />
        </div>
    )
}

export default page