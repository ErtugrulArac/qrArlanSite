import React from 'react'

const bilgiler = () => {
    return (
        <div id='ulaş' className='flex flex-col items-center justify-center mt-28 max-md:mt-20 gap-8'>
            <h4 className='text-6xl max-md:text-4xl font-fontpopins'>-İLETİŞİM-</h4>
            <div className='flex flex-col items-center'>
                <p className='text-xl max-md:text-lg font-semibold'>+90 0530 746 4899</p>
                <p className='text-xl max-md:text-lg font-semibold'>+90 0544 782 4655</p>
                <p className='text-2xl max-md:text-lg'>arlanmedya@gmail.com</p>
            </div>
            <p> Lalapaşa, 25010 Yakutiye/Erzurum</p>
            <div className='flex gap-5 '>
                <a title='qr menü instagram' className='w-14 max-md:w-8' target='_blank' rel="nofollow" href="https://www.instagram.com/arlanmedya/">
                    <img src="logosvg/ınstagram.svg" alt="qr menü instagram" />
                </a>
                <a title='qr menü facebook' className='w-14 max-md:w-8' target='_blank' rel="nofollow" href="https://www.facebook.com/profile.php?id=61552451652567&paipv=0&eav=Afazva3lQXsO8wlU165om_7H6NcrVX-jTE6xkmllfgDo-svhTgWjynqU3FpaGMYRFdo">
                    <img src="logosvg/facebook.svg" alt="qr menü facebook" />
                </a>
                <a title='qr menü linkedn' className='w-14 max-md:w-8' target='_blank' rel="nofollow" href="https://www.linkedin.com/company/arlan-medya">
                    <img src="logosvg/linkedn.svg" alt="qr menü linkedn" />
                </a>
                <a title='qr menü x' className='w-14 max-md:w-8' target='_blank' rel="nofollow" href="https://twitter.com/arlanmedya">
                    <img src="logosvg/x.svg" alt="qr menü x" />
                </a>
                <a title='qr menü youtube' className='w-14 max-md:w-8' target='_blank' rel="nofollow" href="https://www.youtube.com/@ArlanMedya">
                    <img src="logosvg/youtube.svg" alt="qr menü youtube" />
                </a>
                <a title='qr menü pinterest' className='w-14 max-md:w-8' target='_blank' rel="nofollow" href="https://tr.pinterest.com/arlanmedya/">
                    <img src="logosvg/pinterest.svg" alt="qr menü pinterest" />
                </a>
            </div>
        </div>
    )
}

export default bilgiler