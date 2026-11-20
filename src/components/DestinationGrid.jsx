import React, { useState } from 'react';
import { MapPin, Star, Heart, Clock, ArrowRight, Search, Sparkles, Mountain, Compass, ShieldCheck } from 'lucide-react';
import { destinationsData } from '../data/destinations';

export default function DestinationGrid({ onOpenBooking, currency }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedState, setSelectedState] = useState('All'); // 'All' | 'Himachal Pradesh' | 'Uttarakhand'
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState({});

  const categories = [
    'All',
    'Snow & Mountains',
    'Treks & Adventure',
    'Spiritual & Char Dham',
    'Honeymoon & Leisure',
    'High-Altitude Treks',
    'Offbeat & Nature'
  ];

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredDestinations = destinationsData.filter(item => {
    const matchesState = selectedState === 'All' || item.state === selectedState;
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = item.title.toLowerCase().includes(searchLower) ||
                          item.location.toLowerCase().includes(searchLower) ||
                          item.state.toLowerCase().includes(searchLower) ||
                          item.overview.toLowerCase().includes(searchLower);
    return matchesState && matchesCategory && matchesSearch;
  });

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Matching Reference Mockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Handcrafted Mountain Portfolios
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-display">
              Experience Our Destination
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 max-w-xl">
              Curated itineraries across the majestic ridges of Himachal Pradesh and the sacred valleys of Uttarakhand with licensed hill drivers and native Pahadi leaders.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search Manali, Spiti, Kedarnath..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* State Quick Switcher Tabs (Himachal vs Uttarakhand) */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <button
            onClick={() => setSelectedState('All')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedState === 'All'
                ? 'bg-neutral-900 text-white shadow'
                : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
            }`}
          >
            All Destinations ({destinationsData.length})
          </button>
          
          <button
            onClick={() => setSelectedState('Himachal Pradesh')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedState === 'Himachal Pradesh'
                ? 'bg-amber-600 text-white shadow'
                : 'bg-white text-neutral-700 hover:bg-amber-50 border border-neutral-200'
            }`}
          >
            <span>🏔️ Himachal Pradesh</span>
            <span className="text-[10px] opacity-80">({destinationsData.filter(d => d.state === 'Himachal Pradesh').length})</span>
          </button>

          <button
            onClick={() => setSelectedState('Uttarakhand')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedState === 'Uttarakhand'
                ? 'bg-emerald-700 text-white shadow'
                : 'bg-white text-neutral-700 hover:bg-emerald-50 border border-neutral-200'
            }`}
          >
            <span>🕉️ Uttarakhand (Devbhoomi)</span>
            <span className="text-[10px] opacity-80">({destinationsData.filter(d => d.state === 'Uttarakhand').length})</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tour Cards Grid Matching Reference Card Layout */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-neutral-200 p-8">
            <Mountain className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-neutral-800">No tour packages match your search</h3>
            <p className="text-xs text-neutral-500 mt-1">Try clearing your search query or selecting "All Destinations".</p>
            <button
              onClick={() => { setSelectedState('All'); setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-5 py-2 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-neutral-800"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((dest) => {
              const convertedPrice = Math.round(dest.price * currency.rate);
              const isFav = favorites[dest.id];

              return (
                <div 
                  key={dest.id}
                  onClick={() => onOpenBooking(dest)}
                  className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
                >
                  {/* Card Thumbnail matching Reference layout */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img 
                      src={dest.image} 
                      alt={dest.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                    {/* State Tag Pill */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm text-white ${
                        dest.state === 'Himachal Pradesh' ? 'bg-amber-600/90' : 'bg-emerald-700/90'
                      }`}>
                        {dest.state === 'Himachal Pradesh' ? '🏔️ Himachal' : '🕉️ Uttarakhand'}
                      </span>
                      {dest.badge && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-amber-300">
                          {dest.badge}
                        </span>
                      )}
                    </div>

                    {/* Bookmark Heart Button */}
                    <button
                      onClick={(e) => toggleFavorite(dest.id, e)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-neutral-700 transition-colors shadow-sm"
                      aria-label="Save to Wishlist"
                    >
                      <Heart className={`w-4 h-4 transition-colors ${isFav ? 'text-red-500 fill-red-500' : 'text-neutral-700'}`} />
                    </button>

                    {/* Bottom overlay inside thumbnail matching reference card labels */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-white/90">
                        <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{dest.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5">
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-neutral-400" />
                          {dest.duration}
                        </span>
                        <div className="flex items-center gap-1 font-bold text-neutral-800">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span>{dest.rating}</span>
                          <span className="text-neutral-400 text-[10px]">({dest.reviewsCount})</span>
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-neutral-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug">
                        {dest.title}
                      </h3>

                      <p className="text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                        {dest.overview}
                      </p>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
                          All-Inclusive From
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-lg font-extrabold text-neutral-950 font-display">
                            {currency.symbol}{convertedPrice.toLocaleString()}
                          </span>
                          <span className="text-[11px] text-neutral-400 font-medium">/ person</span>
                        </div>
                      </div>

                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking(dest);
                        }}
                        className="w-9 h-9 rounded-full bg-neutral-900 group-hover:bg-amber-600 text-white flex items-center justify-center transition-colors shadow-sm"
                        aria-label="View Itinerary"
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
