import React, { useState } from 'react';
import { X, Calendar, Users, MapPin, Star, Clock, Check, ShieldCheck, ArrowRight, PhoneCall, Sparkles, Car, CheckCircle2, FileText, Printer, MessageCircle, AlertCircle, Loader2 } from 'lucide-react';
import { businessDetails } from '../data/businessConfig';
import { submitBooking } from '../lib/supabase';

export default function TourDetailModal({ tour, onClose, currency, onConfirmBooking }) {
  if (!tour) return null;

  const [activeTab, setActiveTab] = useState('itinerary'); // 'itinerary' | 'book' | 'inclusions'
  const [guests, setGuests] = useState(tour.customGuests || 2);
  const [checkIn, setCheckIn] = useState(tour.customCheckIn || '2026-03-15');
  const [checkOut, setCheckOut] = useState(tour.customCheckOut || '2026-03-20');
  const [pickupCity, setPickupCity] = useState(tour.customPickup || 'Delhi NCR (Airport / Railway Station)');
  const [hotelTier, setHotelTier] = useState('deluxe'); // 'standard' | 'deluxe' | 'luxury'
  const [transportType, setTransportType] = useState('innova'); // 'volvo' | 'sedan' | 'innova' | 'suv4x4'
  
  const [selectedAddons, setSelectedAddons] = useState({
    rohtangOrRafting: false,
    campfire: false,
    oxygenKit: false,
    droneReel: false
  });

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [bookingConfirmedData, setBookingConfirmedData] = useState(null);

  // Price calculations
  const basePricePerPerson = tour.price || 14999;
  
  const hotelTierPrice = {
    standard: 0,
    deluxe: 2500,
    luxury: 5500
  }[hotelTier] || 0;

  const transportPrice = {
    volvo: 0,
    sedan: 3500,
    innova: 7500,
    suv4x4: 10500
  }[transportType] || 0;

  const addonsList = [
    { 
      id: 'rohtangOrRafting', 
      label: tour.state === 'Himachal Pradesh' ? 'Rohtang Pass & Sissu Snow Permit + 4x4 Jeep' : 'Rishikesh 16 KM White Water Rafting + Cliff Jump', 
      price: 2500 
    },
    { id: 'campfire', label: 'Riverside Private Campfire & Pahadi BBQ Evening', price: 1800 },
    { id: 'oxygenKit', label: 'High-Altitude Acclimatization Kit + Portable Oxygen', price: 1200 },
    { id: 'droneReel', label: 'Dedicated Travel Photographer & 4K Drone Reel', price: 3500 }
  ];

  const addonsTotal = addonsList.reduce((sum, item) => {
    return sum + (selectedAddons[item.id] ? item.price : 0);
  }, 0);

  const totalINR = ((basePricePerPerson + hotelTierPrice) * guests) + transportPrice + addonsTotal;
  const convertedTotal = Math.round(totalINR * currency.rate);

  const handleToggleAddon = (id) => {
    setSelectedAddons(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const [isSaving, setIsSaving] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("Please provide your Name and WhatsApp phone number.");
      return;
    }

    setIsSaving(true);
    const bookingId = `HEX-${tour.state === 'Himachal Pradesh' ? 'HP' : 'UK'}-${Math.floor(1000 + Math.random() * 9000)}`;
    const confirmation = {
      bookingId,
      tourTitle: tour.title,
      state: tour.state,
      location: tour.location,
      guests,
      checkIn,
      checkOut,
      pickupCity,
      hotelTier: hotelTier.toUpperCase(),
      transportType: transportType.toUpperCase(),
      totalPrice: `${currency.symbol}${convertedTotal.toLocaleString()}`,
      clientName: fullName,
      phone,
      email: email || 'Not provided',
      dateBooked: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    try {
      await submitBooking({
        tourTitle: tour.title,
        location: `${tour.location} (${tour.state || ''})`,
        checkIn: checkIn || null,
        checkOut: checkOut || null,
        guests: Number(guests) || 1,
        totalPrice: `${currency.symbol}${convertedTotal.toLocaleString()}`,
        clientName: fullName,
        email: email || 'guest@tourexhimalayas.in',
        phone: phone,
        notes: `Pickup: ${pickupCity} | Hotel: ${hotelTier} | Transport: ${transportType} | Special Requests: ${specialRequests || 'None'}`,
        addons: Object.keys(selectedAddons).filter(k => selectedAddons[k])
      });
    } catch (err) {
      console.warn("Supabase booking save notice:", err);
    } finally {
      setIsSaving(false);
      setBookingConfirmedData(confirmation);
      if (onConfirmBooking) {
        onConfirmBooking(confirmation);
      }
    }
  };

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `*New Tour Booking Request*\n` +
      `------------------------\n` +
      `*Tour:* ${tour.title}\n` +
      `*State:* ${tour.state}\n` +
      `*Traveler:* ${fullName || 'Guest'}\n` +
      `*Phone:* ${phone}\n` +
      `*Pickup:* ${pickupCity}\n` +
      `*Dates:* ${checkIn} to ${checkOut}\n` +
      `*Guests:* ${guests} People\n` +
      `*Hotel Category:* ${hotelTier.toUpperCase()}\n` +
      `*Transport:* ${transportType.toUpperCase()}\n` +
      `*Estimated Total:* ${currency.symbol}${convertedTotal.toLocaleString()}\n` +
      `------------------------\n` +
      `Kindly confirm availability & send driver details.`
    );
    return `https://wa.me/${businessDetails.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 my-6 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Banner with Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden">
          <img 
            src={tour.image} 
            alt={tour.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                tour.state === 'Himachal Pradesh' ? 'bg-amber-600' : 'bg-emerald-600'
              }`}>
                {tour.state === 'Himachal Pradesh' ? '🏔️ Himachal Pradesh' : '🕉️ Uttarakhand (Devbhoomi)'}
              </span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
                {tour.duration}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-400 text-neutral-950 flex items-center gap-1">
                <Star className="w-3 h-3 fill-neutral-950" />
                {tour.rating} ({tour.reviewsCount} reviews)
              </span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold font-display tracking-tight text-white leading-tight">
              {tour.title}
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-white/80 mt-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{tour.location}</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex border-b border-neutral-200 bg-neutral-50 px-6 pt-3 gap-4 text-xs sm:text-sm font-bold text-neutral-600 overflow-x-auto">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`pb-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'itinerary' ? 'border-neutral-900 text-neutral-900' : 'border-transparent hover:text-neutral-900'
            }`}
          >
            Day-by-Day Itinerary
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`pb-3 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'inclusions' ? 'border-neutral-900 text-neutral-900' : 'border-transparent hover:text-neutral-900'
            }`}
          >
            Inclusions & Highlights
          </button>
          <button
            onClick={() => setActiveTab('book')}
            className={`pb-3 border-b-2 transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'book' ? 'border-amber-600 text-amber-700 font-extrabold' : 'border-transparent hover:text-neutral-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Customize & Reserve</span>
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto">
          
          {/* CONFIRMATION SCREEN (When submitted) */}
          {bookingConfirmedData ? (
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  Booking Reference Confirmed
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 font-display mt-2">
                  Your Reservation Reference: {bookingConfirmedData.bookingId}
                </h3>
                <p className="text-sm text-neutral-500 mt-1 max-w-lg mx-auto">
                  Namaste {bookingConfirmedData.clientName}! Our Manali & Dehradun hill operations desk has received your reservation request.
                </p>
              </div>

              {/* Printable Voucher Card */}
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 text-left max-w-lg mx-auto space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-neutral-500">Package:</span>
                  <span className="font-bold text-neutral-900">{bookingConfirmedData.tourTitle}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-neutral-500">Travel Dates:</span>
                  <span className="font-semibold text-neutral-800">{bookingConfirmedData.checkIn} to {bookingConfirmedData.checkOut}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-neutral-500">Pickup Location:</span>
                  <span className="font-semibold text-neutral-800">{bookingConfirmedData.pickupCity}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-neutral-500">Travelers:</span>
                  <span className="font-semibold text-neutral-800">{bookingConfirmedData.guests} Persons</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-neutral-500">Vehicle / Transport:</span>
                  <span className="font-semibold text-neutral-800">{bookingConfirmedData.transportType}</span>
                </div>
                <div className="flex justify-between pt-1 text-base">
                  <span className="font-bold text-neutral-700">Estimated Total:</span>
                  <span className="font-extrabold text-neutral-950 font-display">{bookingConfirmedData.totalPrice}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </a>

                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 font-bold text-xs sm:text-sm hover:bg-neutral-100 flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Voucher</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-900 text-white font-bold text-xs sm:text-sm hover:bg-neutral-800"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* TAB 1: ITINERARY */}
              {activeTab === 'itinerary' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Day-by-Day Journey Schedule</h3>
                    <p className="text-xs text-neutral-500">Crafted by seasoned Pahadi guides for ideal acclimatization and scenic immersion.</p>
                  </div>

                  <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-neutral-200">
                    {tour.itinerary ? tour.itinerary.map((item, idx) => (
                      <div key={idx} className="relative flex items-start gap-4 pl-8 group">
                        <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-amber-500 border-2 border-white shadow-sm"></div>
                        <div className="bg-neutral-50 hover:bg-amber-50/40 p-4 rounded-2xl border border-neutral-200/70 w-full transition-colors">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">{item.day}</span>
                            <span className="text-xs font-semibold text-neutral-800">{item.title}</span>
                          </div>
                          <p className="text-xs text-neutral-600 leading-relaxed mt-1">{item.desc}</p>
                        </div>
                      </div>
                    )) : (
                      <p className="text-xs text-neutral-500">Detailed day-wise schedule provided on booking confirmation.</p>
                    )}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setActiveTab('book')}
                      className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
                    >
                      <span>Proceed to Customize & Book</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 2: INCLUSIONS & HIGHLIGHTS */}
              {activeTab === 'inclusions' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">Key Highlights of this Tour</h3>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tour.highlights && tour.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-neutral-200">
                    <h3 className="text-base font-bold text-neutral-900 mb-3">Package Inclusions (100% Guaranteed)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {tour.included && tour.included.map((inc, i) => (
                        <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50 text-emerald-900 text-xs font-medium border border-emerald-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {tour.excluded && (
                    <div className="pt-3 border-t border-neutral-200">
                      <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Exclusions</h4>
                      <ul className="space-y-1 text-xs text-neutral-500">
                        {tour.excluded.map((exc, i) => (
                          <li key={i}>• {exc}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setActiveTab('book')}
                      className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
                    >
                      <span>Customize & Check Pricing</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: CUSTOMIZE & BOOK */}
              {activeTab === 'book' && (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  
                  {/* Step 1: Dates & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">Check In</label>
                      <input 
                        type="date" 
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full text-xs font-bold bg-white p-2 rounded-xl border border-neutral-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">Check Out</label>
                      <input 
                        type="date" 
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full text-xs font-bold bg-white p-2 rounded-xl border border-neutral-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-1">Guests</label>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="w-8 h-8 rounded-lg bg-white border border-neutral-300 font-bold"
                        >-</button>
                        <span className="w-8 text-center font-bold text-xs">{guests}</span>
                        <button
                          type="button"
                          onClick={() => setGuests(Math.min(25, guests + 1))}
                          className="w-8 h-8 rounded-lg bg-white border border-neutral-300 font-bold"
                        >+</button>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Pickup Location Gateway */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">Pickup Gateway (Delhi / Chandigarh / Hill Station)</label>
                    <select
                      value={pickupCity}
                      onChange={(e) => setPickupCity(e.target.value)}
                      className="w-full text-xs font-semibold bg-neutral-50 p-3 rounded-xl border border-neutral-200"
                    >
                      <option value="Delhi NCR (Airport / Railway Station / Kashmiri Gate)">Delhi NCR (Airport / Railway Station / Kashmiri Gate)</option>
                      <option value="Chandigarh (Airport / Sector 43 ISBT)">Chandigarh (Airport / ISBT 43)</option>
                      <option value="Dehradun Airport / Railway Station">Dehradun Airport / Railway Station</option>
                      <option value="Haridwar Railway Station">Haridwar Railway Station</option>
                      <option value="Direct Hill Station Arrival">Direct Hill Station Arrival (Self-Drive / Direct)</option>
                    </select>
                  </div>

                  {/* Step 3: Hotel Tier Selection */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">Select Hotel / Stay Category</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div 
                        onClick={() => setHotelTier('standard')}
                        className={`p-3 rounded-2xl border cursor-pointer text-left transition-all ${
                          hotelTier === 'standard' ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-200 bg-white text-neutral-800'
                        }`}
                      >
                        <span className="block text-xs font-bold">Standard Comfort</span>
                        <span className="text-[10px] opacity-80">Verified 3-Star clean stays</span>
                        <span className="block text-xs font-semibold mt-1">Included</span>
                      </div>

                      <div 
                        onClick={() => setHotelTier('deluxe')}
                        className={`p-3 rounded-2xl border cursor-pointer text-left transition-all ${
                          hotelTier === 'deluxe' ? 'border-amber-600 bg-amber-600 text-white' : 'border-neutral-200 bg-white text-neutral-800'
                        }`}
                      >
                        <span className="block text-xs font-bold">Deluxe 4-Star Resort</span>
                        <span className="text-[10px] opacity-80">Valley-view balconies</span>
                        <span className="block text-xs font-semibold mt-1">+₹2,500 / person</span>
                      </div>

                      <div 
                        onClick={() => setHotelTier('luxury')}
                        className={`p-3 rounded-2xl border cursor-pointer text-left transition-all ${
                          hotelTier === 'luxury' ? 'border-neutral-950 bg-neutral-950 text-white' : 'border-neutral-200 bg-white text-neutral-800'
                        }`}
                      >
                        <span className="block text-xs font-bold">Alpine Cedar Chalet</span>
                        <span className="text-[10px] opacity-80">Boutique wooden chalets</span>
                        <span className="block text-xs font-semibold mt-1">+₹5,500 / person</span>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Transport Fleet Option */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">Vehicle Fleet Preference</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: 'volvo', label: 'Luxury AC Volvo', extra: 'Included' },
                        { id: 'sedan', label: 'Private Sedan / Dzire', extra: '+₹3,500' },
                        { id: 'innova', label: 'Toyota Innova Crysta', extra: '+₹7,500' },
                        { id: 'suv4x4', label: '4x4 Mountain SUV', extra: '+₹10,500' },
                      ].map(t => (
                        <div
                          key={t.id}
                          onClick={() => setTransportType(t.id)}
                          className={`p-2.5 rounded-xl border text-center cursor-pointer text-xs transition-colors ${
                            transportType === t.id ? 'bg-neutral-900 text-white border-neutral-900 font-bold' : 'bg-white border-neutral-200 text-neutral-700'
                          }`}
                        >
                          <span className="block font-semibold">{t.label}</span>
                          <span className="text-[10px] opacity-75">{t.extra}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 5: Special Himalayan Add-ons */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2">Optional Experiences & Safety Add-ons</label>
                    <div className="space-y-2">
                      {addonsList.map(a => (
                        <label 
                          key={a.id} 
                          className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 cursor-pointer text-xs"
                        >
                          <div className="flex items-center gap-2.5">
                            <input 
                              type="checkbox"
                              checked={selectedAddons[a.id]}
                              onChange={() => handleToggleAddon(a.id)}
                              className="rounded text-neutral-900 focus:ring-0 w-4 h-4"
                            />
                            <span className="font-medium text-neutral-800">{a.label}</span>
                          </div>
                          <span className="font-bold text-neutral-900">+₹{a.price.toLocaleString()}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Step 6: Traveler Contact Info */}
                  <div className="pt-2 border-t border-neutral-200 space-y-3">
                    <h4 className="text-xs font-bold text-neutral-700 uppercase tracking-wider">Primary Traveler Contact</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Your Full Name *"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full text-xs bg-neutral-50 p-3 rounded-xl border border-neutral-200 font-medium"
                          required
                        />
                      </div>
                      <div>
                        <input 
                          type="tel" 
                          placeholder="WhatsApp Phone Number (+91) *"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full text-xs bg-neutral-50 p-3 rounded-xl border border-neutral-200 font-medium"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Email Address (for official voucher)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-xs bg-neutral-50 p-3 rounded-xl border border-neutral-200 font-medium"
                      />
                    </div>
                  </div>

                  {/* Summary Bar & Submit */}
                  <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Total Estimated Price</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-extrabold text-neutral-950 font-display">
                          {currency.symbol}{convertedTotal.toLocaleString()}
                        </span>
                        <span className="text-xs text-neutral-500 font-medium">({guests} Guests All-Inclusive)</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSaving}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-950 hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wide shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-75 cursor-pointer"
                    >
                      {isSaving ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                          <span>Saving to Supabase...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Reservation & Generate Voucher</span>
                          <ArrowRight className="w-4 h-4 text-amber-400" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </>
          )}

        </div>

      </div>
    </div>
  );
}
