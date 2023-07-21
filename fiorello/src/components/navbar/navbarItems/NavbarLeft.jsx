import React from 'react'
import logo from '../../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'
const NavbarLeft = () => {
  const navigate= useNavigate()
  return (
    <div ><img onClick={()=>navigate("/")} className='w-49 h-8' src={logo} alt="logo" /></div>
  )
}

export default NavbarLeft