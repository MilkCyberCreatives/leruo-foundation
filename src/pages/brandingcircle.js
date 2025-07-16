// pages/brandingcircle.js
import React from 'react';
import TopBar from '../components/TopBar';
import MainHeader from '../components/MainHeader';
import BrandingCircleHero from '../components/BrandingCircleHero';
import FooterSection from '../components/FooterSection';
import BrandingCircleIntro from '../components/BrandingCircleIntro';
import BrandingCircleMembership from '../components/BrandingCircleMembership';
import BrandingCircleWhyJoin from '@/components/BrandingCircleWhyJoin';


export default function BrandingCirclePage() {
  return (
    <>
      <TopBar />
      <MainHeader />
      <BrandingCircleHero />
      <BrandingCircleIntro />
      
      <BrandingCircleMembership />
      <BrandingCircleWhyJoin />
      {/* Additional sections will be added below */}
      <FooterSection />
    </>
  );
}
