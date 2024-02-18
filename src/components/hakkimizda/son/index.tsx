import React from 'react'

const index = () => {
    return (
        <div className='bg-white py-20'>
            <div className='w-[40%] max-lg:w-[80%] max-md:w-[95%] m-auto flex flex-col gap-10'>
                <h3 className='text-4xl font-fontpopins font-bold'>Ne yapıyoruz?</h3>
                <p className='w-full font-semibold '>Arlan Medya olarak, müşterilerimize çeşitli dijital pazarlama hizmetleri sunuyoruz. Bu hizmetler arasında web tasarımı, sosyal medya yönetimi, dijital reklam kampanyaları, içerik pazarlaması ve SEO (Arama Motoru Optimizasyonu) stratejileri gibi alanlarda uzmanlık bulunmaktadır. Müşterilerimizin ihtiyaçlarına göre özelleştirilmiş çözümler sunarak, işletmelerinin dijital varlıklarını güçlendirmeye ve çevrimiçi başarılarını artırmaya odaklanıyoruz. Müşteri memnuniyetini ve başarısını en üst düzeyde tutarak, her zaman kaliteli ve etkili hizmetler sunmaya çalışıyoruz.</p>
            </div>
            <div className='w-[40%] max-lg:[80%] max-md:w-[95%] m-auto mt-10 '>
                <img className='rounded-3xl' src="hakmock.jpg" alt="qr mockup" />
            </div>
            <div className='w-[40%] max-lg:w-[80%] max-md:w-[95%] flex flex-col gap-7 m-auto mt-14 '>
                <h3 className='text-4xl font-fontpopins font-bold'>Neden Bizi Seçmelisiniz?</h3>

                <div className='flex gap-10 max-md:flex-col  '>
                    <p className='text-sm font-semibold'>Arlan Medya olarak, müşterilerimize sunduğumuz özelleştirilmiş dijital pazarlama çözümleriyle işletmelerinin çevrimiçi varlığını güçlendiriyoruz. Deneyimli ve uzman ekibimiz, her müşterinin benzersiz ihtiyaçlarına uygun stratejiler geliştirerek, onların dijital hedeflerine ulaşmalarına yardımcı oluyor. Müşteri memnuniyetini her zaman öncelik olarak belirleyerek, etkili ve sonuç odaklı çalışmalarımızla sektörde fark oluşturuyoruz!</p>
                    <p className='text-sm font-semibold'>Müşterilerimiz için en iyi sonuçları elde etmek adına sürekli olarak kendimizi yeniliyor ve geliştiriyoruz. Size özel çözümler sunmak ve işletmenizi çevrimiçi başarıya taşımak için Arlan Medya'yı tercih etmeniz, dijital hedeflerinizi gerçekleştirmeniz için en doğru adım olacaktır.</p>
                </div>
            </div>
        </div>
    )
}

export default index