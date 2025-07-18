'use client';
import React from 'react';
import Link from 'next/link';
import TopBar from '@/components/TopBar';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';
import SponsorHero from '@/components/SponsorHero';
import {
  FaHandsHelping,
  FaMoneyBillWave,
  FaLightbulb,
  FaUserFriends,
  FaArrowRight
} from 'react-icons/fa';

export default function BecomeSponsorPage() {
  return (
    <>
      <TopBar />
      <MainHeader />
      <SponsorHero />

      {/* Section 1 */}
      <section className="bg-white py-20 px-6 animate-fade-in">
        <div className="max-w-6xl mx-auto text-center">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-2">
            <div className="bg-gradient-to-br from-[#f9f2e8] to-white p-8 rounded-2xl shadow-lg border border-[#f0e6e6] animate-float">
              <h3 className="text-2xl font-semibold text-[#48101f] mb-4">We Provide:</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="bg-[#48101f] text-[#ffc107] p-2 rounded-full mr-3 mt-1">
                    <FaHandsHelping className="text-sm" />
                  </span>
                  Mentorship & Training Programs
                </li>
                <li className="flex items-start">
                  <span className="bg-[#48101f] text-[#ffc107] p-2 rounded-full mr-3 mt-1">
                    <FaUserFriends className="text-sm" />
                  </span>
                  Networking & Collaboration
                </li>
                <li className="flex items-start">
                  <span className="bg-[#48101f] text-[#ffc107] p-2 rounded-full mr-3 mt-1">
                    <FaLightbulb className="text-sm" />
                  </span>
                  Workshops & Educational Events
                </li>
              </ul>
            </div>

            <div className="text-left animate-slide-up delay-200">
              <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-[#48101f]">
                <p className="text-gray-700 text-lg mb-6">
                  We aim to support small businesses and youth entrepreneurs create jobs, boost local economies, and foster innovation.
                </p>
                <p className="text-gray-700 text-lg font-medium">
                  Your partnership will expand that impact and help us reach even more aspiring entrepreneurs.
                </p>
              </div>
              <button className="mt-8 flex items-center text-[#48101f] font-semibold group">
                Learn more about our impact
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gradient-to-b from-[#faf5f3] to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#48101f] mb-16 animate-slide-up">
            Why Your Support <span className="text-[#ffc107]">Matters</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#f0e6e6] hover:shadow-xl transition-all duration-300 animate-fade-in delay-100">
              <h3 className="text-2xl font-semibold text-[#48101f] mb-6">Your Impact</h3>
              <ul className="space-y-5">
                <li className="flex items-start group">
                  <div className="bg-[#48101f] p-2 rounded-lg mr-4 transform group-hover:rotate-6 transition">
                    <FaLightbulb className="text-[#ffc107]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#48101f]">Access to Tools and Resources</h4>
                    <p className="text-gray-600 text-sm mt-1">Build business knowledge and skills</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-[#48101f] p-2 rounded-lg mr-4 transform group-hover:rotate-6 transition">
                    <FaUserFriends className="text-[#ffc107]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#48101f]">Mentorship Opportunities</h4>
                    <p className="text-gray-600 text-sm mt-1">Experienced guidance for entrepreneurs</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-[#48101f] p-2 rounded-lg mr-4 transform group-hover:rotate-6 transition">
                    <FaMoneyBillWave className="text-[#ffc107]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#48101f]">Seed Funding and Grants</h4>
                    <p className="text-gray-600 text-sm mt-1">Start or scale businesses</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#48101f] p-8 rounded-2xl text-white hover:shadow-xl transition-all duration-300 animate-fade-in delay-200">
              <h3 className="text-2xl font-semibold mb-6">Sponsorship Opportunities</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#ffc107] text-[#48101f] p-1 rounded-full mr-4 mt-1 flex-shrink-0">
                    <FaArrowRight className="text-xs" />
                  </div>
                  <div>
                    <h4 className="font-medium">Event Sponsorship</h4>
                    <p className="text-gray-300 text-sm mt-1">Youthpreneurs workshops & events</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#ffc107] text-[#48101f] p-1 rounded-full mr-4 mt-1 flex-shrink-0">
                    <FaArrowRight className="text-xs" />
                  </div>
                  <div>
                    <h4 className="font-medium">Business Pitch Competitions</h4>
                    <p className="text-gray-300 text-sm mt-1">Sponsor ideas with real potential</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#ffc107] text-[#48101f] p-1 rounded-full mr-4 mt-1 flex-shrink-0">
                    <FaArrowRight className="text-xs" />
                  </div>
                  <div>
                    <h4 className="font-medium">Program Sponsorship</h4>
                    <p className="text-gray-300 text-sm mt-1">Training and Changemakers Program</p>
                  </div>
                </div>
              </div>
              <a href="/sponsorshippackages" className="block mt-8 w-full">
  <button className="w-full bg-[#ffc107] text-[#48101f] py-3 rounded-lg font-semibold flex items-center justify-center group hover:bg-white transition">
    Explore Events Sponsorship Packages
    <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
  </button>
</a>

            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#48101f] mb-4 animate-slide-up">
              Ways You Can <span className="text-[#ffc107]">Contribute</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-slide-up delay-100">
              Choose the contribution method that best suits your objectives and resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaMoneyBillWave />,
                title: 'Monetary Support',
                description: 'Fund workshops, provide grants, or sponsor a program.',
                bg: 'bg-gradient-to-br from-[#f9f2e8] to-white'
              },
              {
                icon: <FaUserFriends />,
                title: 'Volunteer or Mentor',
                description: 'Offer expertise, lead workshops, or mentor entrepreneurs.',
                bg: 'bg-gradient-to-br from-[#f5f0ff] to-white'
              },
              {
                icon: <FaHandsHelping />,
                title: 'In-Kind Donations',
                description: 'Contribute venue space, services, or equipment for events.',
                bg: 'bg-gradient-to-br from-[#f0f7ff] to-white'
              },
              {
                icon: <FaLightbulb />,
                title: 'Partner With Us',
                description: 'Collaborate on programs aligned to your CSR goals.',
                bg: 'bg-gradient-to-br from-[#f0fff5] to-white'
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.bg} p-6 rounded-xl shadow-md border border-[#f0e6e6] hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in delay-${index * 100 + 200}`}
              >
                <div className="bg-[#48101f] text-[#ffc107] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#48101f] mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {/* <button className="text-sm text-[#48101f] font-medium flex items-center group">
                  Learn more
                  <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Section */}
      <section className="bg-gradient-to-b from-white to-[#faf5f3] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-[#48101f] mb-4">Ready to Make an Impact?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Join us in empowering the next generation of entrepreneurs and change-makers
          </p>

          {/* <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#f0e6e6] text-left mb-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-[#48101f] mb-6 text-center">Banking Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-500 text-sm">Bank</p>
                <p className="font-medium">FNB / RMB</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Account Holder</p>
                <p className="font-medium">Leruo Foundation NPC</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Account Type</p>
                <p className="font-medium">Gold Business Account</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Account Number</p>
                <p className="font-medium">63133839944</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-500 text-sm">Branch Code</p>
                <p className="font-medium">250655</p>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bankingdetails" legacyBehavior>
              <a className="bg-[#48101f] text-white px-8 py-4 rounded-full font-semibold shadow hover:bg-[#5a1a2b] transition flex items-center justify-center group">
                Partner With Us
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="bg-white text-[#48101f] px-8 py-4 rounded-full font-semibold shadow hover:bg-gray-50 transition flex items-center justify-center group border border-[#f0e6e6]">
                Contact Our Team
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
