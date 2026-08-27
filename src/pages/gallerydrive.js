'use client';
import React from 'react';
import TopBar from '@/components/TopBar';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';

export default function GalleryDrive() {
  return (
    <>
      <TopBar />
      <MainHeader />

      {/* Hero Section */}
      <section className="relative h-[30vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
        <div className="absolute inset-0 bg-[#48101f] opacity-80 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Full Youthpreneurs Gallery</h1>
          <p className="text-lg mt-2">More incredible memories captured from the event.</p>
        </div>
      </section>

      {/* Embedded Grid View */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="w-full h-[80vh] shadow-lg rounded-xl overflow-hidden border border-gray-200">
          <iframe
            src="https://drive.google.com/embeddedfolderview?id=1kitpj8MPVKJxSY0OsFXVzFy3vyOyHBBd#grid"
            title="Full Youthpreneurs event photo gallery"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            style={{
              border: 'none',
              display: 'block',
              backgroundColor: '#f9f9f9',
            }}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
