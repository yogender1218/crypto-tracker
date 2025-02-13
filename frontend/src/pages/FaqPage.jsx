import React from 'react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { NavbarMinimal } from '../components/NavBarMinimal';
import { FooterLinks } from '@/components/FooterLinks';
import classes from './FaqPage.module.css';
import { Outlet } from 'react-router-dom';
import { FaqSimple } from '@/components/FaqSimple';
function FaqPage() {
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
        <FaqSimple></FaqSimple>
        <FooterLinks></FooterLinks>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default FaqPage