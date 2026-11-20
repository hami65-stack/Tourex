import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, CheckCircle2, Search, Phone } from 'lucide-react';

export default function SignInModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [mode, setMode] = useState('signin'); // 'signin' | 'register' | 'lookup'
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [bookingIdInput, setBookingIdInput] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);
  const [foundBooking, setFoundBooking] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'lookup') {
      if (!bookingIdInput) return;
      setFoundBooking({
        id: bookingIdInput.toUpperCase(),
        tour: "Manali, Solang Valley & Atal Tunnel Adventure",
        status: "Confirmed & Driver Assigned",
        driver: "Sunil Thakur (+91 98160 55219) - Innova Crysta (HP 01 A 4920)",
        dates: "12 Mar 2026 - 16 Mar 2026",
        hotel: "The Himalayan Cedar Resort, Log Huts Road, Manali"
      });
      return;
    }

    setSuccess(true);
    setTimeout(() => {
      onClose();
      setSuccess(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 p-7 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {success ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 font-display">
              {mode === 'register' ? 'Account Created!' : 'Welcome Back!'}
            </h3>
            <p className="text-xs text-neutral-500">
              Signed in successfully. Loading your mountain travel dashboard...
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            
            <div className="text-center space-y-1">
              <h3 className="text-2xl font-bold text-neutral-900 font-display">
                {mode === 'register' ? 'Join Tourex Himalayas' : mode === 'lookup' ? 'Track Your Booking' : 'Sign In'}
              </h3>
              <p className="text-xs text-neutral-500">
                {mode === 'lookup' 
                  ? 'Enter your Booking Reference ID to check hill cab & hotel status.' 
                  : 'Access exclusive member discounts for Himachal & Uttarakhand chalets.'}
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex rounded-2xl bg-neutral-100 p-1 text-xs font-bold text-neutral-600">
              <button
                type="button"
                onClick={() => { setMode('signin'); setFoundBooking(null); }}
                className={`flex-1 py-2 rounded-xl transition-all ${
                  mode === 'signin' ? 'bg-white text-neutral-950 shadow-sm' : 'hover:text-neutral-950'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => { setMode('lookup'); setFoundBooking(null); }}
                className={`flex-1 py-2 rounded-xl transition-all ${
                  mode === 'lookup' ? 'bg-white text-neutral-950 shadow-sm' : 'hover:text-neutral-950'
                }`}
              >
                Track Booking
              </button>
              <button
                type="button"
                onClick={() => { setMode('register'); setFoundBooking(null); }}
                className={`flex-1 py-2 rounded-xl transition-all ${
                  mode === 'register' ? 'bg-white text-neutral-950 shadow-sm' : 'hover:text-neutral-950'
                }`}
              >
                Register
              </button>
            </div>

            {foundBooking ? (
              <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-200 text-xs space-y-2.5">
                <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
                  <span className="font-bold text-emerald-900">Reference: {foundBooking.id}</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                    {foundBooking.status}
                  </span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">Tour</span>
                  <span className="font-bold text-neutral-900">{foundBooking.tour}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">Dates</span>
                  <span className="text-neutral-800">{foundBooking.dates}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">Assigned Driver & Vehicle</span>
                  <span className="text-neutral-900 font-semibold">{foundBooking.driver}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px] uppercase font-bold">Hotel Voucher</span>
                  <span className="text-neutral-800">{foundBooking.hotel}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setFoundBooking(null)}
                  className="w-full mt-2 py-2 rounded-xl bg-neutral-900 text-white font-bold text-xs"
                >
                  Look up another ID
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {mode === 'lookup' ? (
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                      Booking Reference Number
                    </label>
                    <div className="relative">
                      <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. HEX-HP-8942 or Phone Number"
                        value={bookingIdInput}
                        onChange={(e) => setBookingIdInput(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    {mode === 'register' && (
                      <div>
                        <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input 
                            type="text" 
                            required
                            placeholder="e.g. Sunil Verma"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Email Address or WhatsApp Number
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input 
                          type="text" 
                          required
                          placeholder="name@example.com or +91..."
                          value={emailOrPhone}
                          onChange={(e) => setEmailOrPhone(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input 
                          type="password" 
                          required
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                        />
                      </div>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-neutral-950 hover:bg-black text-white font-bold text-sm tracking-wide shadow-xl transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <span>{mode === 'register' ? 'Create Account' : mode === 'lookup' ? 'Track Booking Status' : 'Sign In'}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>
              </form>
            )}

            <div className="text-center text-xs text-neutral-400">
              Need immediate hill assistance? Call our toll-free desk: <br />
              <span className="font-bold text-neutral-800">1800-123-HIMALAYA</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
