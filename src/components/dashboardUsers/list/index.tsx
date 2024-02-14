
import React from 'react'
import { getMessage } from '@/actions/getMessages'

const index = async () => {

    const data = await getMessage();

    data.reverse();
    return (
        <div>
            <h1 className='text-center text-4xl font-bold'>Mail istekleri:</h1>
            <div className='flex justify-center items-center'>
                <div className='w-3/4'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='border border-black'>Email</th>
                                <th className='border border-black'>Name</th>
                                <th className='border border-black'>Text</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item: any, index: number) => (
                                <tr key={index}>
                                    <td className='border border-black'>{item.email}</td>
                                    <td className='border border-black'>{item.name}</td>
                                    <td className='border border-black'>{item.text}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default index