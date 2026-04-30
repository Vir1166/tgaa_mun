import { FileText, ExternalLink, BookOpen, Video, FileDown, ArrowRight } from 'lucide-react';

type ResourceItem = {
  title: string;
  category: 'Background Guides' | 'Conference Documents' | 'Videos';
  icon: typeof FileText;
  link?: string;
  accent: string;
  image?: string;
  description?: string;
};

const bgGuides: ResourceItem[] = [
  {
    title: 'DISEC',
    category: 'Background Guides',
    icon: FileText,
    link: '',
    accent: '#60a5fa',
    image: '/committee_images/1.jpg',
  },
  {
    title: 'UNSC',
    category: 'Background Guides',
    icon: FileText,
    link: '',
    accent: '#f59e0b',
    image: '/committee_images/2.jpg',
  },
  {
    title: 'HCCC',
    category: 'Background Guides',
    icon: FileText,
    link: '',
    accent: '#f87171',
    image: '/committee_images/3.jpg',
  },
  {
    title: 'UNICEF',
    category: 'Background Guides',
    icon: FileText,
    link: '',
    accent: '#4ade80',
    image: '/committee_images/4.jpg',
  },
  {
    title: 'SOCHUM',
    category: 'Background Guides',
    icon: FileText,
    link: '',
    accent: '#a78bfa',
    image: '/committee_images/5.jpg',
  },
];

const conferenceDocs: ResourceItem[] = [

  {
    title: 'Brochure',
    description: 'Everything you need to know about TGAA MUN 2026.',
    category: 'Conference Documents',
    icon: BookOpen,
    link: 'https://drive.google.com/file/d/17zCXaRqjVeplLQ4XBRyBZzWzNAI3hSha/view',
    accent: '#ffffff',
  },
 
];

function GuideCard({ item }: { item: ResourceItem }) {
  return (
    <div
      className="flex overflow-hidden clip-corner"
      style={{
        width: '350px',
        border: `1px solid ${item.accent}2A`,
        background: 'var(--navy-card)',
        minHeight: '150px',
      }}
    >
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{
          width: '150px',
          minWidth: '150px',
          background: 'rgba(8,12,24,0.95)',
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>

      <div
        className="relative flex min-w-0 flex-1 flex-col justify-center px-5 py-4"
        style={{
          background: `
            radial-gradient(ellipse at 90% 20%, ${item.accent}16 0%, transparent 55%),
            linear-gradient(135deg, rgba(12,18,36,0.98) 0%, rgba(8,13,26,1) 100%)
          `,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(${item.accent} 1px, transparent 1px),
              linear-gradient(90deg, ${item.accent} 1px, transparent 1px)
            `,
            backgroundSize: '22px 22px',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(to right, ${item.accent}90, transparent 60%)` }}
        />

        <div className="relative z-10 flex flex-col items-start gap-3">
          <h3
            className="font-display font-bold text-2xl sm:text-3xl leading-none"
            style={{ color: 'var(--cream)' }}
          >
            {item.title}
          </h3>

          <button
            onClick={() => item.link && window.open(item.link, '_blank')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold transition-all"
            style={{
              background: `${item.accent}18`,
              color: item.accent,
              border: `1px solid ${item.accent}4D`,
              fontFamily: 'DM Mono, monospace',
              letterSpacing: '0.05em',
              borderRadius: '2px',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = item.accent;
              (e.currentTarget as HTMLElement).style.color = 'white';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = `${item.accent}18`;
              (e.currentTarget as HTMLElement).style.color = item.accent;
            }}
          >
            OPEN <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

function PlainDocCard({ item }: { item: ResourceItem }) {
  return (
    <div
      className="clip-corner p-6"
      style={{
        background: 'var(--navy-card)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <item.icon size={18} style={{ color: 'var(--green)' }} className="mb-4" />
      <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--cream)' }}>
        {item.title}
      </h3>
      <p className="text-xs mb-4" style={{ color: 'var(--muted)' }}>
        {item.description}
      </p>

      <button
        onClick={() => item.link && window.open(item.link, '_blank')}
        className="text-xs flex items-center gap-2"
        style={{ color: 'var(--green)' }}
      >
        <ExternalLink size={12} /> OPEN
      </button>
    </div>
  );
}

export default function Resources() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      <section
        className="pt-32 pb-20 relative overflow-hidden hero-grid-bg"
        style={{
          backgroundImage: `url("/other_pics/Resources.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(10, 15, 30, 0.72)' }} />
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
            Delegate<br />
            <span className="italic" style={{ color: 'var(--green)' }}>
              Resources
            </span>
          </h1>
          <div className="h-px max-w-sm mb-6" style={{ background: 'rgba(31,158,92,0.4)' }} />
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            Study guides, conference documents, and support material to help you prepare properly.
          </p>
        </div>
      </section>

      {/* STUDY GUIDES */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2
  className="font-display font-bold text-4xl mb-12 text-center w-full"
  style={{ color: 'var(--cream)' }}
>
  Study Guides - Coming Soon
</h2>

          <div className="flex flex-col items-center gap-5">
  {/* First row (3 cards) */}
  <div className="flex gap-5">
    {bgGuides.slice(0, 3).map((doc) => (
      <GuideCard key={doc.title} item={doc} />
    ))}
  </div>

  {/* Second row (2 cards) */}
  <div className="flex gap-5">
    {bgGuides.slice(3, 5).map((doc) => (
      <GuideCard key={doc.title} item={doc} />
    ))}
  </div>
</div>
        </div>
      </section>

      {/* CONFERENCE DOCUMENTS */}
      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 flex items-center justify-center clip-corner"
              style={{ background: 'rgba(31,158,92,0.12)', color: 'var(--green)' }}
            >
              <BookOpen size={16} />
            </div>
            <p className="tag-label" style={{ color: 'var(--green)' }}>
              Conference Documents
            </p>
          </div>

          <h2 className="font-display font-bold text-4xl mb-12" style={{ color: 'var(--cream)' }}>
            Official Materials - More Coming Soon
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {conferenceDocs.map((doc) => (
              <PlainDocCard key={doc.title} item={doc} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}