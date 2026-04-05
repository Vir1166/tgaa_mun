import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'tgaamun@chembur.tgaa.in', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=tgaamun@chembur.tgaa.in' },
    { icon: Phone, title: 'Phone', value: '+1 (555) 123-4567', link: 'tel:+15551234567' },
    { icon: MapPin, title: 'Location', value: 'TGAA - Chembur', link: 'https://www.google.com/maps/place/The+Green+Acres+Academy+Chembur' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>

      {/* HEADER */}
      <section className="pt-32 pb-20 hero-grid-bg">
        <div className="max-w-7xl mx-auto px-4">
          <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>We're Here to Help</p>
          <h1 className="font-display font-black text-6xl sm:text-8xl mb-8" style={{ color: 'var(--cream)' }}>
            Get in<br />
            <span className="italic" style={{ color: 'var(--green)' }}>Touch</span>
          </h1>
        </div>
      </section>

      {/* GRID + MAP */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 space-y-10">

          {/* 2x3 GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

            {/* Contact cards */}
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full flex items-center gap-4 p-5 clip-corner"
                style={{ background: 'var(--navy-card)' }}
              >
                <item.icon size={18} />
                <div>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{item.title}</p>
                  <p className="text-sm" style={{ color: 'var(--cream)' }}>{item.value}</p>
                </div>
              </a>
            ))}

            {/* Social card */}
            <div className="h-full flex flex-col justify-center p-5 clip-corner" style={{ background: 'var(--green-dark)' }}>
              <h3 className="text-white text-sm mb-3">Connect</h3>
              <div className="flex gap-2">
                {[
                  { icon: Instagram, link: "https://www.instagram.com/tgaamunofficial/" },
                  { icon: Twitter, link: "https://twitter.com/yourpage" },
                  { icon: Linkedin, link: "https://linkedin.com/company/yourpage" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}
                  >
                    <item.icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Empty blocks */}
            <div className="h-full p-5 clip-corner" style={{ background: 'var(--navy-card)' }} />
            <div className="h-full p-5 clip-corner" style={{ background: 'var(--navy-card)' }} />

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