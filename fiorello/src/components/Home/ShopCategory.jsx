import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/CategorySlice';

const ShopCategory = ({setCategory}) => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)
    console.log(categories, "category");

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div   className=' flex flex-col  '  >
      
            {
                categories?.map((category, i) => (
                    <div className='capitalize cursor-pointer hover:text-red-500 my-1.5 text-slate-500'  onClick={()=>setCategory(category)} key={i} >{category}</div>
                ))
            }
      
        </div>
   
       
    )
}

export default ShopCategory