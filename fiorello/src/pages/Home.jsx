import React, { useState } from 'react';
import SliderComp from '../components/Home/SliderComp';
import Category from '../components/Home/Category';
import Sorting from '../components/Home/Sorting';
import Products from '../components/Home/Products';
import VideoComp from '../components/video/VideoComp';
import VideoDescription from '../components/video/VideoDescription';
import HeaderComp from '../components/exsperts/HeaderComp';
import Experts from '../components/exsperts/Experts';
import PageContainer from '../containers/PageContainer';

const Home = () => {
    const [sort, setSort] = useState("");
    const [category, setCategory] = useState("");
    return (

        <div>
            <div className='mw-1000px'>
                <SliderComp />
            </div>


            <PageContainer>

                <div className='flex items-center justify-between '>
                
                    <Category  setCategory={setCategory} />
                 
                    <div>
                    <Sorting setSort={setSort} />
                    </div>
                 
                </div>
                <Products category={category} sort={sort} />
                <div className='flex items-center gap-12'>
                    <VideoComp />
                    <VideoDescription />
                </div>
                <div className=''>
                    <HeaderComp />
                    <Experts />
                </div>
   

            </PageContainer>




        </div>
    )
}

export default Home