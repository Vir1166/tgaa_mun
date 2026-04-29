import { Mail, Linkedin } from 'lucide-react';
import React from 'react';

function copyEmail(email: string) {
  navigator.clipboard.writeText(email)
    .then(() => {
      // optional feedback
      console.log('Copied:', email);
    })
    .catch(() => {
      // fallback if permissions fail
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    });
}

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
          {members.map((member, i) => {
  const [copied, setCopied] = React.useState(false);

  function handleCopy(email: string) {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      })
      .catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      });
  }

  return (
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
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(member.email)}
                  className={`mail-btn ${copied ? 'copied' : ''}`}
                  aria-label="Copy email"
                >
                  <Mail size={16} />
                </button>

                <span className={`copy-text ${copied ? 'show' : ''}`}>
                  Copied to Clipboard!
                </span>
              </div>

              <a href="#" style={{ color: 'var(--muted)' }}>
                <Linkedin size={16} />
              </a>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
})}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Secretariat() {
  
  const schoolLeadership: TeamMember[] = [
    {
      name: 'Ms. Bonny',
      role: 'Principal',
      bio: 'Principal of the institution, providing overall leadership and vision for the conference.',
      email: '',
      image: '/secretariat/bonny.jpg', 
    },
    {
      name: 'Ms. Suparna',
      role: 'Vice Principal',
      bio: 'Supports institutional leadership and oversees academic coordination.',
      email: '',
      image: '/secretariat/suparna.jpg',
    },
    {
      name: 'Ms. Srushti Vora',
      role: 'MUN In-charge',
      bio: 'Leads and supervises all MUN-related activities and execution.',
      email: '',
      image: '/secretariat/Srushti_Vora.jpeg',
    },
  ];

  const secretariesGenerals: TeamMember[] = [
    {
      name: 'Samaira Pimple',
      role: 'Secretary-General',
      bio: 'As Secretary-General of TGAAMUN 2026, Samaira believes growth begins just beyond one’s comfort zone, echoing this year’s theme, Metamorphosis. After serving as Head of Public Relations for TGAAMUN 2025, she aims to create a conference that challenges delegates, broadens perspectives, and rewards bold thinking. A believer in empathy shaped through books and films (and Star Wars), she brings curiosity, conviction, and—by her Core OC’s account—a slightly dictatorial commitment to efficiency. She intends for TGAAMUN 2026 to be rigorous, memorable, and never boring.',
      email: 'gch13ic301@chembur.tgaa.in ',
      image: '/secretariat/Samaira.jpeg',
    },
    {
      name: 'Oas Maheshwari',
      role: 'Deputy Secretary-General',
      bio: 'As Deputy Secretary-General of TGAAMUN 2026, Oas is committed to fostering a conference that is engaging, dynamic and memorable for every delegate. Passionate about communication and public speaking, she believes MUN is a space to exchange ideas, build confidence and form meaningful connections. Through TGAAMUN 2026, she hopes to help create a conference that is intellectually enriching, smoothly executed and, above all, enjoyable for all.',
      email: 'gch13ic028@chembur.tgaa.in ',
      image: '/secretariat/Oas.jpeg',
    },
    {
      name: 'Liana Mathew',
      role: 'Director-General',
      bio: 'Liana Mathew, Director General of TGAAMUN 2026, believes pressure creates diamonds and deadlines create motivation. A dedicated basketball lover, she knows the value of composure, confidence, and showing up when it matters most usually in the final 24 seconds. With high standards, strong opinions, and a slightly concerning love for crises, Liana is ready to keep delegates on their toes, test their limits, and ensure TGAAMUN 2026 is anything but easy and everything but boring.',
      email: 'gch14ic063@chembur.tgaa.in',
      image: '/secretariat/Liana.jpeg',
    },
  ];

  const delegateAffairs: TeamMember[] = [
    {
      name: 'Vir Hariharan',
      role: 'Head of Delegate Affairs',
      bio: 'Vir Hariharan serves as the Head of Delegate Affairs for TGAA MUN 2.0, overseeing both the academic structure and digital backbone of the conference. He has worked on committees and agendas, coordinated study guides and matrices, and contributed to shaping the event’s academic direction. As the developer of the TGAA MUN website, he ensures a smooth and accessible experience for participants. His role combines technical execution with delegate-focused planning, emphasizing efficiency, clarity, and strong support throughout the MUN experience.',
      email: 'gch13ic039@chembur.tgaa.in ',
      image: '/secretariat/Vir.jpeg',
    },
    {
      name: 'Dishant Mehta',
      role: 'Head of Delegate Affairs',
      bio: 'He is the Head of Delegate Affairs. They call him Julius Caesar. New delegates enter nervous and leave ready to betray their own allies for speaking time. He trains speeches, stabs weak arguments repeatedly, and turns fear into confidence overnight. Sleep was overthrown years ago. When chaos enters committee, it gets conquered before roll call starts.\n\n\"We teach diplomacy, chaos comes naturally.\"',
      email: 'gch13ic091@chembur.tgaa.in',
      image: '/secretariat/Dishant.jpeg',
    },
    {
      name: 'Prarthana Krishnan',
      role: 'Head of Delegate Affairs',
      bio: 'Ensures smooth delegate workflow and support.',
      email: 'gch13ic282@chembur.tgaa.in',
      image: '/secretariat/Prarthana.jpeg',
    },
  ];

  const logistics: TeamMember[] = [
    {
      name: 'Ved Hariharan',
      role: 'Head of Logistics',
      bio: 'Oversees operations, venue, and execution.',
      email: 'gch13ic038@chembur.tgaa.in ',
      image: '/secretariat/Ved.jpeg',
    },
  ];

  const publicRelations: TeamMember[] = [
    {
      name: 'Shivakshi Kutty',
      role: 'Head of PR',
      bio: 'Shivakshi is technically head of PR, but honestly, half the time it just looks like she’s casually observing chaos and somehow turning it into content.Blending into the team while making sure things come together with precision, she keeps things real, and somehow makes it all work. No drama, no overthinking, just a good eye for moments, a bit of creativity, and a lot of “we’ll figure it out", which also involves a whole lot of putting random things together till it somehow makes sense.',
      email: 'gch13ic300@chembur.tgaa.in ',
      image: '/secretariat/Shivakshi.jpeg',
    },
    {
      name: 'Aanya Vaishya',
      role: 'Head of PR',
      bio: 'I’m Aanya Vaishya, the Head of Public Relations in TGAAMUN. My role is to manage communication and shape the organization’s public image. I handle outreach, promote events, and ensure our messaging is clear, engaging, and professional. Being in PR has helped me develop strong communication and teamwork skills.',
      email: 'gch13ic041@chembur.tgaa.in ',
      image: '/secretariat/Aanya.jpeg',
    },
  ];

  const internationalPress: TeamMember[] = [
    {
      name: 'Madhav T',
      role: 'Head of IPC',
      bio: 'Madhav T serves as the Head of IPC at TGAAMUN 2.0, leading the press with clarity and a commitment to accurate reporting. He is committed to redefining narratives into stories that stay with you.',
      email: 'gch13ic181@chembur.tgaa.in ',
      image: '/secretariat/Madhav.jpeg',
    },
    {
      name: 'Deetya Gupta',
      role: 'Head of IPC',
      bio: 'Deetya Gupta serves as the Head of IPC at TGAAMUN 2.0. Her interests include reading, dancing and inking stories that crush readers’ souls. She is dedicated to turning debates into headlines and rumors into rhetorics. She intends to keep the press sane, but the delegates… not so much so.',
      email: 'gch13ic283@chembur.tgaa.in',
      image: '/secretariat/Deetya.jpeg',
    },
  ];

  const designLayout: TeamMember[] = [
    {
      name: 'Alisha Gaikwad',
      role: 'Head of PR',
      bio: 'Alisha Gaikwad is the Head of Design and Layout for TGAA MUN \'26. Her role includes leading everything visual, including making posters, social media posts, decoration, and building a mood for the conference. Design sets the tone before the event begins, and her job is to make TGAA MUN\'26 look amazing from the start.',
      email: 'gch13ic044@chembur.tgaa.in',
      image: '/secretariat/Alisha.jpeg',
    },
    {
      name: 'Maghi Patil',
      role: 'Head of Design & Layout',
      bio: 'Maghi Patil serves as the Head of Design and Layout for TGAA MUN\'26. Her role includes making posters, social media posts, decoration and building an aesthetic for the conference. Any event is judged first by its appearance, and her job is to make sure that the first impression is unforgettable.',
      email: 'gch13ic312@chembur.tgaa.in',
      image: '/secretariat/Maghi.jpeg',
    },
    {
      name: 'Teesha Paul',
      role: 'Head of Design & Layout',
      bio: 'Teesha Paul is the Head of Design & Layout for TGAA MUN 2.0, responsible for creating a cohesive visual identity across all materials, from delegate kits to official documents. Her role focuses on ensuring everything is aesthetically strong and professionally aligned, proving that in MUN, presentation speaks before delegates do.',
      email: 'gch13ic075@chembur.tgaa.in',
      image: '/secretariat/Teesha.jpeg',
    },
  ];
  const teachersInCharge: TeamMember[] = [
    {
      name: 'Ms. Arpita Rautaray',
      role: 'Delegate Affairs & IPC',
      bio: 'Overseeing delegate coordination and allotments. Also manages inter-personal coordination and smooth functioning during sessions.',
      email: 'arpita.rautaray@chembur.tgaa.in',
      image: '/secretariat/Arpita_Rautaray.png',
    },
    {
      name: 'Ms. Jyoti Singh',
      role: 'Training Development & Design-Layout',
      bio: 'Planning and conducting training sessions, as well as curating academic content and overseeing the design and structure of conference materials. ',
      email: 'jyoti.singh@chembur.tgaa.in',
      image: '/secretariat/Jyoti_Singh.jpg',
    },
    {
      name: 'Ms. Abhijeet Khalsa',
      role: 'PR & Logistics',
      bio: 'Handles external communication, outreach, and publicity, along with managing on-ground logistics and operational arrangements for the event. ',
      email: 'abhijeet.khalsa@chembur.tgaa.in',
      image: '/secretariat/Abhijeet_Khalsa.jpg',
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
      A dedicated team of student leaders and coordinators working behind the scenes to plan, manage, and execute every aspect of the conference seamlessly.
    </p>
  </div>
</section>

      <TeamSection title="Institutional/MUN Heads" subtitle="School Leadership" members={schoolLeadership} />
      <TeamSection title="Teachers in Charge" subtitle="Faculty Advisors" members={teachersInCharge}/>
      <TeamSection title="The Secretariat" subtitle="Executive Leadership" members={secretariesGenerals} />
      <TeamSection title="Delegate Affairs" subtitle="Under Secretary Generals" members={delegateAffairs} />
      <TeamSection title="Logistics" subtitle="Under Secretary Generals" members={logistics} />
      <TeamSection title="Public Relations" subtitle="Under Secretary Generals" members={publicRelations} />
      <TeamSection title="International Press" subtitle="Under Secretary Generals" members={internationalPress} />
      <TeamSection title="Design & Layout" subtitle="Under Secretary Generals" members={designLayout} />
      <style jsx>{`
      .mail-btn {
        color: var(--green);
        transition: color 0.2s ease, transform 0.15s ease;
      }
      
      .mail-btn:hover {
        transform: scale(1.1);
      }
      
      .mail-btn.copied {
        color: #1f7a4d;
      }
      
      .copy-text {
        font-size: 0.75rem;
        color: white;
        opacity: 0;
        transform: translateX(-6px);
        transition: opacity 0.2s ease, transform 0.2s ease;
        white-space: nowrap;
      }
      
      .copy-text.show {
        opacity: 1;
        transform: translateX(0);
      }
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