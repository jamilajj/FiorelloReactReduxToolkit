import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
    ;
import { addToCard } from '../../redux/CardSlice';
import { useDispatch } from 'react-redux';


const Product = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addBasket = () => {
        dispatch(addToCard({ id: product?.id, title: product?.describtion, image: product?.image, price: product?.price, hoverimage: product?.hoverImage, quantity: 1 }))
    }

    return (
        <div className='w-[300px] h-[350px] p-3 mb-10 mx-5 border rounded-md relative cursor-pointer bg-white '>
            <div onClick={() => navigate(`/products/${product?.id}`)} >
                <div >
                <img src={`data:image/jpeg;base64,${product.image}`} alt={product.name} className='w-full h-40 object-cover absolute  rounded-md hover:opacity-0 ' />
                <img src={`data:image/jpeg;base64,${product.hoverImage}`}   className='w-full h-40 object-cover  rounded-md hover:opacity-100  ' />
                </div>
                
                <div className='text-center px-3 mt-3 text-l font-bold'>{product.description}</div>
                <div className='text-center rounded-md top-0 right-0  p-2 m-1 cursor-pointer text-gray-400'>{product.price}$</div>
            </div>

            {/* <AddBasketBtn /> */}
            <div onClick={addBasket} className='my-3 mx-8 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center'>Add to Card</div>
        </div>
        // <div onClick={()=>navigate(`products/${product?.id}`)} className="bg-white">
        //     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">


        //         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:gap-x-8">

        //             <div  className="group relative">
        //                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        //                     <img
        //                         src={product.image}
        //                         alt={product.imageAlt}
        //                         className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        //                     />
        //                 </div>
        //                 <div className="mt-4 text-center">
        //                     <div>
        //                         <h3 className="text-sm text-gray-700">
        //                             <a href={product.href}>
        //                                 <span aria-hidden="true" className="absolute inset-0" />
        //                                 {product.title}
        //                             </a>
        //                         </h3>
        //                     </div>
        //                     <p className="text-sm font-medium text-gray-400 mt-3 ">{product.price} <span>$</span></p> 
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )

}

export default Product