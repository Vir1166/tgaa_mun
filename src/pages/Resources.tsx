import { FileText, Download, BookOpen, Video } from 'lucide-react';

export default function Resources() {
  const documents = [
    { title: 'DISEC Background Guide', description: 'Comprehensive guide on regulating autonomous weapons systems', category: 'Background Guides', icon: FileText },
    { title: 'UNSC Background Guide', description: 'Analysis of Middle Eastern conflicts and security challenges', category: 'Background Guides', icon: FileText },
    { title: 'HCCC Background Guide', description: 'Historical context and crisis briefing for Cuban Missile Crisis', category: 'Background Guides', icon: FileText },
    { title: 'SOCHUM Background Guide', description: 'Digital rights, privacy, and surveillance in the modern era', category: 'Background Guides', icon: FileText },
    { title: 'UNICEF Background Guide', description: 'Marine plastic pollution and environmental solutions', category: 'Background Guides', icon: FileText },
    { title: 'Rules of Procedure', description: 'Complete guide to parliamentary procedure and debate format', category: 'Conference Documents', icon: BookOpen },
    { title: 'Position Paper Guide', description: 'How to write an effective position paper with examples', category: 'Conference Documents', icon: BookOpen },
    { title: 'Delegate Handbook', description: 'Everything you need to know about TGAA MUN 2026', category: 'Conference Documents', icon: BookOpen },
    { title: 'Research Guide', description: 'Best practices for researching your country and topic', category: 'Conference Documents', icon: BookOpen },
  ];

  const videos = [
    { title: 'Introduction to MUN', description: 'Learn the basics of Model United Nations' },
    { title: 'Public Speaking Tips', description: 'Master the art of speaking in committee' },
    { title: 'Writing Position Papers', description: 'Step-by-step guide to crafting winning position papers' },
  ];

  const bgGuides = documents.filter((d) => d.category === 'Background Guides');
  const confDocs = documents.filter((d) => d.category === 'Conference Documents');

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      
      {/* HEADER */}
      <section className="pt-32 pb-20 relative overflow-hidden hero-grid-bg">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--green) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

        <div className="max-w-7xl mx-auto px-4">
          <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>Prepare for Conference</p>
          <h1 className="font-display font-black text-6xl sm:text-8xl mb-8" style={{ color: 'var(--cream)' }}>
            Delegate<br /><span className="italic" style={{ color: 'var(--green)' }}>Resources</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
            Everything you need to prepare for an exceptional conference experience.
          </p>
        </div>
      </section>

      {/* BACKGROUND GUIDES */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-4">

          <div className="mb-12">
            <p className="tag-label mb-2" style={{ color: 'var(--green)' }}>Committee Preparation</p>
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: 'var(--cream)' }}>
              Background Guides
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-5 items-stretch">
            {bgGuides.map((doc, i) => (
              <div
                key={i}
                className="clip-corner transition-all group w-full sm:w-[48%] lg:w-[30%] flex min-h-[240px]"
                style={{
                  background: 'var(--navy-card)',
                  border: '1px solid rgba(31,158,92,0.1)',
                }}
              >
                <div className="p-6 flex flex-col w-full h-full">
                  <div className="flex items-start justify-between mb-4">
                    <doc.icon size={20} style={{ color: 'var(--green)' }} />
                    <Download size={14} style={{ color: 'var(--muted)' }} />
                  </div>

                  <div className="flex flex-col flex-grow">
                    <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--cream)' }}>
                      {doc.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-4 flex-grow" style={{ color: 'var(--muted)' }}>
                      {doc.description}
                    </p>
                  </div>

                  <button className="flex items-center gap-2 text-xs mt-auto" style={{ color: 'var(--green)' }}>
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
          <div className="mb-12">
            <p className="tag-label mb-2" style={{ color: 'var(--green)' }}>Essential Documents</p>
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: 'var(--cream)' }}>
              Conference Documents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {confDocs.map((doc, i) => (
              <div key={i} className="p-6 clip-corner transition-all" style={{ background: 'var(--navy-card)' }}>
                <doc.icon size={18} style={{ color: 'var(--green)' }} className="mb-4" />
                <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--cream)' }}>{doc.title}</h3>
                <p className="text-xs mb-4" style={{ color: 'var(--muted)' }}>{doc.description}</p>
                <button className="text-xs" style={{ color: 'var(--green)' }}>
                  <Download size={12} /> DOWNLOAD
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <p className="tag-label mb-2" style={{ color: 'var(--green)' }}>Learn the Craft</p>
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: 'var(--cream)' }}>
              Video Tutorials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <div key={i} className="clip-corner p-6" style={{ background: 'var(--navy-card)' }}>
                <h3 style={{ color: 'var(--cream)' }}>{video.title}</h3>
                <p style={{ color: 'var(--muted)' }}>{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: 'var(--navy)' }}>
        <h2 style={{ color: 'var(--cream)' }}>Need Additional Resources?</h2>
      </section>
    </div>
  );
}