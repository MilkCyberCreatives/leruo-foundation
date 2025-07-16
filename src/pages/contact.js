'use client';
import TopBar from '../components/TopBar';
import MainHeader from '../components/MainHeader';
import ContactHero from '../components/ContactHero';
import ContactSection from '../components/ContactSection';
import GoogleMapSection from '../components/GoogleMapSection';
import FooterSection from '../components/FooterSection';

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <MainHeader />
      <ContactHero />
      <ContactSection />
      <GoogleMapSection />
      <FooterSection />
    </>
  );
}
