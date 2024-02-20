import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Form from './form'

const index = () => {
    return (
        <div className='w-[70%] max-xl:w-[85%]  m-auto bg-black shadow-md shadow-gray-950 flex justify-center max-lg:flex-col max-md:w-[95%] rounded-lg text-white'>
            <div className='flex-1 py-10 flex flex-col gap-8 max-md:w-[90%] max-md:m-auto max-md:justify-start'>
                <h4 className='px-20 max-md:px-0 text-2xl max-md:text-xl font-semibold font-fontpopins '>Arlan Medya ile İletişime Geç</h4>
                <div className='px-20 max-md:px-0 max-md:text-xs  flex gap-5 items-center'>
                    <Avatar className='size-12'>
                        <AvatarImage src="yazısız4.webp" />
                        <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div className='border-gray-400 border-opacity-80 border py-2 px-2 rounded-lg'>
                        <p className='opacity-80 text-sm max-md:text-xs'>Merhaba, Ben Arlan Medya. Yardıma mı ihtiyacınız var? Aşağıdaki formu kullanabilir veya bize  sosyal medya  adreslerimizden bize ulaşabilirsiniz.</p>
                    </div>
                </div>
                <Form />
            </div>
            <div className='h-full flex-1 max-md:h-8 '>
                <iframe className='max-md:h-96 '   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12242.223970457842!2d41.2707265!3d39.9065722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2628a79910cc9b5f%3A0xd45613ce0f4c8482!2sArlan%20Medya%20-%20Dijital%20Reklam%20Ajans%C4%B1!5e0!3m2!1str!2str!4v1707910390807!5m2!1str!2str" width="100%" height="580" style={{ backgroundColor: "black" }} loading="lazy" ></iframe>
            </div>

        </div>
    )
}

export default index