'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/leruofoundationlogo.svg"
            alt="Leruo Foundation"
            className="h-20"
          />
        </Link>

        {/* Desktop Nav + CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6 text-base font-semibold text-[#48101f] relative z-50">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>

            {/* Our Programs Dropdown */}
            <div className="relative group">
              <div className="cursor-pointer hover:underline">Our Programs</div>
              <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white border border-gray-200 rounded shadow-md w-72 z-50">
                <Link href="/brandingcircle" className="block px-4 py-2 hover:bg-gray-100">Branding Chief Executive Circle SA</Link>
                <Link href="/youthpreneurs" className="block px-4 py-2 hover:bg-gray-100">Youthpreneurs</Link>
                <Link href="/womenceo" className="block px-4 py-2 hover:bg-gray-100">Women CEO's Network</Link>
              </div>
            </div>

            {/* Event Gallery (no dropdown) */}
            <Link href="/eventgallery" className="hover:underline">Event Gallery</Link>

            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>

          {/* Vertical Divider */}
          <div className="w-px h-6 bg-[#48101f] self-center" />

          {/* CTA Button */}
          <Link
            href="/becomesponsor"
            className="bg-[#ffc107] text-black px-5 py-2 rounded-full text-sm font-bold tracking-wide hover:bg-[#e0a800] transition"
          >
            PARTNER WITH US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#48101f] text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-[#48101f] font-semibold text-base">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/#programs" className="block">Our Programs</Link>
          <Link href="/eventgallery" className="block">Event Gallery</Link>
          <Link href="/contact" className="block">Contact</Link>
          <Link
            href="/bankingdetails"
            className="inline-block mt-2 bg-[#48101f] text-white px-4 py-2 rounded-full text-sm tracking-wide"
          >
            PARTNER WITH US
          </Link>
        </div>
      )}
    </header>
  );
}
