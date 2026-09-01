import React from 'react';
import { Mail, Linkedin, Globe, ArrowRight } from 'lucide-react';
import {
  VideoHeader, Eyebrow, PRIMARY, SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';

function Person({ name, title, bio, photo, linkedin, website, websiteLabel, accent = SECONDARY_DEEP, objectPosition = 'center' }) {
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
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name}'s website`}
            className="inline-flex items-center justify-center rounded-full"
            style={{ width: 24, height: 24, color: accent, backgroundColor: 'rgba(0,0,0,0.05)', flexShrink: 0 }}
          >
            <Globe size={13} strokeWidth={2} />
          </a>
        )}
      </div>

      <p className="font-semibold uppercase" style={{ color: accent, fontSize: 11.5, letterSpacing: '0.16em' }}>
        {title}
      </p>
      {websiteLabel && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-1.5"
          style={{ color: MUTED, fontSize: 13.5, borderBottom: `1px solid ${accent}55` }}
        >
          {websiteLabel}
        </a>
      )}
      <div style={{ height: 16 }} />
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
            <Eyebrow color={PRIMARY} className="mb-5">Growing your capital footprint</Eyebrow>

            <p className="mb-6" style={{ color: MUTED, fontSize: 17, lineHeight: 1.8 }}>
              Ran and Jeremy have spent their careers in capital markets, and both careers taught a
              similar lesson: capital is not one thing. It is actually scaled in five areas — and
              they help companies grow all five, not only the one everybody counts.
            </p>

            <div style={{ borderTop: '1px solid #E7E2D9' }}>
              {[
                { n: '01', k: 'Relational Capital', v: 'Who will take the call — and vouch for you when you are not in the room.' },
                { n: '02', k: 'Socioeconomic Capital', v: 'The standing and access that money on its own does not buy.' },
                { n: '03', k: 'Time Capital', v: 'The years you do not spend looking for the introduction that was always one person away.' },
                { n: '04', k: 'Operational Capital', v: 'People who have already solved the thing in front of you, and will say how.' },
                { n: '05', k: 'Financial Capital', v: 'The cheque — which tends to arrive only after the other four are in place.' }
              ].map((c) => (
                <div
                  key={c.n}
                  className="flex gap-5"
                  style={{ borderBottom: '1px solid #E7E2D9', padding: '15px 0' }}
                >
                  <span
                    style={{
                      color: SECONDARY_DEEP,
                      fontSize: 12.5,
                      fontWeight: 700,
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                      paddingTop: 3
                    }}
                  >
                    {c.n}
                  </span>
                  <span>
                    <span className="block font-bold" style={{ color: SLATE, fontSize: 16.5 }}>{c.k}</span>
                    <span className="block mt-1" style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>{c.v}</span>
                  </span>
                </div>
              ))}
            </div>

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

          {/* Bios supplied by the principals — four paragraphs each, so the
              two columns now sit at roughly equal height. Keep them that way
              if either is edited. */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-14">
            <Person
              name="Ran Gimeno"
              title="Host · MBA, AIF®"
              photo="/images/team/ran.jpg"
              objectPosition="center 0%"
              linkedin="https://www.linkedin.com/in/rangimeno/"
              accent={PRIMARY}
              bio={[
                'Senior financial services executive with extensive experience leading national distribution, strategic partnerships, and business development across institutional asset management, retirement platforms, and alternative investments. A proven track record building relationships with RIAs, broker-dealers, family offices, and institutional investors across the United States, Canada, Latin America, and Europe.',
                'Former senior leader with global asset managers including AllianceBernstein, AMG, ING, and Raymond James Investment Management, with deep expertise in intermediary distribution, private markets, retirement investment solutions, and advisor engagement.',
                'A frequent speaker who has represented firms at national conferences, industry forums, and on media platforms including CNBC — known for building high-performing distribution teams and delivering investment solutions that support advisors and institutional investors.',
                'At Private Investor Circle he co-hosts every gathering: which allocators belong at a given table, what they need to see, and how a first conversation becomes a second one.'
              ]}
            />
            <Person
              name="Jeremy Roseberry"
              title="Host · Founder / Entrepreneur"
              photo="/images/team/jeremy.jpg"
              objectPosition="center 6%"
              linkedin="https://www.linkedin.com/in/jeremy-roseberry-8264891a1/"
              website="https://jeremyroseberry.com"
              websiteLabel="JeremyRoseberry.com"
              accent={SECONDARY_DEEP}
              bio={[
                'Jeremy brings nearly two decades of experience across private markets, real assets, and capital formation. Rooted in Palm Beach County — where he has invested and operated across real assets for decades — he has built his career at the intersection of relationships, market depth, and global reach.',
                'His background spans acquisitions, capital structuring, investment analysis, and advisory work across a range of alternative strategies. At Access Global, Jeremy serves as a trusted advisor and capital partner to a select group of founders, allocators, and sponsors.',
                'He focuses on identifying the right opportunities, structuring sound introductions, and building real relationships that endure well beyond transactions.',
                'At Private Investor Circle he co-hosts every gathering: what a firm needs to be ready for a room like this, how the offering should be presented in it, and what happens in the weeks that follow.'
              ]}
            />
          </div>
        </div>
      </section>

      {/* PRINCIPLES — champagne ground rather than another dark band. The page
          already opens dark and closes on ivory; a third tone here keeps the
          four rules from reading as more of the same. */}
      {/* Warm sand — deeper than BG ivory and clearly not white, so the band
          reads as its own surface without another dark section. */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: '#EFE4D2' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <Eyebrow color={SECONDARY_DEEP} className="mb-4">How we work</Eyebrow>
            <h2
              className="font-bold mb-5"
              style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
            >
              Four rules we do not bend.
            </h2>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8 }}>
              They cost us business regularly. They are also the only reason the rooms are worth
              being in.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                n: '01',
                title: 'We host. We do not broker.',
                body: 'We are a neutral host in the room. We convene and introduce. We are not brokers and we do not place securities. Any business that follows is settled directly between the parties, under their own counsel.'
              },
              {
                n: '02',
                title: 'Our invite list is never sold.',
                body: 'No sponsor tables, no paid seats, no attendee list circulated afterwards. If someone is in the room it is because they know us and belonged in it.'
              },
              {
                n: '03',
                title: 'We say “not now” out loud.',
                body: 'In capital markets timing is everything, and nothing is worse than a one-time event asked to carry a whole relationship. We work programmatically, over six to nine month cycles. An offering placed in front of allocators a quarter too early burns your IR process and the relationship with it. We would rather say not now than deliver a poor experience.'
              },
              {
                n: '04',
                title: 'The follow-through is the work.',
                body: 'We always ask what your follow-up plan is. Anyone can fill a room with people — the value shows up in the follow-up list and in what you do with it afterwards. You need to have a plan.'
              }
            ].map((c) => (
              <div
                key={c.n}
                className="rounded-2xl p-9 md:p-10 transition-transform hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderTop: `3px solid ${SECONDARY}`,
                  boxShadow: '0 1px 2px rgba(46,39,35,0.05), 0 12px 28px rgba(46,39,35,0.06)'
                }}
              >
                <div
                  className="mb-5"
                  style={{
                    color: SECONDARY,
                    fontSize: 34,
                    lineHeight: 1,
                    fontWeight: 700,
                    fontFamily: "'Playfair Display', Georgia, serif"
                  }}
                >
                  {c.n}
                </div>
                <h4 className="font-bold mb-3.5" style={{ color: SLATE, fontSize: 19, lineHeight: 1.3 }}>
                  {c.title}
                </h4>
                <p style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.75 }}>{c.body}</p>
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
          We would rather meet you early.
        </h2>
        <p className="mx-auto mb-9" style={{ color: MUTED, fontSize: 16, lineHeight: 1.8, maxWidth: '54ch' }}>
          Most of the introductions we are proudest of started as a conversation with nothing
          riding on it. If that sounds like the right order of things, say hello.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
            style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
          >
            <Mail size={17} />
            Say hello
          </button>
          <button
            onClick={() => onNavigate && onNavigate('events')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold"
            style={{ border: `1.5px solid ${SECONDARY_DEEP}`, color: SECONDARY_DEEP, background: 'transparent' }}
          >
            See how it works <ArrowRight size={15} />
          </button>
        </div>
      </section>
    </div>
  );
}
