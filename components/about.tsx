"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Globe, Handshake, Target } from "lucide-react";

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, startOnView]);

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

const values = [
  { icon: Handshake, title: "Mutual Benefit", desc: "Win-win partnerships with every client" },
  { icon: Globe, title: "Cooperation", desc: "Working together across borders" },
  { icon: Target, title: "Excellence", desc: "Pursuing the highest quality standards" },
  { icon: Building2, title: "Integrity", desc: "Trust-based business relationships" },
];

export function About() {
  const y1 = useCountUp(20, 2000);
  const y2 = useCountUp(300, 2000);
  const y3 = useCountUp(20000, 2000);
  const y4 = useCountUp(99, 2000);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Building Trust Through Quality
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Anhui Zhenghao Electronics Co., Ltd (PCB Exactly) was founded in 2001
            and has grown into a leading PCB manufacturer with over 20 years of
            experience. We specialize in double-sided and multilayer circuit boards,
            serving clients worldwide with advanced technology and strict quality control.
          </p>
        </div>

        <div ref={y1.ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { count: y1.count, suffix: "+", label: "Years Experience", unit: "" },
            { count: y2.count, suffix: "+", label: "Employees", unit: "" },
            { count: y3.count, suffix: "", label: "Factory Area", unit: " sqm" },
            { count: y4.count, suffix: "%", label: "Client Satisfaction", unit: "" },
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
