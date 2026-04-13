import { useState } from 'react';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

export default function Contact() {

  const phoneNumbers = [
    "+91 88508 53711",
    "+91 98206 06900",
    "+91 99879 08191"
  ];

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyPhone = (index: number) => {
    navigator.clipboard.writeText(phoneNumbers[index]);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const getBg = (i: number) =>
    copiedIndex === i ? 'var(--navy-mid)' : 'var(--green-dark)';

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>

      {/* ── HEADER ── */}
<section
  className="pt-32 pb-20 relative overflow-hidden hero-grid-bg"
  style={{
    backgroundImage: `url("/other_pics/MUN.png")`, // paste image here
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
      TGAA MUN 2026
    </p>
    <h1
      className="font-display font-black text-6xl sm:text-8xl leading-none mb-8"
      style={{ color: 'var(--cream)' }}
    >
      Get in<br />
      <span className="italic" style={{ color: 'var(--green)' }}>
        Touch
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
      We're always here to help. Feel free to reach out anytime!
    </p>
  </div>
</section>
      {/* GRID + MAP */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 space-y-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[90px]">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tgaamun@chembur.tgaa.in"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full flex items-center gap-4 p-5 clip-corner"
              style={{ background: 'var(--green-dark)' }}
            >
              <Mail size={18} />
              <div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Email</p>
                <p className="text-sm" style={{ color: 'var(--cream)' }}>tgaamun@chembur.tgaa.in</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/tgaamunofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full flex items-center gap-4 p-5 clip-corner"
              style={{ background: 'var(--green-dark)' }}
            >
              <Instagram size={18} />
              <div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Instagram</p>
                <p className="text-sm" style={{ color: 'var(--cream)' }}>@tgaamunofficial</p>
              </div>
            </a>

            {/* Location */}
            <a
              href="google.com/maps/place/The+Green+Acres+Academy+Chembur+-+ICSE/@19.0537217,72.9106199,15z/data=!4m6!3m5!1s0x3be7c8a5fb1529ab:0x34207da999c81191!8m2!3d19.0526597!4d72.8925128!16s%2Fg%2F11bwfkmwrr?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full flex items-center gap-4 p-5 clip-corner"
              style={{ background: 'var(--green-dark)' }}
            >
              <MapPin size={18} />
              <div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Location</p>
                <p className="text-sm" style={{ color: 'var(--cream)' }}>TGAA - Chembur</p>
              </div>
            </a>

            {/* Phone 1 */}
            <div
              onClick={() => copyPhone(0)}
              className="h-full flex items-center gap-4 p-5 clip-corner cursor-pointer transition-colors duration-300"
              style={{ background: getBg(0) }}
            >
              <Phone size={18} />
              <div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Samaira Pimple —— Secretary General</p>
                <p className="text-sm" style={{ color: 'var(--cream)' }}>
                  {copiedIndex === 0 ? "Copied to clipboard" : phoneNumbers[0]}
                </p>
              </div>
            </div>

            {/* Phone 2 */}
            <div
              onClick={() => copyPhone(1)}
              className="h-full flex items-center gap-4 p-5 clip-corner cursor-pointer transition-colors duration-300"
              style={{ background: getBg(1) }}
            >
              <Phone size={18} />
              <div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Oas Maheshwari —— Deputy Secretary</p>
                <p className="text-sm" style={{ color: 'var(--cream)' }}>
                  {copiedIndex === 1 ? "Copied to clipboard" : phoneNumbers[1]}
                </p>
              </div>
            </div>

            {/* Phone 3 */}
            <div
              onClick={() => copyPhone(2)}
              className="h-full flex items-center gap-4 p-5 clip-corner cursor-pointer transition-colors duration-300"
              style={{ background: getBg(2) }}
            >
              <Phone size={18} />
              <div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>Liana Matthew —— Director General</p>
                <p className="text-sm" style={{ color: 'var(--cream)' }}>
                  {copiedIndex === 2 ? "Copied to clipboard" : phoneNumbers[2]}
                </p>
              </div>
            </div>

          </div>

          {/* MAP */}
          <div className="w-full clip-corner overflow-hidden" style={{ border: '1px solid rgba(31,158,92,0.2)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15084.910990325288!2d72.9106199!3d19.0537217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8a5fb1529ab%3A0x34207da999c81191!2sThe%20Green%20Acres%20Academy%20Chembur%20-%20ICSE!5e0!3m2!1sen!2sin!4v1775397259417!5m2!1sen!2sin"
              className="w-full h-[400px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

    </div>
  );
}