import React from 'react'
import { useNavigate } from 'react-router';

const NavbarMenu = () => {
    const navigate= useNavigate();
   
      
    return (
        <div className='flex items-center  cursor-pointer  '>
            <ul className='flex items-center gap-10 '>
            <li className='hover:text-red-500 ::selection:underline' onClick={()=>navigate(`/`)}>HOME</li>
            <li className='hover:text-red-500 ' onClick={()=>navigate(`About`)}>ABOUT</li>
            <li className='hover:text-red-500 ' onClick={()=>navigate(`Blog`)}>BLOG</li>
            <li className='hover:text-red-500 ' onClick={()=>navigate(`Contact`)}> CONTACT US</li>
            <li className='hover:text-red-500 ' onClick={()=>navigate(`Shop`)}>SHOP</li>
            <button className='hover:text-red-500 active:bg-violet-700 ' onClick={()=>navigate("Login")}>LOG IN</button>
          
        </ul>
        </div>
    )
}

export default NavbarMenu