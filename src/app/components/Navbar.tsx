"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Technology", href: "#technology" },
  { label: "Early Access", href: "#waitlist" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-wide text-gallery">
            Panoply
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-gallery/60 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="rounded border border-accent/40 px-5 py-2 text-sm tracking-wide text-accent transition-all hover:bg-accent hover:text-charcoal"
          >
            Partner Login
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-gallery md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-charcoal/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm tracking-wide text-gallery/60 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded border border-accent/40 px-5 py-2 text-center text-sm tracking-wide text-accent transition-all hover:bg-accent hover:text-charcoal"
            >
              Partner Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
