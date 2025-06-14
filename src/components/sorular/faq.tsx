"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.3, ease: "easeOut" },
  }),
};

export default function AccordionDemo() {
  const items = [
    {
      value: "item-1",
      title: "Neden Qr Menü kullanmalıyım?",
      content:
        "QR menü, bir işletmenin menüsünü veya ürünlerini QR kodu formatında dijital olarak sunan bir hizmettir. QR kodu, bir akıllı telefon veya tablet gibi mobil cihazlar tarafından taranabilir ve tarandıktan sonra kullanıcıyı bir web sayfasına veya uygulamaya yönlendirir, bu sayede kullanıcılar menüyü kolayca görebilir ve sipariş verebilirler. QR menü kullanarak müşterilerinizin menünüze daha hızlı ve kolay bir şekilde erişmelerini sağlayabilir, aynı zamanda işletmenizin dijital dönüşümünü destekleyebilirsiniz.",
    },
    {
      value: "item-5",
      title: "QR menülerin sosyal medya stratejileriyle nasıl entegre edilebilir?",
      content:
        `QR menülerin sosyal medya stratejileriyle entegrasyonu, işletmenizin dijital varlığını güçlendirmek ve sosyal medya etkileşimini artırmak için harika bir fırsattır. İşte QR menülerinizi sosyal medya stratejileriyle nasıl entegre edebileceğinizin bazı yolları:

Sosyal Medya Hesaplarında Paylaşım: QR kodunu işletmenizin Facebook, Instagram, Twitter veya diğer sosyal medya platformlarındaki hesaplarınızda paylaşın. Bu, takipçilerinizin menünüze kolayca erişmesini sağlar.

Sosyal Medya Gönderilerinde Kullanım: Özel teklifler, güncellemeler veya etkinlik duyuruları gibi içeriklerle ilişkilendirilmiş QR kodlarını sosyal medya gönderilerinizde kullanın. Bu, takipçilerinizin QR kodunu taramalarını teşvik eder ve işletmenizin menüsüne veya özel fırsatlara erişmelerini sağlar.

Hikaye Paylaşımları: Instagram veya Facebook gibi platformlarda hikaye özelliğini kullanarak QR kodunu hikayelerinizde paylaşın. Kullanıcılar hikayenizi izlerken QR kodunu tarama şansına sahip olacaklar ve bu da onları menünüze yönlendirecektir.

Reklam Kampanyalarında Kullanım: Sosyal medya reklamlarınızda QR kodlarını kullanarak müşterilerinizi menünüze yönlendirin. Örneğin, bir reklam gönderisinde "Hemen Sipariş Ver" veya "Menümüzü Görüntüle" gibi çağrılarla birlikte QR kodunu paylaşabilirsiniz.

Etkileşimli Yarışmalar ve Promosyonlar: QR kodlarını sosyal medya yarışmalarına veya promosyonlara entegre ederek kullanıcıların katılımını teşvik edin. Örneğin, bir yemek siparişi veren veya işletmenizi ziyaret eden herkese özel bir indirim sunmak için QR kodlarını kullanabilirsiniz.

Sosyal Medya Profil Bağlantılarına Eklemek: İşletmenizin sosyal medya profillerinde QR koduna doğrudan erişim sağlayacak bağlantılar ekleyin. Bu, profil ziyaretçilerinin QR kodunu hemen tarayarak menünüze erişmelerini sağlar.

Bu stratejiler, QR menülerinizi sosyal medya ile entegre etmenin yalnızca birkaç örneğidir. Sosyal medyanın işletmenizin görünürlüğünü artırması ve müşteri etkileşimini artırması açısından QR menülerinizi sosyal medya stratejilerinizle birleştirmek önemlidir.`,
    },
    {
      value: "item-6",
      title: "QR kodunu nasıl tararım ve menüye nasıl erişirim?",
      content:
        `QR kodunu tarayarak menüye erişmek oldukça basittir. İşte adım adım nasıl yapılacağı:

Mobil Cihazınızı Hazırlayın: QR kodunu tarayabilmek için bir akıllı telefon veya tablet kullanmanız gerekmektedir. QR kodunu tarayabilecek bir QR kod tarayıcı uygulaması indirmeniz veya cihazınızın kamerasını kullanarak QR kodunu tarayabilecek bir tarayıcıya sahip olmanız gerekmektedir.

QR Kodunu Tarayın: QR kodu tarayıcı uygulamasını veya cihazınızın kamera uygulamasını açın. Ardından, QR kodunu fiziksel olarak gördüğünüz yerden tarayın. QR kodunu tarayabilmek için, kameranızı QR koduna odaklayın ve kodu kare içine alın. QR kodunu tarayıcı uygulamanız kodu otomatik olarak tanıyacak ve işlem yapmak için size bir seçenek sunacaktır.

Menüye Erişin: QR kodu tarandıktan sonra, genellikle cihazınız size bir bağlantı veya web adresi gösterecektir. Bu bağlantıya veya web adresine tıkladığınızda, tarayıcınız menüye veya ilgili içeriğe otomatik olarak yönlendirilecektir. Böylece, işletmenin menüsüne veya ilgili dijital içeriğe kolayca erişmiş olursunuz.

QR kodunu taradığınızda herhangi bir sorunla karşılaşırsanız, işletmenin çalışanlarından veya destek ekibinden yardım isteyebilirsiniz.`,
    },
    {
      value: "item-7",
      title: "QR menülerin sağladığı hijyen ve güvenlik avantajları nelerdir?",
      content:
        `QR menülerin sağladığı hijyen ve güvenlik avantajları şunlardır:

Teması Azaltma: QR menüler, fiziksel olarak menüyü elden ele geçirme ihtiyacını ortadan kaldırır. Müşteriler, QR kodunu tarayarak menüye erişebilirler, böylece teması azaltarak hijyen standartlarını artırırlar.

Kağıt İsrafının Azalması: Fiziksel menülerin sürekli olarak basılması ve yenilenmesi kağıt israfına neden olabilir. QR menüler, kağıt tüketimini azaltarak çevre dostu bir alternatif sunar.

Anlık Güncelleme ve Esneklik: QR menüler, anlık olarak güncellenebilir ve değiştirilebilir. Bu, özel teklifler, yeni ürünler veya fiyat değişiklikleri gibi güncellemelerin hızlı bir şekilde yansıtılmasını sağlar.

Hijyen Standartlarının İyileştirilmesi: QR menülerin kullanımıyla, restoran veya işletmelerde hijyen standartları daha kolay bir şekilde uygulanabilir ve korunabilir. Bu da müşterilerin güvenini artırır.

Daha Az Fiziksel Temas, Daha Az Mikrop: Fiziksel menülerin her kullanımdan sonra temizlenmesi gerekebilir ve bu da zaman alıcı olabilir. QR menülerde ise müşteriler kendi cihazlarını kullanarak menüye erişirler, böylece fiziksel temas ve mikrop yayılma riski azalır.

Bu avantajlar, QR menülerin hijyen ve güvenlik açısından sağladığı önemli faydalardan sadece birkaçıdır. Bu nedenle, birçok restoran ve işletme, QR menülerin kullanımını artırarak müşteri güvenini ve memnuniyetini artırmayı hedeflemektedir.`,
    },
  ];

  return (
    <Accordion type="single" collapsible className="w-full xl:w-[80%]">
      {items.map(({ value, title, content }, i) => (
        <motion.div
          key={value}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={i}
          variants={fadeUpItem}
          className="w-full"
        >
          <AccordionItem value={value}>
            <AccordionTrigger className="font-bold text-xl max-md:text-base">
              {title}
            </AccordionTrigger>
            <AccordionContent>{content}</AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
