"use client";

import { useI18n } from "@/lib/i18n/context";

const specData = [
  { key: "material", current: "FR-4, CEM-3, CEM-1, 22F, Aluminum, Halogen Free", future: "Ceramic Substrate, FPC" },
  { key: "boardSize", current: "5100mm x 1200mm", future: "610mm x 1200mm" },
  { key: "maxLayers", current: "8 Layers", future: "12 Layers" },
  { key: "boardThickness", current: "0.2mm - 3.6mm", future: "0.1mm - 5.2mm" },
  { key: "minDrilling", current: "0.3mm", future: "0.15mm" },
  { key: "laserDrilling", current: "--", future: "0.1mm" },
  { key: "holeTolerance", current: "PTH \u00b10.076mm / NPTH \u00b10.05mm", future: "PTH \u00b10.05mm / NPTH \u00b10.025mm" },
  { key: "traceInner", current: "0.5oz: 4mil/4mil, 1oz: 6mil/6mil", future: "0.5oz: 3mil/3mil, 1oz: 4mil/4mil" },
  { key: "traceOuter", current: "4mil/4mil", future: "3mil/3mil" },
  { key: "impedance", current: "5mil", future: "3mil" },
  { key: "layerReg", current: "50 Ohm \u00b110%", future: "28 Ohm \u00b18%" },
  { key: "copperThickness", current: "Inner: 3oz / Outer: 4oz", future: "Inner: 4oz / Outer: 6oz" },
  { key: "hdi", current: "1+N+1, 4mil Via", future: "2+N+2, 4mil Via" },
  { key: "buriedBlindVia", current: "Yes", future: "Yes" },
  { key: "surfaceFinish", current: "LF HAL, ENIG, OSP, Gold Finger, Immersion Silver/Tin, Peelable Mask, Carbon Black", future: "--" },
] as const;

export function Capabilities() {
  const { t } = useI18n();

  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t.capabilities.tag}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            {t.capabilities.title}
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            {t.capabilities.desc}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
                <th className="text-left px-6 py-4 font-semibold text-sm">
                  {t.capabilities.colSpec}
                </th>
                <th className="text-left px-6 py-4 font-semibold text-sm">
                  {t.capabilities.colCurrent}
                </th>
                <th className="text-left px-6 py-4 font-semibold text-sm">
                  {t.capabilities.colFuture}
                </th>
              </tr>
            </thead>
            <tbody>
              {specData.map((row, i) => (
                <tr
                  key={row.key}
                  className={`border-t border-slate-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  } hover:bg-blue-50/30 transition-colors`}
                >
                  <td className="px-6 py-4 font-medium text-slate-900 text-sm">
                    {t.capabilities.specs[row.key]}
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-sm">
                    {row.current}
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-sm">
                    {row.future}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
