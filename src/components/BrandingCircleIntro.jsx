'use client';
import React, { useEffect } from 'react';

export default function BrandingCircleIntro() {
  useEffect(() => {
    // This helps ensure autoplay works on mobile devices
    if (typeof window !== 'undefined') {
      window.onload = function() {
        const iframe = document.querySelector('iframe');
        if (iframe) {
          iframe.src += "&autoplay=1";
        }
      };
    }
  }, []);

  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content - Left */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#48101f] leading-tight">
            What is Branding Circle?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Branding Circle is an initiative aimed at equipping entrepreneurs with the knowledge, tools,
            and mentorship needed to develop powerful brand identities that resonate with their target markets.
            Through interactive workshops, expert-led discussions, and real-life brand case studies, participants
            learn to build authentic and impactful brand strategies that drive business success.
          </p>
        </div>

        {/* Video Embed - Right - Enhanced Size with Autoplay */}
        <div className="w-full h-full min-h-[300px] lg:min-h-[400px] rounded-xl shadow-lg overflow-hidden">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dEWtSCfTUH0?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
            title="Branding Circle Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager"
          ></iframe>
        </div>
      </div>
    </section>
  );
}