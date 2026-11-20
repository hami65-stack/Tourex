import React from 'react';
import { ArrowUpRight, Award, Compass, ShieldCheck, MapPin } from 'lucide-react';
import { businessDetails } from '../data/businessConfig';

export default function StatsSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Scenic Image Card matching Reference */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto group">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80" 
                alt="Wooden boat on emerald alpine lake in the Himalayas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Floating Badge on the image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-between">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-amber-700">
                    Handcrafted Himalayan Journeys
                  </span>
                  <span className="text-sm font-bold text-neutral-900 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    Himachal & Uttarakhand Sanctuaries
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-white flex-shrink-0">
                  <Compass className="w-5 h-5 text-amber-400" />
                </div>
              </div>
            </div>

            {/* Decorative subtle accent shape */}
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl bg-amber-100/60 -z-10 blur-xl"></div>
          </div>

          {/* Right Column: Narrative & Stats matching Reference */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                Born in Himachal · Serving Across Devbhoomi
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] font-display">
                Traveling brings you closer to new places, people, and memories
              </h2>
              
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
                Experience of unique travel is not just about the places visited, but also the stories, friendships, and peaceful perspective brought back home. We curate moments that stay with you forever.
              </p>

              <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl">
                Whether you're looking for an adrenaline-pumping 4x4 expedition through the snowy passes of Spiti, a soul-soothing darshan at Kedarnath & Badrinath, or a serene wooden chalet retreat in Manali and Jibhi, our native Pahadi ground team ensures seamless safety, verified vehicles, and genuine mountain warmth.
              </p>
            </div>

            {/* 3 Main Stats Matching Reference */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-neutral-100">
              
              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-bold text-neutral-950 tracking-tight font-display">
                  {businessDetails.stats.satisfaction}
                </div>
                <div className="text-sm font-bold text-neutral-800">
                  {businessDetails.stats.satisfactionLabel}
                </div>
                <p className="text-xs text-neutral-400">
                  {businessDetails.stats.satisfactionDesc}
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-bold text-neutral-950 tracking-tight font-display">
                  {businessDetails.stats.destinations}
                </div>
                <div className="text-sm font-bold text-neutral-800">
                  {businessDetails.stats.destinationsLabel}
                </div>
                <p className="text-xs text-neutral-400">
                  {businessDetails.stats.destinationsDesc}
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-4xl sm:text-5xl font-bold text-neutral-950 tracking-tight font-display">
                  {businessDetails.stats.guides}
                </div>
                <div className="text-sm font-bold text-neutral-800">
                  {businessDetails.stats.guidesLabel}
                </div>
                <p className="text-xs text-neutral-400">
                  {businessDetails.stats.guidesDesc}
                </p>
              </div>

            </div>

            {/* Explore Button */}
            <div className="pt-2">
              <a 
                href="#destinations" 
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-amber-700 transition-colors group"
              >
                <span>View All Himachal & Uttarakhand Circuits</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
