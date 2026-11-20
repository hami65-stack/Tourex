import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle, ShieldCheck, Mountain, Loader2 } from 'lucide-react';
import { businessDetails } from '../data/businessConfig';
import { submitInquiry } from '../lib/supabase';

export default function ContactSection({ onSendInquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destinationState: 'Himachal Pradesh',
    service: 'Bespoke Family & Couple Tour',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    setLoading(true);

    try {
      await submitInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: `${formData.service} (${formData.destinationState || 'General'})`,
        message: formData.message
      });
    } catch (err) {
      console.warn("Supabase inquiry save notice:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      if (onSendInquiry) {
        onSendInquiry(formData);
      }
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Namaste Tourex Himalayas! My name is ${formData.name || 'Traveler'}. I want to plan a tour to ${formData.destinationState} for ${formData.service}. Message: ${formData.message || 'Please share tour options and prices.'}`
  );

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full">
            Local Operations Desks & Consultations
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-display">
            Plan Your Mountain Journey with Local Experts
          </h2>
          <p className="text-sm sm:text-base text-neutral-500">
            Reach our Himachal headquarters in Manali or our Uttarakhand desk in Dehradun & Rishikesh for customized itineraries, private cabs, and verified stays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details & Contact Cards */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-neutral-950 text-white rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl"></div>

              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  Himachal Pradesh Headquarters
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  {businessDetails.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {businessDetails.legalName} · Reg. {businessDetails.licenseNo}
                </p>
              </div>

              {/* Direct Info Items */}
              <div className="space-y-4 pt-2 text-sm text-neutral-300">
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-400 uppercase tracking-wider">Main Office</span>
                    <span className="font-medium text-white">{businessDetails.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-400 uppercase tracking-wider">Toll-Free (India) & Direct</span>
                    <div className="flex flex-col">
                      <a href={`tel:${businessDetails.tollFree}`} className="font-bold text-amber-400 hover:underline">
                        {businessDetails.tollFree}
                      </a>
                      <a href={`tel:${businessDetails.phone}`} className="text-xs text-neutral-300 hover:underline">
                        Manali Hill Ops: {businessDetails.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-400 uppercase tracking-wider">Inquiries & Bookings</span>
                    <a href={`mailto:${businessDetails.email}`} className="font-medium text-white hover:underline">
                      {businessDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-400 uppercase tracking-wider">Operational Hours</span>
                    <span className="text-xs text-neutral-300">{businessDetails.hours}</span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${businessDetails.whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Chat: {businessDetails.whatsappDisplay}</span>
                </a>
              </div>

            </div>

            {/* Branch Hubs (Shimla, Dehradun, Delhi) */}
            <div className="bg-[#FBFBFA] rounded-3xl p-6 border border-neutral-200/80 space-y-4">
              <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                Network of Regional Desks & Hubs
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {businessDetails.branchLocations.map((b, i) => (
                  <div key={i} className="p-3 bg-white rounded-2xl border border-neutral-200 text-xs space-y-1">
                    <span className="font-bold text-neutral-900 block">{b.city}</span>
                    <span className="text-neutral-500 text-[11px] block">{b.address}</span>
                    <span className="text-amber-700 font-semibold block">{b.phone}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Quote Form */}
          <div className="lg:col-span-7 bg-[#FBFBFA] rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-sm relative">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 font-display">Inquiry Received!</h3>
                <p className="text-sm text-neutral-500 max-w-md mx-auto">
                  Thank you, {formData.name}! Our dedicated tour coordinator from the {formData.destinationState} desk will contact you within 15 minutes with complete quotes and driver details.
                </p>
                <div className="pt-4 flex justify-center">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', destinationState: 'Himachal Pradesh', service: 'Bespoke Family & Couple Tour', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-neutral-900 text-white font-bold text-xs"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 font-display">
                    Request a Customized Itinerary & Quote
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Share your requirements. We reply on WhatsApp or phone call with transparent prices.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Destination State
                    </label>
                    <select
                      value={formData.destinationState}
                      onChange={(e) => setFormData({ ...formData, destinationState: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all font-medium"
                    >
                      <option value="Himachal Pradesh">Himachal Pradesh (Manali, Spiti, Kasol, Shimla, Jibhi)</option>
                      <option value="Uttarakhand">Uttarakhand (Rishikesh, Kedarnath, Nainital, Mussoorie, Auli)</option>
                      <option value="Both Himachal & Uttarakhand">Both Himachal & Uttarakhand Grand Circuit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Tour Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all font-medium"
                    >
                      <option value="Bespoke Family & Couple Tour">Family & Couple Tour (Honeymoon / Leisure)</option>
                      <option value="Spiti 4x4 Overland Road Trip">Spiti Valley 4x4 Overland Circuit</option>
                      <option value="Char Dham / Kedarnath Yatra">Kedarnath & Badrinath Sacred Yatra</option>
                      <option value="Adventure Treks & Rafting">Adventure Treks, Rafting & Camping</option>
                      <option value="Group / Corporate Offsite">Corporate Retreat / Group Tour</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input 
                    type="email" 
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Your Travel Dates, Number of Persons & Notes
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us: travel month, number of adults/children, pickup city (Delhi/Chandigarh), any preference for chalets or private Innova..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Zero spam. Direct WhatsApp reply with itinerary & quotation.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-950 hover:bg-black text-white font-bold text-sm tracking-wide transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                        <span>Saving to Backend...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4 text-amber-400" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
