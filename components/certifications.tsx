"use client";

import { ShieldCheck, Award, Leaf, CheckCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const certIcons = [
  { key: "iso", icon: Award },
  { key: "ul", icon: ShieldCheck },
  { key: "rohs", icon: Leaf },
  { key: "cqc", icon: CheckCircle },
] as const;

export function Certifications() {
  const { t } = useI18n();

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t.certifications.tag}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {t.certifications.title}
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            {t.certifications.desc}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certIcons.map((c) => {
            const cert = t.certifications.items[c.key];
            return (
              <div
                key={c.key}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                  <c.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{cert.name}</h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
