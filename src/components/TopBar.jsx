'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function TopBar() {
  return (
    <div className="bg-[#48101f] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-y-2">
        {/* Left Side: Message + Donate */}
        <div className="text-center md:text-left leading-tight">
          Fund The Future,
          <a
            href="/bankingdetails"
            className="ml-2 underline text-yellow-300 hover:text-yellow-400"
          >
            Donate Now!
          </a>
        </div>

        {/* Right Side: Contact Info + Icons */}
        <div className="flex flex-col md:flex-row items-center gap-y-1 md:gap-x-4 leading-none">
          {/* Email */}
          <div>
            <a href="mailto:connect@leruofoundation.org" className="hover:underline">
              connect@leruofoundation.org
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-white/40" />

          {/* Phone */}
          <div>
            <a href="tel:+27776052454" className="hover:underline">
              +27 77 605 2454
            </a>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-white/40" />

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            <a
              href="https://www.facebook.com/profile.php?id=61574829148161"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#48101f] rounded-full p-2 hover:scale-105 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/leruo-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#48101f] rounded-full p-2 hover:scale-105 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/LeruoFoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#48101f] rounded-full p-2 hover:scale-105 transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.youtube.com/@LeruoFoundationNPO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#48101f] rounded-full p-2 hover:scale-105 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
