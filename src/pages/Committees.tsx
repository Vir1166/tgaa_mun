import { useState } from 'react';
import { X, Users, FileText, Globe } from 'lucide-react';

interface Committee {
  id: string;
  name: string;
  shortName: string;
  agenda: string;
  description: string;
  delegates: number;
  difficulty: string;
  fullDescription: string;
}

const difficultyStyle = (d: string) => {
  if (d === 'Junior') return { color: '#4ade80', bg: 'rgba(74,222,128,0.1)', border: 'rgba(74,222,128,0.3)' };
  if (d === 'Senior') return { color: '#60a5fa', bg: 'rgba(96,165,250,0.1)', border: 'rgba(96,165,250,0.3)' };
  return { color: '#c084fc', bg: 'rgba(192,132,252,0.1)', border: 'rgba(192,132,252,0.3)' };
};

export default function Committees() {
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);

  const committees: Committee[] = [
    {
      id: '1',
      name: 'Disarmament and International Security Committee',
      shortName: 'DISEC',
      agenda: 'Regulation of Autonomous Weapons Systems',
      description: 'Address the ethical, legal, and security implications of lethal autonomous weapons in modern warfare.',
      delegates: 20,
      difficulty: 'Senior',
      fullDescription: 'The Disarmament and International Security Committee (DISEC) is the First Committee of the UN General Assembly. In this committee, delegates will tackle the complex issue of regulating autonomous weapons systems, examining international humanitarian law, arms control treaties, and the future of warfare. This committee requires strong research skills and the ability to balance security concerns with humanitarian principles.',
    },
    {
      id: '2',
      name: 'United Nations Security Council',
      shortName: 'UNSC',
      agenda: 'Preventing Escalation in the Middle East',
      description: "Navigate complex regional tensions and work toward sustainable peace in one of the world's most volatile regions.",
      delegates: 15,
      difficulty: 'Senior',
      fullDescription: 'The United Nations Security Council is the most powerful body in the UN system, responsible for maintaining international peace and security. Delegates will engage in crisis-driven debate on Middle Eastern conflicts, utilizing veto powers, working papers, and resolutions. This committee demands exceptional diplomacy, quick thinking, and deep knowledge of international relations. Limited seats available.',
    },
    {
      id: '3',
      name: 'Historical Crisis Cabinet Committee',
      shortName: 'HCCC',
      agenda: 'The Cuban Missile Crisis (October 1962)',
      description: "Step into the shoes of Kennedy administration officials during the most dangerous moment of the Cold War.",
      delegates: 16,
      difficulty: 'Senior',
      fullDescription: "Experience history's most perilous thirteen days as a member of President Kennedy's Executive Committee. This fast-paced crisis committee will test your ability to make critical decisions under pressure, respond to breaking developments, and prevent nuclear war. Delegates must be prepared for continuous crisis updates, backroom negotiations, and high-stakes diplomacy.",
    },
    {
      id: '4',
      name: "United Nations Children's Fund",
      shortName: 'UNICEF',
      agenda: 'Digital Rights and Privacy in the Age of Surveillance',
      description: 'Balance national security interests with fundamental rights to privacy in an increasingly digital world.',
      delegates: 20,
      difficulty: 'Junior',
      fullDescription: 'The UN Human Rights Council addresses critical human rights issues globally. Delegates will debate the intersection of technology, privacy, and state surveillance, examining cases from around the world. This committee explores questions of digital sovereignty, corporate responsibility, and the universal right to privacy. Strong argumentation and ethical reasoning skills are essential.',
    },
    {
      id: '5',
      name: 'Social, Humanitarian, and Cultural Committee',
      shortName: 'SOCHUM',
      agenda: 'Combating Plastic Pollution in Marine Ecosystems',
      description: 'Develop comprehensive strategies to address one of the most pressing environmental challenges of our time.',
      delegates: 20,
      difficulty: 'Junior',
      fullDescription: 'The United Nations Environment Programme leads global environmental action. Delegates will craft innovative solutions to the plastic pollution crisis, examining production, consumption, waste management, and international cooperation. This committee is ideal for delegates interested in environmental policy, sustainable development, and multilateral cooperation. First-time delegates are welcome.',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      {/* ── HEADER ── */}
<section
  className="pt-32 pb-20 relative overflow-hidden hero-grid-bg"
  style={{
    backgroundImage: `url("/other_pics/Committees.jpg")`, // paste image here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay */}
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
      TGAA MUN 2026
    </p>
    <h1
      className="font-display font-black text-6xl sm:text-8xl leading-none mb-8"
      style={{ color: 'var(--cream)' }}
    >
      Our<br />
      <span className="italic" style={{ color: 'var(--green)' }}>
        Committees
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
      Six diverse committees covering the most pressing global challenges,
      from international security to environmental sustainability.
    </p>
  </div>
</section>

      {/* ── GRID ── */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((committee) => {
              const ds = difficultyStyle(committee.difficulty);
              return (
                <div
                  key={committee.id}
                  className="clip-corner flex flex-col transition-all group"
                  style={{
                    background: 'var(--navy-card)',
                    border: '1px solid rgba(31,158,92,0.12)',
                  }}
                >
                  {/* Top accent bar */}
                  <div className="h-1" style={{ background: 'var(--green)' }} />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display font-bold text-2xl mb-1" style={{ color: 'var(--cream)' }}>
                          {committee.shortName}
                        </h3>
                        <p className="tag-label" style={{ color: 'var(--muted)' }}>{committee.name}</p>
                      </div>
                      <Globe size={20} style={{ color: 'var(--green)', opacity: 0.6 }} />
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText size={12} style={{ color: 'var(--green)' }} />
                        <span className="tag-label" style={{ color: 'var(--green)' }}>Agenda</span>
                      </div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--cream)' }}>{committee.agenda}</p>
                    </div>

                    <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--muted)' }}>
                      {committee.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                        <Users size={13} />
                        <span className="tag-label">{committee.delegates} delegates</span>
                      </div>
                      <span
                        className="tag-label px-2 py-1 rounded-sm"
                        style={{
                          color: ds.color,
                          background: ds.bg,
                          border: `1px solid ${ds.border}`,
                        }}
                      >
                        {committee.difficulty}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedCommittee(committee)}
                      className="w-full py-2.5 text-sm font-semibold transition-all clip-corner"
                      style={{
                        background: 'rgba(31,158,92,0.12)',
                        color: 'var(--green)',
                        border: '1px solid rgba(31,158,92,0.3)',
                        fontFamily: 'DM Mono, monospace',
                        letterSpacing: '0.05em',
                        fontSize: '0.72rem',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.background = 'var(--green)';
                        (e.currentTarget as HTMLElement).style.color = 'white';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.background = 'rgba(31,158,92,0.12)';
                        (e.currentTarget as HTMLElement).style.color = 'var(--green)';
                      }}
                    >
                      LEARN MORE →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {selectedCommittee && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelectedCommittee(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto clip-corner"
            style={{ background: 'var(--navy-card)', border: '1px solid rgba(31,158,92,0.3)' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="sticky top-0 p-6 flex justify-between items-start"
              style={{
                background: 'var(--navy-card)',
                borderBottom: '1px solid rgba(31,158,92,0.15)',
              }}
            >
              <div>
                <h2 className="font-display font-bold text-3xl" style={{ color: 'var(--cream)' }}>
                  {selectedCommittee.shortName}
                </h2>
                <p className="tag-label mt-1" style={{ color: 'var(--muted)' }}>{selectedCommittee.name}</p>
              </div>
              <button
                onClick={() => setSelectedCommittee(null)}
                className="w-8 h-8 flex items-center justify-center transition-all hover:opacity-70"
                style={{ color: 'var(--muted)' }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="tag-label mb-2" style={{ color: 'var(--green)' }}>Agenda</p>
                <p className="font-semibold" style={{ color: 'var(--cream)' }}>{selectedCommittee.agenda}</p>
              </div>
              <div>
                <p className="tag-label mb-2" style={{ color: 'var(--green)' }}>Committee Overview</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{selectedCommittee.fullDescription}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 clip-corner" style={{ background: 'var(--navy-mid)', border: '1px solid rgba(31,158,92,0.1)' }}>
                  <p className="tag-label mb-1" style={{ color: 'var(--muted)' }}>Committee Size</p>
                  <p className="font-display font-bold text-3xl" style={{ color: 'var(--green)' }}>{selectedCommittee.delegates}</p>
                </div>
                <div className="p-4 clip-corner" style={{ background: 'var(--navy-mid)', border: '1px solid rgba(31,158,92,0.1)' }}>
                  <p className="tag-label mb-1" style={{ color: 'var(--muted)' }}>Difficulty Level</p>
                  <p className="font-display font-bold text-xl mt-2" style={{ color: difficultyStyle(selectedCommittee.difficulty).color }}>{selectedCommittee.difficulty}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCommittee(null)}
                className="w-full py-3 font-semibold clip-corner transition-all hover:opacity-90"
                style={{
                  background: 'var(--green)',
                  color: 'white',
                  fontFamily: 'DM Mono, monospace',
                  letterSpacing: '0.05em',
                  fontSize: '0.75rem',
                }}
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}