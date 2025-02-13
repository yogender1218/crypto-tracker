import React from 'react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { NavbarMinimal } from '../components/NavBarMinimal';
import { FooterLinks } from '@/components/FooterLinks';
import classes from './SubReviews.module.css';
import { Outlet } from 'react-router-dom';
import EmailBanner from '@/components/EmailBanner';
import CardSlider from '@/components/CardSlider';
function SubReviews() {
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
        <EmailBanner></EmailBanner>
        <CardSlider></CardSlider>
        <FooterLinks></FooterLinks>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default SubReviews