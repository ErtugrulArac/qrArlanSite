import React from 'react'

const index = () => {
    return (
        <div className='bg-white py-20'>
            <div className='w-[40%] max-lg:w-[80%] max-md:w-[95%] m-auto flex flex-col gap-10'>
                <h3 className='text-4xl font-fontpopins font-bold'>Ne yapıyoruz?</h3>
                <p className='w-full font-semibold '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis praesentium aspernatur a numquam sunt earum illum quaerat quisquam, fugit perspiciatis libero magni? Perspiciatis eaque qui, atque odit ratione sint quas.</p>
            </div>
            <div className='w-[40%] max-lg:[80%] max-md:w-[95%] m-auto mt-10 '>
                <img className='rounded-3xl' src="hakmock.jpg" alt="" />
            </div>
            <div className='w-[40%] max-lg:w-[80%] max-md:w-[95%] flex flex-col gap-7 m-auto mt-14 '>
                <h3 className='text-4xl font-fontpopins font-bold'>Neden Bizi Seçmelisiniz?</h3>

                <div className='flex gap-10 max-md:flex-col  '>
                    <p className='text-sm font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis tenetur assumenda animi! Accusantium voluptatum veritatis voluptas cum aut illo omnis, nemo qui quod, praesentium nam, reiciendis sed ullam dicta? Necessitatibus!</p>
                    <p className='text-sm font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ipsa voluptates nesciunt dolorum officiis placeat officia facere reiciendis eum error fugiat mollitia pariatur, totam esse, magnam non enim neque. Veritatis?</p>
                </div>
            </div>
        </div>
    )
}

export default index