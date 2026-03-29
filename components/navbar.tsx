"use client";

import { useState, useEffect } from "react";
import { Menu, Globe } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/context";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, locale, toggleLocale } = useI18n();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#products", label: t.nav.products },
    { href: "#capabilities", label: t.nav.capabilities },
    { href: "#equipment", label: t.nav.equipment },
    { href: "#certifications", label: t.nav.certifications },
    { href: "#why-us", label: t.nav.whyUs },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div
              className={`font-bold text-xl lg:text-2xl tracking-tight transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              <span className="text-blue-500">PCB</span> Exactly
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/10 ${
                  scrolled
                    ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              aria-label="Switch language"
            >
              <Globe className="h-4 w-4" />
              {locale === "en" ? "中文" : "EN"}
            </button>

            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "sm" }),
                "hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white"
              )}
            >
              {t.nav.getQuote}
            </a>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <button
                    className={`lg:hidden p-2 rounded-md ${
                      scrolled ? "text-foreground" : "text-white"
                    }`}
                    aria-label="Open menu"
                  />
                }
              >
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-1 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="mt-4 px-4 space-y-3">
                    <button
                      onClick={() => { toggleLocale(); setOpen(false); }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-foreground/80 hover:bg-primary/5 transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      {locale === "en" ? "切换到中文" : "Switch to English"}
                    </button>
                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className={cn(
                        buttonVariants(),
                        "w-full bg-blue-600 hover:bg-blue-700 text-white"
                      )}
                    >
                      {t.nav.getQuote}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
