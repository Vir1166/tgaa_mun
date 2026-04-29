import { useState } from 'react';
import { X, FileText, Globe } from 'lucide-react';

interface Committee {
  id: string;
  name: string;
  shortName: string;
  agenda: string;
  difficulty: string;
  fullDescription: string;
  image: string;
  accentColor: string;
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
      agenda: 'Regulation of Autonomous Weapons Systems (AWS) and Lethal AI in Warfare.',
      difficulty: 'Senior',
      // Official DISEC / GA First Committee uses the UN emblem
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/300px-UN_emblem_blue.svg.png',
      accentColor: '#60a5fa',
      fullDescription: 'The Disarmament and International Security Committee (DISEC) is the First Committee of the UN General Assembly. In this committee, delegates will tackle the complex issue of regulating autonomous weapons systems, examining international humanitarian law, arms control treaties, and the future of warfare. This committee requires strong research skills and the ability to balance security concerns with humanitarian principles.',
    },
    {
      id: '2',
      name: 'United Nations Security Council',
      shortName: 'UNSC',
      agenda: 'Preventing Regional Escalation in the Middle East with emphasis on Iran and the Threat to Global Security.',
      difficulty: 'Senior',
      // UN Security Council uses the UN flag / emblem
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/300px-Flag_of_the_United_Nations.svg.png',
      accentColor: '#f59e0b',
      fullDescription: 'The United Nations Security Council is the most powerful body in the UN system, responsible for maintaining international peace and security. Delegates will engage in crisis-driven debate on Middle Eastern conflicts, utilizing veto powers, working papers, and resolutions. This committee demands exceptional diplomacy, quick thinking, and deep knowledge of international relations. Limited seats available.',
    },
    {
      id: '3',
      name: 'Historical Crisis Cabinet Committee',
      shortName: 'HCCC',
      agenda: 'The Cuban Missile Crisis of 1962: Addressing Security Concerns Arising from Missile Deployments in Cuba and Turkey.',
      difficulty: 'Senior',
      // US Presidential seal for the Kennedy ExComm historical setting
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Seal_of_the_President_of_the_United_States.svg/300px-Seal_of_the_President_of_the_United_States.svg.png',
      accentColor: '#f87171',
      fullDescription: "Experience history's most perilous thirteen days as a member of President Kennedy's Executive Committee. This fast-paced crisis committee will test your ability to make critical decisions under pressure, respond to breaking developments, and prevent nuclear war. Delegates must be prepared for continuous crisis updates, backroom negotiations, and high-stakes diplomacy.",
    },
    {
      id: '4',
      name: "United Nations International Children's Emergency Fund",
      shortName: 'UNICEF',
      agenda: 'Education of Children in War Affected Zones.',
      difficulty: 'Junior',
      // Official UNICEF logo
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_UNICEF.svg/300px-Logo_of_UNICEF.svg.png',
      accentColor: '#4ade80',
      fullDescription: 'UNICEF is a key UN agency dedicated to protecting the rights and well-being of children worldwide. Delegates will engage in solution-oriented discussions on issues such as child protection, education, healthcare, and humanitarian aid, drafting resolutions that address real-world challenges affecting children. This committee emphasizes collaboration, policy innovation, and practical impact. Ideal for delegates who value structured debate, social awareness, and meaningful global change.',
    },
    {
      id: '5',
      name: 'Social, Humanitarian, and Cultural Committee',
      shortName: 'SOCHUM',
      agenda: 'Protecting Human Rights During Counterterrorism Operations.',
      difficulty: 'Junior',
      // SOCHUM is the GA Third Committee — UN emblem with a warm tint
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/300px-UN_emblem_blue.svg.png',
      accentColor: '#a78bfa',
      fullDescription: 'SOCHUM is the Third Committee of the UN General Assembly, focusing on human rights and social development issues worldwide. Delegates will engage in structured debate on topics such as refugee protection, gender equality, racial discrimination, and fundamental freedoms, working through speeches, moderated caucuses, and resolutions. This committee requires strong research, balanced argumentation, and a clear understanding of global socio-political dynamics. Suitable for delegates interested in impactful yet policy-driven discussions.',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>

      {/* ── HEADER ── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden hero-grid-bg"
        style={{
          backgroundImage: `url("/other_pics/Committees.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(10, 15, 30, 0.7)' }} />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--green) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>TGAA MUN 2026</p>
          <h1 className="font-display font-black text-6xl sm:text-8xl leading-none mb-8" style={{ color: 'var(--cream)' }}>
            Our<br />
            <span className="italic" style={{ color: 'var(--green)' }}>Committees</span>
          </h1>
          <div className="h-px max-w-sm mb-6" style={{ background: 'rgba(31,158,92,0.4)' }} />
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            Five diverse committees covering the most pressing global challenges,
            from international security to environmental sustainability.
          </p>
        </div>
      </section>

      {/* ── ROWS ── */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5">
            {committees.map((committee) => {
              const ds = difficultyStyle(committee.difficulty);
              return (
                <div
                  key={committee.id}
                  className="flex transition-all group"
                  style={{
                    border: `1px solid ${committee.accentColor}25`,
                    overflow: 'hidden',
                    borderRadius: '2px',
                    minHeight: '220px',
                  }}
                >
                  {/* ── Square image: width matches minHeight so it stays square ── */}
                  <div
                    className="flex-shrink-0 relative overflow-hidden"
                    style={{
                      width: '220px',
                      alignSelf: 'stretch',
                      background: 'rgba(8,12,24,0.95)',
                    }}
                  >
                    {/* Drop your committee image here — it will fill the square */}
                    <img
                      src={`/committee_images/${committee.id}.jpg`}
                      alt={committee.shortName}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* ── Content panel with gradient/accent styling ── */}
                  <div
                    className="flex flex-col flex-1 relative overflow-hidden"
                    style={{
                      background: `
                        radial-gradient(ellipse at 90% 20%, ${committee.accentColor}18 0%, transparent 55%),
                        linear-gradient(135deg, rgba(12,18,36,0.98) 0%, rgba(8,13,26,1) 100%)
                      `,
                    }}
                  >
                    {/* Subtle grid texture */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.04]"
                      style={{
                        backgroundImage: `
                          linear-gradient(${committee.accentColor} 1px, transparent 1px),
                          linear-gradient(90deg, ${committee.accentColor} 1px, transparent 1px)
                        `,
                        backgroundSize: '22px 22px',
                      }}
                    />

                    {/* Top accent bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: `linear-gradient(to right, ${committee.accentColor}90, transparent 60%)` }}
                    />

                    <div className="relative z-10 flex flex-col flex-1 p-6">
                      {/* Title row */}
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3
                            className="font-display font-bold text-2xl mb-0.5"
                            style={{ color: 'var(--cream)' }}
                          >
                            {committee.shortName}
                          </h3>
                          <p
                            className="tag-label leading-snug"
                            style={{ color: 'var(--muted)', fontSize: '0.63rem' }}
                          >
                            {committee.name}
                          </p>
                        </div>
                        <span
                          className="tag-label px-2 py-1 rounded-sm flex-shrink-0 ml-4"
                          style={{
                            color: ds.color,
                            background: ds.bg,
                            border: `1px solid ${ds.border}`,
                            fontSize: '0.63rem',
                          }}
                        >
                          {committee.difficulty}
                        </span>
                      </div>

                      {/* Accent divider */}
                      <div
                        className="h-px mb-4"
                        style={{ background: `linear-gradient(to right, ${committee.accentColor}60, transparent)` }}
                      />

                      {/* Agenda */}
                      <div className="flex-1 mb-5">
                        <div className="flex items-center gap-2 mb-1.5">
                          <FileText size={11} style={{ color: committee.accentColor }} />
                          <span
                            className="tag-label"
                            style={{ color: committee.accentColor, fontSize: '0.63rem' }}
                          >
                            Agenda
                          </span>
                        </div>
                        <p
                          className="text-sm font-semibold leading-snug"
                          style={{ color: 'var(--cream)' }}
                        >
                          {committee.agenda}
                        </p>
                      </div>

                      {/* Button */}
                      <div>
                        <button
                          onClick={() => setSelectedCommittee(committee)}
                          className="py-2 px-5 font-semibold transition-all"
                          style={{
                            background: `${committee.accentColor}18`,
                            color: committee.accentColor,
                            border: `1px solid ${committee.accentColor}4D`,
                            fontFamily: 'DM Mono, monospace',
                            letterSpacing: '0.05em',
                            fontSize: '0.72rem',
                            borderRadius: '2px',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = committee.accentColor;
                            (e.currentTarget as HTMLElement).style.color = 'white';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = `${committee.accentColor}18`;
                            (e.currentTarget as HTMLElement).style.color = committee.accentColor;
                          }}
                        >
                          LEARN MORE →
                        </button>
                      </div>
                    </div>
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
            style={{ background: 'var(--navy-card)', border: `1px solid ${selectedCommittee.accentColor}4D` }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="relative px-6 py-5 flex justify-between items-start overflow-hidden"
              style={{
                borderBottom: `1px solid ${selectedCommittee.accentColor}25`,
                background: `radial-gradient(ellipse at 80% 50%, ${selectedCommittee.accentColor}15 0%, transparent 60%)`,
              }}
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(to right, ${selectedCommittee.accentColor}90, transparent 60%)` }}
              />
              <div>
                <h2 className="font-display font-bold text-3xl" style={{ color: 'var(--cream)' }}>
                  {selectedCommittee.shortName}
                </h2>
                <p className="tag-label mt-1" style={{ color: 'var(--muted)', fontSize: '0.65rem' }}>
                  {selectedCommittee.name}
                </p>
              </div>
              <button
                onClick={() => setSelectedCommittee(null)}
                className="w-8 h-8 flex items-center justify-center transition-all hover:opacity-70 mt-1"
                style={{ color: 'var(--muted)' }}
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="tag-label mb-2" style={{ color: selectedCommittee.accentColor, fontSize: '0.65rem' }}>
                  Agenda
                </p>
                <p className="font-semibold" style={{ color: 'var(--cream)' }}>{selectedCommittee.agenda}</p>
              </div>
              <div>
                <p className="tag-label mb-2" style={{ color: selectedCommittee.accentColor, fontSize: '0.65rem' }}>
                  Committee Overview
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {selectedCommittee.fullDescription}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="p-4 clip-corner"
                  style={{ background: 'var(--navy-mid)', border: `1px solid ${selectedCommittee.accentColor}18` }}
                >
                  <p className="tag-label mb-1" style={{ color: 'var(--muted)', fontSize: '0.65rem' }}>TYPE</p>
                  <p
                    className="font-display font-bold text-xl mt-2"
                    style={{ color: difficultyStyle(selectedCommittee.difficulty).color }}
                  >
                    {selectedCommittee.difficulty}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCommittee(null)}
                className="w-full py-3 font-semibold clip-corner transition-all hover:opacity-90"
                style={{
                  background: selectedCommittee.accentColor,
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