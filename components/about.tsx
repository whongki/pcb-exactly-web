"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Globe, Handshake, Target } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref };
}

export function About() {
  const { t } = useI18n();
  const y1 = useCountUp(20, 2000);
  const y2 = useCountUp(300, 2000);
  const y3 = useCountUp(20000, 2000);
  const y4 = useCountUp(99, 2000);

  const values = [
    { icon: Handshake, title: t.about.values.mutualBenefit, desc: t.about.values.mutualBenefitDesc },
    { icon: Globe, title: t.about.values.cooperation, desc: t.about.values.cooperationDesc },
    { icon: Target, title: t.about.values.excellence, desc: t.about.values.excellenceDesc },
    { icon: Building2, title: t.about.values.integrity, desc: t.about.values.integrityDesc },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t.about.tag}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {t.about.title}
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            {t.about.desc}
          </p>
        </div>

        <div ref={y1.ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { count: y1.count, suffix: "+", label: t.about.stats.years, unit: "" },
            { count: y2.count, suffix: "+", label: t.about.stats.employees, unit: "" },
            { count: y3.count, suffix: "", label: t.about.stats.factory, unit: " sqm" },
            { count: y4.count, suffix: "%", label: t.about.stats.satisfaction, unit: "" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600">
                {stat.count.toLocaleString()}
                {stat.unit}
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <v.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
