'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function TopBar() {
  return (
    <div className="bg-[#48101f] text-white text-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-y-2">
        {/* Left Side: Message + Donate */}
        <div className="text-center md:text-left">
          <span className="whitespace-nowrap">
            Fund The Future,
            <a
              href="/bankingdetails"
              className="ml-2 underline text-yellow-300 hover:text-yellow-400 transition-colors"
            >
              Donate Now!
            </a>
          </span>
        </div>

        {/* Right Side: Contact Info + Icons */}
        <div className="flex flex-col md:flex-row items-center gap-y-2 md:gap-x-4">
          {/* Email */}
          <a 
            href="mailto:connect@leruofoundation.org" 
            className="hover:underline whitespace-nowrap"
          >
            connect@leruofoundation.org
          </a>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block w-px h-5 bg-white/30" />

          {/* Phone */}
          <a 
            href="tel:+27776052454" 
            className="hover:underline whitespace-nowrap"
          >
            +27 77 605 2454
          </a>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block w-px h-5 bg-white/30" />

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61574829148161"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#48101f] rounded-full p-2 hover:scale-105 transition-transform"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="https://www.linkedin.com/company/leruo-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#48101f] rounded-full p-2 hover:scale-105 transition-transform"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="https://x.com/LeruoFoundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#48101f] rounded-full p-2 hover:scale-105 transition-transform"
              aria-label="Twitter"
            >
              <FaXTwitter size={14} />
            </a>

            <a
              href="https://www.youtube.com/@LeruoFoundationNPO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#48101f] rounded-full p-2 hover:scale-105 transition-transform"
              aria-label="YouTube"
            >
              <FaYoutube size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}