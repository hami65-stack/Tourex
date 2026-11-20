import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { reviewsData } from '../data/destinations';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex(prev => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex(prev => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const activeReview = reviewsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FBFBFA] border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Verbatim from Reference Mockup */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
            Real Stories From Indian Travelers
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-display">
            Get a good travel experience
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
            A good travel experience is not just about the places visited, but also the stories and lessons brought back home.
          </p>
        </div>

        {/* Highlighted Review Feature Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-neutral-200/80 relative">
          
          <Quote className="w-16 h-16 text-amber-100 absolute top-8 right-8 -z-0" />

          <div className="relative z-10 space-y-8">
            
            {/* Star Rating */}
            <div className="flex items-center gap-1.5">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl sm:text-2xl font-light text-neutral-800 leading-relaxed italic">
              "{activeReview.comment}"
            </blockquote>

            {/* Traveler Profile & Controls */}
            <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={activeReview.avatar} 
                  alt={activeReview.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md ring-1 ring-neutral-200"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-base font-bold text-neutral-900">{activeReview.name}</h4>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-xs text-neutral-500">{activeReview.role} · {activeReview.date}</p>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={prevReview}
                  className="w-11 h-11 rounded-full border border-neutral-200 hover:bg-neutral-900 hover:text-white flex items-center justify-center text-neutral-700 transition-colors"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-semibold text-neutral-400 px-2">
                  0{currentIndex + 1} / 0{reviewsData.length}
                </span>
                <button
                  onClick={nextReview}
                  className="w-11 h-11 rounded-full border border-neutral-200 hover:bg-neutral-900 hover:text-white flex items-center justify-center text-neutral-700 transition-colors"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
