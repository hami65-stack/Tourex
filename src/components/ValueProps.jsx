import React from 'react';
import { Compass, Users, ShieldCheck, Car, Mountain, Sparkles, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';
import { businessDetails } from '../data/businessConfig';

export default function ValueProps({ onOpenContact }) {
  // 3 Core Pillars directly matching the bottom of reference mockup
  const pillars = [
    {
      icon: Compass,
      title: "Ease of travel",
      subtitle: "Doorstep Pickups & Mountain Logistics",
      description: "A good travel experience is not just about the places visited; our verified hill drivers and luxury Volvo coaches make your journey comfortable from Delhi, Chandigarh, or Dehradun."
    },
    {
      icon: Users,
      title: "Local Staff Help",
      subtitle: "Native Pahadi Guides on Ground",
      description: "Professional native guides ensure you will not miss hidden alpine meadows, sacred temples, and secluded homestays known only to locals."
    },
    {
      icon: ShieldCheck,
      title: "Safe and reliable",
      subtitle: "Certified Mountain Safety Guarantee",
      description: "Experience and certified mountain drivers ensure your safety is guaranteed with 24/7 hill weather monitoring and high-altitude medical support."
    }
  ];

  const serviceIconMap = {
    Plane: Car,
    Mountain: Mountain,
    Compass: Compass,
    ShieldCheck: ShieldCheck,
    Ship: Car,
    Headphones: Headphones
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Core Value Pillars - Verbatim Layout from Reference Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pb-20 border-b border-neutral-200/80">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="flex flex-col items-start space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-amber-400 text-neutral-800 flex items-center justify-center transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900 font-display">
                    {pillar.title}
                  </h3>
                  <span className="text-xs font-semibold text-amber-700 block mt-0.5">
                    {pillar.subtitle}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Business Services Showcase */}
        <div className="pt-20">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full">
              Full-Stack Mountain Travel Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-display">
              Why Indian Travelers Choose Us
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed">
              From Delhi NCR doorstep pickups to high-altitude permits in Spiti and VIP darshan at Kedarnath, we manage every single touchpoint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessDetails.services.map((srv) => {
              const Icon = serviceIconMap[srv.icon] || Compass;
              return (
                <div 
                  key={srv.id}
                  className="p-8 rounded-3xl bg-[#FBFBFA] border border-neutral-200/80 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 space-y-4 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white text-neutral-900 group-hover:bg-neutral-900 group-hover:text-amber-400 flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-200/60 text-neutral-700">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-amber-700 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-neutral-700 group-hover:text-neutral-950">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Included in Custom Packages</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Consultation Banner */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
            
            <div className="space-y-2 text-center md:text-left relative z-10">
              <h3 className="text-2xl font-bold font-display">Need a Customized Family or Group Package?</h3>
              <p className="text-neutral-400 text-sm max-w-xl">
                Tell us your travel dates, preferred Himachal or Uttarakhand destination, and group size. We'll send an instant customized itinerary with transparent pricing in 15 minutes.
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="relative z-10 px-8 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-sm tracking-wide transition-all shadow-lg hover:scale-105 whitespace-nowrap"
            >
              Get Custom Quote
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
