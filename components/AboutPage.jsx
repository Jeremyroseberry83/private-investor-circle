import React from 'react';
import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import {
  VideoHeader, Eyebrow, PRIMARY, SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';

function Person({ name, title, bio, photo, linkedin, accent = SECONDARY_DEEP, objectPosition = 'center' }) {
  // objectPosition pulls the crop window up the frame: a tall portrait in a
  // square card would otherwise be cropped chin-to-waistband. grayscale(1) is
  // on both photos so the pair reads as one commission rather than two shoots
  // — drop the filter to restore Ran's colour.
  return (
    <div>
      <div
        className="relative rounded-2xl overflow-hidden mb-6"
        style={{ aspectRatio: '1 / 1', backgroundColor: '#EDE8E0' }}
      >
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ objectPosition, filter: 'grayscale(1)' }}
        />
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
      <VideoHeader
        video="/videos/about.mp4"
        poster="/images/band-about.jpg"
        eyebrow="About"
        title="Two capital market strategists who kept being asked"
        accent="the same question."
      />

      {/* Origin */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4 / 3', backgroundColor: '#EDE8E0' }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              poster="/images/rooftop.jpg"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/videos/room.mp4" type="video/mp4" />
            </video>
          </div>
          <div>
            <Eyebrow color={PRIMARY} className="mb-4">Where this came from</Eyebrow>
            <p className="mb-5" style={{ color: MUTED, fontSize: 17, lineHeight: 1.8 }}>
              Ran Gimeno and Jeremy Roseberry spent their careers advising firms on capital —
              how to structure it, when to raise it, and who to raise it from. The same question kept
              arriving from both directions: <em>who should I be talking to?</em>
            </p>
            <p className="mb-5" style={{ color: MUTED, fontSize: 17, lineHeight: 1.8 }}>
              Firms wanted allocators who understood what they actually do. Allocators wanted to hear
              from someone vouched for before it reached their desk. Both were describing the same
              missing thing — not a platform or a database, but a room.
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

          {/* Bios supplied by the principals. Ran's runs roughly three times
              longer than Jeremy's, so the two columns sit unevenly — trim his
              for the web if that bothers you, but don't invent length for
              Jeremy's to match. */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-14">
            <Person
              name="Ran Gimeno"
              title="Host · MBA, AIF®"
              photo="/images/team/ran.jpg"
              objectPosition="center 15%"
              linkedin="https://www.linkedin.com/in/rangimeno/"
              accent={PRIMARY}
              bio={[
                'Senior financial services executive with extensive experience leading national distribution, strategic partnerships, and business development across institutional asset management, retirement platforms, and alternative investments. A proven track record building relationships with RIAs, broker-dealers, family offices, and institutional investors across the United States, Canada, Latin America, and Europe.',
                'Former senior leader with global asset managers including AllianceBernstein, AMG, ING, and Raymond James Investment Management, with deep expertise in intermediary distribution, private markets, retirement investment solutions, and advisor engagement.',
                'A frequent speaker who has represented firms at national conferences, industry forums, and on media platforms including CNBC — known for building high-performing distribution teams and delivering investment solutions that support advisors and institutional investors.',
                'At Private Investor Circle he co-hosts every evening: which allocators belong at a given table, what they need to see, and how a first conversation becomes a second one.'
              ]}
            />
            <Person
              name="Jeremy Roseberry"
              title="Host"
              photo="/images/team/jeremy.jpg"
              objectPosition="center 6%"
              linkedin="https://www.linkedin.com/in/jeremy-roseberry-8264891a1/"
              accent={SECONDARY_DEEP}
              bio={[
                'Nearly two decades in private markets, real assets, and capital formation — based in Palm Beach County, operating globally.',
                'He connects the right people to relational capital — the kind that moves through trust and mutual value over the long term.',
                'At Private Investor Circle he co-hosts every evening: what a firm needs to be ready for a room like this, how the offering should be presented in it, and what happens in the weeks that follow.'
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
                body: 'We convene and introduce. We are not a broker-dealer and we do not place securities. Any business that follows is settled directly between the parties, under their own counsel.'
              },
              {
                n: '02',
                title: 'The list is never sold.',
                body: 'No sponsor tables, no paid seats, no attendee list circulated afterwards. If someone is in the room it is because they belonged in it.'
              },
              {
                n: '03',
                title: 'We say "not yet" out loud.',
                body: 'A firm put in front of allocators a quarter too early burns the introduction and the relationship. We would rather lose the engagement than spend a room on it.'
              },
              {
                n: '04',
                title: 'The follow-through is the work.',
                body: 'Anyone can fill a ballroom. The value shows up in the follow-up list and the warm introductions afterwards, and that is the part we are accountable for.'
              }
            ].map((c) => (
              <div key={c.n} className="rounded-xl p-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(216,195,165,0.28)' }}>
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
            style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
          >
            <Mail size={17} />
            Request an invitation
          </button>
          <button
            onClick={() => onNavigate && onNavigate('events')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold"
            style={{ border: `1.5px solid ${SECONDARY_DEEP}`, color: SECONDARY_DEEP, background: 'transparent' }}
          >
            See how the evening works <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
