"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WA_URL =
  "https://wa.me/8617621750550?text=Hi%20I%20would%20like%20to%20understand%20more%20about%20your%20factory%20and%20products";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showTooltip && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 max-w-[280px] animate-fade-in-up">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  PCB Exactly
                </div>
                <div className="text-xs text-green-600">Online now</div>
              </div>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-600 mb-3">
            Hi! Need a PCB quote or have questions about our manufacturing
            capabilities? Chat with us on WhatsApp!
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 rounded-lg transition-colors"
          >
            Start Chat
          </a>
        </div>
      )}

      <button
        onClick={() => setShowTooltip(!showTooltip)}
        className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring" />
        <MessageCircle className="h-7 w-7 text-white relative z-10" />
      </button>
    </div>
  );
}
