import React, { useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsFillBasketFill } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux"
import { getcardTotal } from '../../../redux/CardSlice'
import { useNavigate } from 'react-router-dom'

const NavbarRight = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { cards } = useSelector(state => state.cards)

    console.log(cards, "cards");

    useEffect(() => {
        dispatch(getcardTotal())
    }, [dispatch])
    return (
        <div className='flex items-center gap-8'>
            <div className='flex border p-3 items-center rounded-full bg-gray-200'>

                <input className='bg-gray-200 outline-none gap-10' type="text" placeholder='Search...' />
                <BiSearch size={25} />
            </div>

            <div onClick={()=>navigate("card") } className='relative' >
                <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{cards?.length}</div>
                <BsFillBasketFill size={28} />
            </div>
        </div>

    )
}

export default NavbarRight
