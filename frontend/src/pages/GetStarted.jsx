import React from 'react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { ScrollProgress } from '../components/ui/scroll-progress';
import { AuthenticationForm } from '../components/AuthenticationForm';
import HotCoins from '../components/HotCoins';
import { NavbarMinimal } from '../components/NavBarMinimal';
import { FooterLinks } from '@/components/FooterLinks';
import  HeroText from '@/components/HeroText';
import { CardsCarousel } from '@/components/CardsCarousel';
import { FaqSimple } from '@/components/FaqSimple';
import { GetInTouch } from '@/components/GetInTouch';
import classes from './GetStarted.module.css';
import { EmailBanner } from '@/components/EmailBanner';
function GetStarted() {
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
        <ScrollProgress></ScrollProgress>
        <HeroText></HeroText>
        <AuthenticationForm></AuthenticationForm>
        <FaqSimple></FaqSimple>
        <GetInTouch></GetInTouch>
        {/* <EmailBanner></EmailBanner> */}
        {/* <CardsCarousel></CardsCarousel> */}
        {/* <HotCoins></HotCoins> */}
        <FooterLinks></FooterLinks>
      </div>
    </div>
         
    </>
  )
}

export default GetStarted