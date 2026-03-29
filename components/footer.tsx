"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useI18n();

  const quickLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#products", label: t.nav.products },
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#equipment", label: t.nav.equipment },
    { href: "#certifications", label: t.nav.certifications },
    { href: "#contact", label: t.nav.contact },
  ];

  const productItems = [
    t.products.items.singleSided.title,
    t.products.items.doubleSided.title,
    t.products.items.multilayer.title,
    t.products.items.aluminum.title,
    t.products.items.led.title,
    t.products.items.hdi.title,
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="PCB Exactly Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="font-bold text-2xl">
                <span className="text-blue-400">PCB</span> Exactly
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.footer.desc}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.quickLinks}</h4>
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
            <h4 className="font-semibold text-white mb-4">{t.footer.products}</h4>
            <ul className="space-y-2">
              {productItems.map((p) => (
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
            <h4 className="font-semibold text-white mb-4">{t.footer.contactUs}</h4>
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
                  {t.contact.whatsappLink}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">+86 0563-2772577</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">
                  {t.contact.addressValue}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-slate-500 text-sm hover:text-blue-400 transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
