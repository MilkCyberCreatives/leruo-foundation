'use client';
import React from 'react';

export default function YouthpreneursIntro() {
  const videoId = "dEWtSCfTUH0";

  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-leruo mb-6">
              Youthpreneurs Summit
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-base sm:text-lg leading-relaxed">
                Youthpreneurs Summit is our annual event that takes place on the 16th of June.
                The event is dedicated to the emerging class of young entrepreneurs who are
                passionate about starting and growing businesses.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                These young individuals—typically ranging from teenagers to early 30s—are breaking
                traditional barriers to entrepreneurship, leveraging technology, creativity, and new
                business models to launch startups across industries.
              </p>
            </div>
          </div>

          {/* Video Embed */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-md">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&modestbranding=1&rel=0`}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Youthpreneurs Program Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
