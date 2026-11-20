import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Globe, User, PhoneCall, ChevronDown, Mountain, Sparkles } from 'lucide-react';
import { businessDetails } from '../data/businessConfig';

export default function Navbar({ onOpenSignIn, onOpenContact, currency, setCurrency }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencies = [
    { code: 'INR', symbol: '₹', rate: 1 },
    { code: 'USD', symbol: '$', rate: 0.012 },
    { code: 'EUR', symbol: '€', rate: 0.011 },
    { code: 'GBP', symbol: '£', rate: 0.0095 }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0E1318]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10' 
        : 'bg-gradient-to-b from-black/80 via-black/30 to-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - Matching Reference */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white group-hover:scale-105 transition-transform shadow-inner">
              <Compass className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center">
                tourex
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 ml-1"></span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-300/90 ml-2 px-1.5 py-0.5 rounded bg-white/10 hidden sm:inline">
                  Himalayas
                </span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-white/60 -mt-1 hidden sm:block">
                Himachal & Uttarakhand
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-white/90">
            <a href="#hero" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#destinations" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <span>Tour Packages</span>
            </a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-amber-400 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center space-x-3.5">
            
            {/* Currency Selector */}
            <div className="relative">
              <button 
                onClick={() => setCurrencyDropdown(!currencyDropdown)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
                title="Select Currency"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>{currency.code} ({currency.symbol})</span>
                <ChevronDown className="w-3 h-3 text-white/60" />
              </button>

              {currencyDropdown && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-neutral-900 border border-white/15 shadow-2xl py-1 z-50 text-xs">
                  {currencies.map(c => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c);
                        setCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-white/10 transition-colors ${
                        currency.code === c.code ? 'text-amber-400 font-bold bg-white/5' : 'text-white/80'
                      }`}
                    >
                      <span>{c.code}</span>
                      <span className="text-white/50">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick WhatsApp Contact Pill */}
            <a 
              href={`https://wa.me/${businessDetails.whatsappNumber}?text=Hello%20Tourex%20Himalayas!%20I%20am%20planning%20a%20tour%20to%20Himachal/Uttarakhand%20and%20need%20details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white hover:text-white transition-colors px-3 py-1.5 rounded-full bg-emerald-600/70 hover:bg-emerald-600 border border-emerald-400/40 shadow-sm"
              title="Chat with Pahadi Concierge on WhatsApp"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-200" />
              <span className="hidden lg:inline font-medium">{businessDetails.whatsappDisplay}</span>
            </a>

            {/* Sign In Button - Matching reference pill button */}
            <button 
              onClick={onOpenSignIn}
              className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/40 text-white text-sm font-semibold hover:bg-white hover:text-neutral-950 transition-all duration-300 shadow-sm"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button 
              onClick={() => setCurrencyDropdown(!currencyDropdown)}
              className="px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-white/10 border border-white/15"
            >
              {currency.symbol}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0E1318]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-base font-medium text-white/90">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Home
            </a>
            <a 
              href="#destinations" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-between"
            >
              <span>Himachal & Uttarakhand Tours</span>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full">16 Packages</span>
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              About Tourex Himalayas
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Cabs, Chalets & Permits
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Guest Reviews
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Office (Manali / Dehradun)
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Select Currency:</span>
              <div className="flex gap-1.5">
                {currencies.map(c => (
                  <button
                    key={c.code}
                    onClick={() => setCurrency(c)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      currency.code === c.code ? 'bg-amber-400 text-neutral-950 font-bold' : 'bg-white/10 text-white'
                    }`}
                  >
                    {c.code}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="w-full py-2.5 rounded-full bg-white text-neutral-950 font-bold text-sm text-center shadow-lg hover:bg-neutral-100 transition-colors"
            >
              Sign In / My Bookings
            </button>

            <a 
              href={`tel:${businessDetails.phone}`}
              className="w-full py-2.5 rounded-full bg-emerald-600 text-white font-bold text-sm text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Helpline: {businessDetails.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
