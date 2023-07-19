import React, { useState } from 'react';
import SliderComp from '../components/Home/SliderComp';
import Category from '../components/Home/Category';
import Sorting from '../components/Home/Sorting';
import Products from '../components/Home/Products';

const Home = () => {
    const [sort,setSort]=useState("");
    const [category,setCategory]=useState("");
    return (
        <div>
            <SliderComp />
            <div className='flex items-center justify-between '>
                <Category setCategory={setCategory} />
                <Sorting setSort={setSort} />
            </div>
            <Products category={category} sort={sort} />
        </div>
    )
}

export default Home