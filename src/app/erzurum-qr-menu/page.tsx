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
            <Ust header="ArlanMedya Erzurum" text="ArlanMedya, Erzurum'da faaliyet gösteren restoranlar için özel olarak tasarlanmış QR menü çözümleri sunmaktadır. Bu yenilikçi sistem, misafirlerin restoran menülerine kolay ve hızlı erişimini sağlar, aynı zamanda restoran sahiplerine kağıt israfını azaltma ve hijyen standartlarını koruma imkanı sunar." />
            <Logo />
            <Telefon header="Erzurum Qr Menü Sistemleri " text="Erzurum'daki restoranlar için QR menü kullanmanın birçok avantajı bulunmaktadır. İşte bunlardan bazıları:" list={[" QR menüleri, restoran sahiplerine müşteri tercihleri ve sipariş alışkanlıkları hakkında değerli veri sağlar.", " QR menüleri, restoran içinde yer kaplayan geleneksel menülerin yerine dijital olarak sunulduğu için işletmeler için fiziksel alanda tasarruf sağlar. ", " QR menüleri, her yemek veya içecek öğesi için detaylı açıklama ve görseller sunma imkanı sağlar.", " QR menüleri sayesinde müşteriler, geleneksel menülerde zaman harcamak yerine akıllı telefonlarını kullanarak hızlıca yemek seçeneklerine erişebilirler."]} />
            {/* list 4 TANE OLACAK! */}
            <div className='text-white flex flex-col gap-6 w-[80%] max-md:w-[90%] m-auto mt-10'>
                <div className='flex flex-col gap-5  '>
                    <h3 className='text-4xl w-[80%] font-semibold max-md:text-3xl'>
                        Erzurum qr menü fiyatları?
                    </h3>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Erzurum'da QR menü fiyatları, genellikle işletmenin ihtiyaçlarına, menünün özelliklerine ve hizmet sağlayıcısının sunduğu paketlere göre değişiklik gösterebilir. Fiyatlandırma hakkında daha detaylı bilgi almak için lütfen bize özel mesaj yoluyla ulaşın. Arlan Medya olarak Erzurum'daki işletmeler için uygun fiyatlı ve özelleştirilebilir QR menü çözümleri sunmaktan memnuniyet duyarız. Bizimle iletişime geçmek için anahtar kelimeleri içeren özel bir mesaj atabilirsiniz.
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h3 className='text-4xl w-[80%] max-md:w-full font-semibold max-md:text-3xl '>
                        Erzurum'daki restoranlar için QR menü kullanımı, müşteri memnuniyetini nasıl artırabilir?
                    </h3>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                    Erzurum'daki restoranlar için QR menü kullanımı, işletmelerin ve müşterilerin deneyimini modernize edebilir ve geleneksel kağıt menülerin yerini alabilir. QR menüler, müşterilere fiziksel menülere dokunmadan kolayca menüye erişme ve sipariş vermeleri imkanı sağlar. Bu da işletmeler için daha hijyenik bir çözüm sunar ve müşterilerin sağlık ve güvenlik endişelerini azaltır. Ayrıca, QR menülerin dijital formatı, işletmelerin menüyü kolayca güncellemesine olanak tanır ve kağıt israfını azaltır. Bu özellikler, restoran işletmecilerine operasyonel esneklik sağlayarak işletmelerinin verimliliğini artırabilir. Bununla birlikte, QR menü kullanımı için gerekli olan akıllı telefon veya internet erişimi olmayan bazı müşteriler için erişilebilirlik bir zorluk olabilir. Bu durumda, işletmelerin kağıt menü seçeneğini koruması veya alternatif çözümler sunması gerekebilir bunlara kolaylıkla ArlanMedya tarafından sahip olabilirler.
                    </p>
                </div>
                {/* <div className='flex flex-col gap-5 '>
                    <h3 className='text-4xl font-semibold max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h3>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div >
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl font-semibold max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h4>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl font-semibold max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h4 >
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl font-semibold max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h4>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl font-semibold max-md:text-3xl'>
                        Erzurum Qr Menü Fiyatları
                    </h4>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur commodi est at et eligendi error pariatur aliquid totam beatae, enim quidem nobis neque sit voluptatem accusantium recusandae dicta molestiae iusto!
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default page