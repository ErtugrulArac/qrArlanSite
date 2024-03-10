import React from 'react'
import Ust from "@/components/bolgeler/ust"
import Logo from "@/components/bolgeler/logo"
import Telefon from "@/components/bolgeler/telefon"

const page = () => {
    return (
        <div>
            <Ust header="ArlanMedya Erzurum" text="ArlanMedya, Erzurum'da faaliyet gösteren restoranlar için özel olarak tasarlanmış QR menü çözümleri sunmaktadır. Bu yenilikçi sistem, misafirlerin restoran menülerine kolay ve hızlı erişimini sağlar, aynı zamanda restoran sahiplerine kağıt israfını azaltma ve hijyen standartlarını koruma imkanı sunar." />
            <Logo />
            <Telefon header="Erzurum Qr Menü Sistemleri " text="Erzurum'daki işletmeniz için QR menü kullanmanızın birçok avantajı bulunmaktadır. İşte bunlardan bazıları:" list={["Değişken enflasyonda sürekli olarak fiyat güncellemesi yapmanız gerekebiliyor bunun en pratik yönü menününzü dijitalde güncellemek.", "Artan matbaa basım maliyetlerine karşın qr menünüz tek seferlik ödeme avantajı sağlar.", "Daha detaylı açıklamalar ve görseller sayesinde müşteri memnuniyetiniz artar.", "QR menüleri sayesinde müşteriler, geleneksel menülerde zaman harcamak yerine akıllı telefonlarını kullanarak hızlıca yemek seçeneklerine erişebilirler."]} />
            {/* list 4 TANE OLACAK! */}
            <div className='text-white flex flex-col gap-6 w-[80%] max-md:w-[90%] m-auto mt-10'>
                <div className='flex flex-col gap-5  '>
                    <h3 className='text-4xl max-md:w-full w-[80%] font-semibold max-md:text-2xl'>
                        Erzurum Qr Menü fiyatları nedir?
                    </h3>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Erzurumdaki işletmeler için sunduğumuz qr menü sistem fiyatları, istenen özelliklere göre değişkenlik gösterebilmektedir. Örneğin eve sipariş sistemi için ek fiyatlandırma yapılmaktadır. Detaylı bilgi almak için bizimle iletişime geçebilirsiniz, Arlan Medya.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page