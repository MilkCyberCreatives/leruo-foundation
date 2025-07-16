'use client';
import React from 'react';

export default function YouthpreneursIntro() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content (Left) */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-leruo mb-6">
            What is the Youthpreneurs Program?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Youthpreneurs is our annual event that takes place on the 16th of June.
            The event is dedicated to the emerging class of young entrepreneurs who are
            passionate about starting and growing businesses, often with a fresh perspective,
            innovative ideas, and a drive to create positive change.
            <br /><br />
            These young individuals—typically ranging from teenagers to early 30s—are breaking
            traditional barriers to entrepreneurship, leveraging technology, creativity, and new
            business models to launch startups across industries like construction, tech, fashion,
            social enterprises, and more.
          </p>
        </div>

        {/* Video (Right) */}
        <div>
          <video
            src="/videos/hero.mp4"
            controls
            autoPlay
            muted={false}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
