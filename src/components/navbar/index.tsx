
import Linkler from './linkler'
import Mobilelink from './mobilelink'


const index = () => {
    return (
        <div className='bg-black   '>
            <div className='flex items-center justify-between w-[65%] m-auto max-md:w-[90%]'>
                <img className='w-20  max-md:w-16' src="logobeyaz.png" alt="" />
                <div className='flex items-center gap-7 md:hidden'><Mobilelink /></div>
                <div className='flex items-center gap-7 max-md:hidden '>
                    <Linkler />
                </div>
            </div>
        </div>
    )
}

export default index