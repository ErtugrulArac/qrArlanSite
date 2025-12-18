import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Form from './form'
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const index = () => {
    return (
        <div className='w-[90%] max-xl:w-[95%] m-auto'>
            {/* Header Section */}
            <div className='text-center mb-16'>
                <h2 className='text-5xl md:text-6xl font-bold text-white mb-4'>
                    Bize <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>Ulaşın</span>
                </h2>
                <p className='text-xl text-gray-300'>Sorularınız mı var? Biz buradayız yardımcı olmak için.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* Left Side - Form & Info */}
                <div className='space-y-8'>
                    {/* Contact Card */}
                    <div className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50'>
                        <div className='flex items-start gap-4 mb-6'>
                            <Avatar className='size-16 border-2 border-purple-500/50'>
                                <AvatarImage src="yazısız4.webp" />
                                <AvatarFallback>AR</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className='text-white text-xl font-bold'>Arlan Medya</h3>
                                <p className='text-gray-400'>QR Menü Sistemi & Dijital Çözümler</p>
                            </div>
                        </div>
                        <p className='text-gray-300 leading-relaxed border-l-2 border-purple-500/50 pl-4'>
                            Merhaba! Arlan Medya olarak, işletmenizin dijital dönüşümü için en iyi çözümleri sunmaya hazırız. Herhangi bir sorunuz olursa, aşağıdaki iletişim bilgilerini kullanarak bize ulaşabilirsiniz.
                        </p>
                    </div>

                    {/* Quick Contact Info */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        <div className='bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition'>
                            <div className='flex items-center gap-3 mb-2'>
                                <Phone className='w-5 h-5 text-purple-400' />
                                <span className='text-gray-400 text-sm'>Telefon</span>
                            </div>
                            <p className='text-white font-semibold'>+90 530 746 4899</p>
                            <p className='text-gray-400 text-sm'>+90 544 782 4655</p>
                        </div>
                        <div className='bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition'>
                            <div className='flex items-center gap-3 mb-2'>
                                <Mail className='w-5 h-5 text-blue-400' />
                                <span className='text-gray-400 text-sm'>Email</span>
                            </div>
                            <p className='text-white font-semibold'>arlanmedya@gmail.com</p>
                        </div>
                        <div className='col-span-1 sm:col-span-2 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition'>
                            <div className='flex items-center gap-3 mb-2'>
                                <MapPin className='w-5 h-5 text-cyan-400' />
                                <span className='text-gray-400 text-sm'>Adres</span>
                            </div>
                            <p className='text-white font-semibold'>Lalapaşa, 25010 Yakutiye/Erzurum</p>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Link href="#form" className='block'>
                        <div className='bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition cursor-pointer transform hover:scale-105'>
                            <div className='text-center'>
                                <h4 className='text-white font-bold text-lg mb-2'>Hemen Teklif Alın</h4>
                                <p className='text-gray-200 text-sm'>QR Menü sistemi hakkında özel fiyat teklifi için aşağıdaki formu doldurun</p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Right Side - Map */}
                <div className='rounded-2xl overflow-hidden border border-slate-700/50 h-96 lg:h-auto min-h-96 shadow-2xl'>
                    <iframe 
                        className='w-full h-full'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12242.223970457842!2d41.2707265!3d39.9065722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2628a79910cc9b5f%3A0xd45613ce0f4c8482!2sArlan%20Medya%20-%20Dijital%20Reklam%20Ajans%C4%B1!5e0!3m2!1str!2str!4v1707910390807!5m2!1str!2str" 
                        style={{ backgroundColor: "black" }} 
                        loading="lazy"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex={0}
                    ></iframe>
                </div>
            </div>

            {/* Form Section */}
            <div id='form' className='mt-16'>
                <Form />
            </div>
        </div>
    )
}

export default index