"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, LogIn, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "General Practice", href: "/services/general-practice" },
      { label: "Sports Medicine", href: "/services/sports-medicine" },
      { label: "Lameness Evaluation", href: "/services/lameness-evaluation" },
      { label: "Diagnostic Imaging", href: "/services/diagnostic-imaging" },
      { label: "Dentistry", href: "/services/dentistry" },
      { label: "Preventive Care", href: "/services/preventive-care" },
      { label: "Emergency & Ambulatory", href: "/services/emergency-ambulatory" },
      { label: "Pharmacy", href: "/services/pharmacy" },
    ],
  },
  { label: "Emergency", href: "/emergency" },
  { label: "Clients", href: "/clients" },
  { label: "Horse Owners Hub", href: "/horse-owners-hub" },
  { label: "Tools", href: "/tools" },
  { label: "Charity", href: "/charity" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 py-4 md:py-6 bg-transparent">

        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-9 h-9">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <span className="text-[var(--bg-dark)] font-bold text-base" style={{ fontFamily: "Georgia, serif" }}>
                    E
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className={cn(
                  "font-bold text-xl tracking-tight transition-colors duration-300 text-white"
                )} style={{ fontFamily: "var(--font-display)" }}>
                  EquiVet
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {navItems.slice(0, 6).map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-200 text-white/80 hover:text-[var(--gold)]"
                    )}
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="btn btn-sm btn-primary hidden md:inline-flex"
              >
                Get Consult <LogIn className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/20 text-white hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-200"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 xl:hidden transition-all duration-300",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-black transition-opacity duration-300",
            mobileOpen ? "opacity-70" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-[var(--bg-dark)] border-l border-white/10",
            "flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
            "overflow-y-auto",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--gold)] flex items-center justify-center">
                <span className="text-[var(--bg-dark)] font-bold" style={{ fontFamily: "Georgia, serif" }}>E</span>
              </div>
              <div>
                <div className="text-white font-bold group-hover:text-[var(--gold)] transition-colors" style={{ fontFamily: "var(--font-display)" }}>EquiVet</div>
                <div className="text-[var(--gold)] text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-accent)" }}>Practice</div>
              </div>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-[var(--gold)] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Emergency Alert */}
          <a
            href="tel:+490000000000"
            className="flex items-center gap-3 mx-4 mt-4 p-4 bg-[rgba(192,57,43,0.15)] border border-[rgba(192,57,43,0.3)] rounded-xl text-[#E74C3C] hover:bg-[rgba(192,57,43,0.25)] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-[#C0392B] flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm" style={{ fontFamily: "var(--font-accent)" }}>24/7 Emergency</div>
              <div className="text-xs text-[#E74C3C]/80">+49 000 000 0000</div>
            </div>
          </a>

          {/* Nav Items */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150",
                    "text-white/80 hover:text-[var(--gold)] hover:bg-[var(--gold)]/10",
                    item.label === "Emergency" && "text-[#E74C3C] hover:text-[#E74C3C]"
                  )}
                  style={{ fontFamily: "var(--font-accent)" }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2 rounded-lg text-xs text-white/50 hover:text-[var(--gold)] hover:bg-[var(--gold)]/10 transition-colors"
                        style={{ fontFamily: "var(--font-accent)" }}
                      >
                        — {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="p-4 border-t border-white/10 space-y-3">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/20 text-[var(--gold)] text-sm font-semibold hover:bg-[var(--gold)]/10 transition-colors"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              <LogIn className="w-4 h-4" />
              Client Portal Login
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary w-full"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
