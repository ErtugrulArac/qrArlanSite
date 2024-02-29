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
                    <h3 className='text-4xl max-md:w-full w-[80%] font-semibold max-md:text-2xl'>
                        Erzurum qr menü fiyatları?
                    </h3>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Erzurum'da QR menü fiyatları, genellikle işletmenin ihtiyaçlarına, menünün özelliklerine ve hizmet sağlayıcısının sunduğu paketlere göre değişiklik gösterebilir. Fiyatlandırma hakkında daha detaylı bilgi almak için lütfen bize özel mesaj yoluyla ulaşın. Arlan Medya olarak Erzurum'daki işletmeler için uygun fiyatlı ve özelleştirilebilir QR menü çözümleri sunmaktan memnuniyet duyarız. Bizimle iletişime geçmek için anahtar kelimeleri içeren özel bir mesaj atabilirsiniz.
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h3 className='text-4xl w-[60%]  max-md:w-full font-semibold max-md:text-2xl '>
                        QR menüsüyle ilgili herhangi bir abonelik veya devamlılık gereksinimi var mı?
                    </h3>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Arlan Medya'nın Erzurum QR Menü hizmeti, işletmeler için tek seferlik bir ücret karşılığında sunulur. Bu hizmet, işletmelerin Erzurum'daki restoranlar için özelleştirilmiş QR menüler oluşturmasını sağlar. QR menüsü oluşturulduktan sonra, işletmeler herhangi bir abonelik veya devamlılık ücreti ödemezler.
                        <br /><br />
                        Arlan Medya'nın Erzurum QR Menü hizmeti, işletmelere şunları sunar:
                        <br /><br />
                        - Erzurum'un benzersiz kültürü ve lezzetlerine uygun özelleştirilmiş QR menü tasarımı.
                        <br /><br />
                        - Müşterilerin kolayca erişebileceği dijital menüye yönlendiren özelleştirilmiş QR kod oluşturma.
                        <br /><br />
                        - Menü içeriğinin güncellenmesi ve yönetilmesi için kolay ve kullanıcı dostu bir arayüz.
                        Herhangi bir abonelik veya devamlılık ücreti olmaksızın, işletmenin QR menüsüne sürekli olarak erişilebilir ve güncel kallanılabilir.
                        <br /><br />
                        Bu hizmet,  Erzurum'daki işletmelerin dijitalleştirmelerine ve müşterilere daha iyi bir deneyim sunmalarına olanak tanır.
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h3 className='text-4xl w-[60%] max-md:w-full font-semibold max-md:text-2xl'>
                        QR menüyü özelleştirmek ve güncellemek için hangi olanaklar sunuyorsunuz?

                    </h3>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Marka Uyumluluğu: Erzurum'a özel QR menünüzü, işletmenizin marka kimliğiyle uyumlu hale getirebiliriz. İşletmenizin renkleri, logosu ve genel görünümüyle özelleştirilmiş bir tasarım sağlarız.
                        <br /><br />
                        Görsel ve Metin İçeriği: QR menünüzde yer alacak ürünlerin fotoğraflarını ve açıklamalarını ekleyebilirsiniz. Bu, müşterilerinize görsel olarak çekici bir menü sunmanıza ve ürünler hakkında daha fazla bilgi vermenize olanak tanır.
                        <br /><br />
                        Özelleştirilmiş Kategoriler: Erzurum'un eşsiz lezzetlerine göre menünüzü kategorize edebilirsiniz. Örneğin, "Erzurum'un Geleneksel Lezzetleri", "Çay ve Kahve Çeşitleri" gibi kategoriler oluşturabilirsiniz.
                        <br /><br />
                        Fiyatlandırma ve Menü Düzeni: Ürün fiyatlarını ve menü düzenini istediğiniz gibi özelleştirebilirsiniz. Fiyatları güncellemek, yeni ürünler eklemek veya mevcutları düzenlemek kolaydır.
                        <br /><br />
                        Özel İçerikler ve Promosyonlar: QR menünüze özel içerikler, özel teklifler veya promosyonlar ekleyebilirsiniz. Bu, müşterilerinizi cezbetmek ve sadık müşteri kitlenizi artırmak için harika bir fırsattır.
                        <br /><br />
                        Mobil Uyumluluk: QR menünüz, mobil cihazlarda mükemmel bir kullanıcı deneyimi sunacak şekilde tasarlanmıştır. Bu sayede müşterileriniz, cep telefonları veya tabletler aracılığıyla kolayca menünüze erişebilir ve gezinebilir.
                        <br /><br />
                        Anlık Güncelleme: İhtiyaç duyduğunuz her an menünüzü güncelleyebilirsiniz. Yeni ürünler eklemek, fiyatları değiştirmek veya mevcutları düzenlemek için herhangi bir teknik bilgiye ihtiyaç duymazsınız. Güncellemeler anında QR kodunuzda yansıtılır.

                    </p>
                </div >
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl w-[60%] max-md:w-full font-semibold max-md:text-2xl'>
                        QR menüyü oluşturmak ve yönetmek için teknik bilgi gerekiyor mu, yoksa herkes kolayca kullanabilir mi?
                    </h4>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Arlan Medya olarak sunduğumuz Erzurum'a özel QR menü hizmeti, teknik bilgi gerektirmez ve herkesin kolayca kullanabileceği şekilde tasarlanmıştır. Size özel bir hesap oluşturarak, Erzurum'daki işletmenizin QR menüsünü adım adım oluşturabilirsiniz. Bu menü, işletmenizin marka kimliğini yansıtan özelleştirilmiş bir tasarıma sahip olacak ve Erzurum'un ve işletmenizin benzersiz lezzetlerini sergileyecektir.
                        <br /><br />
                        QR menünüzü oluşturmak için gereken adımlar oldukça basittir. Platformumuzun kullanıcı dostu arayüzü sayesinde, Erzurum'un ve işletmenizin meşhur yemeklerini ve içeceklerini menünüze eklemek kolay olacak.
                        <br /><br />
                        QR menünüzü yönetmek de son derece basittir ve herhangi bir teknik bilgi gerektirmez. İhtiyaç duyduğunuz herhangi bir güncelleme veya değişikliği anında yapabilirsiniz. Örneğin, Erzurum'daki tedarikçilerinizden yeni ürünler aldığınızda veya menünüzde fiyat değişikliği yaptığınızda, bu değişiklikleri kolayca QR menünüze yansıtabilirsiniz.
                        <br /><br />
                        Kısacası, Arlan Medya olarak sunduğumuz Erzurum'a özel QR menü hizmeti, işletme sahiplerinin veya personelinin teknik bilgiye ihtiyaç duymadan kolayca kullanabileceği bir platform sunar. Bu sayede, Erzurum'un eşsiz lezzetlerini ve kültürünü müşterilere hızlı ve etkili bir şekilde sunabilirsiniz.
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl max-md:w-full  font-semibold max-md:text-2xl'>
                        Arlan Medya QR menüsü tasarımı nasıl yapılır?
                    </h4 >
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Arlan Medya olarak, Erzurum'daki restoranlar için özel QR menü tasarımı hizmeti sunuyoruz. QR menü tasarımı yapmak için adım adım bir süreç izliyoruz:
                        <br /><br />
                        İçerik Belirleme ve Özelleştirme: İlk olarak, Erzurum'daki restoranınız için QR menü içeriğini belirleriz. Menüde yer alacak yemek ve içecekleri seçeriz ve özel istekleri göz önünde bulundururuz. Ardından, Arlan Medya'nın özelleştirme araçlarıyla, QR menüyü restoranınızın marka kimliğiyle uyumlu hale getiririz.
                        <br /><br />
                        Görsel Tasarım ve Tema Seçimi: Erzurum'un benzersiz kültürüne ve lezzetlerine uygun bir tema ve görsel tasarım seçeriz. Bu, Erzurum'un sembollerini veya geleneksel motiflerini içerebilir. Ayrıca, restoranınızın renkleriyle uyumlu bir tasarım oluştururuz.
                        <br /><br />
                        QR Kodu Oluşturma ve Entegrasyon: Tasarımı tamamladıktan sonra, Arlan Medya'nın QR kodu oluşturma aracını kullanarak QR kodunu entegre ederiz. Bu QR kodu, restoranınızın müşterilerinin kolayca erişebileceği dijital menüye yönlendirir.
                        <br /><br />
                        Test Etme ve Optimize Etme: Tasarımı ve QR kodunu test ederiz ve tüm cihazlarda ve QR kodu tarayıcı uygulamalarında düzgün bir şekilde çalıştığından emin oluruz. Ayrıca, müşteri geri bildirimlerini dikkate alarak tasarımı optimize ederiz.
                        <br /><br />
                        Dağıtım ve Tanıtım: Tasarımı tamamladıktan ve test ettiğimizden sonra, QR menünüzü restoranınızın çeşitli noktalarında tanıtırız. Bunlar arasında masa üstü afişler, broşürler veya sosyal medya kampanyaları olabilir.
                        <br /><br />
                        Sonuç olarak, Arlan Medya olarak Erzurum'daki restoranlar için özel QR menü tasarımı hizmeti sunuyoruz. Bu hizmet, Erzurum'un eşsiz lezzetlerini ve kültürünü yansıtan görsel olarak çekici ve işlevsel QR menüler oluşturmanıza olanak tanır.
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl max-md:w-full w-[80%] font-semibold max-md:text-2xl'>
                        Erzurum'daki restoranlar için QR menü kullanımı, müşteri memnuniyetini nasıl artırabilir?
                    </h4>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                        Erzurum'daki restoranlar için QR menü kullanımı, işletmelerin ve müşterilerin deneyimini modernize edebilir ve geleneksel kağıt menülerin yerini alabilir. QR menüler, müşterilere fiziksel menülere dokunmadan kolayca menüye erişme ve sipariş vermeleri imkanı sağlar. Bu da işletmeler için daha hijyenik bir çözüm sunar ve müşterilerin sağlık ve güvenlik endişelerini azaltır. <br /><br /> Ayrıca, QR menülerin dijital formatı, işletmelerin menüyü kolayca güncellemesine olanak tanır ve kağıt israfını azaltır. Bu özellikler, restoran işletmecilerine operasyonel esneklik sağlayarak işletmelerinin verimliliğini artırabilir. Bununla birlikte, QR menü kullanımı için gerekli olan akıllı telefon veya internet erişimi olmayan bazı müşteriler için erişilebilirlik bir zorluk olabilir. Bu durumda, işletmelerin kağıt menü seçeneğini koruması veya alternatif çözümler sunması gerekebilir.
                    </p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-4xl max-md:w-full w-[80%] font-semibold max-md:text-2xl'>
                        Arlanmedya qr menü sistemi ne kadar sürede hazırlanır
                    </h4>
                    <p className='w-[70%] max-md:w-full font-semibold opacity-80 text-sm'>
                    Arlan Medya olarak, Erzurum QR Menü hizmetimizi hızlı bir şekilde sunuyoruz. QR menünüzü genellikle 3 ila 7 iş günü içinde hazırlayabiliriz. <br /><br /> Bu süre, işletmenizin taleplerine ve QR menüsünün karmaşıklığına bağlı olarak değişebilir. Ancak, müşterilerimize en hızlı ve verimli hizmeti sunmak için elimizden geleni yapıyoruz.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page