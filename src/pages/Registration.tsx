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

      {/* ── GOOGLE FORM EMBED ── */}
      <section className="py-20" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div
            className="clip-corner overflow-hidden"
            style={{
              background: 'var(--navy-card)',
              border: '1px solid rgba(31,158,92,0.2)',
            }}
          >
            <div className="h-1" style={{ background: 'var(--green)' }} />

            <div className="p-6 md:p-10">
              
              {/* OPTION 1: EMBED */}
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSd9S3iYdrJEsFIcL9OnWOgWmNbgjIFGdr_S5GnAYX0glsF8GA/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                style={{ border: 'none' }}
              >
                Loading…
              </iframe>

              {/* OPTION 2: BUTTON (if you don’t want embed) */}
              {/* 
              <div className="text-center py-12">
                <a
                  href="YOUR_GOOGLE_FORM_LINK_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 font-semibold clip-corner transition-all hover:opacity-90"
                  style={{
                    background: 'var(--green)',
                    color: 'white',
                    fontFamily: 'DM Mono, monospace',
                    letterSpacing: '0.05em',
                    fontSize: '0.8rem',
                  }}
                >
                  OPEN REGISTRATION FORM →
                </a>
              </div>
              */}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}