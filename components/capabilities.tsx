const specs = [
  { item: "Material", current: "FR-4, CEM-3, CEM-1, 22F, Aluminum, Halogen Free", future: "Ceramic Substrate, FPC" },
  { item: "Board Size", current: "5100mm x 1200mm", future: "610mm x 1200mm" },
  { item: "Max Layers", current: "8 Layers", future: "12 Layers" },
  { item: "Board Thickness", current: "0.2mm - 3.6mm", future: "0.1mm - 5.2mm" },
  { item: "Min Mechanical Drilling", current: "0.3mm", future: "0.15mm" },
  { item: "Laser Drilling", current: "--", future: "0.1mm" },
  { item: "Hole Tolerance", current: "PTH \u00b10.076mm / NPTH \u00b10.05mm", future: "PTH \u00b10.05mm / NPTH \u00b10.025mm" },
  { item: "Trace Width/Space (Inner)", current: "0.5oz: 4mil/4mil, 1oz: 6mil/6mil", future: "0.5oz: 3mil/3mil, 1oz: 4mil/4mil" },
  { item: "Trace Width/Space (Outer)", current: "4mil/4mil", future: "3mil/3mil" },
  { item: "Impedance", current: "5mil", future: "3mil" },
  { item: "Layer Registration", current: "50 Ohm \u00b110%", future: "28 Ohm \u00b18%" },
  { item: "Copper Thickness", current: "Inner: 3oz / Outer: 4oz", future: "Inner: 4oz / Outer: 6oz" },
  { item: "HDI", current: "1+N+1, 4mil Via", future: "2+N+2, 4mil Via" },
  { item: "Buried/Blind Via", current: "Yes", future: "Yes" },
  { item: "Surface Finish", current: "LF HAL, ENIG, OSP, Gold Finger, Immersion Silver/Tin, Peelable Mask, Carbon Black", future: "--" },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Technical Capabilities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Manufacturing Specifications
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Our advanced production capabilities ensure precision and quality for
            your most demanding PCB requirements.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-900 to-blue-900 text-white">
                <th className="text-left px-6 py-4 font-semibold text-sm">
                  Specification
                </th>
                <th className="text-left px-6 py-4 font-semibold text-sm">
                  Current Capacity
                </th>
                <th className="text-left px-6 py-4 font-semibold text-sm">
                  Future Capacity
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((row, i) => (
                <tr
                  key={row.item}
                  className={`border-t border-slate-100 ${
                    i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  } hover:bg-blue-50/30 transition-colors`}
                >
                  <td className="px-6 py-4 font-medium text-slate-900 text-sm">
                    {row.item}
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
