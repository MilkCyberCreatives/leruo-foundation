import React from 'react';
import TopBar from '../components/TopBar';
import MainHeader from '../components/MainHeader';
import WomenCeoHero from '../components/WomenCeoHero';
import WomenCeoIntro from '../components/WomenCeoIntro'; // 👈 import here
import FooterSection from '../components/FooterSection';
import WomenCeoLaunchSection from '../components/WomenCeoLaunchSection';

export default function WomenCeoPage() {
  return (
    <>
      <TopBar />
      <MainHeader />
      <WomenCeoHero />
      {/* <WomenCeoIntro /> */}
      <WomenCeoLaunchSection />
      <FooterSection />
    </>
  );
}
