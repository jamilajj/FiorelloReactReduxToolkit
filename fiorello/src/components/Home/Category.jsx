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
        <div  className=' bg-gray-100 flex items-center justify-start gap-5 '>
      
            {
                categories?.map((category, i) => (
                    <div onClick={()=>setCategory(category)} key={i} >{category}</div>
                ))
            }
      
        </div>
   
       
    )
}

export default Category