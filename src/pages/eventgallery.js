'use client';
import React from 'react';
import TopBar from '@/components/TopBar';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';
import EventGalleryHero from '@/components/EventGalleryHero';
import EventGalleryCards from '@/components/EventGalleryCards';

export default function EventGalleryPage() {
  return (
    <>
      <TopBar />
      <MainHeader />
      <EventGalleryHero />
      <EventGalleryCards />
      <FooterSection />
    </>
  );
}
