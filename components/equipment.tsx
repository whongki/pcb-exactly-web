const equipment = [
  {
    name: "CNC Automatic Drilling Machine",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80",
  },
  {
    name: "Laser Direct Imaging (LDI)",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
  },
  {
    name: "Automatic Optical Inspection",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
  },
  {
    name: "Vacuum Acid Etching Line",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80",
  },
  {
    name: "Solder Screen Printing Line",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80",
  },
  {
    name: "CNC V-Cut Machine",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&q=80",
  },
];

export function Equipment() {
  return (
    <section id="equipment" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Facilities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Advanced Equipment & Factory
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Our 20,000+ sqm facility is equipped with state-of-the-art machinery
            to deliver consistent, high-quality PCB manufacturing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-lg">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
