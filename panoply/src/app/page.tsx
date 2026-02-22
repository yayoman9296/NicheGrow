"use client";

import {
  ScanEye,
  BrainCircuit,
  Users,
  Database,
  ShieldCheck,
  ArrowRight,
  Layers,
  ChevronRight,
} from "lucide-react";
import { FormEvent, useState } from "react";

/* ─────────────────────── HERO ─────────────────────── */

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,168,76,0.08),transparent)]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-dim px-4 py-1.5 text-xs font-medium tracking-wide text-accent uppercase">
          <Layers className="h-3.5 w-3.5" />
          Founder&apos;s Prototype
        </div>

        <h1 className="animate-fade-up font-serif text-5xl leading-tight font-bold tracking-tight text-gallery md:text-7xl md:leading-[1.1]">
          The Intelligence Layer
          <br />
          for Human History
        </h1>

        <p className="animate-fade-up-delay-1 mx-auto mt-8 max-w-xl text-lg leading-relaxed text-gallery/60">
          AI-native vision that clears the 50-year cataloging backlog&mdash;and
          gives every museum visitor a personal curator.
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#access"
            className="group flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-accent-light"
          >
            Request Early Access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#solution"
            className="flex items-center gap-2 rounded-full border border-white/[0.1] px-7 py-3.5 text-sm font-medium text-gallery/70 transition-all hover:border-white/20 hover:text-gallery"
          >
            See How It Works
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
    </section>
  );
}

/* ─────────────────── THE PROBLEM ─────────────────── */

function Problem() {
  const stats = [
    { value: "70%", label: "of natural history specimens remain uncataloged globally" },
    { value: "50yr", label: "estimated time to clear backlog at current staffing" },
    { value: "1 in 4", label: "museum objects have complete digital records" },
  ];

  return (
    <section id="problem" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-semibold tracking-[0.25em] text-accent uppercase">
          The Crisis in Collections
        </p>
        <h2 className="mt-4 text-center font-serif text-3xl font-bold text-gallery md:text-4xl">
          Billions of Artifacts. Invisible to the World.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-gallery/50">
          The world&apos;s museums hold humanity&apos;s collective memory, yet
          the vast majority of collections sit in storage&mdash;undigitized,
          undiscoverable, and at risk.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`animate-fade-up-delay-${i + 1} rounded-2xl border border-white/[0.06] bg-charcoal-light/50 p-8 text-center`}
            >
              <p className="font-serif text-5xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gallery/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── THE SOLUTION ─────────────────── */

function Solution() {
  const cards = [
    {
      icon: BrainCircuit,
      title: "Autonomous Cataloging",
      description:
        "Multi-modal AI agents ingest photos, provenance records, and condition reports — producing publication-ready catalog entries in seconds, not semesters.",
    },
    {
      icon: ScanEye,
      title: "Micro-Detail Recognition",
      description:
        "Our Niche AI identifies maker's marks, weave patterns, tool traces, and patina signatures that escape even trained conservators.",
    },
    {
      icon: Users,
      title: "Visitor Deep-Dive",
      description:
        "Every gallery object becomes a portal. Visitors scan, ask, and explore — guided by contextual AI that adapts to curiosity, not canned audio.",
    },
  ];

  return (
    <section id="solution" className="relative px-6 py-28">
      <div className="accent-line mx-auto mb-28 max-w-xs" />
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-semibold tracking-[0.25em] text-accent uppercase">
          The Panoply Platform
        </p>
        <h2 className="mt-4 text-center font-serif text-3xl font-bold text-gallery md:text-4xl">
          From Storage to Stage
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-gallery/50">
          Three integrated capabilities that move collections from dark storage
          into the hands of researchers, educators, and the public.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/[0.06] bg-charcoal-light/50 p-8 transition-all hover:border-accent/20 hover:bg-charcoal-light"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-gallery">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gallery/50">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── THE TECH ──────────────────── */

function Technology() {
  const pillars = [
    {
      icon: Database,
      title: "CIDOC CRM Native",
      description:
        "Every entity, relationship, and event is mapped to the CIDOC Conceptual Reference Model (ISO 21127) — the international standard for cultural heritage data exchange.",
    },
    {
      icon: ShieldCheck,
      title: "Audit-Grade Provenance",
      description:
        "Full chain-of-custody metadata with cryptographic hashing ensures cataloging decisions are traceable, reproducible, and legally defensible.",
    },
    {
      icon: Layers,
      title: "Interoperable by Design",
      description:
        "Export to LIDO, SPECTRUM, Dublin Core, or your existing CMS. Panoply doesn't replace your infrastructure — it supercharges it.",
    },
  ];

  return (
    <section id="technology" className="relative px-6 py-28">
      <div className="accent-line mx-auto mb-28 max-w-xs" />
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs font-semibold tracking-[0.25em] text-accent uppercase">
          Museum-Legit
        </p>
        <h2 className="mt-4 text-center font-serif text-3xl font-bold text-gallery md:text-4xl">
          Built on Standards, Not Shortcuts
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-gallery/50">
          We speak the museum world&apos;s language natively. Panoply is built
          from the ground up around the metadata standards institutions already
          trust.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/[0.06] bg-charcoal-light/50 p-8"
            >
              <pillar.icon className="mb-4 h-6 w-6 text-accent/70" />
              <h3 className="font-serif text-lg font-semibold text-gallery">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gallery/50">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* CIDOC CRM badge */}
        <div className="mt-12 flex items-center justify-center gap-3 text-gallery/30">
          <div className="h-px w-12 bg-gallery/10" />
          <span className="text-xs tracking-widest uppercase">
            ISO 21127 Compliant
          </span>
          <div className="h-px w-12 bg-gallery/10" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────── WAITLIST / CTA ─────────────── */

function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="access" className="relative px-6 py-28">
      <div className="accent-line mx-auto mb-28 max-w-xs" />
      <div className="mx-auto max-w-lg text-center">
        <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
          Early Access
        </p>
        <h2 className="mt-4 font-serif text-3xl font-bold text-gallery md:text-4xl">
          Request an Invitation
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gallery/50">
          We&apos;re onboarding founding partners from leading institutions.
          Spots are limited&mdash;tell us about your collection.
        </p>

        {submitted ? (
          <div className="mt-12 rounded-2xl border border-accent/20 bg-accent-dim p-10">
            <p className="font-serif text-xl font-semibold text-accent">
              Thank you.
            </p>
            <p className="mt-2 text-sm text-gallery/60">
              Our team will reach out within 48 hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-4 text-left"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-medium tracking-wide text-gallery/40 uppercase"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Dr. Jane Goodall"
                className="w-full rounded-xl border border-white/[0.08] bg-charcoal-light/60 px-4 py-3 text-sm text-gallery placeholder:text-gallery/25 focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30"
              />
            </div>

            <div>
              <label
                htmlFor="institution"
                className="mb-1.5 block text-xs font-medium tracking-wide text-gallery/40 uppercase"
              >
                Institution
              </label>
              <input
                id="institution"
                type="text"
                required
                placeholder="The Metropolitan Museum of Art"
                className="w-full rounded-xl border border-white/[0.08] bg-charcoal-light/60 px-4 py-3 text-sm text-gallery placeholder:text-gallery/25 focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="mb-1.5 block text-xs font-medium tracking-wide text-gallery/40 uppercase"
              >
                Role
              </label>
              <select
                id="role"
                required
                defaultValue=""
                className="w-full appearance-none rounded-xl border border-white/[0.08] bg-charcoal-light/60 px-4 py-3 text-sm text-gallery focus:border-accent/40 focus:outline-none focus:ring-1 focus:ring-accent/30"
              >
                <option value="" disabled className="text-gallery/25">
                  Select your role
                </option>
                <option value="director">Director / Deputy Director</option>
                <option value="curator">Curator / Head of Collections</option>
                <option value="registrar">Registrar / Collections Manager</option>
                <option value="conservator">Conservator</option>
                <option value="digital">Digital / Technology Lead</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-charcoal transition-all hover:bg-accent-light"
            >
              Request Early Access
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <p className="mt-3 text-center text-xs text-gallery/30">
              No spam. We respect the stewardship ethos.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

/* ──────────────────── FOOTER ──────────────────── */

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent">
            <span className="font-serif text-xs font-bold text-charcoal">P</span>
          </div>
          <span className="text-sm font-semibold text-gallery/70">Panoply</span>
        </div>
        <p className="text-xs text-gallery/30">
          &copy; {new Date().getFullYear()} Panoply, Inc. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-gallery/30">
          <a href="#" className="hover:text-gallery/60">Privacy</a>
          <a href="#" className="hover:text-gallery/60">Terms</a>
          <a href="#" className="hover:text-gallery/60">Contact</a>
        </div>
      </div>
    </footer>
  );
}

/* ──────────────────── PAGE ──────────────────── */

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <Waitlist />
      <Footer />
    </main>
  );
}
