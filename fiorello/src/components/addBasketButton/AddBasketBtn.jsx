import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCard } from '../../redux/CardSlice';


const AddBasketBtn = ({ product }) => {
    const dispatch = useDispatch();
    const addBasket = () => {
        dispatch(addToCard({ id: product?.id, title: product?.title, image: product?.image, price: product?.price, quantity: 1 }))
    }
    return (
        <div>
            <div onClick={addBasket} className='my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center'>Add to Card</div>
        </div>
    )
}

export default AddBasketBtn