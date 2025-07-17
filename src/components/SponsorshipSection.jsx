'use client';
import React from 'react';

export default function SponsorshipSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#48101f] to-[#6a1a2f] text-white rounded-xl p-8 md:p-10 mb-12 md:mb-16 shadow-lg">
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Sponsorship Opportunities
            </h2>
            <p className="text-lg md:text-xl text-gray-100 opacity-90 leading-relaxed">
              We offer tailored sponsorship packages that align with your corporate social responsibility goals while creating meaningful impact for young entrepreneurs.
            </p>
          </div>
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Event Sponsorship */}
          <div className="border-2 border-[#48101f]/20 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#48101f]/40 group">
            <div className="flex items-start mb-6">
              <div className="bg-[#f9f2f1] p-3 rounded-lg mr-4 group-hover:bg-[#48101f] group-hover:text-white transition-colors">
                <svg className="w-6 h-6 text-[#48101f] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#48101f] mt-1">Event Sponsorship</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-[#f9f2f1] p-4 rounded-lg">
                <h4 className="font-semibold text-[#48101f] mb-1">Annual Youthpreneurs Summit</h4>
                <p className="text-gray-700 text-sm md:text-base">
                  Sponsor keynotes, workshops, and networking events that bring together hundreds of entrepreneurs and industry leaders.
                </p>
              </div>
              <div className="bg-[#f9f2f1] p-4 rounded-lg">
                <h4 className="font-semibold text-[#48101f] mb-1">Business Pitch Competitions</h4>
                <p className="text-gray-700 text-sm md:text-base">
                  Support emerging entrepreneurs as they present innovative ideas to investors, with branding opportunities throughout the event.
                </p>
              </div>
            </div>
          </div>

          {/* Program Sponsorship */}
          <div className="border-2 border-[#48101f]/20 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#48101f]/40 group">
            <div className="flex items-start mb-6">
              <div className="bg-[#f9f2f1] p-3 rounded-lg mr-4 group-hover:bg-[#48101f] group-hover:text-white transition-colors">
                <svg className="w-6 h-6 text-[#48101f] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#48101f] mt-1">Program Sponsorship</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-[#f9f2f1] p-4 rounded-lg">
                <h4 className="font-semibold text-[#48101f] mb-1">Youthpreneurs Training</h4>
                <p className="text-gray-700 text-sm md:text-base">
                  Fund educational programs that equip young entrepreneurs with essential business skills and mentorship.
                </p>
              </div>
              <div className="bg-[#f9f2f1] p-4 rounded-lg">
                <h4 className="font-semibold text-[#48101f] mb-1">Changemakers Accelerator</h4>
                <p className="text-gray-700 text-sm md:text-base">
                  Support intensive training and resources for entrepreneurs ready to scale their businesses to the next level.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* General Donations */}
        <div className="bg-[#f9f2f1] rounded-xl p-8 md:p-10 shadow-inner">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-6">
              <div className="bg-[#48101f] p-3 rounded-lg mr-4 text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#48101f] mt-1">General Donations & Partnerships</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Every contribution makes a difference in empowering the next generation of entrepreneurs. Your support helps fund:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-5">
                <li>Workshops and training programs</li>
                <li>Mentorship opportunities</li>
                <li>Networking events like the Women CEOs Breakfast</li>
                <li>Entrepreneurial resource development</li>
              </ul>
              <div className="bg-white p-4 rounded-lg border border-[#48101f]/20 mt-4">
                <h4 className="font-semibold text-[#48101f] mb-2">Partner Benefits Include:</h4>
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#48101f] mr-2">✓</span>
                    <span>Recognition as a key partner across all platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#48101f] mr-2">✓</span>
                    <span>Promotional opportunities at events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#48101f] mr-2">✓</span>
                    <span>Brand visibility in marketing materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#48101f] mr-2">✓</span>
                    <span>Networking with emerging entrepreneurs</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="contact"
                className="bg-[#48101f] hover:bg-[#3a0c19] text-white font-medium px-6 py-3 rounded-lg text-center transition-colors"
              >
                Discuss Partnership Opportunities
              </a>
              <a
                href="bankingdetails"
                className="border-2 border-[#48101f] text-[#48101f] hover:bg-[#48101f] hover:text-white font-medium px-6 py-3 rounded-lg text-center transition-colors"
              >
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}