import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const bilgiler = () => {
    return (
        <div id='ulaş' className='mt-24 mb-16 max-md:mt-16'>
            {/* Header */}
            <div className='text-center mb-16'>
                <h2 className='text-5xl md:text-6xl font-bold text-white mb-4'>
                    <span className='bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                        Sosyal Medyamızda Bize Katılın
                    </span>
                </h2>
                <p className='text-gray-400 text-lg'>En son haberler ve güncellemeler için takip edin</p>
            </div>

            {/* Social Media Links */}
            <div className='max-w-4xl mx-auto'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16'>
                    {[
                        { name: 'Instagram', icon: 'logosvg/ınstagram.svg', url: 'https://www.instagram.com/arlanmedya/', color: 'from-pink-500 to-purple-500' },
                        { name: 'Facebook', icon: 'logosvg/facebook.svg', url: 'https://www.facebook.com/profile.php?id=61552451652567&paipv=0&eav=Afazva3lQXsO8wlU165om_7H6NcrVX-jTE6xkmllfgDo-svhTgWjynqU3FpaGMYRFdo', color: 'from-blue-600 to-blue-400' },
                        { name: 'LinkedIn', icon: 'logosvg/linkedn.svg', url: 'https://www.linkedin.com/company/arlan-medya', color: 'from-blue-700 to-cyan-600' },
                        { name: 'X', icon: 'logosvg/x.svg', url: 'https://twitter.com/arlanmedya', color: 'from-gray-300 to-gray-400' },
                        { name: 'YouTube', icon: 'logosvg/youtube.svg', url: 'https://www.youtube.com/@ArlanMedya', color: 'from-red-600 to-red-500' },
                        { name: 'Pinterest', icon: 'logosvg/pinterest.svg', url: 'https://tr.pinterest.com/arlanmedya/', color: 'from-red-700 to-orange-500' },
                    ].map((social, i) => (
                        <a 
                            key={i}
                            href={social.url}
                            target='_blank' 
                            rel='noopener noreferrer'
                            title={`Arlan Medya ${social.name}`}
                            className={`group bg-gradient-to-br ${social.color} p-0.5 rounded-xl transition transform hover:scale-110 hover:shadow-lg`}
                            style={{ boxShadow: 'none' }}
                        >
                            <div className='bg-slate-900 rounded-[10px] w-full h-full flex items-center justify-center group-hover:bg-opacity-80 transition p-4'>
                                <img src={social.icon} alt={social.name} className='w-8 h-8 filter group-hover:brightness-125 transition' />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Contact Summary */}
            <div className='max-w-4xl mx-auto mt-20 pt-16 border-t border-slate-700'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='text-center'>
                        <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                            <Phone className='w-8 h-8 text-white' />
                        </div>
                        <h3 className='text-white font-bold mb-2'>Telefonla Arayın</h3>
                        <p className='text-gray-400'>+90 530 746 4899</p>
                    </div>
                    <div className='text-center'>
                        <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                            <Mail className='w-8 h-8 text-white' />
                        </div>
                        <h3 className='text-white font-bold mb-2'>Email Gönderin</h3>
                        <p className='text-gray-400'>arlanmedya@gmail.com</p>
                    </div>
                    <div className='text-center'>
                        <div className='w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                            <MapPin className='w-8 h-8 text-white' />
                        </div>
                        <h3 className='text-white font-bold mb-2'>Ziyaret Edin</h3>
                        <p className='text-gray-400'>Lalapaşa, 25010 Yakutiye/Erzurum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default bilgiler