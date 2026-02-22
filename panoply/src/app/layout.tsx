import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panoply — The Intelligence Layer for Human History",
  description:
    "Agentic AI that clears the 50-year museum cataloging backlog and gives every visitor a personal curator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {/* ── Sticky Navigation ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-charcoal/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent">
                <span className="font-serif text-sm font-bold text-charcoal">P</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-gallery">
                Panoply
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden items-center gap-8 text-sm md:flex">
              <a
                href="#problem"
                className="text-gallery/60 transition-colors hover:text-gallery"
              >
                The Problem
              </a>
              <a
                href="#solution"
                className="text-gallery/60 transition-colors hover:text-gallery"
              >
                Solution
              </a>
              <a
                href="#technology"
                className="text-gallery/60 transition-colors hover:text-gallery"
              >
                Technology
              </a>
              <a
                href="#access"
                className="text-gallery/60 transition-colors hover:text-gallery"
              >
                Early Access
              </a>
            </div>

            {/* Partner Login */}
            <a
              href="#"
              className="rounded-full border border-white/[0.12] px-5 py-2 text-sm font-medium text-gallery/80 transition-all hover:border-accent/40 hover:text-accent"
            >
              Partner Login
            </a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
