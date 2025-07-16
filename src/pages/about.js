'use client';
import React from 'react';
import TopBar from '../components/TopBar';
import MainHeader from '../components/MainHeader';
import AboutHero from '../components/AboutHero';
import AboutIntro from '../components/AboutIntro';
// Comment these for now
import AboutImpact from '../components/AboutImpact';
import TeamSection from '../components/TeamSection';
import FooterSection from '../components/FooterSection';

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <MainHeader />
      <main>
        <AboutHero />
        <AboutIntro />
        <AboutImpact />
        <TeamSection />
      </main>
      <FooterSection />
    </>
  );
}
