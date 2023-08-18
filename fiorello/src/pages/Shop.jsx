import React, { useEffect, useState } from 'react'
import PageContainer from '../containers/PageContainer'
import Sorting from '../components/Home/Sorting';
import Products from '../components/Home/Products';
import ShopCategory from '../components/Home/ShopCategory';

const Shop = ({ }) => {

  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");




  return (
    <PageContainer>
      <div className='h-60 place-items-start  '>
        <div className='pt-7'>
        <p className='text-5xl mb-2'>Product List</p>
        <p className='text-slate-550 text-base '>Where flowers are our inspiration</p>
        </div>

      </div>
      <div className='flex'>
        <div className='w-1/4' >
          <p className='py-3 select-none text-xl text-slate-550 '>Categories</p>
          <ShopCategory setCategory={setCategory} />


          {/* <div className=' h-screen flex flex-col justify-center items-center;'>
          <div className=' w-[220px] m-0 p-0 border-0;'>
            <div className='relative w-full h-9 box-border pl-4 pt-[15px] rounded-[3px];
background: rgba(248, 247, 244, 0.2);'>
              <input className='absolute w-[188px] h-0.5 box-border pointer-events-none rounded-[5px] border-0;' type="range" />
              <input className=' outline: 0;
-webkit-appearance: none;' type="range" />
            </div>
          </div>
        </div> */}
        </div>
        <div className='w-3/4'>
          <Sorting setSort={setSort} />
          <Products  category={category} sort={sort} />
        </div>
      </div>







    </PageContainer>



  )
}


export default Shop