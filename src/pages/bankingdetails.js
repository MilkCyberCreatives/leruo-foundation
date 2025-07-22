'use client';
import React from 'react';
import TopBar from '@/components/TopBar';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';

export default function BankingDetailsPage() {
  return (
    <>
      <TopBar />
      <MainHeader />

      {/* Hero Section */}
      <section className="relative h-[30vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
        <div className="absolute inset-0 bg-[#48101f] opacity-90"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Banking Details</h1>
          <p className="text-lg mt-2">Securely donate or partner with Leruo Foundation</p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Left: Banking Details */}
          <div className="bg-[#fdf8f5] p-8 rounded-lg shadow-md border border-[#ece0db] h-full">
            <h2 className="text-2xl font-bold text-[#48101f] mb-6 text-center">Bank Account Information</h2>
            <div className="space-y-4 text-gray-800 leading-relaxed text-[17px]">
              <p><strong>Bank:</strong> FNB / RMB</p>
              <p><strong>Account Holder:</strong> Leruo Foundation NPC</p>
              <p><strong>Account Type:</strong> Gold Business Account</p>
              <p><strong>Account Number:</strong> 63133839944</p>
              <p><strong>Branch Code:</strong> 250655</p>
            </div>
          </div>

          {/* Right: Yoco Payment */}
          <div className="flex flex-col justify-center items-center text-center bg-[#fdf8f5] p-8 rounded-lg shadow-md border border-[#ece0db] h-full">
            <h2 className="text-2xl font-bold text-[#48101f] mb-4">Instant Online Donation</h2>
            <p className="mb-6 text-gray-700 text-[17px] max-w-md">
              Click the button below to donate instantly and securely via Yoco.
            </p>
            <a
              href="https://pay.yoco.com/leruo-foundation-npo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ffc107] text-[#48101f] font-semibold px-8 py-3 rounded-full shadow hover:bg-[#ffe08a] transition-all"
            >
              Donate via Yoco
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
