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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 inline-block">Contact</h4>
          <div className="space-y-2">
            <p className="text-sm hover:text-white/90 transition-colors">1103 Tugela Street, Klipfontein View,</p>
            <p className="text-sm hover:text-white/90 transition-colors">Ext 1, Midrand, 1685</p>
            <a href="mailto:connect@leruofoundation.org" className="text-sm hover:text-white/90 transition-colors block">connect@leruofoundation.org</a>
            <a href="tel:+27776052454" className="text-lg mt-3 hover:text-white/90 transition-colors block">+27 77 605 2454</a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 inline-block">Navigation</h4>
          <ul className="space-y-3">
            <li><a href="/" className="text-sm hover:text-white/90 hover:underline transition-all">Home</a></li>
            <li><a href="/about" className="text-sm hover:text-white/90 hover:underline transition-all">About Us</a></li>
            <li><a href="/programs" className="text-sm hover:text-white/90 hover:underline transition-all">Our Programs</a></li>
            <li><a href="/eventgallery" className="text-sm hover:text-white/90 hover:underline transition-all">Events</a></li>
            <li><a href="/contact" className="text-sm hover:text-white/90 hover:underline transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="/privacy" className="text-sm hover:text-white/90 hover:underline transition-all">Privacy Policy</a></li>
            <li><a href="/bankingdetails" className="text-sm hover:text-white/90 hover:underline transition-all">Donate Now</a></li>
            <li><a href="/becomesponsor" className="text-sm hover:text-white/90 hover:underline transition-all">Get Involved</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2 inline-block">About Us</h4>
          <p className="text-sm hover:text-white/90 transition-colors">
            A dynamic non-profit organization dedicated to fostering sustainable entrepreneurship and economic empowerment.
          </p>
          <p className="text-sm mt-4 font-bold hover:text-white/90 transition-colors">NPO Number: 318-720 NPO</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-12 pt-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="/">
              <img 
                src="/images/footer/footer.png" 
                alt="Leruo Logo" 
                className="h-8 w-auto filter brightness-0 invert hover:opacity-90 transition-opacity"
              />
            </a>
            <p className="text-sm text-white/80">
              &copy; {new Date().getFullYear()} All Rights Reserved by{' '}
              <a href="/" className="font-medium text-white hover:underline">Leruo Foundation</a>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-white/80">
              Designed by{' '}
              <a 
                href="https://crmenterprise.co.za/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-white hover:underline hover:text-white/90 transition-colors"
              >
                CRM Enterprise
              </a>
            </p>
            
            <div className="flex gap-5">
              {[
                { icon: <FaFacebookF size={16} />, url: 'https://www.facebook.com/profile.php?id=61574829148161' },
                { icon: <FaLinkedinIn size={16} />, url: 'https://www.linkedin.com/company/leruo-foundation' },
                { icon: <FaXTwitter size={16} />, url: 'https://x.com/LeruoFoundation' },
                { icon: <FaYoutube size={16} />, url: 'https://www.youtube.com/@LeruoFoundationNPO' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label={`Social media link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-white text-leruo p-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
}