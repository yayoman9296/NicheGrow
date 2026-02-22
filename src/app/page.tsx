"use client";

import { useState } from "react";
import {
  ScanEye,
  BrainCircuit,
  Users,
  Database,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Landmark,
  BarChart3,
  Layers,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle radial gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-accent">
          Founder&apos;s Prototype
        </p>
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-gallery sm:text-6xl lg:text-7xl">
          The Intelligence Layer
          <br />
          <span className="text-accent">for Human History.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gallery/60">
          Museums hold billions of artifacts — most unseen, uncataloged, and
          unknown. Panoply&apos;s agentic AI clears the 50&#8209;year cataloging
          backlog with vision&#8209;native intelligence, transforming dark
          archives into living knowledge.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#waitlist"
            className="group flex items-center gap-2 rounded bg-accent px-8 py-3.5 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-accent-light"
          >
            Request Early Access
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#solution"
            className="flex items-center gap-2 text-sm tracking-wide text-gallery/50 transition-colors hover:text-gallery"
          >
            See how it works
            <ChevronRight size={14} />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  THE PROBLEM — Stats                                                */
/* ------------------------------------------------------------------ */
const stats = [
  {
    figure: "70%",
    label: "of museum collections have never been exhibited",
    source: "ICOM Global Report",
  },
  {
    figure: "50+",
    label: "year backlog to catalog existing holdings at current pace",
    source: "Smithsonian OIG",
  },
  {
    figure: "3.5B",
    label: "artifacts held in global institutional archives",
    source: "UNESCO Estimate",
  },
];

function Problem() {
  return (
    <section id="problem" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs tracking-[0.2em] uppercase text-accent">
          The Problem
        </p>
        <h2 className="max-w-xl font-serif text-3xl leading-snug text-gallery sm:text-4xl">
          History&apos;s greatest collection is invisible.
        </h2>
        <p className="mt-4 max-w-xl text-gallery/50">
          The world&apos;s museums, archives, and heritage institutions sit on an
          immense backlog. Decades of underfunding and manual processes mean most
          of humanity&apos;s material record remains in the dark.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.figure}
              className="rounded-lg border border-white/5 bg-charcoal-light/50 p-8"
            >
              <p className="font-serif text-5xl text-accent">{s.figure}</p>
              <p className="mt-4 text-sm leading-relaxed text-gallery/70">
                {s.label}
              </p>
              <p className="mt-3 text-xs text-gallery/30">{s.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  THE SOLUTION — Three cards                                         */
/* ------------------------------------------------------------------ */
const solutions = [
  {
    icon: BrainCircuit,
    title: "Autonomous Cataloging",
    description:
      "Drop a tray of artifacts into the pipeline. Panoply's agentic vision models identify, classify, and generate structured metadata — hands-free, at institutional scale.",
  },
  {
    icon: ScanEye,
    title: "Micro-Detail Recognition",
    subtitle: "Niche AI",
    description:
      "Hallmarks, patina wear, weave patterns, brushstroke analysis — our specialized models detect the details that define provenance and authenticity.",
  },
  {
    icon: Users,
    title: "Visitor Deep-Dive",
    description:
      "Transform any cataloged artifact into a rich, interactive experience. Visitors explore context, history, and connections on-demand through natural conversation.",
  },
];

function Solution() {
  return (
    <section id="solution" className="relative px-6 py-28">
      {/* Divider line */}
      <div className="mx-auto mb-20 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs tracking-[0.2em] uppercase text-accent">
          The Solution
        </p>
        <h2 className="max-w-xl font-serif text-3xl leading-snug text-gallery sm:text-4xl">
          One platform. Three capabilities.
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group rounded-lg border border-white/5 bg-charcoal-light/30 p-8 transition-all hover:border-accent/20 hover:bg-charcoal-light/60"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-accent/20 bg-accent/5 text-accent transition-colors group-hover:bg-accent/10">
                <s.icon size={24} />
              </div>
              <h3 className="font-serif text-xl text-gallery">{s.title}</h3>
              {s.subtitle && (
                <span className="mt-1 inline-block text-xs tracking-wide text-accent/70">
                  {s.subtitle}
                </span>
              )}
              <p className="mt-3 text-sm leading-relaxed text-gallery/50">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  THE TECH — CIDOC CRM                                               */
/* ------------------------------------------------------------------ */
const techPoints = [
  {
    icon: Database,
    title: "CIDOC CRM Native",
    description:
      "Every record Panoply generates is structured to the CIDOC Conceptual Reference Model — the ISO 21127 standard for cultural heritage information exchange.",
  },
  {
    icon: ShieldCheck,
    title: "Institutional-Grade Trust",
    description:
      "Outputs are traceable, auditable, and designed for direct ingestion into existing Collection Management Systems — no manual re-keying.",
  },
  {
    icon: Layers,
    title: "Interoperable Ontology",
    description:
      "Compatible with LIDO, Dublin Core, and Spectrum. Panoply maps across metadata standards so collections can share knowledge globally.",
  },
];

function Technology() {
  return (
    <section id="technology" className="relative px-6 py-28">
      <div className="mx-auto mb-20 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="flex items-start gap-3">
          <Landmark size={20} className="mt-1 shrink-0 text-accent/60" />
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] uppercase text-accent">
              Museum-Legit Technology
            </p>
            <h2 className="max-w-xl font-serif text-3xl leading-snug text-gallery sm:text-4xl">
              Built on the standards museums already trust.
            </h2>
            <p className="mt-4 max-w-xl text-gallery/50">
              Panoply doesn&apos;t ask institutions to change their workflows. We
              speak their language — starting with CIDOC CRM, the international
              standard for semantic interoperability in cultural heritage.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {techPoints.map((t) => (
            <div
              key={t.title}
              className="rounded-lg border border-white/5 bg-charcoal-light/30 p-8"
            >
              <t.icon size={20} className="mb-4 text-accent/60" />
              <h3 className="font-serif text-lg text-gallery">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gallery/50">
                {t.description}
              </p>
            </div>
          ))}
        </div>

        {/* Badge row */}
        <div className="mt-12 flex flex-wrap items-center gap-6 text-xs tracking-wide text-gallery/30">
          <span className="rounded border border-white/5 px-3 py-1.5">
            ISO 21127
          </span>
          <span className="rounded border border-white/5 px-3 py-1.5">
            CIDOC CRM
          </span>
          <span className="rounded border border-white/5 px-3 py-1.5">
            LIDO
          </span>
          <span className="rounded border border-white/5 px-3 py-1.5">
            Dublin Core
          </span>
          <span className="rounded border border-white/5 px-3 py-1.5">
            Spectrum 5.1
          </span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  WAITLIST / CTA                                                     */
/* ------------------------------------------------------------------ */
function Waitlist() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="waitlist" className="relative px-6 py-28">
      <div className="mx-auto mb-20 h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-2xl text-center">
        <BarChart3 size={28} className="mx-auto mb-4 text-accent/50" />
        <h2 className="font-serif text-3xl leading-snug text-gallery sm:text-4xl">
          Request Early Access
        </h2>
        <p className="mt-4 text-gallery/50">
          We&apos;re onboarding a small cohort of founding partners. If your
          institution holds uncataloged collections, we&apos;d like to hear from
          you.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-12 space-y-5 text-left">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs tracking-wide text-gallery/40"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Dr. Jane Doe"
                className="w-full rounded border border-white/10 bg-charcoal-light/50 px-4 py-3 text-sm text-gallery placeholder:text-gallery/25 focus:border-accent/40 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="institution"
                className="mb-1.5 block text-xs tracking-wide text-gallery/40"
              >
                Institution
              </label>
              <input
                id="institution"
                name="institution"
                type="text"
                required
                placeholder="National Museum of Natural History"
                className="w-full rounded border border-white/10 bg-charcoal-light/50 px-4 py-3 text-sm text-gallery placeholder:text-gallery/25 focus:border-accent/40 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="mb-1.5 block text-xs tracking-wide text-gallery/40"
              >
                Role
              </label>
              <input
                id="role"
                name="role"
                type="text"
                required
                placeholder="Chief Curator, Director of Collections, etc."
                className="w-full rounded border border-white/10 bg-charcoal-light/50 px-4 py-3 text-sm text-gallery placeholder:text-gallery/25 focus:border-accent/40 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded bg-accent py-3.5 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-accent-light"
            >
              Request Early Access
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
            <p className="text-center text-xs text-gallery/25">
              We review every application. Expect a response within 48 hours.
            </p>
          </form>
        ) : (
          <div className="mt-12 rounded-lg border border-accent/20 bg-accent/5 p-10">
            <p className="font-serif text-xl text-accent">
              Thank you for your interest.
            </p>
            <p className="mt-3 text-sm text-gallery/50">
              We&apos;ve received your application and will be in touch shortly
              to discuss how Panoply can serve your collection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-serif text-lg tracking-wide text-gallery/40">
          Panoply
        </span>
        <p className="text-xs text-gallery/25">
          &copy; {new Date().getFullYear()} Panoply, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
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
