import { ShieldCheck, Award, Leaf, CheckCircle } from "lucide-react";

const certs = [
  {
    icon: Award,
    name: "ISO/TS 16949",
    desc: "Automotive quality management system certification, ensuring rigorous quality control across all production processes.",
  },
  {
    icon: ShieldCheck,
    name: "UL Certified",
    desc: "Underwriters Laboratories certification verifying product safety and compliance with North American standards.",
  },
  {
    icon: Leaf,
    name: "ROHS Compliant",
    desc: "Full compliance with the Restriction of Hazardous Substances directive for environmentally responsible manufacturing.",
  },
  {
    icon: CheckCircle,
    name: "CQC Certified",
    desc: "China Quality Certification ensuring products meet national quality and safety standards.",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Quality Assurance
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Internationally Certified
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Our certifications demonstrate our unwavering commitment to quality,
            safety, and environmental responsibility.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <cert.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{cert.name}</h3>
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
