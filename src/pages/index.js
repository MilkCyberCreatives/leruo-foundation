'use client';

import TopBar from '../components/TopBar';
import HeroBanner from '../components/HeroBanner';
import AboutSection from '../components/AboutSection';
import FeaturedEvents from '../components/FeaturedEvents';
import TeamSection from '../components/TeamSection';
import CTABanner from '../components/CTABanner';
import MainHeader from '@/components/MainHeader';
import SponsorsSection from '../components/SponsorsSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <>
      <TopBar />
      <MainHeader />
      <HeroBanner />
      <AboutSection />
      <FeaturedEvents />
      <TeamSection />
      <CTABanner />
      <SponsorsSection />
      <FooterSection />
    </>
  );
}
