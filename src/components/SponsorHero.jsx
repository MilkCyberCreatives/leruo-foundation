'use client';
import React from 'react';

export default function SponsorHero() {
  return (
    <section
      className="relative h-[35vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#48101f] opacity-80 z-0" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Become A Sponsor</h1>
        <p className="text-lg mt-2">
          Partner with us to empower entrepreneurs and build brighter futures.
        </p>
      </div>
    </section>
  );
}
