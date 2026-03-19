import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    grade: '',
    committee_preference: '',
    mun_experience: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const committees = [
    'DISEC - Regulation of Autonomous Weapons Systems',
    'UNSC - Preventing Escalation in the Middle East',
    'HCCC - Cuban Missile Crisis',
    'UNHRC - Digital Rights and Privacy',
    'UNEP - Combating Plastic Pollution',
    'WHO - Strengthening Global Pandemic Preparedness',
  ];

  const experienceLevels = [
    'First-time delegate (no prior MUN experience)',
    'Beginner (1-2 conferences)',
    'Intermediate (3-5 conferences)',
    'Advanced (6-10 conferences)',
    'Expert (10+ conferences)',
  ];

  const grades = ['9th Grade', '10th Grade', '11th Grade', '12th Grade'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setFormData({ name: '', email: '', school: '', grade: '', committee_preference: '', mun_experience: '' });
  };



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
          <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>Secure Your Spot</p>
          <h1 className="font-display font-black text-6xl sm:text-8xl leading-none mb-8" style={{ color: 'var(--cream)' }}>
            Register<br />
            <span className="italic" style={{ color: 'var(--green)' }}>Now</span>
          </h1>
          <div className="h-px max-w-sm mb-6" style={{ background: 'rgba(31,158,92,0.4)' }} />
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--muted)' }}>
            Secure your spot at the premier Model United Nations conference. Registration closes June 1, 2026.
          </p>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-10" style={{ background: 'var(--navy-mid)', borderBottom: '1px solid rgba(31,158,92,0.1)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-px" style={{ background: 'rgba(31,158,92,0.1)' }}>
            {[
              { label: 'Early Bird Fee', price: '$75', sub: 'Until April 30, 2026', highlight: true },
              { label: 'Regular Fee', price: '$95', sub: 'May 1 – June 1, 2026', highlight: false },
              { label: 'Group Discount', price: '10%', sub: 'For groups of 5+', highlight: false },
            ].map(({ label, price, sub, highlight }) => (
              <div
                key={label}
                className="p-6 text-center"
                style={{ background: 'var(--navy-mid)' }}
              >
                <p className="tag-label mb-2" style={{ color: 'var(--muted)' }}>{label}</p>
                <p
                  className="font-display font-black text-3xl mb-1"
                  style={{ color: highlight ? 'var(--green)' : 'var(--cream)' }}
                >
                  {price}
                </p>
                <p className="tag-label" style={{ color: 'var(--muted)' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="clip-corner overflow-hidden"
            style={{
              background: 'var(--navy-card)',
              border: '1px solid rgba(31,158,92,0.2)',
            }}
          >
            <div className="h-1" style={{ background: 'var(--green)' }} />

            <div className="p-8 md:p-12">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div
                    className="w-20 h-20 clip-corner flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(31,158,92,0.15)', border: '1px solid var(--green)' }}
                  >
                    <CheckCircle className="w-10 h-10" style={{ color: 'var(--green)' }} />
                  </div>
                  <h2 className="font-display font-bold text-3xl mb-4" style={{ color: 'var(--cream)' }}>
                    Registration Successful!
                  </h2>
                  <p className="mb-8 leading-relaxed" style={{ color: 'var(--muted)' }}>
                    Thank you for registering for TGAA MUN 2026. You will receive a confirmation email shortly with further details.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-3 font-semibold clip-corner transition-all hover:opacity-90"
                    style={{
                      background: 'var(--green)',
                      color: 'white',
                      fontFamily: 'DM Mono, monospace',
                      letterSpacing: '0.05em',
                      fontSize: '0.75rem',
                    }}
                  >
                    REGISTER ANOTHER DELEGATE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <p className="tag-label mb-2" style={{ color: 'var(--green)' }}>Application Form</p>
                  <h2 className="font-display font-bold text-3xl mb-8" style={{ color: 'var(--cream)' }}>
                    Delegate Information
                  </h2>

                  {status === 'error' && (
                    <div
                      className="mb-6 p-4 clip-corner flex items-start gap-3"
                      style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.3)' }}
                    >
                      <AlertCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#f87171' }} />
                      <p className="text-sm" style={{ color: '#f87171' }}>{errorMessage}</p>
                    </div>
                  )}

                  <div className="space-y-5">
                    {[
                      { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                      { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john.doe@school.edu' },
                      { label: 'School Name', name: 'school', type: 'text', placeholder: 'Springfield High School' },
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

                    {[
                      { label: 'Grade Level', name: 'grade', options: grades, placeholder: 'Select your grade' },
                      { label: 'Committee Preference', name: 'committee_preference', options: committees, placeholder: 'Select your preferred committee' },
                      { label: 'MUN Experience Level', name: 'mun_experience', options: experienceLevels, placeholder: 'Select your experience level' },
                    ].map(({ label, name, options, placeholder }) => (
                      <div key={name}>
                        <label className="block tag-label mb-2" style={{ color: 'var(--muted)' }}>{label} *</label>
                        <select
                          name={name}
                          value={(formData as any)[name]}
                          onChange={handleChange}
                          required
                          style={{ ...inputStyle }}
                          onFocus={e => (e.target as HTMLElement).style.borderColor = 'var(--green)'}
                          onBlur={e => (e.target as HTMLElement).style.borderColor = 'rgba(31,158,92,0.2)'}
                        >
                          <option value="" style={{ background: 'var(--navy)' }}>{placeholder}</option>
                          {options.map(o => (
                            <option key={o} value={o} style={{ background: 'var(--navy)' }}>{o}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(31,158,92,0.15)' }}>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-4 font-semibold clip-corner transition-all hover:opacity-90 disabled:opacity-50"
                      style={{
                        background: 'var(--green)',
                        color: 'white',
                        fontFamily: 'DM Mono, monospace',
                        letterSpacing: '0.05em',
                        fontSize: '0.8rem',
                        cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      }}
                    >
                      {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT REGISTRATION →'}
                    </button>
                    <p className="text-xs text-center mt-4" style={{ color: 'var(--muted)' }}>
                      By registering, you agree to our terms and conditions.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}