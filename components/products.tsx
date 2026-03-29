import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Single-Sided PCB",
    desc: "Cost-effective solutions for simple circuit designs. Available with lead-tin, ENIG, OSP, and pure tin finishes.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    specs: "CEM-1 / CEM-3 / FR-4",
  },
  {
    title: "Double-Sided PCB",
    desc: "Versatile boards with circuits on both sides, ideal for more complex applications with through-hole connections.",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80",
    specs: "FR-4 / Aluminum",
  },
  {
    title: "Multilayer PCB",
    desc: "High-density interconnect boards supporting up to 8 layers for demanding electronic applications.",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80",
    specs: "Up to 8 Layers",
  },
  {
    title: "Aluminum PCB",
    desc: "Superior heat dissipation for LED lighting, power supplies, and automotive electronics applications.",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80",
    specs: "1-4 Layers",
  },
  {
    title: "LED PCB",
    desc: "Specialized circuit boards designed for LED lighting applications with optimal thermal management.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    specs: "White Solder Mask",
  },
  {
    title: "HDI PCB",
    desc: "High Density Interconnect boards with buried and blind vias for compact, high-performance designs.",
    image: "https://images.unsplash.com/photo-1601132359864-c974e79890ac?w=600&q=80",
    specs: "1+N+1 / 2+N+2",
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            PCB Solutions for Every Need
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            From simple single-sided boards to complex multilayer HDI designs,
            we deliver precision-manufactured PCBs for diverse industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                  {product.specs}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {product.title}
                </h3>
                <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                  {product.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors group/link"
                >
                  Request Quote
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
