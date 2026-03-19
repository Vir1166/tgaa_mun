import { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'info@tgaamun.org', link: 'mailto:info@tgaamun.org' },
    { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: MapPin, title: 'Location', value: 'Convention Center, City', link: '#' },
  ];

  const subjects = ['General Inquiry', 'Registration Question', 'Committee Information', 'Sponsorship Opportunity', 'Media & Press', 'Other'];

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'var(--navy)',
    border: '1px solid rgba(31,158,92,0.2)',
    color: 'var(--cream)',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      {/* ── HEADER ── */}
      <section className="pt-32 pb-20 relative overflow-hidden hero-grid-bg" style={{ background: 'var(--navy)' }}>
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--green) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>We're Here to Help</p>
          <h1 className="font-display font-black text-6xl sm:text-8xl leading-none mb-8" style={{ color: 'var(--cream)' }}>
            Get in<br />
            <span className="italic" style={{ color: 'var(--green)' }}>Touch</span>
          </h1>
          <div className="h-px max-w-sm mb-6" style={{ background: 'rgba(31,158,92,0.4)' }} />
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            Have questions about TGAA MUN 2026? We're here to help. Reach out to our team and we'll get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO ── */}
      <section className="py-16" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="flex items-center gap-5 p-6 clip-corner transition-all group"
                style={{
                  background: 'var(--navy-card)',
                  border: '1px solid rgba(31,158,92,0.12)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(31,158,92,0.4)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(31,158,92,0.12)'}
              >
                <div
                  className="w-12 h-12 clip-corner flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(31,158,92,0.12)', color: 'var(--green)' }}
                >
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="tag-label mb-0.5" style={{ color: 'var(--muted)' }}>{item.title}</p>
                  <p className="font-semibold text-sm" style={{ color: 'var(--cream)' }}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + ASIDE ── */}
      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display font-bold text-3xl mb-3" style={{ color: 'var(--cream)' }}>
                Send Us a Message
              </h2>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--muted)' }}>
                Whether you have a question about registration, committees, logistics, or anything
                else, our team is ready to answer all your questions.
              </p>

              {status === 'success' && (
                <div
                  className="mb-6 p-4 clip-corner"
                  style={{ background: 'rgba(31,158,92,0.1)', border: '1px solid rgba(31,158,92,0.4)' }}
                >
                  <p className="text-sm font-semibold" style={{ color: 'var(--green)' }}>
                    ✓ Message sent! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'your.email@example.com' },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name}>
                    <label className="block tag-label mb-2" style={{ color: 'var(--muted)' }}>{label} *</label>
                    <input
                      type={type}
                      name={name}
                      value={(formData as any)[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      required
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--green)'}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(31,158,92,0.2)'}
                    />
                  </div>
                ))}

                <div>
                  <label className="block tag-label mb-2" style={{ color: 'var(--muted)' }}>Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, background: 'var(--navy)' }}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--green)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(31,158,92,0.2)'}
                  >
                    <option value="" style={{ background: 'var(--navy)' }}>Select a subject</option>
                    {subjects.map(s => (
                      <option key={s} value={s} style={{ background: 'var(--navy)' }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block tag-label mb-2" style={{ color: 'var(--muted)' }}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    required
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--green)'}
                    onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(31,158,92,0.2)'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-semibold clip-corner flex items-center justify-center gap-3 transition-all hover:opacity-90"
                  style={{
                    background: 'var(--green)',
                    color: 'white',
                    fontFamily: 'DM Mono, monospace',
                    letterSpacing: '0.05em',
                    fontSize: '0.8rem',
                  }}
                >
                  <Send size={15} /> SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Aside */}
            <div className="space-y-6">
              {/* Social */}
              <div
                className="p-8 clip-corner"
                style={{ background: 'var(--green-dark)' }}
              >
                <div className="absolute inset-0 hero-grid-bg opacity-10 pointer-events-none" />
                <h3 className="font-display font-bold text-xl text-white mb-3">Connect With Us</h3>
                <p className="text-sm mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Follow TGAA MUN on social media for updates, announcements, and behind-the-scenes content.
                </p>
                <div className="flex gap-3">
                  {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 clip-corner flex items-center justify-center transition-all hover:opacity-80"
                      style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Office hours */}
              <div
                className="p-8 clip-corner"
                style={{ background: 'var(--navy-card)', border: '1px solid rgba(31,158,92,0.12)' }}
              >
                <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>Office Hours</p>
                <div className="space-y-3">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center py-2" style={{ borderBottom: '1px solid rgba(31,158,92,0.08)' }}>
                      <span className="text-sm font-medium" style={{ color: 'var(--cream)' }}>{day}</span>
                      <span className="tag-label" style={{ color: 'var(--muted)' }}>{hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-4 leading-relaxed" style={{ color: 'var(--muted)' }}>
                  We typically respond within 24–48 hours during business days.
                </p>
              </div>

              {/* FAQ nudge */}
              <div
                className="p-6 clip-corner"
                style={{ background: 'rgba(31,158,92,0.06)', border: '1px solid rgba(31,158,92,0.2)' }}
              >
                <p className="tag-label mb-2" style={{ color: 'var(--green)' }}>Before You Write</p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  Check our FAQ section for answers to common questions about registration, logistics, and conference procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}