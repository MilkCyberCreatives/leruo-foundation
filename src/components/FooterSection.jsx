'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaArrowUp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-leruo text-white pt-16 pb-10 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact</h4>
          <p className="text-sm mb-1">1103 Tugela Street, Klipfontein View,</p>
          <p className="text-sm mb-1">Ext 1, Midrand, 1685</p>
          <p className="text-sm mb-1">connect@leruofoundation.org</p>
          <p className="text-lg mt-3 font-bold">+27 77 605 2454</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Programs</a></li>
            <li><a href="#" className="hover:underline">Events</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policies</a></li>
            <li><a href="#" className="hover:underline">Donate Now</a></li>
            <li><a href="#" className="hover:underline">Get Involved</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-xl font-semibold mb-4">About Us</h4>
          <p className="text-sm">
            A dynamic non-profit organization dedicated to fostering sustainable entrepreneurship and economic empowerment.
          </p>
          <p className="text-sm mt-4 font-medium">NPO Number: 318-720 NPO</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10 pt-6 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img src="/images/footer/footer.png" alt="Leruo Logo" className="h-8" />
          <p className="text-sm">
            &copy; 2025 All Rights Reserved by <span className="font-medium">Leruo Foundation</span>
          </p>
        </div>
        <p className="text-sm">Designed by <span className="text-white font-semibold">CRM Enterprise</span></p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61574829148161" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/leruo-foundation" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/LeruoFoundation" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaXTwitter />
          </a>
          <a href="https://www.youtube.com/@LeruoFoundationNPO" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-white text-leruo p-3 rounded-full shadow-xl hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  );
}
