import React from 'react'
import Ust from "@/components/bolgeler/ust"
import Logo from "@/components/bolgeler/logo"
import Telefon from "@/components/bolgeler/telefon"
import Head from 'next/head'

const page = () => {
    return (
        <div>
            <Head>
                <title>Arlan Medya - Erzurum Qr Menu</title>
            </Head>
            <Ust header="ArlanMedya Erzurum" text="ArlanMedya, Erzurum'da faaliyet gösteren restoranlar için özel olarak tasarlanmış QR menü çözümleri sunmaktadır. Bu yenilikçi sistem, misafirlerin restoran menülerine kolay ve hızlı erişimini sağlar, aynı zamanda restoran sahiplerine kağıt israfını azaltma ve hijyen standartlarını koruma imkanı sunar. Erzurum'daki restoranlar için QR menü sistemleri, modern teknolojiyi kullanarak daha verimli ve çevre dostu bir yemek deneyimi sunmaktadır." />
            <Logo />
            <Telefon header="Erzurum Qr Menü Sistemleri" text="Erzurum'daki restoranlar için QR menü kullanmanın birçok avantajı bulunmaktadır. İşte bunlardan bazıları:" list={["Veri Analitiği: QR menüleri, restoran sahiplerine müşteri tercihleri ve sipariş alışkanlıkları hakkında değerli veri sağlar. Bu veriler, menüyü optimize etmek ve müşteri memnuniyetini artırmak için kullanılabilir.", "Yer Tasarrufu: QR menüleri, restoran içinde yer kaplayan geleneksel menülerin yerine dijital olarak sunulduğu için işletmeler için fiziksel alanda tasarruf sağlar. Bu da daha fazla masa veya oturma alanı oluşturma imkanı sunar.", "Kapsamlı Bilgi: QR menüleri, her yemek veya içecek öğesi için detaylı açıklama ve görseller sunma imkanı sağlar. Müşteriler, sipariş vermeden önce ürünler hakkında daha fazla bilgi edinebilir ve daha bilinçli seçimler yapabilir.", "Zaman: QR menüleri sayesinde müşteriler, geleneksel menülerde zaman harcamak yerine akıllı telefonlarını kullanarak hızlıca yemek seçeneklerine erişebilirler."]} />
            {/* list 4 TANE OLACAK! */}
            <div className='text-white flex flex-col gap-6 w-[80%] max-md:w-[90%] m-auto mt-10'>
                <div className='flex flex-col gap-5 '>
                    <h3 className='text-4xl max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h3>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h3 className='text-4xl max-md:text-3xl '>
                        Erzurum Qr Menü Fiyatları
                    </h3>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h3 className='text-4xl max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h3>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div >
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h4>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h4 >
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h4>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h4>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page