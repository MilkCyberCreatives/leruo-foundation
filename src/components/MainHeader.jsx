'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

export default function MainHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Leruo Foundation Home">
            <img
              src="/images/leruofoundationlogo.svg"
              alt="Leruo Foundation"
              className="h-16 md:h-20 w-auto"
              width={160}
              height={80}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link href="/" className="text-[#48101f] hover:text-[#6a1b2e] font-medium transition-colors">
                Home
              </Link>
              
              <Link href="/about" className="text-[#48101f] hover:text-[#6a1b2e] font-medium transition-colors">
                About
              </Link>

              {/* Programs Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => toggleDropdown('programs')}
                  className="flex items-center text-[#48101f] hover:text-[#6a1b2e] font-medium transition-colors"
                  aria-expanded={openDropdown === 'programs'}
                  aria-haspopup="true"
                >
                  Our Programs
                  <HiChevronDown className={`ml-1 transition-transform ${openDropdown === 'programs' ? 'rotate-180' : ''}`} />
                </button>
                
                {openDropdown === 'programs' && (
                  <div 
                    className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link 
                      href="/brandingcircle" 
                      className="block px-4 py-2 text-[#48101f] hover:bg-[#f8f9fa] transition-colors"
                    >
                      Branding Chief Executive Circle SA
                    </Link>
                    <Link 
                      href="/youthpreneurs" 
                      className="block px-4 py-2 text-[#48101f] hover:bg-[#f8f9fa] transition-colors"
                    >
                      Youthpreneurs
                    </Link>
                    <Link 
                      href="/womenceo" 
                      className="block px-4 py-2 text-[#48101f] hover:bg-[#f8f9fa] transition-colors"
                    >
                      Women CEO's Network
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/eventgallery" className="text-[#48101f] hover:text-[#6a1b2e] font-medium transition-colors">
                Events Gallery
              </Link>

              <Link href="/contact" className="text-[#48101f] hover:text-[#6a1b2e] font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Vertical Divider */}
            <div className="h-6 w-px bg-gray-300" aria-hidden="true" />

            {/* CTA Button */}
            <Link
              href="/becomesponsor"
              className="bg-[#ffc107] hover:bg-[#e0a800] text-[#48101f] px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-colors duration-200 shadow-sm"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#48101f] rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-[#48101f] font-medium hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-[#48101f] font-medium hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('mobile-programs')}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-[#48101f] font-medium hover:bg-gray-50"
                aria-expanded={openDropdown === 'mobile-programs'}
              >
                Our Programs
                <HiChevronDown className={`ml-1 transition-transform ${openDropdown === 'mobile-programs' ? 'rotate-180' : ''}`} />
              </button>
              
              {openDropdown === 'mobile-programs' && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    href="/brandingcircle"
                    className="block px-3 py-2 rounded-md text-[#48101f] hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Branding Chief Executive Circle SA
                  </Link>
                  <Link
                    href="/youthpreneurs"
                    className="block px-3 py-2 rounded-md text-[#48101f] hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Youthpreneurs
                  </Link>
                  <Link
                    href="/womenceo"
                    className="block px-3 py-2 rounded-md text-[#48101f] hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Women CEO's Network
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/eventgallery" 
              className="block px-3 py-2 rounded-md text-[#48101f] font-medium hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Event Gallery
            </Link>

            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-[#48101f] font-medium hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-2">
              <Link
                href="/becomesponsor"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-bold uppercase tracking-wider text-[#48101f] bg-[#ffc107] hover:bg-[#e0a800]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}