'use client';
import React from 'react';

export default function AboutHero() {
  return (
    <section
      className="relative h-[35vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
    >
      {/* Maroon overlay */}
      <div className="absolute inset-0 bg-[#48101f] opacity-80 z-0" />

      {/* Text content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          About Leruo Foundation
        </h1>
        <p className="text-sm md:text-base max-w-xl mx-auto">
          Empowering Generations Through Legacy, Leadership & Opportunity.
        </p>
      </div>
    </section>
  );
}
