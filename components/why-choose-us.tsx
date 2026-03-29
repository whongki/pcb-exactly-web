"use client";

import { Clock, Shield, Cpu, DollarSign, Truck, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const advantageIcons = [
  { key: "experience", icon: Clock },
  { key: "quality", icon: Shield },
  { key: "equipment", icon: Cpu },
  { key: "pricing", icon: DollarSign },
  { key: "delivery", icon: Truck },
  { key: "service", icon: Wrench },
] as const;

export function WhyChooseUs() {
  const { t } = useI18n();

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit2" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 40 25 M 40 55 L 40 80 M 0 40 L 25 40 M 55 40 L 80 40" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="40" cy="40" r="3" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit2)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
            {t.whyUs.tag}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t.whyUs.title}
          </h2>
          <p className="mt-6 text-lg text-blue-100/70">
            {t.whyUs.desc}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantageIcons.map((a) => {
            const adv = t.whyUs.items[a.key];
            return (
              <div
                key={a.key}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <a.icon className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{adv.title}</h3>
                <p className="mt-3 text-blue-100/60 leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
