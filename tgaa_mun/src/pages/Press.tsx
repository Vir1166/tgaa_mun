import { Camera, FileText } from 'lucide-react';

interface PressProps {
  onNavigate: (page: string) => void;
}

// ── Update these paths to your actual TGAAMUN'25 images ──────────────────
const photos = [
    { src: '/gallery/tgaamun25_1.jpg', alt: 'Opening Ceremony' },
    { src: '/gallery/tgaamun25_2.jpg', alt: 'Opening Ceremony' },
    { src: '/gallery/tgaamun25_3.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_4.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_5.jpg', alt: 'Photo Booth' },
    { src: '/gallery/tgaamun25_6.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_7.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_8.jpg', alt: 'Opening Ceremony' },
    { src: '/gallery/tgaamun25_9.jpg', alt: 'Opening Ceremony' },
    { src: '/gallery/tgaamun25_10.jpg', alt: 'Opening Ceremony' },
    { src: '/gallery/tgaamun25_11.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_12.jpg', alt: 'Socials' },
    { src: '/gallery/tgaamun25_13.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_14.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_15.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_16.jpg', alt: 'Day 1 Registration' },
    { src: '/gallery/tgaamun25_17.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_18.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_19.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_20.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_21.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_22.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_23.jpg', alt: 'In Committee' },
    { src: '/gallery/tgaamun25_24.jpg', alt: 'In Committee' },
  ];
// ─────────────────────────────────────────────────────────────────────────

export default function Press({ onNavigate }: PressProps) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>

      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden hero-grid-bg"
        style={{
          backgroundImage: 'url("/other_pics/About.jpeg")',
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
            Media &amp; Coverage
          </p>
          <h1
            className="font-display font-black text-6xl sm:text-8xl leading-none mb-8"
            style={{ color: 'var(--cream)' }}
          >
            Press &amp;<br />
            <span className="italic" style={{ color: 'var(--green)' }}>Gallery</span>
          </h1>
          <div className="h-px max-w-sm mb-6" style={{ background: 'rgba(31,158,92,0.4)' }} />
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            Relive the moments, debates, and diplomacy that defined TGAA MUN — through images, coverage, and stories from the floor.
          </p>
        </div>
      </section>

      {/* ── PHOTO GALLERY ────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 flex items-center justify-center clip-corner"
                style={{ background: 'rgba(31,158,92,0.12)', color: 'var(--green)' }}
              >
                <Camera size={16} />
              </div>
              <p className="tag-label" style={{ color: 'var(--green)' }}>TGAAMUN'25</p>
            </div>
            <h2 className="font-display font-bold text-4xl" style={{ color: 'var(--cream)' }}>
              Moments from the Floor, TGAAMUN'25
            </h2>
          </div>

          {/* Simple 3-column photo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="relative overflow-hidden clip-corner group"
                style={{
                  height: '260px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'var(--navy-card)',
                }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.82) 0%, transparent 55%)' }}
                >
                  <p className="tag-label text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── ARTICLES ─────────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 flex items-center justify-center clip-corner"
              style={{ background: 'rgba(31,158,92,0.12)', color: 'var(--green)' }}
            >
              <FileText size={16} />
            </div>
            <p className="tag-label" style={{ color: 'var(--green)' }}>Coverage</p>
          </div>
          <h2 className="font-display font-bold text-4xl mb-12" style={{ color: 'var(--cream)' }}>
            Articles
          </h2>

          <div
            className="clip-corner py-20 flex flex-col items-center justify-center text-center"
            style={{
              background: 'var(--navy-card)',
              border: '1px solid rgba(31,158,92,0.15)',
            }}
          >
            <p
              className="font-display font-black text-5xl italic mb-4"
              style={{ color: 'var(--cream)' }}
            >
              Coming Soon!
            </p>
            <p className="text-base max-w-md leading-relaxed" style={{ color: 'var(--muted)' }}>
              Articles, op-eds, and press coverage from TGAA MUN are on their way.
              Check back here soon.
            </p>
          </div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'var(--green-dark)' }}>
        <div className="absolute inset-0 hero-grid-bg opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display font-black text-5xl text-white mb-6 leading-tight italic">
            Be Part of the Story
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Register for TGAA MUN 2.0 and create the moments that will fill next year's gallery.
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
            REGISTER FOR TGAA MUN 2.0 →
          </button>
        </div>
      </section>

    </div>
  );
}