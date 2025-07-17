'use client';
import React from 'react';
import { FaUsers, FaCalendarAlt, FaHandshake, FaChartLine, FaFileDownload, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function BrandingCircleWhyJoin() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Left Side - Benefits */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#48101f] mb-8">
            Why Join the Branding Chief Executive Circle SA?
          </h2>
          
          <ul className="space-y-6">
            {[
              { icon: <FaUsers className="text-lg" />, title: "Networking Opportunities", desc: "Connect with influential branding experts and entrepreneurs." },
              { icon: <FaCalendarAlt className="text-lg" />, title: "Exclusive Events", desc: "Access cutting-edge strategies from industry stakeholders." },
              { icon: <FaHandshake className="text-lg" />, title: "Collaborative Environment", desc: "Share knowledge with successful business owners." },
              { icon: <FaChartLine className="text-lg" />, title: "Growth & Development", desc: "Tailored mentorship for branding business owners." }
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-5 group">
                <div className="bg-[#48101f] group-hover:bg-[#5a1a2d] p-3 rounded-lg text-white transition-colors duration-300 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-[#48101f] mb-1">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - CTA with Visual Balance */}
        <div className="relative bg-white rounded-xl p-8 border border-[#48101f] shadow-sm flex flex-col">
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#f8f1f3] rounded-full z-0 hidden lg:block"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#f8f1f3] rounded-full z-0 hidden lg:block"></div>
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="mb-8 space-y-6 flex-grow">
              <h3 className="text-2xl font-semibold text-[#48101f]">Ready to Elevate Your Brand?</h3>
              <div className="space-y-4">
                <div className="bg-[#f8f1f3] p-4 rounded-lg border-l-4 border-[#48101f]">
                  <p className="text-gray-700 italic">"The Branding Circle transformed how we approach our market positioning."</p>
                  <p className="text-sm text-[#48101f] mt-2">- Current Member</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Join South Africa's premier community for branding executives and embark on a transformative professional journey.
                </p>
              </div>
            </div>

            <div className="mt-auto space-y-5">
              <div className="bg-[#f8f1f3] p-4 rounded-lg">
                <h4 className="font-medium text-[#48101f] mb-2">Simple Application Process:</h4>
                <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Download and complete the application form</li>
                  <li>Email to applications@brandingcircle.co.za</li>
                  <li>Receive approval within 3 business days</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/public/pdfs/BrandingChiefExecutiveCircleSA_ApplicationForm.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#48101f] hover:bg-[#5a1a2d] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                  download="BrandingChiefExecutiveCircleSA_ApplicationForm.pdf"
                >
                  <FaFileDownload /> Download Application
                </a>
                <Link
                  href="/contact"
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-[#48101f] text-[#48101f] hover:bg-[#f8f1f3] font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  <FaPhoneAlt /> Speak to Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}