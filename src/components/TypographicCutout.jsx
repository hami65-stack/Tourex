import React from 'react';
import { heroDetails } from '../data/destinations';

export default function TypographicCutout() {
  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFA] border-y border-neutral-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Typographic Cutout Headline matching Reference Mockup */}
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-neutral-900 tracking-tight leading-[1.25] sm:leading-[1.35]">
          
          {/* Line 1 */}
          <div className="flex flex-wrap items-center justify-center gap-y-2">
            <span>Take the step and explore</span>
            
            {/* Pill Image 1: Snow-capped Himalayan Ridge & Deodar Pine Woods */}
            <span className="inline-flex items-center align-middle mx-3 sm:mx-4 w-24 sm:w-36 md:w-44 h-10 sm:h-14 md:h-16 rounded-full overflow-hidden shadow-md border-2 border-white ring-1 ring-black/5 transform hover:scale-105 transition-transform duration-500 cursor-pointer group">
              <img 
                src={heroDetails.cutoutImage1} 
                alt="Himachal Mountain Range Panorama" 
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
              />
            </span>
            
            <span>the</span>
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 mt-2 sm:mt-3">
            <span>world</span>
            
            {/* Pill Image 2: Emerald Lake Waters of Devbhoomi / Nainital / Chandratal */}
            <span className="inline-flex items-center align-middle mx-3 sm:mx-4 w-28 sm:w-40 md:w-48 h-10 sm:h-14 md:h-16 rounded-full overflow-hidden shadow-md border-2 border-white ring-1 ring-black/5 transform hover:scale-105 transition-transform duration-500 cursor-pointer group">
              <img 
                src={heroDetails.cutoutImage2} 
                alt="Emerald Alpine Lake in Himalayas" 
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
              />
            </span>
            
            <span>waiting for you.</span>
          </div>

        </div>

        {/* Subtitle verbatim from Reference Mockup */}
        <p className="mt-8 sm:mt-10 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-500 font-normal leading-relaxed">
          Traveling change you. You see new places, meet new people, and become a new version of yourself.
        </p>

      </div>
    </section>
  );
}
