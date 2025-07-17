'use client';
import React from 'react';

export default function YouthpreneursIncubation() {
  return (
    <section className="bg-[#f9f2f1] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        
        {/* Left: Text Description */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <span className="inline-block bg-[#48101f] text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
              Empowering Youth Entrepreneurs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#48101f] mb-4 md:mb-6 leading-tight">
              Changemakers Incubation Program
            </h2>
          </div>
          <div className="space-y-5 text-gray-700 text-lg md:text-xl leading-relaxed">
            <p>
              The <strong className="text-[#48101f] font-semibold">10-month Changemakers Program</strong>, offered by the Leruo Foundation NPO, 
              empowers young entrepreneurs to build sustainable, impactful businesses.
            </p>
            <p>
              Through comprehensive training, mentorship, and resources, we help transform innovative ideas 
              into viable ventures that create social and economic value.
            </p>
            <p className="font-medium text-[#48101f]">
              Applications open for 2024 cohort starting March 1st.
            </p>
          </div>
        </div>

        {/* Right: Compact Program Summary */}
        <div className="bg-white border-2 border-[#48101f] rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-[#48101f] p-4 text-white text-center">
            <h3 className="text-xl font-bold">Program Highlights</h3>
          </div>
          <div className="p-6 md:p-8 space-y-8">
            {/* Info Blocks */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#48101f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Duration</p>
                  <h3 className="text-xl font-bold text-[#48101f]">10 Months</h3>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#48101f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Cohort Size</p>
                  <h3 className="text-xl font-bold text-[#48101f]">20 Entrepreneurs</h3>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-lg font-bold text-[#48101f] mb-4">What You'll Gain:</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f9f2f1] p-3 rounded-lg">
                  <h5 className="font-semibold text-[#48101f] mb-1">Mentorship</h5>
                  <p className="text-sm text-gray-700">1-on-1 guidance from industry experts</p>
                </div>
                <div className="bg-[#f9f2f1] p-3 rounded-lg">
                  <h5 className="font-semibold text-[#48101f] mb-1">Workshops</h5>
                  <p className="text-sm text-gray-700">Hands-on business training</p>
                </div>
                <div className="bg-[#f9f2f1] p-3 rounded-lg">
                  <h5 className="font-semibold text-[#48101f] mb-1">Funding Prep</h5>
                  <p className="text-sm text-gray-700">Investor pitch training</p>
                </div>
                <div className="bg-[#f9f2f1] p-3 rounded-lg">
                  <h5 className="font-semibold text-[#48101f] mb-1">Networking</h5>
                  <p className="text-sm text-gray-700">Connect with fellow entrepreneurs</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <a
                href="/pdfs/youthpreneurs-changemakers.pdf"
                className="flex items-center justify-center bg-[#48101f] hover:bg-[#3a0c19] text-white font-medium px-6 py-3 rounded-lg transition-colors"
                download
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Full Program Guide
              </a>
              <a
                href="#apply"
                className="flex items-center justify-center border-2 border-[#48101f] text-[#48101f] hover:bg-[#48101f] hover:text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Express Interest
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}