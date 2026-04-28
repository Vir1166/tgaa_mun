export default function Registration() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      
      {/* ── HEADER ── */}
      <section className="pt-32 pb-20 relative overflow-hidden hero-grid-bg">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, var(--green) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)'
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>
            Secure Your Spot
          </p>

          <h1 className="font-display font-black text-6xl sm:text-8xl leading-none mb-8" style={{ color: 'var(--cream)' }}>
            Register<br />
            <span className="italic" style={{ color: 'var(--green)' }}>Now</span>
          </h1>

          <div className="h-px max-w-sm mb-6" style={{ background: 'rgba(31,158,92,0.4)' }} />

          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            Complete your registration using the form below. Registration closes June 1, 2026.
          </p>
        </div>
      </section>

      {/* ── REGISTRATION ── */}
      <section className="py-20" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            className="clip-corner p-10 text-center"
            style={{
              background: 'var(--navy-card)',
              border: '1px solid rgba(31,158,92,0.2)',
            }}
          >
            <div className="h-1 mb-8" style={{ background: 'var(--green)' }} />

            <h2
              className="font-display font-bold text-3xl mb-4"
              style={{ color: 'var(--cream)' }}
            >
              Registration
            </h2>

            <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
              Fill out the official registration form to confirm your participation.
            </p>

            <a
              href="https://docs.google.com/forms/d/1RltWyDZ_HLXq-KDh7vJc_pqhuaIg8m4R9e_2cV_W2sQ/viewform?ts=69d7263b&edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 font-semibold clip-corner transition-all hover:scale-105 hover:opacity-90 inline-block"
              style={{
                background: 'var(--green)',
                color: 'white',
                fontFamily: 'DM Mono, monospace',
                letterSpacing: '0.05em',
                fontSize: '0.85rem',
                boxShadow: '0 10px 30px rgba(31,158,92,0.25)',
              }}
            >
              LINK →
            </a>

          </div>

        </div>
      </section>
    </div>
  );
}