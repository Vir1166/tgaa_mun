'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What is Model United Nations (MUN)?',
      answer:
        'Model United Nations is an academic simulation where delegates represent countries and debate solutions to global issues through diplomacy and negotiation.',
    },
    {
      question: 'Do I need prior MUN experience to participate?',
      answer:
        'No. The conference welcomes both first-time and experienced delegates.',
    },
    {
      question: 'What committees are being offered at the conference?',
      answer:
        'A full list of committees and agendas can be found under the Committees section of the website.',
    },
    {
      question: 'How will country and committee allotments be made?',
      answer:
        'Allotments will be released after registration based on delegate preferences and availability.',
    },
    {
      question: 'Can delegates request a specific country or portfolio?',
      answer:
        'Delegates may indicate preferences during registration, though final allotments remain at the discretion of the Secretariat.',
    },
    {
      question: 'Is a position paper mandatory?',
      answer:
        'Position paper requirements, deadlines, and submission guidelines will be specified in committee resources.',
    },
    {
      question: 'What is the dress code for the conference?',
      answer:
        'Delegates are expected to attend in formal business attire unless otherwise specified.',
    },
    {
      question: 'Are laptops and electronic devices allowed in committee?',
      answer:
        'Policies regarding electronics vary by committee and will be communicated prior to the conference.',
    },
    {
      question: 'What should delegates bring to the conference?',
      answer:
        'Delegates should carry research materials, stationery, identification, and any materials required by their committee.',
    },
    {
      question: 'How do moderated and unmoderated caucuses work?',
      answer:
        'Moderated caucuses involve structured debate, while unmoderated caucuses allow delegates to negotiate and draft solutions collaboratively.',
    },
    {
      question: 'How are resolutions drafted and passed?',
      answer:
        'Resolutions are drafted collaboratively during committee, debated, amended where applicable, and voted upon according to procedure.',
    },
    {
      question: 'Are pre-written resolutions allowed?',
      answer:
        'No. Resolutions must be drafted during committee in collaboration with other delegates.',
    },
    {
      question: 'How are delegates evaluated for awards?',
      answer:
        'Awards are generally based on research, diplomacy, participation, negotiation, and substantive contributions in committee.',
    },
    {
      question: 'Can delegates switch committees or portfolios after allotments are released?',
      answer:
        'Allotments are generally considered final unless exceptional circumstances arise.',
    },
    {
      question: 'What is the conference code of conduct?',
      answer:
        'All delegates are expected to maintain professionalism, respect decorum, and adhere to the conference’s code of conduct throughout the event.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--navy)' }}>
      
      {/* ── HEADER ── */}
      <section
        className="pt-32 pb-20 relative overflow-hidden hero-grid-bg"
        style={{
          backgroundImage: `url("/other_pics/FAQ.jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(10, 15, 30, 0.7)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="tag-label mb-4" style={{ color: 'var(--green)' }}>
            TGAAMUN 2.0
          </p>
          <h1
            className="font-display font-black text-6xl sm:text-8xl leading-none mb-8"
            style={{ color: 'var(--cream)' }}
          >
            Frequently<br />
            <span className="italic" style={{ color: 'var(--green)' }}>
              Asked Questions
            </span>
          </h1>
          <div
            className="h-px max-w-sm mb-6"
            style={{ background: 'rgba(31,158,92,0.4)' }}
          />
          <p className="text-lg max-w-2xl" style={{ color: 'var(--muted)' }}>
            Everything you need to know before stepping into committee.
          </p>
        </div>
      </section>

      {/* ── FAQ LIST ── */}
      <section className="py-24" style={{ background: 'var(--navy-mid)' }}>
        <div className="max-w-4xl mx-auto px-4 space-y-4">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="clip-corner transition-all"
              style={{
                background: 'var(--navy-card)',
                border: '1px solid rgba(31,158,92,0.1)',
              }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full text-left p-6 flex justify-between items-center"
              >
                <span
                  className="font-medium text-sm sm:text-base"
                  style={{ color: 'var(--cream)' }}
                >
                  {faq.question}
                </span>

                <span
                  className="text-xl transition-transform"
                  style={{
                    color: 'var(--green)',
                    transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="px-6 overflow-hidden transition-all"
                style={{
                  maxHeight: openIndex === i ? '200px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p
                  className="text-sm pb-6"
                  style={{ color: 'var(--muted)' }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}