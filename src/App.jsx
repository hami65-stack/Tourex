import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TypographicCutout from './components/TypographicCutout';
import StatsSection from './components/StatsSection';
import DestinationGrid from './components/DestinationGrid';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TourDetailModal from './components/TourDetailModal';
import SignInModal from './components/SignInModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import { Check, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedTourForModal, setSelectedTourForModal] = useState(null);
  const [signInOpen, setSignInOpen] = useState(false);
  const [currency, setCurrency] = useState({ code: 'INR', symbol: '₹', rate: 1 });
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  const handleOpenBooking = (tour) => {
    setSelectedTourForModal(tour);
  };

  const handleConfirmBooking = (details) => {
    showToast(`Booking ${details.bookingId} received for ${details.tourTitle}! Our hill operations desk is on it.`);
  };

  const handleSendInquiry = (inquiry) => {
    showToast(`Namaste ${inquiry.name || 'Traveler'}! Your inquiry for ${inquiry.destinationState} has been received.`);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white antialiased">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 max-w-md bg-neutral-950 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium">{toast}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar 
        onOpenSignIn={() => setSignInOpen(true)}
        onOpenContact={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Floating Search & Booking Card */}
        <Hero 
          onOpenBooking={handleOpenBooking}
          currency={currency}
        />

        {/* Signature Typographic Cutout Section ("Take the step and explore [pill] the world [pill] waiting for you") */}
        <TypographicCutout />

        {/* Stats & Philosophy Section */}
        <StatsSection 
          onExploreClick={() => {
            document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Destination Showcase Grid */}
        <DestinationGrid 
          onOpenBooking={handleOpenBooking}
          currency={currency}
        />

        {/* Value Propositions & Services */}
        <ValueProps 
          onOpenContact={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Customer Stories & Testimonials */}
        <Testimonials />

        {/* Full Contact & Inquiry Section with Business Details */}
        <ContactSection 
          onSendInquiry={handleSendInquiry}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenSignIn={() => setSignInOpen(true)}
      />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Modals */}
      <TourDetailModal 
        tour={selectedTourForModal}
        onClose={() => setSelectedTourForModal(null)}
        currency={currency}
        onConfirmBooking={handleConfirmBooking}
      />

      <SignInModal 
        isOpen={signInOpen}
        onClose={() => setSignInOpen(false)}
      />

    </div>
  );
}
