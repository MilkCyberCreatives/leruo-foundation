// pages/youthpreneurs.js
'use client';
import React from 'react';
import TopBar from '../components/TopBar';
import MainHeader from '../components/MainHeader';
import FooterSection from '../components/FooterSection';
import YouthpreneursHero from '../components/YouthpreneursHero';
import YouthpreneursIntro from '../components/YouthpreneursIntro';
import YouthpreneursChallenges from '../components/YouthpreneursChallenges';
import YouthpreneursIncubation from '../components/YouthpreneursIncubation';
import SponsorshipSection from '../components/SponsorshipSection';

export default function YouthpreneursPage() {
  return (
    <>
      <TopBar />
      <MainHeader />
      <main>
        <YouthpreneursHero />
        <YouthpreneursIntro />
        <YouthpreneursChallenges />
        <YouthpreneursIncubation />
        <SponsorshipSection />
      </main>
      <FooterSection />
    </>
  );
}
