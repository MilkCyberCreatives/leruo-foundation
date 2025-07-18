'use client';
import React from 'react';
import TopBar from '@/components/TopBar';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';

export default function SponsorshipPackagesPage() {
  return (
    <>
      <TopBar />
      <MainHeader />

      {/* Hero Section */}
      <section className="bg-[#48101f] text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sponsorship Packages</h1>
          <p className="text-lg md:text-xl">
            Help build a brighter future by supporting youth entrepreneurship.
          </p>
        </div>
      </section>

      {/* Sponsorship Table Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#48101f] text-center mb-12">
            Why Partner with Leruo Foundation&apos;s Youthpreneurs Programme
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-10">
            Your sponsorship will help us:
          </p>
          <ul className="text-gray-700 max-w-2xl mx-auto mb-16 list-disc list-inside space-y-2">
            <li>Provide young business owners with essential tools and resources.</li>
            <li>Connect Youthpreneurs with experienced mentors.</li>
            <li>Deliver leadership development programmes.</li>
            <li>Build a thriving entrepreneurial community in South Africa.</li>
          </ul>

          {/* Sponsorship Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <thead className="bg-[#f5f0f0] text-[#48101f]">
                <tr>
                  <th className="px-6 py-4 text-left text-xl font-semibold">Tier</th>
                  <th className="px-6 py-4 text-left text-xl font-semibold">Your Impact</th>
                  <th className="px-6 py-4 text-left text-xl font-semibold">Your Benefits</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="border-t">
                  <td className="px-6 py-6 align-top">
                    <span className="text-xl font-bold text-[#48101f]">Platinum Partner</span>
                    <br />
                    <span className="text-sm text-gray-500">(R100,000+)</span>
                  </td>
                  <td className="px-6 py-6 align-top">
                    Full sponsorship of the Youthpreneurs Programme, including workshops, mentorship sessions, and a pitch competition.
                  </td>
                  <td className="px-6 py-6 align-top">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Logo placement on all materials, social media, and website.</li>
                      <li>Recognition during opening and closing ceremonies.</li>
                      <li>Co-host or keynote opportunity.</li>
                      <li>Post-event reports and success stories access.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="bg-gray-50 border-t">
                  <td className="px-6 py-6 align-top">
                    <span className="text-xl font-bold text-[#48101f]">Gold Partner</span>
                    <br />
                    <span className="text-sm text-gray-500">(R50,000 – R99,999)</span>
                  </td>
                  <td className="px-6 py-6 align-top">
                    Support key programme activities like educational sessions and networking events.
                  </td>
                  <td className="px-6 py-6 align-top">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Logo placement on social media and signage.</li>
                      <li>Recognition in press and event communication.</li>
                      <li>Invitation to attend and network.</li>
                    </ul>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="px-6 py-6 align-top">
                    <span className="text-xl font-bold text-[#48101f]">Silver Partner</span>
                    <br />
                    <span className="text-sm text-gray-500">(R20,000 – R49,999)</span>
                  </td>
                  <td className="px-6 py-6 align-top">
                    Contribute to mentorship programmes and resource development.
                  </td>
                  <td className="px-6 py-6 align-top">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Logo placement on event-day collateral.</li>
                      <li>Acknowledgment in speeches.</li>
                      <li>Branded giveaways opportunity.</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center mt-16 text-2xl font-bold text-[#48101f]">
            Let&apos;s build a brighter, entrepreneurial future together!
          </p>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
