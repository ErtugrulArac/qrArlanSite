import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full xl:w-[80%]  ">
            <AccordionItem className="w-full" value="item-1">
                <AccordionTrigger className="font-bold text-xl max-md:text-base">Neden Qr Menü kullanmalıyım?</AccordionTrigger>
                <AccordionContent>
                    
                        QR menü, bir işletmenin menüsünü veya ürünlerini QR kodu formatında dijital olarak sunan bir hizmettir. QR kodu, bir akıllı telefon veya tablet gibi mobil cihazlar tarafından taranabilir ve tarandıktan sonra kullanıcıyı bir web sayfasına veya uygulamaya yönlendirir, bu sayede kullanıcılar menüyü kolayca görebilir ve sipariş verebilirler. QR menü kullanarak müşterilerinizin menünüze daha hızlı ve kolay bir şekilde erişmelerini sağlayabilir, aynı zamanda işletmenizin dijital dönüşümünü destekleyebilirsiniz.
                </AccordionContent>
            </AccordionItem>

    

            <AccordionItem value="item-5">
                <AccordionTrigger className="font-bold text-left text-xl max-md:text-base">QR menülerin sosyal medya stratejileriyle nasıl entegre edilebilir?</AccordionTrigger>
                <AccordionContent>
                    
                        QR menülerin sosyal medya stratejileriyle entegrasyonu, işletmenizin dijital varlığını güçlendirmek ve sosyal medya etkileşimini artırmak için harika bir fırsattır. İşte QR menülerinizi sosyal medya stratejileriyle nasıl entegre edebileceğinizin bazı yolları:
                        <br /><br />
                        Sosyal Medya Hesaplarında Paylaşım: QR kodunu işletmenizin Facebook, Instagram, Twitter veya diğer sosyal medya platformlarındaki hesaplarınızda paylaşın. Bu, takipçilerinizin menünüze kolayca erişmesini sağlar.
                        <br /><br />
                        Sosyal Medya Gönderilerinde Kullanım: Özel teklifler, güncellemeler veya etkinlik duyuruları gibi içeriklerle ilişkilendirilmiş QR kodlarını sosyal medya gönderilerinizde kullanın. Bu, takipçilerinizin QR kodunu taramalarını teşvik eder ve işletmenizin menüsüne veya özel fırsatlara erişmelerini sağlar.
                        <br /><br />
                        Hikaye Paylaşımları: Instagram veya Facebook gibi platformlarda hikaye özelliğini kullanarak QR kodunu hikayelerinizde paylaşın. Kullanıcılar hikayenizi izlerken QR kodunu tarama şansına sahip olacaklar ve bu da onları menünüze yönlendirecektir.
                        <br /><br />
                        Reklam Kampanyalarında Kullanım: Sosyal medya reklamlarınızda QR kodlarını kullanarak müşterilerinizi menünüze yönlendirin. Örneğin, bir reklam gönderisinde "Hemen Sipariş Ver" veya "Menümüzü Görüntüle" gibi çağrılarla birlikte QR kodunu paylaşabilirsiniz.
                        <br /><br />
                        Etkileşimli Yarışmalar ve Promosyonlar: QR kodlarını sosyal medya yarışmalarına veya promosyonlara entegre ederek kullanıcıların katılımını teşvik edin. Örneğin, bir yemek siparişi veren veya işletmenizi ziyaret eden herkese özel bir indirim sunmak için QR kodlarını kullanabilirsiniz.
                        <br /><br />
                        Sosyal Medya Profil Bağlantılarına Eklemek: İşletmenizin sosyal medya profillerinde QR koduna doğrudan erişim sağlayacak bağlantılar ekleyin. Bu, profil ziyaretçilerinin QR kodunu hemen tarayarak menünüze erişmelerini sağlar.
                        <br /><br />
                        Bu stratejiler, QR menülerinizi sosyal medya ile entegre etmenin yalnızca birkaç örneğidir. Sosyal medyanın işletmenizin görünürlüğünü artırması ve müşteri etkileşimini artırması açısından QR menülerinizi sosyal medya stratejilerinizle birleştirmek önemlidir.
                    
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger className="font-bold text-left text-xl max-md:text-base">QR kodunu nasıl tararım ve menüye nasıl erişirim?</AccordionTrigger>
                <AccordionContent>
                    
                        QR kodunu tarayarak menüye erişmek oldukça basittir. İşte adım adım nasıl yapılacağı:
                        <br /><br />
                        Mobil Cihazınızı Hazırlayın: QR kodunu tarayabilmek için bir akıllı telefon veya tablet kullanmanız gerekmektedir. QR kodunu tarayabilecek bir QR kod tarayıcı uygulaması indirmeniz veya cihazınızın kamerasını kullanarak QR kodunu tarayabilecek bir tarayıcıya sahip olmanız gerekmektedir.
                        <br /><br />
                        QR Kodunu Tarayın: QR kodu tarayıcı uygulamasını veya cihazınızın kamera uygulamasını açın. Ardından, QR kodunu fiziksel olarak gördüğünüz yerden tarayın. QR kodunu tarayabilmek için, kameranızı QR koduna odaklayın ve kodu kare içine alın. QR kodunu tarayıcı uygulamanız kodu otomatik olarak tanıyacak ve işlem yapmak için size bir seçenek sunacaktır.
                        <br /><br />
                        Menüye Erişin: QR kodu tarandıktan sonra, genellikle cihazınız size bir bağlantı veya web adresi gösterecektir. Bu bağlantıya veya web adresine tıkladığınızda, tarayıcınız menüye veya ilgili içeriğe otomatik olarak yönlendirilecektir. Böylece, işletmenin menüsüne veya ilgili dijital içeriğe kolayca erişmiş olursunuz.
                        <br /><br />
                        QR kodunu taradığınızda herhangi bir sorunla karşılaşırsanız, işletmenin çalışanlarından veya destek ekibinden yardım isteyebilirsiniz.
                    
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger className="font-bold text-left text-xl max-md:text-base">QR menülerin sağladığı hijyen ve güvenlik avantajları nelerdir?</AccordionTrigger>
                <AccordionContent>
                    
                        QR menülerin sağladığı hijyen ve güvenlik avantajları şunlardır:
                        <br /><br />

                        Teması Azaltma: QR menüler, fiziksel olarak menüyü elden ele geçirme ihtiyacını ortadan kaldırır. Müşteriler, QR kodunu tarayarak menüye erişebilirler, böylece teması azaltarak hijyen standartlarını artırırlar.
                        <br /><br />

                        Kağıt İsrafının Azalması: Fiziksel menülerin sürekli olarak basılması ve yenilenmesi kağıt israfına neden olabilir. QR menüler, kağıt tüketimini azaltarak çevre dostu bir alternatif sunar.
                        <br /><br />

                        Anlık Güncelleme ve Esneklik: QR menüler, anlık olarak güncellenebilir ve değiştirilebilir. Bu, özel teklifler, yeni ürünler veya fiyat değişiklikleri gibi güncellemelerin hızlı bir şekilde yansıtılmasını sağlar.
                        <br /><br />

                        Hijyen Standartlarının İyileştirilmesi: QR menülerin kullanımıyla, restoran veya işletmelerde hijyen standartları daha kolay bir şekilde uygulanabilir ve korunabilir. Bu da müşterilerin güvenini artırır.
                        <br /><br />

                        Daha Az Fiziksel Temas, Daha Az Mikrop: Fiziksel menülerin her kullanımdan sonra temizlenmesi gerekebilir ve bu da zaman alıcı olabilir. QR menülerde ise müşteriler kendi cihazlarını kullanarak menüye erişirler, böylece fiziksel temas ve mikrop yayılma riski azalır.
                        <br /><br />

                        Bu avantajlar, QR menülerin hijyen ve güvenlik açısından sağladığı önemli faydalardan sadece birkaçıdır. Bu nedenle, birçok restoran ve işletme, QR menülerin kullanımını artırarak müşteri güvenini ve memnuniyetini artırmayı hedeflemektedir.
                    
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}