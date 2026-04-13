import { Target, Eye, BookOpen, Users, TrendingUp, Globe, ArrowRight } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Users, title: 'Diplomacy', description: 'Master the art of negotiation and consensus-building on the world stage.' },
    { icon: BookOpen, title: 'Research', description: 'Develop deep expertise in global affairs and international policy.' },
    { icon: TrendingUp, title: 'Public Speaking', description: 'Enhance confidence and articulation in high-pressure formal settings.' },
    { icon: Globe, title: 'Global Awareness', description: 'Understand diverse perspectives and the nuances of cultural diplomacy.' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      {/* ── PAGE HEADER ── */}
<section
  className="pt-32 pb-20 relative overflow-hidden hero-grid-bg"
  style={{
    backgroundImage: `url("/other_pics/MUN.png")`, // ← paste your MUN image src here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Dark overlay for readability */}
  <div
    className="absolute inset-0"
    style={{ background: 'rgba(10, 15, 30, 0.7)' }}
  />

  <div
    className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
    style={{
      background: 'radial-gradient(circle, var(--green) 0%, transparent 70%)',
      transform: 'translate(30%, -30%)',
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>
      About the Conference
    </p>
    <h1
      className="font-display font-black text-6xl sm:text-8xl leading-none mb-8"
      style={{ color: 'var(--cream)' }}
    >
      About<br />
      <span className="italic" style={{ color: 'var(--green)' }}>
        TGAA MUN
      </span>
    </h1>
    <div
      className="h-px max-w-sm mb-6"
      style={{ background: 'rgba(31,158,92,0.4)' }}
    />
    <p
      className="text-lg max-w-2xl leading-relaxed"
      style={{ color: 'var(--muted)' }}
    >
      Where diplomacy meets excellence, and future leaders are forged through
      rigorous debate and international collaboration.
    </p>
  </div>
</section>

      {/* ── WHAT IS ── */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl mb-8 leading-tight" style={{ color: 'var(--cream)' }}>
                What is<br />
                <span className="italic" style={{ color: 'var(--green)' }}>TGAA MUN?</span>
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                <p>
                  The Global Affairs Assembly Model United Nations is a distinguished international
                  relations conference that simulates the workings of the United Nations and other
                  multilateral bodies.
                </p>
                <p>
                  Our conference brings together high school students from diverse backgrounds to
                  engage in substantive debate on pressing global issues — from international security
                  to sustainable development, human rights to economic cooperation.
                </p>
                <p>
                  Through rigorous committee sessions, delegates develop critical thinking, public
                  speaking, and diplomatic skills while building a nuanced understanding of complex
                  geopolitical challenges.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '100+', label: 'Delegates', color: 'var(--green)' },
                { val: '5', label: 'Committees', color: '#4a9eff' },
                { val: 'Multiple', label: 'Schools', color: '#b46fff' },
                { val: '2', label: 'Days', color: '#ff8c4a' },
              ].map(({ val, label, color }) => (
                <div
                  key={label}
                  className="p-8 clip-corner"
                  style={{ background: 'var(--navy-card)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <p className="font-display font-black text-5xl mb-2" style={{ color }}>{val}</p>
                  <p className="tag-label" style={{ color: 'var(--muted)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                Icon: Target,
                title: 'Our Mission',
                text: 'To cultivate the next generation of informed, empathetic, and effective global leaders by providing an immersive platform for international discourse, critical analysis, and diplomatic engagement. We strive to create an environment where diverse perspectives are not just heard but celebrated.',
              },
              {
                Icon: Eye,
                title: 'Our Vision',
                text: "In a world that demands voices, we build platforms. TGAAMUN invites individuals who disrupt norms, defy limits, and design futures. Through debate, diplomacy, and daring ideas, we call on delegates to step into the shoes of changemakers past, present, and future. But it is not just about talking the talk,  our participants step into the shoes of diplomats, engage in discussions that matter, and debate pressing global issues with the kind of enthusiasm that could rival a high-stakes negotiation. Whether you're a seasoned MUN veteran or a first-timer, we promise there is always something new to learn, someone new to meet, and a whole lot of exciting moments along the way.",
              },
            ].map(({ Icon, title, text }) => (
              <div
                key={title}
                className="p-10 clip-corner"
                style={{ background: 'var(--navy-card)', border: '1px solid rgba(31,158,92,0.15)' }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 flex items-center justify-center clip-corner"
                    style={{ background: 'rgba(31,158,92,0.12)', color: 'var(--green)' }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-2xl" style={{ color: 'var(--cream)' }}>{title}</h3>
                </div>
                <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PARTICIPATE ── */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="tag-label mb-3" style={{ color: 'var(--green)' }}>Skills You'll Gain</p>
            <h2 className="font-display font-bold text-4xl" style={{ color: 'var(--cream)' }}>
              Why Participate?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="p-8 clip-corner transition-all group"
                style={{
                  background: 'var(--navy-card)',
                  border: '1px solid rgba(31,158,92,0.1)',
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center clip-corner mb-6 transition-all group-hover:opacity-90"
                  style={{ background: 'rgba(31,158,92,0.12)', color: 'var(--green)' }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'var(--cream)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'var(--green-dark)' }}
      >
        <div className="absolute inset-0 hero-grid-bg opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-black text-5xl text-white mb-6 leading-tight italic">
            Join Us in Shaping Tomorrow
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Be part of a transformative experience that will challenge your perspectives, sharpen
            your skills, and connect you with like-minded individuals passionate about global affairs.
          </p>
          <button
            className="px-10 py-4 font-semibold clip-corner transition-all hover:opacity-90"
            style={{
              background: 'white',
              color: 'var(--green-dark)',
              fontFamily: 'DM Mono, monospace',
              letterSpacing: '0.05em',
              fontSize: '0.85rem',
            }}
          >
            REGISTER FOR TGAA MUN 2026 →
          </button>
        </div>
      </section>
    </div>
  );
}