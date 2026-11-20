import React, { useState } from 'react';
import { ArrowUpRight, Compass, Car, Hotel, MapPin, Calendar, Users, Check, Sparkles, Navigation } from 'lucide-react';
import { heroDetails, destinationsData } from '../data/destinations';

export default function Hero({ onOpenBooking, currency }) {
  const [activeTab, setActiveTab] = useState('tour'); // 'tour' | 'cab' | 'hotels'
  const [selectedDestination, setSelectedDestination] = useState(destinationsData[0].title);
  const [checkInDate, setCheckInDate] = useState('2026-03-10');
  const [checkOutDate, setCheckOutDate] = useState('2026-03-15');
  const [guestCount, setGuestCount] = useState(2);
  const [pickupCity, setPickupCity] = useState('Delhi NCR (Airport / Railway Station)');

  const formatDateDisplay = (dateStr) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  const handleReserveClick = (e) => {
    e.preventDefault();
    const destObj = destinationsData.find(d => d.title === selectedDestination) || destinationsData[0];
    onOpenBooking({
      ...destObj,
      customCheckIn: checkInDate,
      customCheckOut: checkOutDate,
      customGuests: guestCount,
      customPickup: pickupCity,
      bookingType: activeTab
    });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Image with Dark Vignette Gradient matching Reference */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroDetails.bgImage} 
          alt="Scenic Mountain Lake Chalet in Himachal" 
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Gradients to ensure text readability matching the reference mockup */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1318] via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Headline & CTA (Matching Reference Image) */}
          <div className="lg:col-span-7 text-white space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide uppercase text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Official Himachal & Uttarakhand Specialist
            </div>

            {/* Headline matching Reference font & phrasing */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] text-white font-display">
              Let's find your <br />
              <span className="text-white">next adventure</span>
            </h1>

            {/* Subheadline matching Reference placement */}
            <p className="max-w-xl text-base sm:text-lg text-white/80 font-normal leading-relaxed">
              {heroDetails.subheadline}
            </p>

            {/* Pill CTA Button with Round Arrow Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a 
                href="#destinations" 
                className="group inline-flex items-center justify-between pl-6 pr-2 py-2 rounded-full bg-white text-neutral-900 font-bold text-sm sm:text-base hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>{heroDetails.ctaText}</span>
                <span className="w-9 h-9 ml-4 rounded-full bg-neutral-900 flex items-center justify-center text-white group-hover:bg-amber-500 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                </span>
              </a>

              <a 
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-semibold transition-colors"
              >
                <span>Why Travel With Us?</span>
              </a>
            </div>

            {/* Subtle Progress / Slider Indicator Line at Bottom Left */}
            <div className="pt-8 hidden sm:flex items-center gap-3">
              <div className="w-16 h-1 rounded-full bg-amber-400"></div>
              <div className="w-8 h-1 rounded-full bg-white/30"></div>
              <div className="w-8 h-1 rounded-full bg-white/30"></div>
              <span className="text-xs text-white/70 pl-2">16 Curated Mountain Expeditions</span>
            </div>

          </div>

          {/* Right Column: Floating White Booking Card (Matching Reference Mockup) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/40 text-neutral-800 transition-all">
              
              {/* Category Tabs: Tour | Cab / Volvo | Hotels */}
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-5">
                <button 
                  onClick={() => setActiveTab('tour')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'tour' 
                      ? 'bg-neutral-900 text-white shadow-md' 
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Tour</span>
                </button>

                <button 
                  onClick={() => setActiveTab('cab')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'cab' 
                      ? 'bg-neutral-900 text-white shadow-md' 
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Cab / Volvo</span>
                </button>

                <button 
                  onClick={() => setActiveTab('hotels')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'hotels' 
                      ? 'bg-neutral-900 text-white shadow-md' 
                      : 'text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  <Hotel className="w-3.5 h-3.5" />
                  <span>Hotels</span>
                </button>
              </div>

              {/* Booking Form Fields */}
              <form onSubmit={handleReserveClick} className="space-y-3.5">
                
                {/* Destination Dropdown */}
                <div className="border border-neutral-200/90 hover:border-neutral-400 rounded-2xl p-3 bg-neutral-50/70 transition-colors">
                  <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    Destination in HP or Uttarakhand
                  </span>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <select
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm font-bold text-neutral-900 focus:outline-none cursor-pointer truncate"
                    >
                      <optgroup label="🏔️ Himachal Pradesh Packages">
                        {destinationsData.filter(d => d.state === 'Himachal Pradesh').map((d) => (
                          <option key={d.id} value={d.title}>
                            {d.title} · {currency.symbol}{Math.round(d.price * currency.rate).toLocaleString()}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="🕉️ Uttarakhand (Devbhoomi) Packages">
                        {destinationsData.filter(d => d.state === 'Uttarakhand').map((d) => (
                          <option key={d.id} value={d.title}>
                            {d.title} · {currency.symbol}{Math.round(d.price * currency.rate).toLocaleString()}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Pickup City Selector (Critical for Indian Travelers) */}
                <div className="border border-neutral-200/90 hover:border-neutral-400 rounded-2xl p-3 bg-neutral-50/70 transition-colors">
                  <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    Pickup Location / Gateway
                  </span>
                  <div className="flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                    <select
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full bg-transparent text-xs font-semibold text-neutral-800 focus:outline-none cursor-pointer"
                    >
                      <option value="Delhi NCR (Airport / Railway Station / Kashmiri Gate)">Delhi NCR (Doorstep / Airport / Station)</option>
                      <option value="Chandigarh (Airport / Sector 43 ISBT)">Chandigarh (Airport / ISBT 43)</option>
                      <option value="Dehradun Airport / Railway Station">Dehradun (Airport / Station)</option>
                      <option value="Haridwar Railway Station">Haridwar Railway Station</option>
                      <option value="Direct Arrival at Hill Destination">Direct Arrival at Hill Destination</option>
                    </select>
                  </div>
                </div>

                {/* Check In & Check Out (Dual Column matching Reference) */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-neutral-200/90 hover:border-neutral-400 rounded-2xl p-3 bg-neutral-50/70 transition-colors">
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Check In
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                      <input 
                        type="date" 
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="w-full text-xs font-bold text-neutral-800 bg-transparent focus:outline-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="border border-neutral-200/90 hover:border-neutral-400 rounded-2xl p-3 bg-neutral-50/70 transition-colors">
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                      Check Out
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
                      <input 
                        type="date" 
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="w-full text-xs font-bold text-neutral-800 bg-transparent focus:outline-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Guest Counter */}
                <div className="border border-neutral-200/90 hover:border-neutral-400 rounded-2xl p-3 bg-neutral-50/70 transition-colors flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                      Guests / Travelers
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Users className="w-3.5 h-3.5 text-neutral-500" />
                      <span className="text-xs sm:text-sm font-bold text-neutral-900">
                        {guestCount} {guestCount === 1 ? 'Person' : 'People'}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuestCount(prev => Math.max(1, prev - 1))}
                      className="w-7 h-7 rounded-full bg-neutral-200 hover:bg-neutral-300 font-bold text-neutral-800 flex items-center justify-center transition-colors text-sm"
                    >
                      -
                    </button>
                    <span className="w-5 text-center text-xs font-bold text-neutral-900">{guestCount}</span>
                    <button
                      type="button"
                      onClick={() => setGuestCount(prev => Math.min(20, prev + 1))}
                      className="w-7 h-7 rounded-full bg-neutral-200 hover:bg-neutral-300 font-bold text-neutral-800 flex items-center justify-center transition-colors text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Big Pill Reserve Button (Matching Reference Mockup) */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-full bg-neutral-950 hover:bg-black text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Reserve Tour & Check Price</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-400" />
                </button>

              </form>

              {/* Verified Trust Strip */}
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  Instant Voucher & Cab
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  No Hidden Costs
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
