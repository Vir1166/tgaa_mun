import { useEffect, useRef, useState } from 'react';
function UNLogoPattern() {
  const cols = 6;
  const rows = 4;
  const rotations = [
    -18, 12, -8, 22, -30, 15, -10, 25,
     25,-14, 18, -6,  28,-20,  16, -8,
    -10, 20,-25, 10, -15, 30, -18, 12,
     16, -8, 24,-18,   8,-22,  22,-14,
  ];

  const logos = [];
  const colWidth = 100 / cols;
  for (let r = 0; r < rows; r++) {
    for (let c = -1; c <= cols; c++) {
      const idx = (r * (cols + 2) + (c + 1)) % rotations.length;
      const stagger = r % 2 === 1 ? colWidth / 2 : 0;
      const left = c * colWidth + colWidth / 2 + stagger;
      logos.push({
        left: `${left}%`,
        top: `${(r / rows) * 100 + 100 / rows / 2}%`,
        rot: rotations[idx] ?? 0,
      });
    }
  }

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{
        maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, black 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, black 100%)',
      }}
    >
      {logos.map((l, i) => (
        <img
          key={i}
          src="/white_un.png"
          alt=""
          style={{
            position: 'absolute',
            left: l.left,
            top: l.top,
            width: '38px',
            height: '38px',
            opacity: 0.055,
            filter: 'grayscale(1) brightness(4)',
            transform: `translate(-50%, -50%) rotate(${l.rot}deg)`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
}

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
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.18 }}>
      <svg ref={svgRef} className="w-full h-full" xmlns="http://www.w3.org/2000/svg" />
    </div>
  );
}


import { Calendar, MapPin, Users, Award, Globe, MessageSquare, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

// ─── Conference phase helper ───────────────────────────────────────────────
type ConferencePhase =
  | 'countdown'
  | 'day1-live'
  | 'day1-concluded'
  | 'day2-live'
  | 'concluded';

  function getConferencePhase(now: Date): ConferencePhase {
    const day1Start = new Date('2026-07-31T07:00:00+05:30');
const day1End   = new Date('2026-07-31T18:00:00+05:30');
const day2Start = new Date('2026-08-01T07:00:00+05:30');
const day2End   = new Date('2026-08-01T18:00:00+05:30');
  
    if (now < day1Start) return 'countdown';
    if (now < day1End)   return 'day1-live';
    if (now < day2Start) return 'day1-concluded';
    if (now < day2End)   return 'day2-live';
    return 'concluded';
  }

function isLive(phase: ConferencePhase): boolean {
  return phase === 'day1-live' || phase === 'day2-live';
}
// ──────────────────────────────────────────────────────────────────────────

export default function Home({ onNavigate }: HomeProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [phase, setPhase] = useState<ConferencePhase>(() => getConferencePhase(new Date()));

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
    { icon: Calendar, label: 'Conference Dates', value: 'Jul 30-Aug 1, 2026' },
    { icon: MapPin, label: 'Location', value: 'The Green Acres Academy, Chembur' },
    { icon: Users, label: 'Expected Delegates', value: '100+' },
    { icon: Award, label: 'Committees', value: '5 Committees' },
  ];

  const testimonials = [
    {
      quote: "TGAA MUN transformed my understanding of international relations. The debates were intense and the experience was invaluable.",
      author: "Sarah Johnson",
      role: "Delegate, DISEC 2025",
    },
    {
      quote: "The caliber of delegates and the quality of discourse exceeded my expectations. A truly world-class conference.",
      author: "Michael Chen",
      role: "Delegate, UNSC 2025",
    },
    {
      quote: "From the secretariat to the logistics, everything was professionally executed. This is the gold standard for MUN conferences.",
      author: "Priya Sharma",
      role: "Delegate, HCCC 2025",
    },
  ];

  // ── Phase-specific content ──────────────────────────────────────────────
  const phaseContent: Record<ConferencePhase, { heading: string; sub: string }> = {
    'countdown':      { heading: 'Conference Begins In',         sub: '' },
    'day1-live':      { heading: 'Day 1 is Live',                sub: 'Committee sessions are underway. Follow along!' },
    'day1-concluded': { heading: 'Day 1 Concluded.',             sub: 'Get ready for Day 2!' },
    'day2-live':      { heading: 'Day 2 is Live',                sub: "It's the final day — let's make history!" },
    'concluded':      { heading: 'Conference Concluded',         sub: 'Thank you to every delegate, chair, and organiser. See you next year.' },
  };

  const { heading, sub } = phaseContent[phase];
  // ───────────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: 'var(--navy)' }}>
        <WorldMapBackground />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(13,17,23,0.45) 0%, rgba(13,17,23,0.15) 40%, rgba(13,17,23,0.05) 100%)' }} />
        <div className="absolute inset-x-0 top-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, var(--navy), transparent)' }} />
        <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to top, var(--navy), transparent)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              {/* Show LIVE badge during conference, otherwise registration open */}
              {isLive(phase) ? (
                <>
                  <span
                    className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest"
                    style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.4)', color: '#ef4444', fontFamily: 'DM Mono, monospace' }}
                  >
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ background: '#ef4444', boxShadow: '0 0 8px #ef4444' }}
                    />
                    LIVE
                  </span>
                  <span className="tag-label" style={{ color: 'var(--muted)' }}>
                    {phase === 'day1-live' ? 'Day 1 · July 31, 2026' : 'Day 2 · August 1, 2026'}
                  </span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }} />
                  <span className="tag-label" style={{ color: 'var(--green)' }}>Registration Open · July 31 - Aug 1, 2026</span>
                </>
              )}
            </div>
            <div className="mb-6">
              <h1 className="font-display leading-none" style={{ color: 'var(--cream)' }}>
                <span className="block text-6xl sm:text-8xl lg:text-[110px] font-black tracking-tight">TGAA</span>
                <span className="block text-6xl sm:text-8xl lg:text-[110px] font-black tracking-tight italic"
                  style={{ WebkitTextStroke: '2px var(--green)', color: 'transparent' }}>MUN</span>
                <span className="block text-6xl sm:text-8xl lg:text-[110px] font-black tracking-tight">2026</span>
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
                style={{ background: 'var(--green)', color: 'white', fontFamily: 'DM Mono, monospace', letterSpacing: '0.05em', fontSize: '0.8rem' }}
              >
                REGISTER NOW <ArrowRight size={16} />
              </button>
              <button
                onClick={() => onNavigate('committees')}
                className="flex items-center gap-3 px-8 py-4 font-semibold transition-all hover:opacity-80"
                style={{ color: 'var(--cream)', border: '1px solid rgba(245,240,232,0.2)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.05em', fontSize: '0.8rem' }}
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
        <UNLogoPattern />
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(31,158,92,0.05) 0%, transparent 70%)',
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

          {/* Header — always the same structural layout */}
          {/* Header — always the same structural layout */}
<div className="text-center mb-16">
  <div className="flex items-center justify-center gap-3 mb-3">
    {/* LIVE badge in countdown section */}
    {isLive(phase) && (
      <span
        className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest"
        style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.4)', color: '#ef4444', fontFamily: 'DM Mono, monospace' }}
      >
        <span
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ background: '#ef4444', boxShadow: '0 0 8px #ef4444' }}
        />
        LIVE
      </span>
    )}
    <p className="tag-label" style={{ color: 'var(--green)' }}>TGAA MUN 2026 · July 31 - Aug 1</p>
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

          {/* ── Countdown tiles (only before conference) ── */}
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
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(31,158,92,0.15), transparent 70%)' }}
                        />
                        <span
                          key={value}
                          className="font-display font-black tracking-tight animate-pop"
                          style={{ color: 'var(--cream)', fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
                        >
                          {String(value).padStart(2, '0')}
                        </span>
                        <p className="tag-label mt-2" style={{ color: 'var(--green)' }}>{unit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center mt-10 text-sm" style={{ color: 'var(--muted)' }}>
                Registration closes <span style={{ color: 'var(--cream)' }}>June 1, 2026</span>
              </p>
            </>
          )}

          {/* ── Live / between-days / concluded card ── */}
          {phase !== 'countdown' && (
            <div className="flex justify-center">
              <div
                className="w-full max-w-2xl rounded-xl flex flex-col items-center justify-center py-16 px-8 text-center"
                style={{
                  background: 'linear-gradient(145deg, #0c141c, #0a1118)',
                  border: `1px solid ${isLive(phase) ? 'rgba(220,38,38,0.35)' : 'rgba(31,158,92,0.25)'}`,
                  boxShadow: isLive(phase)
                    ? '0 10px 40px rgba(220,38,38,0.12)'
                    : '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                {/* Large icon / emoji */}
                <div className="text-6xl mb-6 select-none">
                  {phase === 'day1-live'      && '🌐'}
                  {phase === 'day1-concluded' && '🌙'}
                  {phase === 'day2-live'      && '🌐'}
                  {phase === 'concluded'      && '🏛️'}
                </div>

                <h3
                  className="font-display font-black text-4xl sm:text-5xl mb-4 leading-tight"
                  style={{ color: isLive(phase) ? '#ef4444' : 'var(--cream)' }}
                >
                  {heading}
                </h3>

                {sub && (
                  <p className="text-lg" style={{ color: 'var(--muted)' }}>{sub}</p>
                )}

                {isLive(phase) && (
                  <div className="mt-8 flex items-center gap-2 px-5 py-2 rounded-full"
                    style={{ background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.3)' }}>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#ef4444', boxShadow: '0 0 8px #ef4444' }} />
                    <span className="text-xs font-bold tracking-widest" style={{ color: '#ef4444', fontFamily: 'DM Mono, monospace' }}>
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
      <section style={{ background: 'var(--navy-mid)', borderTop: '1px solid rgba(31,158,92,0.1)', borderBottom: '1px solid rgba(31,158,92,0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(31,158,92,0.1)' }}>
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-8" style={{ background: 'var(--navy-mid)' }}>
                <div className="w-10 h-10 flex items-center justify-center mb-4 clip-corner" style={{ background: 'rgba(31,158,92,0.12)', color: 'var(--green)' }}>
                  <item.icon size={18} />
                </div>
                <p className="tag-label mb-1" style={{ color: 'var(--muted)' }}>{item.label}</p>
                <p className="font-display font-bold text-lg" style={{ color: 'var(--cream)' }}>{item.value}</p>
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
              <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>What is TGAA MUN?</p>
              <h2 className="font-display font-bold text-5xl leading-tight mb-8" style={{ color: 'var(--cream)' }}>
                The conference<br />
                <span className="italic" style={{ color: 'var(--green)' }}>built by students,</span><br />
                for students.
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                <p>The Global Affairs Assembly Model United Nations simulates the workings of the United Nations and other multilateral bodies — giving high school delegates a real platform for real discourse.</p>
                <p>Our conference brings together students from diverse backgrounds to engage in substantive debate on pressing global issues: international security, sustainable development, human rights, economic cooperation.</p>
                <p>Through rigorous committee sessions, delegates develop critical thinking, public speaking, and diplomatic skills while building a nuanced understanding of complex geopolitical challenges.</p>
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="mt-8 flex items-center gap-3 text-sm font-semibold transition-all hover:gap-5"
                style={{ color: 'var(--green)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.05em' }}
              >
                READ MORE ABOUT US <ArrowRight size={14} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '100+', label: 'Delegates', color: 'var(--green)' },
                { val: '5', label: 'Committees', color: '#4a9eff' },
                { val: 'Multiple', label: 'Schools', color: '#b46fff' },
                { val: '2', label: 'Days', color: '#ff8c4a' },
              ].map(({ val, label, color }) => (
                <div key={label} className="p-8 clip-corner" style={{ background: 'var(--navy-card)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-display font-black text-5xl mb-2" style={{ color }}>{val}</p>
                  <p className="tag-label" style={{ color: 'var(--muted)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              { icon: MessageSquare, title: 'Diplomatic Excellence', desc: 'Develop negotiation and public speaking skills through intense committee sessions and caucusing.' },
              { icon: Globe, title: 'Global Perspective', desc: 'Gain deep insights into international affairs and view complex issues from multiple cultural perspectives.' },
              { icon: Award, title: 'Leadership Growth', desc: 'Build confidence, leadership skills, and forge lasting connections with peers who share your passion.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 clip-corner" style={{ background: 'var(--navy-card)', border: '1px solid rgba(31,158,92,0.12)' }}>
                <div className="mb-6"><Icon size={24} style={{ color: 'var(--green)' }} /></div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'var(--cream)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
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
            <h2 className="font-display font-bold text-4xl italic" style={{ color: 'var(--cream)' }}>What Delegates Say</h2>
            <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.2)' }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 clip-corner relative" style={{ background: 'var(--navy-card)', border: '1px solid rgba(31,158,92,0.12)' }}>
                <div className="font-display text-7xl font-black absolute top-4 right-6 opacity-10 leading-none" style={{ color: 'var(--green)' }}>"</div>
                <p className="italic leading-relaxed mb-6 relative z-10 text-sm" style={{ color: 'var(--muted)' }}>{t.quote}</p>
                <div style={{ borderTop: '1px solid rgba(31,158,92,0.15)' }} className="pt-4">
                  <p className="font-semibold text-sm" style={{ color: 'var(--cream)' }}>{t.author}</p>
                  <p className="tag-label mt-1" style={{ color: 'var(--green)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--green-dark)' }}>
        <div className="absolute inset-0 hero-grid-bg opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="tag-label mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>Registration closes June 1, 2026</p>
          <h2 className="font-display font-black text-5xl sm:text-6xl text-white mb-6 leading-tight">
            Ready to make<br /><span className="italic">history?</span>
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Join 300+ delegates from 50+ schools. Three days. Six committees. One extraordinary conference.
          </p>
          <button
            onClick={() => onNavigate('register')}
            className="px-10 py-4 font-semibold clip-corner transition-all hover:opacity-90"
            style={{ background: 'white', color: 'var(--green-dark)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.05em', fontSize: '0.85rem' }}
          >
            REGISTER FOR TGAA MUN 2026 →
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes pop {
          0%   { transform: translateY(10px) scale(0.9); opacity: 0; }
          50%  { transform: translateY(-4px) scale(1.05); }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .animate-pop { animation: pop 0.35s ease; }
      `}</style>
    </div>
  );
}