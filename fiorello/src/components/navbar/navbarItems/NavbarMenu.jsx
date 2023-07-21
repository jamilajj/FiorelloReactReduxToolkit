import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavbarMenu = () => {
    const navigate= useNavigate();
    return (
        <div className='flex items-center'>
            <ul className='flex items-center gap-10'>
            <li onClick={()=>navigate(`/`)}>HOME</li>
            <li>ABOUT</li>
            <li>BLOG</li>
            <li>CONTACT US</li>
            <li>FAQS</li>
            <li>LOG IN</li>
        </ul>
        </div>
    )
}

export default NavbarMenu