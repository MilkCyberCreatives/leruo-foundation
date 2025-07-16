// components/YouthpreneursIncubation.jsx
'use client';
import React from 'react';

export default function YouthpreneursIncubation() {
  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-leruo mb-6">
            Changemakers Incubation Program
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The 10-month incubation <strong>Changemakers Program</strong> by the Leruo Foundation NPO for Youthpreneurs 
            is designed to empower and support young entrepreneurs in their journey toward building sustainable businesses.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This program focuses on equipping youth with the essential skills, knowledge, and resources to develop 
            innovative and impactful business ventures.
          </p>
        </div>

        {/* Right: Program Summary + Download Button */}
        <div className="bg-white border border-leruo rounded-xl shadow-lg p-8 text-center flex flex-col justify-between">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-leruo mb-2">📅 Program Duration</h3>
            <p className="text-lg font-medium text-gray-800 mb-1">10 Months</p>
            <p className="text-gray-600 text-sm">
              Mentorship · Business Training · Pitch Practice · Branding & More
            </p>
          </div>
          <div className="mt-6">
            <a
              href="/pdfs/youthpreneurs-changemakers.pdf"
              className="inline-block bg-leruo text-white font-medium px-5 py-2.5 rounded-full hover:bg-[#3a0e1a] transition"
              download
            >
              📄 Download Program Guide
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
