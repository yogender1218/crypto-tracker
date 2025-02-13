import React from 'react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { NavbarMinimal } from '../components/NavBarMinimal';
import { FooterLinks } from '@/components/FooterLinks';
import classes from './NotFound.module.css';
import { Outlet } from 'react-router-dom';
import { NothingFoundBackground } from '@/components/NothingFoundBackground';
function NotFound() {
  return (
    <>
    <div className='position'>
      <div className={classes.header}>
        <HeaderMegaMenu></HeaderMegaMenu>
      </div>
      <div className={classes.navbar}>
        <NavbarMinimal></NavbarMinimal>
      </div>
      <div className={classes.hero}>
        <NothingFoundBackground></NothingFoundBackground>
        <FooterLinks></FooterLinks>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default NotFound