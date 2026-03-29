import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#equipment", label: "Equipment" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const products = [
  "Single-Sided PCB",
  "Double-Sided PCB",
  "Multilayer PCB",
  "Aluminum PCB",
  "LED PCB",
  "HDI PCB",
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="font-bold text-2xl mb-4">
              <span className="text-blue-400">PCB</span> Exactly
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Anhui Zhenghao Electronics Co., Ltd. Professional PCB manufacturer
              with 20+ years of experience, serving clients worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:pcbexactly@gmail.com"
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  pcbexactly@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="h-4 w-4 text-green-400 mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/8617621750550"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:text-green-400 transition-colors"
                >
                  +86 176 2175 0550
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">
                  +86 0563-2772577
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">
                  No. 777-9, Chang&apos;an Road, Guangde City, Anhui, China
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} PCB Exactly (Anhui Zhenghao
            Electronics Co., Ltd). All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
