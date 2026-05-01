'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Globe,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// World Map Background
// ─────────────────────────────────────────────────────────────────────────────
function WorldMapBackground() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [topoRes, d3GeoMod, topoClientMod] = await Promise.all([
          fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'),
          import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/d3-geo@3/+esm'),
          import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/topojson-client@3/+esm'),
        ]);

        if (cancelled) return;

        const world = await topoRes.json();
        const { geoNaturalEarth1, geoPath } = d3GeoMod as any;
        const { feature } = topoClientMod as any;

        const svg = svgRef.current;
        if (!svg) return;

        const W = window.innerWidth;
        const H = window.innerHeight;

        svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
        svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

        const projection = geoNaturalEarth1()
          .scale(W / 5.7)
          .translate([W * 0.475, H * 0.58]);

        const path = geoPath(projection);
        const countries = feature(world, world.objects.countries);
        (countries as any).features = (countries as any).features.filter(
          (f: any) => f.id !== '010'
        );

        let d = '';
        for (const f of (countries as any).features) {
          const p = path(f);
          if (p) d += p;
        }

        while (svg.firstChild) svg.removeChild(svg.firstChild);

        const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathEl.setAttribute('d', d);
        pathEl.setAttribute('fill', 'rgba(31,158,92,1)');
        pathEl.setAttribute('stroke', 'rgba(31,158,92,0.3)');
        pathEl.setAttribute('stroke-width', '0.8');
        svg.appendChild(pathEl);
      } catch (e) {
        console.warn('Map load failed', e);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.18 }}>
      <svg ref={svgRef} className="w-full h-full" xmlns="http://www.w3.org/2000/svg" />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Scroll intro
// ─────────────────────────────────────────────────────────────────────────────

// Module-level flag: persists across re-mounts for the lifetime of the session.
// Once the intro is dismissed it will never play again until a full page reload.
let introAlreadyPlayed = false;

function ScrollIntro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [dismissed, setDismissed] = useState(introAlreadyPlayed);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => {
      cancelAnimationFrame(id);
      // If the user navigates away before finishing, don't show the intro again.
      introAlreadyPlayed = true;
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const next = Math.min(1, scrolled / totalScrollable);

      setProgress(next);

      if (next >= 0.995) {
        introAlreadyPlayed = true;
        setDismissed(true);

        window.requestAnimationFrame(() => {
          const top = containerRef.current
            ? containerRef.current.offsetTop + containerRef.current.offsetHeight
            : window.innerHeight;

          window.scrollTo({
            top,
            left: 0,
            behavior: 'auto',
          });
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [dismissed]);

  const lr = (p: number, s: number, e: number) =>
    Math.max(0, Math.min(1, (p - s) / (e - s)));

  const sv = (p: number, es: number, ee: number, xs: number): number => {
    const xe = xs >= 1 ? 9 : xs + 0.06;
    if (p <= es) return 0;
    if (xe < 9 && p >= xe) return 0;
    if (p >= ee && p <= xs) return 1;
    if (p < ee) return (p - es) / (ee - es);
    if (xe < 9) return 1 - (p - xs) / (xe - xs);
    return 1;
  };

  const p = progress;

  const META = 'METAMORPHOSIS';

  const handleSkip = () => {
    introAlreadyPlayed = true;
    setDismissed(true);

    window.requestAnimationFrame(() => {
      const top = containerRef.current
        ? containerRef.current.offsetTop + containerRef.current.offsetHeight
        : window.innerHeight;

      window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth',
      });
    });
  };

  const s1 = sv(p, -0.01, 0.00, 0.24);
  const s2 = sv(p, 0.27, 0.33, 0.49);
  const s3 = sv(p, 0.55, 0.61, 0.77);
  const s4 = sv(p, 0.83, 0.88, 1.01);

  const actNum = p < 0.27 ? 1 : p < 0.55 ? 2 : p < 0.83 ? 3 : 4;

  if (dismissed) return null;

  return (
    <div
      ref={containerRef}
      style={{
        height: '750vh',
        position: 'relative',
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.25s ease',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'var(--navy)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(rgba(31,158,92,0.04) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(31,158,92,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(31,158,92,${(0.03 + p * 0.07).toFixed(3)}) 0%, transparent 70%)`,
          }}
        />

        {/* ── SLIDE 1 ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: s1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 2rem',
          }}
        >
          <p
            style={{
              color: 'var(--green)',
              fontFamily: 'DM Mono, monospace',
              letterSpacing: '0.3em',
              fontSize: '0.62rem',
              opacity: 0.65,
              marginBottom: '2.5rem',
              transform: `translateY(${(1 - s1) * 18}px)`,
            }}
          >
            EST. 2025 · CHEMBUR, MUMBAI
          </p>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.8rem, 9vw, 8rem)',
              fontWeight: 900,
              color: 'var(--cream)',
              lineHeight: 0.9,
              margin: 0,
              letterSpacing: '-0.02em',
              transform: `translateY(${(1 - s1) * 32}px)`,
            }}
          >
            EVERY YEAR,
          </h2>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.8rem, 9vw, 8rem)',
              fontWeight: 900,
              color: 'transparent',
              lineHeight: 0.9,
              margin: '0.12em 0 0',
              letterSpacing: '-0.02em',
              fontStyle: 'italic',
              WebkitTextStroke: '2px var(--green)',
              transform: `translateY(${(1 - s1) * 32}px)`,
            }}
          >
            ONE STAGE.
          </h2>

          <div
            style={{
              width: '48px',
              height: '1px',
              background: 'var(--green)',
              margin: '2.5rem auto',
              opacity: 0.4,
            }}
          />

          <p
            style={{
              color: 'var(--muted)',
              maxWidth: '360px',
              lineHeight: 1.75,
              fontSize: '0.95rem',
              transform: `translateY(${(1 - s1) * 16}px)`,
            }}
          >
            Where the next generation of global leaders find their voice.
          </p>

          <div
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.6rem',
              opacity: Math.max(0, 1 - p * 35),
              pointerEvents: 'none',
            }}
          >
            <p
              style={{
                color: 'var(--muted)',
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.58rem',
                letterSpacing: '0.28em',
                margin: 0,
              }}
            >
              SCROLL TO EXPLORE
            </p>
            <div className="animate-bounce" style={{ width: '1px', height: '32px', background: 'var(--green)' }} />
          </div>
        </div>

        {/* ── SLIDE 2: METAMORPHOSIS ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: s2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 1rem',
          }}
        >
          <p
            style={{
              color: 'var(--green)',
              fontFamily: 'DM Mono, monospace',
              letterSpacing: '0.3em',
              fontSize: '0.58rem',
              opacity: 0.6,
              marginBottom: '2rem',
            }}
          >
            TGAAMUN 2.0 · THEME
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {META.split('').map((letter, i) => {
              const lp = lr(p, 0.30 + i * 0.012, 0.37 + i * 0.012);
              const isAccent = [1, 4, 7, 10].includes(i);

              return (
                <span
                  key={i}
                  className="font-display"
                  style={{
                    fontSize: 'clamp(2.4rem, 9vw, 8.5rem)',
                    fontWeight: 900,
                    color: isAccent ? 'var(--green)' : 'var(--cream)',
                    opacity: lp,
                    transform: `translateY(${(1 - lp) * 55}px) scale(${0.85 + lp * 0.15})`,
                    display: 'inline-block',
                    letterSpacing: '-0.01em',
                    lineHeight: 0.88,
                  }}
                >
                  {letter}
                </span>
              );
            })}
          </div>

          <p
            style={{
              color: 'var(--muted)',
              fontFamily: 'DM Mono, monospace',
              letterSpacing: '0.22em',
              fontSize: '0.62rem',
              marginTop: '2.2rem',
              opacity: lr(p, 0.42, 0.49),
              transform: `translateY(${(1 - lr(p, 0.42, 0.49)) * 14}px)`,
            }}
          >
            REDEFINING GLOBAL NARRATIVES
          </p>
        </div>

        {/* ── SLIDE 3: Where & When ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: s3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 clamp(2rem, 8vw, 8rem)',
          }}
        >
          <div>
            <p
              style={{
                color: 'var(--green)',
                fontFamily: 'DM Mono, monospace',
                letterSpacing: '0.3em',
                fontSize: '0.58rem',
                opacity: 0.6,
                marginBottom: '2.5rem',
              }}
            >
              WHERE & WHEN
            </p>

            {[
              { label: 'DATES', value: 'JULY 31 – AUGUST 1, 2026' },
              { label: 'VENUE', value: 'THE GREEN ACRES ACADEMY' },
              { label: 'LOCATION', value: 'CHEMBUR, MUMBAI' },
            ].map(({ label, value }, idx) => {
              const lp = lr(p, 0.62 + idx * 0.04, 0.69 + idx * 0.04);

              return (
                <div
                  key={label}
                  style={{
                    marginBottom: '1.6rem',
                    opacity: lp,
                    transform: `translateX(${(1 - lp) * -40}px)`,
                  }}
                >
                  <p
                    style={{
                      color: 'var(--green)',
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '0.55rem',
                      letterSpacing: '0.32em',
                      opacity: 0.6,
                      margin: '0 0 0.3rem',
                    }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.35rem, 3.5vw, 3.1rem)',
                      fontWeight: 900,
                      color: 'var(--cream)',
                      margin: 0,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {value}
                  </p>
                </div>
              );
            })}

            <div style={{ display: 'flex', gap: '3rem', marginTop: '2.8rem', flexWrap: 'wrap' }}>
              {[
                { val: 100, suffix: '+', label: 'DELEGATES' },
                { val: 5, suffix: '', label: 'COMMITTEES' },
                { val: 2, suffix: '', label: 'DAYS' },
              ].map(({ val, suffix, label }, idx) => {
                const lp = lr(p, 0.68 + idx * 0.025, 0.75 + idx * 0.025);
                const displayed = Math.floor(lp * val);

                return (
                  <div
                    key={label}
                    style={{
                      opacity: lp,
                      transform: `translateY(${(1 - lp) * 20}px)`,
                    }}
                  >
                    <p
                      className="font-display"
                      style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: 900,
                        color: 'var(--green)',
                        margin: 0,
                      }}
                    >
                      {displayed}
                      {suffix}
                    </p>
                    <p
                      style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.58rem',
                        letterSpacing: '0.22em',
                        color: 'var(--muted)',
                        margin: '0.3rem 0 0',
                      }}
                    >
                      {label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── SLIDE 4: TGAAMUN 2.0 2026 ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: s4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 2rem',
          }}
        >
          <p
            style={{
              color: 'var(--green)',
              fontFamily: 'DM Mono, monospace',
              letterSpacing: '0.28em',
              fontSize: '0.58rem',
              opacity: lr(p, 0.83, 0.89),
              marginBottom: '1.2rem',
              transform: `translateY(${(1 - lr(p, 0.83, 0.89)) * 12}px)`,
            }}
          >
            THE GREEN ACRES ACADEMY PRESENTS
          </p>

          {(['TGAA', 'MUN', '2.0'] as const).map((word, wi) => {
            const lp = lr(p, 0.86 + wi * 0.02, 0.97);
            const isOutline = wi === 1;

            return (
              <h1
                key={word}
                className="font-display"
                style={{
                  fontSize: 'clamp(4rem, 14vw, 11rem)',
                  fontWeight: 900,
                  lineHeight: 0.87,
                  letterSpacing: '-0.03em',
                  margin: 0,
                  color: isOutline ? 'transparent' : 'var(--cream)',
                  WebkitTextStroke: isOutline ? '2px var(--green)' : undefined,
                  fontStyle: isOutline ? 'italic' : undefined,
                  opacity: lp,
                  transform: `translateY(${(1 - lp) * 42}px)`,
                }}
              >
                {word}
              </h1>
            );
          })}

          <div
            style={{
              display: 'flex',
              gap: '0.8rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '2.2rem',
            }}
          >
            {['UNSC', 'DISEC', 'HCCC', 'UNICEF', 'SOCHUM'].map((c, i) => {
              const lp = lr(p, 0.91 + i * 0.01, 0.995);

              return (
                <span
                  key={c}
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.62rem',
                    letterSpacing: '0.15em',
                    color: 'var(--green)',
                    opacity: lp,
                    transform: `translateY(${(1 - lp) * 14}px)`,
                    display: 'inline-block',
                    padding: '0.3rem 0.8rem',
                    border: '1px solid rgba(31,158,92,0.3)',
                  }}
                >
                  {c}
                </span>
              );
            })}
          </div>

          <p
            style={{
              color: 'var(--muted)',
              marginTop: '2.8rem',
              fontSize: '0.75rem',
              fontFamily: 'DM Mono, monospace',
              letterSpacing: '0.22em',
              opacity: lr(p, 0.95, 1.0),
            }}
          >
            SCROLL TO ENTER ↓
          </p>
        </div>

        {/* Progress bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            width: `${p * 100}%`,
            background: 'var(--green)',
            boxShadow: '0 0 10px var(--green)',
          }}
        />

        {/* Slide counter */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.6rem',
            right: '1.6rem',
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.58rem',
            letterSpacing: '0.15em',
            color: 'var(--muted)',
            opacity: 0.45,
          }}
        >
          {String(actNum).padStart(2, '0')} / 04
        </div>

        <button
          onClick={handleSkip}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            color: 'var(--muted)',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.58rem',
            letterSpacing: '0.15em',
            padding: '0.4rem 0.9rem',
            cursor: 'pointer',
            opacity: Math.min(1, p * 20),
            transition: 'opacity 0.2s',
          }}
        >
          SKIP ↓
        </button>
      </div>
    </div>
  );
}

interface HomeProps {
  onNavigate: (page: string) => void;
}

type ConferencePhase =
  | 'countdown'
  | 'day1-live'
  | 'day1-concluded'
  | 'day2-live'
  | 'concluded';

function getConferencePhase(now: Date): ConferencePhase {
  const day1Start = new Date('2026-07-31T07:00:00+05:30');
  const day1End = new Date('2026-07-31T18:00:00+05:30');
  const day2Start = new Date('2026-08-01T07:00:00+05:30');
  const day2End = new Date('2026-08-01T18:00:00+05:30');

  if (now < day1Start) return 'countdown';
  if (now < day1End) return 'day1-live';
  if (now < day2Start) return 'day1-concluded';
  if (now < day2End) return 'day2-live';
  return 'concluded';
}

function isLive(phase: ConferencePhase): boolean {
  return phase === 'day1-live' || phase === 'day2-live';
}

export default function Home({ onNavigate }: HomeProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [phase, setPhase] = useState<ConferencePhase>(() => getConferencePhase(new Date()));

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    const conferenceDate = new Date('2026-07-31T07:00:00+05:30');

    const timer = setInterval(() => {
      const now = new Date();
      setPhase(getConferencePhase(now));

      const difference = conferenceDate.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const highlights = [
    { icon: Calendar, label: 'Conference Dates', value: 'Jul 31-Aug 1, 2026' },
    { icon: MapPin, label: 'Location', value: 'The Green Acres Academy, Chembur' },
    { icon: Users, label: 'Expected Delegates', value: '100+' },
    { icon: Award, label: 'Committees', value: '5 Committees' },
  ];

  const siteIndex = [
    { label: 'Home', page: 'home', desc: 'Main landing page' },
    { label: 'About', page: 'about', desc: 'About the conference' },
    { label: 'Committees', page: 'committees', desc: 'Committee details' },
    { label: 'Leadership & OC', page: 'secretariat', desc: 'Organising team' },
    { label: 'Resources', page: 'resources', desc: 'Study material and guides' },
    { label: 'FAQ', page: 'faq', desc: 'Common questions' },
    { label: 'Contact', page: 'contact', desc: 'Get in touch' },
    { label: 'Press', page: 'press', desc: 'Media and updates' },
    { label: 'Registration', page: 'register', desc: 'Sign up for the event' },
  ];

  const testimonials = [
    {
      quote:
        'TGAAMUN was a memorable experience. The excellent preparation materials, professional Executive Board, and engaging discussions stood out. Social interactions, especially during high tea, were enjoyable. The conference enhanced my passion for international affairs and improved my public speaking and attention to detail.',
      author: 'Saisha Nair',
      role: 'Delegate, UNHRC 2025',
    },
    {
      quote:
        'In my first experience as a delegate to the TGAAMUN 2.0 last year, the event was challenging but exciting for me. At first, I was intimidated, but soon I got used to the process. Being involved in debates, negotiations, and collaborations allowed me to gain confidence in my ability to communicate effectively.',
      author: 'Dishant Mehta',
      role: 'Delegate, HCCC 2025',
    },
    {
      quote:
        'TGAAMUN was a whirlwind of deliberations, but there was much more to it. We had lively MOEs, a photobooth, and an amazing dance party that unburdened the delegates from having to be the best one out there. It was gruelling at times, but that\'s where we all really shone. ',
      author: 'Anaysha Naren',
      role: 'Delegate, HCCC 2025',
    },
  ];

  const phaseContent: Record<ConferencePhase, { heading: string; sub: string }> = {
    countdown: { heading: 'Conference Begins In', sub: '' },
    'day1-live': { heading: 'Day 1 is Live', sub: 'Committee sessions are underway. Follow along!' },
    'day1-concluded': { heading: 'Day 1 Concluded.', sub: 'Get ready for Day 2!' },
    'day2-live': { heading: 'Day 2 is Live', sub: "It's the final day — let's make history!" },
    concluded: {
      heading: 'Conference Concluded',
      sub: 'Thank you to every delegate, chair, and organiser. See you next year.',
    },
  };

  const { heading, sub } = phaseContent[phase];

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      {/* SCROLL INTRO */}
      <ScrollIntro />

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: 'var(--navy)' }}
      >
        <WorldMapBackground />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(13,17,23,0.45) 0%, rgba(13,17,23,0.15) 40%, rgba(13,17,23,0.05) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, var(--navy), transparent)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to top, var(--navy), transparent)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              {isLive(phase) ? (
                <>
                  <span
                    className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest"
                    style={{
                      background: 'rgba(220,38,38,0.15)',
                      border: '1px solid rgba(220,38,38,0.4)',
                      color: '#ef4444',
                      fontFamily: 'DM Mono, monospace',
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{
                        background: '#ef4444',
                        boxShadow: '0 0 8px #ef4444',
                      }}
                    />
                    LIVE
                  </span>
                  <span className="tag-label" style={{ color: 'var(--muted)' }}>
                    {phase === 'day1-live' ? 'Day 1 · July 31, 2026' : 'Day 2 · August 1, 2026'}
                  </span>
                </>
              ) : (
                <>
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }}
                  />
                  <span className="tag-label" style={{ color: 'var(--green)' }}>
                    Registration Open till <b>May 15</b> · Conference Dates: <b>July 31 - Aug 1, 2026</b>
                  </span>
                </>
              )}
            </div>

            <div className="mb-6">
              <h1 className="font-display leading-none" style={{ color: 'var(--cream)' }}>
                <span className="block text-6xl sm:text-8xl lg:text-[110px] font-black tracking-tight">
                  TGAA
                </span>
                <span
                  className="block text-6xl sm:text-8xl lg:text-[110px] font-black tracking-tight italic"
                  style={{ WebkitTextStroke: '2px var(--green)', color: 'transparent' }}
                >
                  MUN
                </span>
                <span className="block text-6xl sm:text-8xl lg:text-[110px] font-black tracking-tight">
                  2.0
                </span>
              </h1>
            </div>

            <div className="max-w-xl mb-12">
              <div className="h-px mb-6" style={{ background: 'rgba(31,158,92,0.3)' }} />
              <p className="text-lg font-light leading-relaxed" style={{ color: 'var(--muted)' }}>
                Metamorphosis : Redefining global narratives
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-16">
              <button
                onClick={() => onNavigate('register')}
                className="flex items-center gap-3 px-8 py-4 font-semibold clip-corner transition-all hover:opacity-90"
                style={{
                  background: 'var(--green)',
                  color: 'white',
                  fontFamily: 'DM Mono, monospace',
                  letterSpacing: '0.05em',
                  fontSize: '0.8rem',
                }}
              >
                REGISTER NOW <ArrowRight size={16} />
              </button>
              <button
                onClick={() => onNavigate('committees')}
                className="flex items-center gap-3 px-8 py-4 font-semibold transition-all hover:opacity-80"
                style={{
                  color: 'var(--cream)',
                  border: '1px solid rgba(245,240,232,0.2)',
                  fontFamily: 'DM Mono, monospace',
                  letterSpacing: '0.05em',
                  fontSize: '0.8rem',
                }}
              >
                VIEW COMMITTEES
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 animate-pulse" style={{ background: 'var(--green)' }} />
        </div>
      </section>

      {/* COUNTDOWN / CONFERENCE STATE */}
      <section className="relative overflow-hidden" style={{ background: 'var(--navy-mid)' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(31,158,92,0.05) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              {isLive(phase) && (
                <span
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest"
                  style={{
                    background: 'rgba(220,38,38,0.15)',
                    border: '1px solid rgba(220,38,38,0.4)',
                    color: '#ef4444',
                    fontFamily: 'DM Mono, monospace',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{
                      background: '#ef4444',
                      boxShadow: '0 0 8px #ef4444',
                    }}
                  />
                  LIVE
                </span>
              )}
              <p className="tag-label" style={{ color: 'var(--green)' }}>
                TGAAMUN 2.0 · July 31 - Aug 1
              </p>
            </div>
    
                {/* ── SITE INDEX ── */}
                <div className="max-w-5xl mx-auto mb-10 text-left">
              <div
                className="p-6 sm:p-8 clip-corner"
                style={{
                  background: 'var(--navy-card)',
                  border: '1px solid rgba(31,158,92,0.16)',
                  boxShadow: '0 12px 36px rgba(0,0,0,0.28)',
                }}
              >
                <p
                  className="tag-label mb-2"
                  style={{ color: 'var(--green)' }}
                >
                  SITE INDEX
                </p>
                <h3
                  className="font-display font-bold text-2xl sm:text-3xl mb-2"
                  style={{ color: 'var(--cream)' }}
                >
                  Quick navigation
                </h3>
                <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>
                  Use this index to jump directly to any page.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {siteIndex.map((item) => (
                    <button
                      key={item.page}
                      onClick={() => onNavigate(item.page)}
                      className="text-left p-4 transition-all hover:opacity-90"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <p
                        className="font-semibold mb-1"
                        style={{ color: 'var(--cream)' }}
                      >
                        {item.label}
                      </p>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>
                        {item.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── YOUTUBE EMBED ── */}
<div style={{ maxWidth: '960px', margin: '0 auto 3.5rem' }}>
  <div
    style={{
      position: 'relative',
      paddingBottom: '56.25%', // 16:9
      height: 0,
      overflow: 'hidden',
      borderRadius: '12px',
      border: '1px solid rgba(31,158,92,0.2)',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    }}
  >
    <iframe
      src="https://www.youtube.com/embed/UW0HyjgDH3w?rel=0&modestbranding=1"
      title="TGAAMUN 2.0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '11px',
      }}
    />
  </div>
</div>

            {phase === 'countdown' && (
              <>
                <h2 className="font-display font-bold text-4xl sm:text-5xl mb-3" style={{ color: 'var(--cream)' }}>
                  {heading}
                </h2>
                <div className="w-16 h-px mx-auto" style={{ background: 'var(--green)' }} />
              </>
            )}
          </div>

          {phase === 'countdown' && (
            <>
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-6">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div
                        className="relative w-24 sm:w-32 md:w-36 h-28 sm:h-36 md:h-40 rounded-xl flex flex-col items-center justify-center overflow-hidden group"
                        style={{
                          background: 'linear-gradient(145deg, #0c141c, #0a1118)',
                          border: '1px solid rgba(31,158,92,0.25)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        }}
                      >
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                          style={{
                            background:
                              'radial-gradient(circle at 50% 30%, rgba(31,158,92,0.15), transparent 70%)',
                          }}
                        />
                        <span
                          key={value}
                          className="font-display font-black tracking-tight animate-pop"
                          style={{ color: 'var(--cream)', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                        >
                          {String(value).padStart(2, '0')}
                        </span>
                        <p className="tag-label mt-2" style={{ color: 'var(--green)' }}>
                          {unit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center mt-10 text-sm" style={{ color: 'var(--muted)' }}>
                Registration closes <span style={{ color: 'var(--cream)' }}>May 15, 2026</span>
              </p>
            </>
          )}

          {phase !== 'countdown' && (
            <div className="flex justify-center">
              <div
                className="w-full max-w-2xl rounded-xl flex flex-col items-center justify-center py-16 px-8 text-center"
                style={{
                  background: 'linear-gradient(145deg, #0c141c, #0a1118)',
                  border: `1px solid ${
                    isLive(phase) ? 'rgba(220,38,38,0.35)' : 'rgba(31,158,92,0.25)'
                  }`,
                  boxShadow: isLive(phase)
                    ? '0 10px 40px rgba(220,38,38,0.12)'
                    : '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                <div className="text-6xl mb-6 select-none">
                  {phase === 'day1-live' && '🌐'}
                  {phase === 'day1-concluded' && '🌙'}
                  {phase === 'day2-live' && '🌐'}
                  {phase === 'concluded' && '🏛️'}
                </div>

                <h3
                  className="font-display font-black text-4xl sm:text-5xl mb-4 leading-tight"
                  style={{ color: isLive(phase) ? '#ef4444' : 'var(--cream)' }}
                >
                  {heading}
                </h3>

                {sub && <p className="text-lg" style={{ color: 'var(--muted)' }}>{sub}</p>}

                {isLive(phase) && (
                  <div
                    className="mt-8 flex items-center gap-2 px-5 py-2 rounded-full"
                    style={{
                      background: 'rgba(220,38,38,0.12)',
                      border: '1px solid rgba(220,38,38,0.3)',
                    }}
                  >
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{
                        background: '#ef4444',
                        boxShadow: '0 0 8px #ef4444',
                      }}
                    />
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: '#ef4444', fontFamily: 'DM Mono, monospace' }}
                    >
                      LIVE NOW
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* QUICK FACTS */}
      <section
        style={{
          background: 'var(--navy-mid)',
          borderTop: '1px solid rgba(31,158,92,0.1)',
          borderBottom: '1px solid rgba(31,158,92,0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(31,158,92,0.1)' }}>
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8"
                style={{ background: 'var(--navy-mid)' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-4 clip-corner"
                  style={{ background: 'rgba(31,158,92,0.12)', color: 'var(--green)' }}
                >
                  <item.icon size={18} />
                </div>
                <p className="tag-label mb-1" style={{ color: 'var(--muted)' }}>
                  {item.label}
                </p>
                <p className="font-display font-bold text-lg" style={{ color: 'var(--cream)' }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>
                What is TGAAMUN 2.0?
              </p>
              <h2
                className="font-display font-bold text-5xl leading-tight mb-8"
                style={{ color: 'var(--cream)' }}
              >
                The conference<br />
                <span className="italic" style={{ color: 'var(--green)' }}>
                  built by students,
                </span>
                <br />
                for students.
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                <p>
                  The Global Affairs Assembly Model United Nations simulates the workings of the
                  United Nations and other multilateral bodies — giving high school delegates a
                  real platform for real discourse.
                </p>
                <p>
                  Our conference brings together students from diverse backgrounds to engage in
                  substantive debate on pressing global issues: international security, sustainable
                  development, human rights, economic cooperation.
                </p>
                <p>
                  Through rigorous committee sessions, delegates develop critical thinking, public
                  speaking, and diplomatic skills while building a nuanced understanding of complex
                  geopolitical challenges.
                </p>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="mt-8 flex items-center gap-3 text-sm font-semibold transition-all hover:gap-5"
                style={{
                  color: 'var(--green)',
                  fontFamily: 'DM Mono, monospace',
                  letterSpacing: '0.05em',
                }}
              >
                READ MORE ABOUT US <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '100+', label: 'Delegates', color: 'var(--green)' },
                { val: '5', label: 'Committees', color: '#4a9eff' },
                { val: 'Inter', label: 'School', color: '#b46fff' },
                { val: '2', label: 'Days', color: '#ff8c4a' },
              ].map(({ val, label, color }) => (
                <div
                  key={label}
                  className="p-8 clip-corner"
                  style={{
                    background: 'var(--navy-card)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <p className="font-display font-black text-5xl mb-2" style={{ color }}>
                    {val}
                  </p>
                  <p className="tag-label" style={{ color: 'var(--muted)' }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {[
              {
                icon: MessageSquare,
                title: 'Diplomatic Excellence',
                desc: 'Develop negotiation and public speaking skills through intense committee sessions and caucusing.',
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                desc: 'Gain deep insights into international affairs and view complex issues from multiple cultural perspectives.',
              },
              {
                icon: Award,
                title: 'Leadership Growth',
                desc: 'Build confidence, leadership skills, and forge lasting connections with peers who share your passion.',
              },
              {
                icon: Users,
                title: '21st Century Skills',
                desc: 'Sharpen collaboration, critical thinking, creativity, and communication — the four pillars of modern global citizenship.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 clip-corner"
                style={{
                  background: 'var(--navy-card)',
                  border: '1px solid rgba(31,158,92,0.12)',
                }}
              >
                <div className="mb-6">
                  <Icon size={24} style={{ color: 'var(--green)' }} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'var(--cream)' }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.2)' }} />
            <h2 className="font-display font-bold text-4xl italic" style={{ color: 'var(--cream)' }}>
              What Delegates Say
            </h2>
            <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.2)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 clip-corner relative"
                style={{
                  background: 'var(--navy-card)',
                  border: '1px solid rgba(31,158,92,0.12)',
                }}
              >
                <div
                  className="font-display text-7xl font-black absolute top-4 right-6 opacity-10 leading-none"
                  style={{ color: 'var(--green)' }}
                >
                  "
                </div>
                <p className="italic leading-relaxed mb-6 relative z-10 text-sm" style={{ color: 'var(--muted)' }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: '1px solid rgba(31,158,92,0.15)' }} className="pt-4">
                  <p className="font-semibold text-sm" style={{ color: 'var(--cream)' }}>
                    {t.author}
                  </p>
                  <p className="tag-label mt-1" style={{ color: 'var(--green)' }}>
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'var(--green-dark)' }}
      >
        <div className="absolute inset-0 hero-grid-bg opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="tag-label mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Registration closes May 15, 2026
          </p>
          <h2 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-tight">
            Ready to make<br />
            <span className="italic">history?</span>
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Join 100+ delegates from various schools. Two days. Five committees. One extraordinary conference.
          </p>
          <button
            onClick={() => onNavigate('register')}
            className="px-10 py-4 font-semibold clip-corner transition-all hover:opacity-90"
            style={{
              background: 'white',
              color: 'var(--green-dark)',
              fontFamily: 'DM Mono, monospace',
              letterSpacing: '0.05em',
              fontSize: '0.85rem',
            }}
          >
            REGISTER FOR TGAAMUN 2.0 →
          </button>
        </div>
      </section>

      <style>{`
        @keyframes pop {
          0% { transform: translateY(10px) scale(0.9); opacity: 0; }
          50% { transform: translateY(-4px) scale(1.05); }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        .animate-pop {
          animation: pop 0.35s ease;
        }
      `}</style>
    </div>
  );
}