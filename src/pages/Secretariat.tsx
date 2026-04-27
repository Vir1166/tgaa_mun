import { Mail, Linkedin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  email: string;
  image: string;
}

interface SectionProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-6 mb-12">
      <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.2)' }} />
      <div className="text-center">
        <p className="tag-label mb-2" style={{ color: 'var(--green)' }}>{subtitle}</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl" style={{ color: 'var(--cream)' }}>
          {title}
        </h2>
      </div>
      <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.2)' }} />
    </div>
  );
}

function TeamSection({ title, subtitle, members }: SectionProps) {
  return (
    <section className="py-20" style={{ background: 'var(--navy)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-10 max-w-[1100px]">
            {members.map((member, i) => (
              <div key={i} className="flip-card w-full sm:w-[46%] lg:w-[320px] xl:w-[340px]">
                <div className="flip-inner">

                  {/* FRONT */}
                  <div className="flip-face front">
                    <div className="h-[72%] relative">
                      <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07111e] via-[#07111e99] to-transparent" />
                    </div>

                    <div className="h-[28%] p-5 flex flex-col justify-end">
                      <h3 className="font-display font-bold text-xl" style={{ color: 'var(--cream)' }}>
                        {member.name}
                      </h3>
                      <p className="tag-label" style={{ color: 'var(--green)' }}>
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="flip-face back">
                    <div className="h-full p-6 flex flex-col">
                      <h3 className="font-display font-bold text-xl mb-1" style={{ color: 'var(--cream)' }}>
                        {member.name}
                      </h3>
                      <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>
                        {member.role}
                      </p>

                      <p className="text-sm flex-1" style={{ color: 'var(--muted)' }}>
                        {member.bio}
                      </p>

                      <div className="flex justify-between mt-4 pt-4 border-t border-[rgba(31,158,92,0.15)]">
                        <a href={`mailto:${member.email}`} style={{ color: 'var(--green)' }}>
                          <Mail size={16} />
                        </a>
                        <a href="#" style={{ color: 'var(--muted)' }}>
                          <Linkedin size={16} />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Secretariat() {

  const secretariesGenerals: TeamMember[] = [
    {
      name: 'Samaira Pimple',
      role: 'Secretary-General',
      bio: 'A passionate advocate for international cooperation with 4 years of MUN experience.',
      email: 'sg@tgaamun.org',
      image: '/secretariat/samaira.png',
    },
    {
      name: 'Oas Maheshwari',
      role: 'Deputy Secretary-General',
      bio: 'Dedicated to creating inclusive and intellectually stimulating conference experiences.',
      email: 'dg@tgaamun.org',
      image: '/secretariat/oas.png',
    },
    {
      name: 'Liana Matthew',
      role: 'Director-General',
      bio: 'Focused on execution and ensuring smooth conference operations.',
      email: 'dg@tgaamun.org',
      image: '/secretariat/liana.png',
    },
  ];

  const delegateAffairs: TeamMember[] = [
    {
      name: 'Vir Hariharan',
      role: 'Head of Delegate Affairs',
      bio: 'Handles delegate coordination and communication.',
      email: 'delegates@tgaamun.org',
      image: '/secretariat/vir.png',
    },
    {
      name: 'Dishant Mehta',
      role: 'Head of Delegate Affairs',
      bio: 'Supports delegate experience and onboarding.',
      email: 'delegates@tgaamun.org',
      image: '/secretariat/dishant.png',
    },
    {
      name: 'Prarthana Krishnan',
      role: 'Head of Delegate Affairs',
      bio: 'Ensures smooth delegate workflow and support.',
      email: 'delegates@tgaamun.org',
      image: '/secretariat/prarthana.png',
    },
  ];

  const logistics: TeamMember[] = [
    {
      name: 'Ved Hariharan',
      role: 'Head of Logistics',
      bio: 'Oversees operations, venue, and execution.',
      email: 'logistics@tgaamun.org',
      image: '/secretariat/ved.jpg',
    },
  ];

  const publicRelations: TeamMember[] = [
    {
      name: 'Alisha Gaikwad',
      role: 'Head of PR',
      bio: 'Handles outreach and communications.',
      email: 'dg@tgaamun.org',
      image: '/secretariat/alisha.jpg',
    },
    {
      name: 'Aanya Vaishya',
      role: 'Head of PR',
      bio: 'Supports marketing and public presence.',
      email: 'dg@tgaamun.org',
      image: '/secretariat/aanya.jpg',
    },
  ];

  const internationalPress: TeamMember[] = [
    {
      name: 'Madhav T',
      role: 'Head of IPC',
      bio: 'Manages press and media coverage.',
      email: 'communications@tgaamun.org',
      image: '/secretariat/madhav.jpg',
    },
    {
      name: 'Deetya Gupta',
      role: 'Head of IPC',
      bio: 'Handles reporting and documentation.',
      email: 'finance@tgaamun.org',
      image: '/secretariat/deetya.jpg',
    },
  ];

  const designLayout: TeamMember[] = [
    {
      name: 'Maghi Patil',
      role: 'Head of Design & Layout',
      bio: 'Leads visual design and branding.',
      email: 'dg@tgaamun.org',
      image: '/secretariat/maghi.jpg',
    },
    {
      name: 'Teesha Paul',
      role: 'Head of Design & Layout',
      bio: 'Supports design and layout work.',
      email: 'dg@tgaamun.org',
      image: '/secretariat/teesha.jpg',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>

      {/* ── HEADER ── */}
<section
  className="pt-32 pb-20 relative overflow-hidden hero-grid-bg"
  style={{
    backgroundImage: `url("/other_pics/Secretariat.JPG")`, // paste image here
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
      MEET THE OC
    </p>
    <h1
      className="font-display font-black text-6xl sm:text-8xl leading-none mb-8"
      style={{ color: 'var(--cream)' }}
    >
      The<br />
      <span className="italic" style={{ color: 'var(--green)' }}>
        Organizing Committee
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

      <TeamSection title="Secretary Generals" subtitle="Executive Leadership" members={secretariesGenerals} />
      <TeamSection title="Delegate Affairs" subtitle="Under Secretary Generals" members={delegateAffairs} />
      <TeamSection title="Logistics" subtitle="Under Secretary Generals" members={logistics} />
      <TeamSection title="Public Relations" subtitle="Under Secretary Generals" members={publicRelations} />
      <TeamSection title="International Press" subtitle="Under Secretary Generals" members={internationalPress} />
      <TeamSection title="Design & Layout" subtitle="Under Secretary Generals" members={designLayout} />

      <style jsx>{`
        .flip-card {
          perspective: 2000px;
          background: transparent;
          isolation: isolate;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
          border-radius: 16px;
          background: var(--navy-card);
        }

        .flip-card:hover .flip-inner {
          transform: rotateY(180deg) scale(1.07);
        }

        .flip-face {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          overflow: hidden;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          background: var(--navy-card);
          outline: 1px solid transparent;
          transform: translate3d(0, 0, 0);
        }

        .front {
          transform: rotateY(0deg) translate3d(0, 0, 0.1px);
        }

        .back {
          transform: rotateY(180deg) translate3d(0, 0, 0.1px);
        }

        .flip-card:hover {
          transform: translateY(-10px);
          transition: transform 0.3s ease;
          box-shadow: 0 25px 60px rgba(31, 158, 92, 0.25);
        }
      `}</style>

    </div>
  );
}