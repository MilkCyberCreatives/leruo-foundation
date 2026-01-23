'use client';

import React from 'react';
import Image from 'next/image';

export default function BrandingCircleIntro() {
  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Text Content - Left */}
        <div className="space-y-6">
          <div className="inline-flex items-center rounded-full border border-[#48101f]/20 px-4 py-2">
            <span className="text-sm font-medium text-[#48101f]">
              branding chief executive circle sa
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#48101f] leading-tight">
            About Branding Chief Executive Circle SA
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Branding Chief Executive Circle SA is an initiative aimed at equipping entrepreneurs with the knowledge, tools,
            and mentorship needed to develop powerful brand identities that resonate with their target markets.
            Through interactive workshops, expert-led discussions, and real-life brand case studies, participants
            learn to build authentic and impactful brand strategies that drive business success.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700">
              high-level insights
            </span>
            <span className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700">
              executive networking
            </span>
            <span className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700">
              real-world case studies
            </span>
          </div>
        </div>

        {/* Image - Right (A4 fully visible, no effects) */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-[210/297]">
            <Image
              src="/bc-launch.jpg"
              alt="Branding Chief Executive Circle SA launch poster"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
