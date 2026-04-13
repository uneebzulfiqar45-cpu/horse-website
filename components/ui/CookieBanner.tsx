"use client";

import { useState, useEffect } from "react";
import { Cookie, X, Settings } from "lucide-react";
import Link from "next/link";

const COOKIE_CONSENT_KEY = "equivet_cookie_consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "all");
    setShow(false);
  };

  const acceptEssential = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "essential");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 !p-4 md:!p-6 animate-[fade-in-up_0.4s_ease_forwards]">
      <div className="max-w-4xl mx-auto bg-[var(--bg-dark-2)] border border-white/10 rounded-2xl shadow-[0_-8px_40px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="!p-5 md:!p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--gold-muted)] border border-[var(--border-strong)] flex items-center justify-center flex-shrink-0 !mt-0.5">
              <Cookie className="w-5 h-5 text-[var(--gold)]" />
            </div>

            <div className="flex-1">
              <h3 className="text-white font-semibold text-base !mb-1" style={{ fontFamily: "var(--font-display)" }}>
                We use cookies 🍪
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                We use essential cookies for operation and optional analytics cookies to improve your experience.
                Your data is handled in compliance with{" "}
                <Link href="/legal/privacy" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline underline-offset-2">
                  GDPR
                </Link>
                . See our{" "}
                <Link href="/legal/cookies" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline underline-offset-2">
                  Cookie Policy
                </Link>
                .
              </p>

              {showDetails && (
                <div className="!mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {[
                    {
                      name: "Essential",
                      desc: "Required for basic site function, login, and security. Cannot be disabled.",
                      required: true,
                    },
                    {
                      name: "Analytics",
                      desc: "Helps us understand how visitors use our site to improve your experience.",
                      required: false,
                    },
                  ].map((cat) => (
                    <div
                      key={cat.name}
                      className="!p-3 bg-[var(--bg-dark)] border border-white/5 rounded-lg"
                    >
                      <div className="flex items-center justify-between !mb-1">
                        <span className="text-white font-medium">{cat.name}</span>
                        {cat.required && (
                          <span className="text-[var(--gold)] text-[10px] font-semibold tracking-wide uppercase bg-[var(--gold-muted)] !px-2 !py-0.5 rounded-full">
                            Required
                          </span>
                        )}
                      </div>
                      <p className="text-white/60">{cat.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setShow(false)}
              className="text-[var(--text-subtle)] hover:text-[var(--text-secondary)] transition-colors flex-shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="!mt-4 flex flex-wrap items-center gap-3 !pl-14">
            <button
              onClick={acceptAll}
              className="!px-5 !py-2.5 bg-[var(--gold)] text-black font-bold text-sm rounded-lg hover:bg-[var(--gold-light)] transition-colors"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Accept All
            </button>
            <button
              onClick={acceptEssential}
              className="!px-5 !py-2.5 border border-white/20 text-white/80 font-medium text-sm rounded-lg hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Essential Only
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="!px-4 !py-2.5 text-white/50 hover:text-[var(--gold)] text-sm flex items-center gap-1.5 transition-colors"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              <Settings className="w-3.5 h-3.5" />
              {showDetails ? "Hide" : "Details"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
