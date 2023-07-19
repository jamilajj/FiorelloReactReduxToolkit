import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsFillBasketFill } from 'react-icons/bs'
const navbarRight = () => {
    return (
        <div className='flex items-center gap-8'>
            <div className='flex border p-3 items-center rounded-full bg-gray-200'>
           
            <input className='bg-gray-200 outline-none gap-10' type="text" placeholder='Search...' />
            <BiSearch size={25} />
            </div>
           
            <div className='relative' >
                <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>3</div>
                <BsFillBasketFill size={28} />
            </div>
        </div>

    )
}

export default navbarRight
