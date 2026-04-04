import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid rgba(31,158,92,0.15)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top rule */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.3)' }} />
          <span className="font-display italic text-2xl font-bold" style={{ color: 'var(--green)' }}>
            TGAA MUN
          </span>
          <div className="h-px flex-1" style={{ background: 'rgba(31,158,92,0.3)' }} />
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* ABOUT */}
          <div>
            <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>About</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Shaping global leaders through diplomacy and discourse. An unforgettable
              experience in international relations — student-run, student-led.
            </p>
          </div>

          {/* DATE */}
          <div className="flex justify-center">
            <div
              className="px-6 py-4 clip-corner text-center"
              style={{
                background: 'rgba(31,158,92,0.08)',
                border: '1px solid rgba(31,158,92,0.2)',
              }}
            >
              <p className="tag-label mb-1" style={{ color: 'var(--muted)' }}>
                Conference Dates
              </p>
              <p className="font-display font-bold text-lg" style={{ color: 'var(--green)' }}>
                July 15–17, 2026
              </p>
            </div>
          </div>

          {/* CONNECT */}
          <div className="md:text-right">
            <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>Connect</p>

            <div className="flex md:justify-end gap-3 mb-6">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center clip-corner transition-all hover:opacity-80"
                  style={{
                    background: 'rgba(31,158,92,0.1)',
                    border: '1px solid rgba(31,158,92,0.3)',
                    color: 'var(--green)',
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}

              <a
                href="mailto:info@tgaamun.org"
                className="w-10 h-10 flex items-center justify-center clip-corner transition-all hover:opacity-80"
                style={{
                  background: 'rgba(31,158,92,0.1)',
                  border: '1px solid rgba(31,158,92,0.3)',
                  color: 'var(--green)',
                }}
              >
                <Mail size={16} />
              </a>
            </div>

            <p className="text-sm font-mono" style={{ color: 'var(--muted)' }}>
              info@tgaamun.org
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(31,158,92,0.1)' }}
        >
          <p className="tag-label" style={{ color: 'var(--muted)' }}>
            © 2026 TGAA MUN — All rights reserved
          </p>

          <p className="tag-label" style={{ color: 'var(--muted)' }}>
            Student-run · Student-led · Student-owned
          </p>
        </div>

      </div>
    </footer>
  );
}