import React, { useState } from 'react';
import { Compass, Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Heart, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { businessDetails } from '../data/businessConfig';
import { subscribeNewsletter } from '../lib/supabase';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await subscribeNewsletter(email);
    } catch (err) {
      console.warn("Newsletter subscribe error:", err);
    } finally {
      setLoading(false);
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#0E1318] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section connected to Supabase */}
        <div className="bg-neutral-900/80 rounded-3xl p-8 sm:p-10 border border-white/10 mb-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
                The Himalayan Gazette
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
                Receive Mountain Season Alerts & Special Tour Deals
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
                Snowfall updates, Rohtang/Spiti pass reopening dates, and early-bird holiday discounts delivered directly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Thank you! Your email is saved in our system. You'll receive seasonal updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2 bg-neutral-950 p-1.5 rounded-full border border-white/15">
                  <input 
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-2.5 rounded-full bg-white text-neutral-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-75"
                  >
                    {loading ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-display">
                tourex
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block ml-1"></span>
              </span>
            </a>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Premier mountain travel collective based in Himachal Pradesh. Handcrafting authentic, safe, and breathtaking tours across Himachal & Uttarakhand for Indian travelers.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <p><span className="text-white font-semibold">HP Tourism Reg:</span> {businessDetails.licenseNo}</p>
              <p><span className="text-white font-semibold">Toll-Free (India):</span> {businessDetails.tollFree}</p>
              <p><span className="text-white font-semibold">WhatsApp Concierge:</span> {businessDetails.whatsappDisplay}</p>
            </div>
          </div>

          {/* Column 2: Himachal Packages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              🏔️ Himachal Tours
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#destinations" className="hover:text-white transition-colors">Manali, Solang & Sissu</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Spiti Valley & Chandratal 4x4</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Kasol & Kheerganga Trek</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Shimla, Kufri & Toy Train</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Dharamshala & McLeodganj</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Jibhi & Tirthan Valley</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Dalhousie & Khajjiar</a></li>
            </ul>
          </div>

          {/* Column 3: Uttarakhand (Devbhoomi) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              🕉️ Uttarakhand Tours
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#destinations" className="hover:text-white transition-colors">Rishikesh Rafting & Glamping</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Kedarnath & Badrinath Yatra</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Nainital & Kumaon Lakes</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Mussoorie & Dhanaulti</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Auli Skiing & Ropeway</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Chopta Tungnath Trek</a></li>
              <li><a href="#destinations" className="hover:text-white transition-colors">Jim Corbett Tiger Safari</a></li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Safety */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
              Travel Assurance
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">Why Native Pahadi Guides?</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Delhi/Chandigarh Volvo Sleeper</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Sanitized Hill Cabs (Innova)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Rohtang & Spiti Permits</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Corporate & Family Offsites</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">24/7 Hill Emergency Desk</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} {businessDetails.name} ({businessDetails.legalName}). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-400">Terms & Conditions</a>
            <a href="#" className="hover:text-neutral-400">Cancellation & Refund Policy</a>
            <a href="#" className="hover:text-neutral-400">Responsible Eco-Tourism Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
