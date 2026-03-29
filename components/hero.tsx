"use client";

import { ArrowRight, MessageCircle, Award, Users, Factory, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function Hero() {
  const { t } = useI18n();

  const stats = [
    { icon: Clock, value: "15+", label: t.hero.stats.years },
    { icon: Users, value: "300+", label: t.hero.stats.employees },
    { icon: Factory, value: "20,000", label: t.hero.stats.factory },
    { icon: Award, value: "ISO", label: t.hero.stats.certified },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95" />

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 50 30 M 50 70 L 50 100 M 0 50 L 30 50 M 70 50 L 100 50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-blue-400" />
              <circle cx="50" cy="50" r="3" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-400" />
              <circle cx="50" cy="30" r="2" fill="currentColor" className="text-blue-400" />
              <circle cx="50" cy="70" r="2" fill="currentColor" className="text-blue-400" />
              <circle cx="30" cy="50" r="2" fill="currentColor" className="text-blue-400" />
              <circle cx="70" cy="50" r="2" fill="currentColor" className="text-blue-400" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8">
            <Award className="h-4 w-4" />
            {t.hero.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            {t.hero.titlePre}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {t.hero.titleHighlight}
            </span>{" "}
            {t.hero.titlePost}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-base font-medium px-8 h-12 transition-colors"
            >
              {t.hero.ctaQuote}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/8617621750550?text=Hi%20I%20would%20like%20to%20understand%20more%20about%20your%20factory%20and%20products"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 text-white hover:bg-white/10 text-base font-medium px-8 h-12 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              {t.hero.ctaWhatsApp}
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <stat.icon className="h-6 w-6 text-blue-400" />
              <span className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-sm text-blue-200/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">{t.hero.scrollDown}</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
