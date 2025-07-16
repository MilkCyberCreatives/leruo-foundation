'use client';
import React from 'react';

export default function BrandingCircleIntro() {
  return (
    <section className="py-16 bg-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Left */}
        <div>
          <h2 className="text-3xl font-bold text-[#48101f] mb-4">What is Branding Circle?</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Branding Circle is an initiative aimed at equipping entrepreneurs with the knowledge, tools,
            and mentorship needed to develop powerful brand identities that resonate with their target markets.
            Through interactive workshops, expert-led discussions, and real-life brand case studies, participants
            learn to build authentic and impactful brand strategies that drive business success.
          </p>
        </div>

        {/* Video Right */}
        <div className="w-full h-full">
          <video
            className="w-full rounded-lg shadow-lg"
            controls
            preload="metadata"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
