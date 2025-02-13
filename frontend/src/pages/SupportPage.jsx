import React from 'react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { NavbarMinimal } from '../components/NavBarMinimal';
import { FooterLinks } from '@/components/FooterLinks';
import classes from './SupportPage.module.css';
import { Outlet } from 'react-router-dom';
import { GetInTouch } from '@/components/GetInTouch';
import { FaqSimple } from '@/components/FaqSimple';
function SupportPage() {
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
       <GetInTouch></GetInTouch>
        <FaqSimple></FaqSimple>
        <FooterLinks></FooterLinks>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default SupportPage