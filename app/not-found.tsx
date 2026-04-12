"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <div className="relative mb-8">
          <div
            className="text-[12rem] font-black leading-none select-none"
            style={{
              fontFamily: "var(--font-display)",
              background:
                "linear-gradient(135deg, var(--gold-muted) 0%, var(--gold-glow) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[var(--gold)] text-6xl">🐴</div>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto mb-6" />

        <h1
          className="text-3xl font-bold text-white mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Page Not Found
        </h1>
        <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
          The page you&apos;re looking for has wandered off the trail. Let&apos;s
          get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-dark)] text-[var(--bg-primary)] font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border-hover)] text-[var(--text-secondary)] rounded-xl hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors text-sm"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
