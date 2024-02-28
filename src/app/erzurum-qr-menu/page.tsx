import React from 'react'
import Ust from "@/components/bolgeler/ust"
import Logo from "@/components/bolgeler/logo"
import Telefon from "@/components/bolgeler/telefon"

const page = () => {
    return (
        <div>
            <Ust header="yarrağımın başı" text="erzurumda qr menu almayanı götten"/>
            <Logo/>
            <Telefon header="yarrağımın başı" text="erzurumda qr menu almayanı götten" list={["kuzi", "göt", "keri", "KER KUZE"]} />
            {/* list 4 TANE OLACAK! */}
        </div>
    )
}

export default page