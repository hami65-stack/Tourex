import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { businessDetails } from '../data/businessConfig';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');

  const sendWhatsApp = (msg) => {
    const text = encodeURIComponent(msg || "Namaste Tourex Himalayas! I would like to inquire about planning an upcoming tour to Himachal/Uttarakhand.");
    window.open(`https://wa.me/${businessDetails.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Chat Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">Pahadi Concierge Desk</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  <span>Online · Manali & Dehradun Hubs</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-neutral-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-neutral-200 text-neutral-800 leading-relaxed">
              Namaste! 🙏 Welcome to Tourex Himalayas. How can our native travel experts assist your Himachal or Uttarakhand vacation?
            </div>

            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => sendWhatsApp("Namaste, I want to book a Manali & Solang Valley tour package with luxury chalet.")}
                className="px-2.5 py-1.5 rounded-full bg-white border border-neutral-200 hover:border-emerald-500 text-neutral-700 hover:text-emerald-700 transition-colors text-[11px]"
              >
                🏔️ Manali Chalet Tour
              </button>
              <button
                onClick={() => sendWhatsApp("Hi, please share details and price for Spiti Valley 4x4 Circuit & Chandratal Lake.")}
                className="px-2.5 py-1.5 rounded-full bg-white border border-neutral-200 hover:border-emerald-500 text-neutral-700 hover:text-emerald-700 transition-colors text-[11px]"
              >
                🚙 Spiti 4x4 Expedition
              </button>
              <button
                onClick={() => sendWhatsApp("Namaste, I need information and dates for Kedarnath & Badrinath Do Dham Yatra.")}
                className="px-2.5 py-1.5 rounded-full bg-white border border-neutral-200 hover:border-emerald-500 text-neutral-700 hover:text-emerald-700 transition-colors text-[11px]"
              >
                🕉️ Kedarnath Pilgrimage
              </button>
              <button
                onClick={() => sendWhatsApp("Hi, I want a quote for private Innova cab pickup from Delhi to Manali / Shimla.")}
                className="px-2.5 py-1.5 rounded-full bg-white border border-neutral-200 hover:border-emerald-500 text-neutral-700 hover:text-emerald-700 transition-colors text-[11px]"
              >
                🚕 Delhi-Hill Cab Quote
              </button>
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-neutral-100 flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Type your message..."
              value={quickMessage}
              onChange={(e) => setQuickMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendWhatsApp(quickMessage);
                  setQuickMessage('');
                }
              }}
              className="flex-1 px-3 py-2 rounded-xl bg-neutral-100 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              onClick={() => {
                sendWhatsApp(quickMessage);
                setQuickMessage('');
              }}
              className="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none group"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </button>

    </div>
  );
}
