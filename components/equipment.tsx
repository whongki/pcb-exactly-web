"use client";

import { useI18n } from "@/lib/i18n/context";

const equipmentData = [
  { key: "cncDrilling", image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80" },
  { key: "ldi", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80" },
  { key: "aoi", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80" },
  { key: "etching", image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80" },
  { key: "screenPrint", image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80" },
  { key: "vcut", image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&q=80" },
] as const;

export function Equipment() {
  const { t } = useI18n();

  return (
    <section id="equipment" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t.equipment.tag}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {t.equipment.title}
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            {t.equipment.desc}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentData.map((item) => (
            <div
              key={item.key}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={t.equipment.items[item.key]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-lg">
                  {t.equipment.items[item.key]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
