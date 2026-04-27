import { FileText, Download, BookOpen, Video } from 'lucide-react';

export default function Resources() {

  const documents = [
    {
      title: 'DISEC Study Guide',
      description: 'Comprehensive guide on regulating autonomous weapons systems',
      category: 'Background Guides',
      icon: FileText,
      link: 'https://docs.google.com/document/d/1T0ALwC2N4X1w4ZNoeTn_Redx-QEwNdG95ZAVTzLJaNA/edit?usp=sharing'
    },
    {
      title: 'UNSC Study Guide',
      description: 'Analysis of Middle Eastern conflicts and security challenges',
      category: 'Background Guides',
      icon: FileText,
      link: 'https://docs.google.com/document/d/1UxhaHyNzoyn2o2mwmbF9oRYoc78ZHU4gyL2LTmjqnGQ/edit?usp=sharing'
    },
    {
      title: 'HCCC Study Guide',
      description: 'Historical context and crisis briefing for Cuban Missile Crisis',
      category: 'Background Guides',
      icon: FileText,
      link: 'https://docs.google.com/document/d/1SjM4owuFVhNFZ05zY9pHhkOMis4-hH8rIwLaI0i5bzY/edit?usp=sharing'
    },
    {
      title: 'SOCHUM Study Guide',
      description: 'Digital rights, privacy, and surveillance in the modern era',
      category: 'Background Guides',
      icon: FileText,
      link: 'https://docs.google.com/document/d/16ntTMItwB2yt3xDBu5ot69A4JUB7cqGn/edit?usp=sharing&ouid=115829638213049318520&rtpof=true&sd=true'
    },
    {
      title: 'UNICEF Study Guide',
      description: 'Marine plastic pollution and environmental solutions',
      category: 'Background Guides',
      icon: FileText,
      link: 'https://docs.google.com/document/d/19so3VS3q4XVBkZU39wb4UONRA6xJKcxCjH0F1NTswAw/edit?usp=sharing'
    },
    {
      title: 'Rules of Procedure',
      description: 'Complete guide to parliamentary procedure and debate format',
      category: 'Conference Documents',
      icon: BookOpen,
      link: 'https://drive.google.com/file/d/XXXX/view'
    },
    {
      title: 'Position Paper Guide',
      description: 'How to write an effective position paper with examples',
      category: 'Conference Documents',
      icon: BookOpen,
      link: 'https://drive.google.com/file/d/XXXX/view'
    },
    {
      title: 'Delegate Handbook',
      description: 'Everything you need to know about TGAA MUN 2026',
      category: 'Conference Documents',
      icon: BookOpen,
      link: 'https://drive.google.com/file/d/XXXX/view'
    },
    {
      title: 'Research Guide',
      description: 'Best practices for researching your country and topic',
      category: 'Conference Documents',
      icon: BookOpen,
      link: 'https://drive.google.com/file/d/XXXX/view'
    },
  ];

  const videos = [
    { title: 'Introduction to MUN', description: 'Learn the basics of Model United Nations' },
    { title: 'Public Speaking Tips', description: 'Master the art of speaking in committee' },
    { title: 'Writing Position Papers', description: 'Step-by-step guide to crafting winning position papers' },
  ];

  const bgGuides = documents.filter((d) => d.category === 'Background Guides');
  const confDocs = documents.filter((d) => d.category === 'Conference Documents');

  const handleDownload = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      
      {/* ── HEADER ── */}
<section
  className="pt-32 pb-20 relative overflow-hidden hero-grid-bg"
  style={{
    backgroundImage: `url("/other_pics/Resources.jpeg")`, // paste image here
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
      Delegate<br />
      <span className="italic" style={{ color: 'var(--green)' }}>
        Resources
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
      Everything you need to prepare for an exceptional conference experience.
    </p>
  </div>
</section>

      {/* BACKGROUND GUIDES */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex flex-wrap justify-center gap-5 items-stretch">
            {bgGuides.map((doc, i) => (
              <div key={i} className="clip-corner transition-all group w-full sm:w-[48%] lg:w-[30%] flex min-h-[240px]"
                style={{ background: 'var(--navy-card)', border: '1px solid rgba(31,158,92,0.1)' }}>
                
                <div className="p-6 flex flex-col w-full h-full">
                  <div className="flex items-start justify-between mb-4">
                    <doc.icon size={20} style={{ color: 'var(--green)' }} />
                    <Download size={14} style={{ color: 'var(--muted)' }} />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--cream)' }}>
                      {doc.title}
                    </h3>
                    <p className="text-xs mb-4 flex-grow" style={{ color: 'var(--muted)' }}>
                      {doc.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDownload(doc.link)}
                    className="flex items-center gap-2 text-xs mt-auto"
                    style={{ color: 'var(--green)' }}
                  >
                    <Download size={12} /> DOWNLOAD PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFERENCE DOCS */}
      <section className="py-24" style={{ background: 'var(--navy)' }}>
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {confDocs.map((doc, i) => (
              <div key={i} className="p-6 clip-corner" style={{ background: 'var(--navy-card)' }}>
                <doc.icon size={18} style={{ color: 'var(--green)' }} className="mb-4" />
                <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--cream)' }}>
                  {doc.title}
                </h3>
                <p className="text-xs mb-4" style={{ color: 'var(--muted)' }}>
                  {doc.description}
                </p>

                <button
                  onClick={() => handleDownload(doc.link)}
                  className="text-xs flex items-center gap-2"
                  style={{ color: 'var(--green)' }}
                >
                  <Download size={12} /> DOWNLOAD
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}