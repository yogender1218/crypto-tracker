import React from 'react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { NavbarMinimal } from '../components/NavBarMinimal';
import { FooterLinks } from '@/components/FooterLinks';
import classes from './AnalyticsPage.module.css';
import { FeaturesTitle } from '@/components/FeaturesTitle';
import { Outlet } from 'react-router-dom';
function AnalyticsPage() {
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
         <FeaturesTitle></FeaturesTitle>
        <FooterLinks></FooterLinks>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default AnalyticsPage