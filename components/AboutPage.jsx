import React from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import {
  PageTopBand, Eyebrow,
  PRIMARY, SECONDARY, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';

function Person({ name, title, bio, photo, linkedin, accent = SECONDARY_DEEP }) {
  return (
    <div>
      <div
        className="relative rounded-2xl overflow-hidden mb-6"
        style={{ aspectRatio: '1 / 1', backgroundColor: '#EDE8E0' }}
      >
        <img src={photo} alt={name} className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="flex items-center gap-2.5 mb-1">
        <h3 className="font-bold" style={{ color: SLATE, fontSize: 20 }}>{name}</h3>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="inline-flex items-center justify-center rounded-full"
            style={{ width: 24, height: 24, color: accent, backgroundColor: 'rgba(0,0,0,0.05)', flexShrink: 0 }}
          >
            <Linkedin size={13} strokeWidth={2} />
          </a>
        )}
      </div>

      <p className="font-semibold mb-4 uppercase" style={{ color: accent, fontSize: 11.5, letterSpacing: '0.16em' }}>
        {title}
      </p>
      {bio.map((p, i) => (
        <p key={i} style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 14 }}>{p}</p>
      ))}
    </div>
  );
}

export default function AboutPage({ onContactClick, onNavigate }) {
  return (
    <div>
      <PageTopBand image="/images/band-about.svg" />

      <section className="pt-16 pb-8 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow color={SECONDARY_DEEP} className="mb-4">About</Eyebrow>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', fontWeight: 700, color: SLATE, lineHeight: 1.22 }}>
            Two capital market strategists who kept being asked{' '}
            <span style={{ color: SECONDARY_DEEP, fontStyle: 'italic' }}>the same question</span>.
          </h1>
        </div>
      </section>

      {/* Origin */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4 / 3', backgroundColor: '#EDE8E0' }}
          >
            <img src="/images/origin.svg" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <Eyebrow color={PRIMARY} className="mb-4">Where this came from</Eyebrow>
            <p className="mb-5" style={{ color: MUTED, fontSize: 17, lineHeight: 1.8 }}>
              Jeremy Roseberry and Ran Gimeno spent their careers advising companies on capital —
              how to structure it, when to raise it, and who to raise it from. The same question kept
              arriving from both directions: <em>who should I be talking to?</em>
            </p>
            <p className="mb-5" style={{ color: MUTED, fontSize: 17, lineHeight: 1.8 }}>
              Founders wanted capital that understood their business. Investors wanted opportunities
              that had been looked at by someone they trusted before it reached their desk. Both were
              describing the same missing thing — not a platform or a database, but a room.
            </p>
            <p style={{ color: SLATE, fontSize: 17, lineHeight: 1.8, fontWeight: 600 }}>
              Private Investor Circle is that room, hosted deliberately.
            </p>
          </div>
        </div>
      </section>

      {/* Principals */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <h2
              className="font-bold"
              style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              The principals
            </h2>
            <p className="mt-5" style={{ color: MUTED, fontSize: 16, lineHeight: 1.8 }}>
              Every invitation carries one of our two names on it. That is the point — and the limit
              on how many gatherings we will host in a year.
            </p>
          </div>

          {/* TODO before launch: replace the [bracketed] lines with verified
              specifics — firms, sectors, years, deal experience. Everything
              outside the brackets is safe to keep as written. */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-14">
            <Person
              name="Jeremy Roseberry"
              title="Co-founder · Capital Market Strategist"
              photo="/images/team/jeremy.svg"
              linkedin="https://www.linkedin.com/"
              accent={PRIMARY}
              bio={[
                '[One or two sentences of verified background — firms, sectors, and the kind of capital work he is known for.]',
                'At Private Investor Circle he leads the capital side of the room: which investors belong at a given table, what they actually need to see, and how a first conversation becomes a second one.'
              ]}
            />
            <Person
              name="Ran Gimeno"
              title="Co-founder · Capital Market Strategist"
              photo="/images/team/ran.svg"
              linkedin="https://www.linkedin.com/"
              accent={SECONDARY_DEEP}
              bio={[
                '[One or two sentences of verified background — firms, sectors, and the kind of capital work he is known for.]',
                'At Private Investor Circle he leads the company side: what a business needs to be ready for a room like this, how the story should be told in it, and what happens in the weeks that follow.'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <Eyebrow color={SECONDARY} className="mb-4">How we work</Eyebrow>
            <h2
              className="text-white font-bold mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
            >
              Four rules we do not bend.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 17, lineHeight: 1.8 }}>
              They cost us business regularly. They are also the only reason the rooms are worth
              being in.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                n: '01',
                title: 'We host, we do not broker.',
                body: 'We convene and introduce. We are not a broker-dealer, we do not place securities, and we do not take a cut of a deal. Terms are settled between the parties, under their own counsel.'
              },
              {
                n: '02',
                title: 'The list is never sold.',
                body: 'No sponsor tables, no paid seats, no attendee list circulated afterwards. If someone is in the room it is because they belonged in it.'
              },
              {
                n: '03',
                title: 'We say "not yet" out loud.',
                body: 'A company put in front of capital a quarter too early burns the introduction and the relationship. We would rather lose the engagement than spend a room on it.'
              },
              {
                n: '04',
                title: 'The follow-through is the work.',
                body: 'Anyone can fill a ballroom. The value shows up in the two weeks afterwards, and that is the part we are accountable for.'
              }
            ].map((c) => (
              <div key={c.n} className="rounded-xl p-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.25)' }}>
                <div
                  className="mb-4"
                  style={{ color: SECONDARY, fontSize: 13, letterSpacing: '0.16em', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
                >
                  {c.n}
                </div>
                <h4 className="text-white font-bold mb-3" style={{ fontSize: 17.5 }}>{c.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, lineHeight: 1.75 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-28 px-6 text-center" style={{ backgroundColor: BG }}>
        <span
          aria-hidden="true"
          style={{ display: 'block', width: 46, height: 3, borderRadius: 2, backgroundColor: SECONDARY, margin: '0 auto 30px' }}
        />
        <h2
          className="font-bold mb-6 mx-auto"
          style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3.4vw, 2.4rem)', letterSpacing: '-0.03em', maxWidth: '22ch', lineHeight: 1.15 }}
        >
          Tell us who you are.
        </h2>
        <p className="mx-auto mb-9" style={{ color: MUTED, fontSize: 16, lineHeight: 1.8, maxWidth: '54ch' }}>
          Whether you are building something, funding something, or know exactly who should meet
          whom — we would like to know you before there is a reason to call.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
            style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_DEEP} 100%)`, color: INK }}
          >
            <Mail size={17} />
            Request an invitation
          </button>
          <button
            onClick={() => onNavigate && onNavigate('gatherings')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold"
            style={{ border: `1.5px solid ${SECONDARY_DEEP}`, color: SECONDARY_DEEP, background: 'transparent' }}
          >
            See the gatherings <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
