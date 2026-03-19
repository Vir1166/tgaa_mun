import { User, Mail, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  email: string;
  category: string;
}

export default function Secretariat() {
  const team: TeamMember[] = [
    {
      name: 'Alexandra Chen',
      role: 'Secretary-General',
      bio: 'A passionate advocate for international cooperation with 4 years of MUN experience. Alexandra has represented her school at HMUN, UPMUNC, and numerous regional conferences.',
      email: 'sg@tgaamun.org',
      category: 'leadership',
    },
    {
      name: 'Marcus Williams',
      role: 'Director-General',
      bio: 'Dedicated to creating inclusive and intellectually stimulating conference experiences. Marcus brings expertise in crisis management and committee operations.',
      email: 'dg@tgaamun.org',
      category: 'leadership',
    },
    {
      name: 'Priya Sharma',
      role: 'USG for Delegate Affairs',
      bio: 'Committed to ensuring every delegate has an exceptional conference experience. Priya oversees registration, delegate services, and hospitality.',
      email: 'delegates@tgaamun.org',
      category: 'usg',
    },
    {
      name: 'James Patterson',
      role: 'USG for Crisis & Specialized Committees',
      bio: 'An experienced crisis director known for creating immersive and dynamic committee experiences. James specialises in historical simulations.',
      email: 'crisis@tgaamun.org',
      category: 'usg',
    },
    {
      name: 'Sofia Rodriguez',
      role: 'USG for General Assemblies',
      bio: 'Expert in parliamentary procedure and GA operations. Sofia ensures smooth committee sessions and maintains the highest standards of debate.',
      email: 'ga@tgaamun.org',
      category: 'usg',
    },
    {
      name: 'David Kim',
      role: 'USG for Logistics & Operations',
      bio: 'Master of organisation and planning. David coordinates venue management, technology, and all operational aspects of the conference.',
      email: 'logistics@tgaamun.org',
      category: 'usg',
    },
    {
      name: 'Emma Thompson',
      role: 'USG for Communications & Outreach',
      bio: 'Creative storyteller and social media strategist. Emma manages all external communications, marketing, and delegate outreach.',
      email: 'communications@tgaamun.org',
      category: 'usg',
    },
    {
      name: 'Ahmed Hassan',
      role: 'USG for Finance',
      bio: "Detail-oriented financial planner ensuring the conference's fiscal sustainability. Ahmed manages budgets, sponsorships, and financial operations.",
      email: 'finance@tgaamun.org',
      category: 'usg',
    },
  ];

  const leadership = team.filter((m) => m.category === 'leadership');
  const usgs = team.filter((m) => m.category === 'usg');

  const initials = (name: string) =>
    name.split(' ').map((n) => n[0]).join('');

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      {/* ── HEADER ── */}
      <section className="pt-32 pb-20 relative overflow-hidden hero-grid-bg" style={{ background: 'var(--navy)' }}>
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--green) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>Meet the Team</p>
          <h1 className="font-display font-black text-6xl sm:text-8xl leading-none mb-8" style={{ color: 'var(--cream)' }}>
            Our<br />
            <span className="italic" style={{ color: 'var(--green)' }}>Secretariat</span>
          </h1>
          <div className="h-px max-w-sm mb-6" style={{ background: 'rgba(31,158,92,0.4)' }} />
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            Meet the dedicated team working tirelessly to make TGAA MUN 2026 an unforgettable experience.
          </p>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.2)' }} />
            <p className="tag-label" style={{ color: 'var(--green)' }}>Executive Leadership</p>
            <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.2)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, i) => (
              <div
                key={i}
                className="clip-corner transition-all"
                style={{
                  background: 'var(--navy-card)',
                  border: '1px solid rgba(31,158,92,0.2)',
                }}
              >
                <div className="h-1" style={{ background: 'var(--green)' }} />
                <div className="p-8">
                  {/* Avatar */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 clip-corner flex items-center justify-center font-display font-bold text-xl"
                      style={{ background: 'var(--green)', color: 'white' }}
                    >
                      {initials(member.name)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl" style={{ color: 'var(--cream)' }}>{member.name}</h3>
                      <p className="tag-label mt-0.5" style={{ color: 'var(--green)' }}>{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>{member.bio}</p>
                  <div className="flex gap-4" style={{ borderTop: '1px solid rgba(31,158,92,0.1)', paddingTop: '1rem' }}>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-xs transition-all hover:opacity-80"
                      style={{ color: 'var(--green)', fontFamily: 'DM Mono, monospace' }}
                    >
                      <Mail size={14} /> EMAIL
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-xs transition-all hover:opacity-80"
                      style={{ color: 'var(--muted)', fontFamily: 'DM Mono, monospace' }}
                    >
                      <Linkedin size={14} /> LINKEDIN
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USGs ── */}
      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-16">
            <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.2)' }} />
            <p className="tag-label" style={{ color: 'var(--green)' }}>Under-Secretaries General</p>
            <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.2)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {usgs.map((member, i) => (
              <div
                key={i}
                className="clip-corner transition-all"
                style={{
                  background: 'var(--navy-card)',
                  border: '1px solid rgba(31,158,92,0.1)',
                }}
              >
                <div className="p-6">
                  <div
                    className="w-12 h-12 clip-corner flex items-center justify-center font-display font-bold text-sm mb-4"
                    style={{
                      background: 'rgba(31,158,92,0.12)',
                      color: 'var(--green)',
                      border: '1px solid rgba(31,158,92,0.2)',
                    }}
                  >
                    {initials(member.name)}
                  </div>
                  <h3 className="font-semibold text-base mb-0.5" style={{ color: 'var(--cream)' }}>{member.name}</h3>
                  <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>{member.role}</p>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>{member.bio}</p>
                  <div
                    className="flex gap-3 pt-4"
                    style={{ borderTop: '1px solid rgba(31,158,92,0.1)' }}
                  >
                    <a href={`mailto:${member.email}`} className="transition-all hover:opacity-70" style={{ color: 'var(--muted)' }}>
                      <Mail size={14} />
                    </a>
                    <a href="#" className="transition-all hover:opacity-70" style={{ color: 'var(--muted)' }}>
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN TEAM ── */}
      <section className="py-20" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>Get Involved</p>
          <h2 className="font-display font-bold text-4xl mb-6" style={{ color: 'var(--cream)' }}>
            Join Our Team
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
            Interested in joining the TGAA MUN Secretariat? We're always looking for passionate and
            dedicated individuals to help organise future conferences.
          </p>
          <button
            className="px-8 py-4 font-semibold clip-corner transition-all hover:opacity-90"
            style={{
              background: 'var(--green)',
              color: 'white',
              fontFamily: 'DM Mono, monospace',
              letterSpacing: '0.05em',
              fontSize: '0.8rem',
            }}
          >
            APPLY TO JOIN →
          </button>
        </div>
      </section>
    </div>
  );
}