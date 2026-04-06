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
      {/* ── REGISTRATION OPTIONS ── */}
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
        Choose Registration Type
      </h2>

      <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
        Select the appropriate form based on your category.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">

        {/* EXTERNAL */}
        <a
          href="https://docs.google.com/forms/u/3/d/1ZOCPOVzJioEQV0V8BYWB9psiqAOIMJ9ilJ8H7aUfviw/edit?usp=sharing_eil_se_dm&ts=69ce77a0"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 font-semibold clip-corner transition-all hover:scale-105 hover:opacity-90"
          style={{
            background: 'var(--green)',
            color: 'white',
            fontFamily: 'DM Mono, monospace',
            letterSpacing: '0.05em',
            fontSize: '0.8rem',
            boxShadow: '0 10px 30px rgba(31,158,92,0.25)',
          }}
        >
          EXTERNAL REGISTRATION →
        </a>

        {/* INTERNAL */}
        <a
          href="https://docs.google.com/forms/u/3/d/10RLMbj0RuzjCH47-mIeCjMN25BHQO2jy1Pk4dMymeoU/edit?usp=sharing_eil&ts=69ce77fe&urp=gmail_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 font-semibold transition-all hover:scale-105 hover:opacity-80"
          style={{
            color: 'var(--cream)',
            border: '1px solid rgba(245,240,232,0.2)',
            fontFamily: 'DM Mono, monospace',
            letterSpacing: '0.05em',
            fontSize: '0.8rem',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          INTERNAL REGISTRATION →
        </a>

      </div>
    </div>

  </div>
</section>
    </div>
  );
}