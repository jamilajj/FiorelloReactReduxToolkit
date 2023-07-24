import React from 'react';
import NavbarLeft from './navbarItems/NavbarLeft';
import NavbarMenu from './navbarItems/NavbarMenu';
import NavbarRight from './navbarItems/NavbarRight';
import PageContainer from '../../containers/PageContainer';

const Navbar = () => {
  return (
    <PageContainer>
    <div className='flex items-center justify-between my-5 z-10  '>
     
        <NavbarLeft />
        <NavbarMenu />
        <NavbarRight />
   

    </div>
    </PageContainer>
  )
}

export default Navbar