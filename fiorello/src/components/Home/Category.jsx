import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/CategorySlice';

const Category = ({setCategory}) => {
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)
    console.log(categories, "category");

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    return (
        <div className='flex items-center justify-start  gap-5'  >
      
            {
                categories?.map((category, i) => (
                    <div  className=' capitalize cursor-pointer hover:text-red-500   '  onClick={()=>setCategory(category)} key={i} >{category}</div>
                ))
            }
      
        </div>
   
       
    )
}

export default Category