import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import {
  VideoHeader, Eyebrow, CountUp, Reveal, CityList, StaggerCheckList, GOLD, NAVY, NAVY_DEEP,
  PRIMARY, SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';
import { cities } from '../site.config';

// Straight from the Private Gathering Overview — four numbered blocks, in the
// same order, with the same bullets. Don't paraphrase these: they are how the
// offering is already described to prospects.
const DELIVERS = [
  {
    n: '01',
    title: 'The Room Is Yours',
    points: [
      'One firm presents — no competing pitches',
      'A curated room of 30–50 principals, family offices, wealth managers & RIAs',
      'We build the guest list around your target investor',
      'Held in bespoke restaurants, private clubs & high-rise suites'
    ]
  },
  {
    n: '02',
    title: 'Direct Access',
    points: [
      'The full attention of the room — no booth, no expo hall',
      'Real, relational conversation with allocators',
      'Time with the people who can actually move capital',
      'No panels, no noise'
    ]
  },
  {
    n: '03',
    title: 'The Follow-Up List',
    points: [
      'A digital contact list of every attendee',
      'Name, firm & interest for each',
      'Warm introductions to anyone who’d like to continue',
      'Delivered afterwards for your outreach'
    ]
  },
  {
    n: '04',
    title: 'Marketing',
    points: [
      'Professional photographer & videographer on-site',
      'Social coverage tagging your firm',
      'Branded photo & video assets delivered to you',
      'A final recap film of the gathering'
    ]
  }
];

// Kept, not rendered. The testimonials section is pulled from the page while
// the site is live because placeholder quotes attributed to named people are
// worse than no quotes at all. Fill these in and restore the section — the
// names, firms and the optional `video` field are all still here.
const TESTIMONIALS = [
  {
    name: 'Joe Colura',
    firm: '4IR Group',
    quote: '[Placeholder — two or three sentences in Joe\u2019s own words. The most useful version names what the gathering produced for 4IR, not how nice it was.]',
    video: ''
  },
  {
    name: 'Mauricio Alvarez',
    firm: 'OTG',
    quote: '[Placeholder — two or three sentences in Mauricio\u2019s own words. Specifics beat superlatives: who he met, what happened afterwards.]',
    video: ''
  },
  {
    name: 'Tom Blair',
    firm: 'Hudson Capital',
    quote: '[Placeholder — two or three sentences in Tom\u2019s own words. If he can compare it to a conference he has sponsored, that contrast does the selling.]',
    video: ''
  }
];

// Titles, descriptions, host firms and cover images all come from the Luma
// pages themselves rather than the URL slugs. Covers are copied into
// public/images/events/ rather than hotlinked, so the section keeps working if
// an event is ever unpublished.
//
// The cards are deliberately NOT links — a past guest list is more exposure
// than a public page should carry. `url` is kept only so the source is
// recorded and the links can be restored later.
const PAST_EVENTS = [
  {
    title: 'Investor Day — Harvard/MIT Kendall Square Robotics & AI',
    firm: '4IR Group',
    place: 'Boston',
    blurb: 'A private investor day for family offices and capital partners: lab tours across the Kendall Square robotics and AI ecosystem, direct meetings with founders, and dinner to close the day.',
    image: '/images/events/kendall-square.jpg',
    url: 'https://luma.com/bostonsept17'
  },
  {
    title: 'Valois Salon — A Private Dinner in Boston',
    firm: '4IR Group',
    place: 'Boston',
    blurb: 'Fifteen to twenty-five allocators — family offices, venture partners and institutional investors — over dinner, on frontier technology and where capital is actually going.',
    image: '/images/events/valois-salon.jpg',
    url: 'https://luma.com/privatedinnerboston'
  },
  {
    title: 'A Private Evening — Sunset on the Miami River',
    firm: 'OTG Asset Management',
    place: 'Miami · The Capital Grille',
    blurb: 'A private reception on the terrace: craft cocktails, curated cuisine, and Latin American investment opportunities discussed directly with company leadership.',
    image: '/images/events/miami-river.jpg',
    url: 'https://luma.com/kkyvdxzh'
  },
  {
    // No presenting firm on this one — Ran and Jeremy hosted the table
    // themselves, so the eyebrow says so rather than naming a client.
    title: 'A Private Dinner — Thursday in Nashville',
    firm: 'Hosted',
    place: 'Nashville, TN',
    blurb: 'A table of six to eight by invitation — founders, principals and friends of the Circle. No agenda beyond conversation and what each person is building.',
    image: '/images/events/nashville-dinner.jpg',
    url: 'https://luma.com/nashvilledinner'
  }
];

export default function EventsPage({ onNavigate, onContactClick }) {
  return (
    <div>
      <VideoHeader
        video="/videos/evening.mp4"
        poster="/images/band-evening.jpg"
        eyebrow="Private investor event"
        title="A capital gathering with the principals and advisors"
        accent="worth being in relationship with."
        subtitle="Only one company presents"
        subtitleCaps
        maxWidth={1160}
        titleSize="min(6vw, clamp(1.5rem, 3.4vw, 2.55rem))"
      />

      {/* PAST EVENTS — four cards across at lg, which is why this section runs
          to max-w-6xl while the rest of the page sits at 5xl. Narrower and the
          blurbs drop to about twenty-five characters a line. */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow color={SECONDARY_DEEP} className="mb-4">Recent gatherings</Eyebrow>
            <h2
              className="font-bold mb-5"
              style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', lineHeight: 1.14, letterSpacing: '-0.025em' }}
            >
              Firms we have hosted.
            </h2>
            <p style={{ color: MUTED, fontSize: 16.5, lineHeight: 1.8 }}>
              A sense of the rooms, the cities and the companies we have worked with.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {PAST_EVENTS.map((e) => (
              <div
                key={e.url}
                className="rounded-xl overflow-hidden flex flex-col"
                style={{ backgroundColor: 'white', border: '1px solid #E7E2D9' }}
              >
                <div style={{ aspectRatio: '1 / 1', backgroundColor: '#EDE8E0' }}>
                  <img
                    src={e.image}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col" style={{ flexGrow: 1 }}>
                  <p
                    className="font-bold uppercase mb-3"
                    style={{ color: SECONDARY_DEEP, fontSize: 10.5, letterSpacing: '0.2em' }}
                  >
                    {e.firm}
                  </p>
                  <h3 className="font-semibold mb-2" style={{ color: SLATE, fontSize: 17, lineHeight: 1.35 }}>
                    {e.title}
                  </h3>
                  <p className="mb-4" style={{ color: MUTED, fontSize: 13.5, letterSpacing: '0.02em' }}>
                    {e.place}
                  </p>
                  <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.7, flexGrow: 1 }}>{e.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE VALUE PROPOSITION — this is the page's argument, so it gets the
          weight: a dark ground, counters that animate in, and the four blocks
          staggered rather than dumped as four equal columns of text. */}
      <section
        className="py-16 md:py-28 px-6"
        style={{
          background: `linear-gradient(155deg, ${NAVY_DEEP} 0%, ${NAVY} 52%, #20365C 100%)`
        }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl">
              <Eyebrow color={SECONDARY} className="mb-4">What the gathering delivers</Eyebrow>
              <h2
                className="text-white font-bold mb-6"
                style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.8rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
              >
                One firm. One room.{' '}
                <span style={{ color: SECONDARY, fontStyle: 'italic' }}>Everyone&rsquo;s attention.</span>
              </h2>
            </div>
          </Reveal>

          {/* The numbers first — they make the argument before anyone reads a
              bullet, and each one is a claim a conference cannot match. */}
          <Reveal delay={80}>
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 my-14 py-12"
              style={{ borderTop: `1px solid ${GOLD}44`, borderBottom: `1px solid ${GOLD}44` }}
            >
              {[
                { end: 1, suffix: '', label: 'firm presenting — yours' },
                { pre: 'up to', end: 50, label: 'principals, family offices, wealth managers and RIAs' },
                { end: 0, suffix: '', label: 'competing pitches, booths or expo halls' },
                { end: 100, suffix: '%', label: 'of attendees on the list we hand you' }
              ].map((stat) => (
                <div key={stat.label}>
                  {/* A qualifier like "up to" set at numeral size reads as part
                      of the number and wrecks the row's rhythm — keep it small. */}
                  {stat.pre && (
                    <div
                      style={{
                        color: SECONDARY,
                        opacity: 0.75,
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        marginBottom: 6
                      }}
                    >
                      {stat.pre}
                    </div>
                  )}
                  <div
                    className="font-bold mb-3"
                    style={{
                      color: SECONDARY,
                      fontSize: 'clamp(2.4rem, 5.2vw, 3.6rem)',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      fontFamily: "'Playfair Display', Georgia, serif"
                    }}
                  >
                    <CountUp end={stat.end} suffix={stat.suffix || ''} />
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.66)', fontSize: 14, lineHeight: 1.6, maxWidth: '24ch' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
            {DELIVERS.map((d, i) => (
              <Reveal key={d.n} delay={120 + i * 90}>
                <div
                  className="h-full rounded-2xl p-8 md:p-9"
                  style={{
                    background: 'linear-gradient(160deg, #FFFFFF 0%, #F6F2EA 100%)',
                    border: `1px solid ${GOLD}3D`,
                    boxShadow: '0 16px 38px rgba(8,16,34,0.28)'
                  }}
                >
                  <div className="flex items-baseline gap-4 mb-5">
                    <span
                      style={{
                        color: SECONDARY_DEEP,
                        fontSize: 26,
                        fontWeight: 700,
                        lineHeight: 1,
                        fontFamily: "'Playfair Display', Georgia, serif"
                      }}
                    >
                      {d.n}
                    </span>
                    <h3 className="font-bold" style={{ color: SLATE, fontSize: 20, letterSpacing: '-0.01em' }}>
                      {d.title}
                    </h3>
                  </div>
                  <StaggerCheckList items={d.points} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow color={SECONDARY_DEEP} className="mb-6">Cities we host in</Eyebrow>
          <CityList items={cities} />
          <p className="mx-auto mt-8" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.8, maxWidth: '58ch' }}>
            These are where we host most often. With enough lead time we have the flexibility to
            plan around a different city or a date that suits your firm.
          </p>
        </div>
      </section>

      {/* THE FORMAT — a plain run of show does more for a prospective host
          than adjectives about the gathering ever could. */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '16 / 9', backgroundColor: INK }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              poster="/images/toast.jpg"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="/videos/dinner.mp4" type="video/mp4" />
            </video>
          </div>

          <div>
            <Eyebrow color={PRIMARY} className="mb-6">The format</Eyebrow>

            <div style={{ borderTop: '1px solid #E7E2D9' }}>
              {[
                { time: '6:30', label: 'Arrival, meet and greet' },
                { time: '7:15', label: 'The company presents' },
                { time: '8:00', label: 'Networking' },
                { time: '8:30', label: 'Close' }
              ].map((row) => (
                <div
                  key={row.time}
                  className="flex items-baseline gap-6"
                  style={{ borderBottom: '1px solid #E7E2D9', padding: '16px 0' }}
                >
                  <span
                    className="font-bold"
                    style={{
                      color: SECONDARY_DEEP,
                      fontSize: 15,
                      minWidth: 62,
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                      letterSpacing: '0.02em'
                    }}
                  >
                    {row.time}
                  </span>
                  <span className="font-semibold" style={{ color: SLATE, fontSize: 17 }}>
                    {row.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-7" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.75 }}>
              A typical running order. Times shift with the venue, the city, and whether we are hosting
              at midday or at night — the shape does not: one firm presents, and the rest is
              conversation.
            </p>

            <p className="mt-5" style={{ color: SLATE, fontSize: 17, lineHeight: 1.8, fontWeight: 600, fontStyle: 'italic' }}>
              Here, the entire room is yours — not just a booth and a few contacts at a conference.
            </p>
          </div>
        </div>
      </section>

      {/* The page's only close. It carries the dates route, which is not in
          the nav and would otherwise be unreachable from here. */}
      <section className="py-16 md:py-24 px-6 text-center" style={{ backgroundColor: BG }}>
        <Reveal>
          <span
            aria-hidden="true"
            style={{ display: 'block', width: 46, height: 3, borderRadius: 2, backgroundColor: SECONDARY, margin: '0 auto 30px' }}
          />
          <h2
            className="font-bold mb-6 mx-auto"
            style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3.4vw, 2.4rem)', letterSpacing: '-0.03em', maxWidth: '22ch', lineHeight: 1.15 }}
          >
            Tell us what you are working on.
          </h2>
          <p className="mx-auto mb-9" style={{ color: MUTED, fontSize: 16, lineHeight: 1.8, maxWidth: '54ch' }}>
            Some of the introductions we are proudest of began as a conversation with nothing
            riding on it — no timeline, no pitch. If you would like to talk it through, Ran or
            Jeremy will answer.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => onContactClick && onContactClick('Something else', '')}
              className="inline-flex justify-center items-center gap-2 sm:gap-2.5 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-bold whitespace-nowrap"
              style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
            >
              <Mail size={17} />
              Say hello
            </button>
            <button
              onClick={() => onNavigate && onNavigate('dates')}
              className="inline-flex justify-center items-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-semibold whitespace-nowrap"
              style={{
                border: `1.5px solid ${NAVY}`,
                color: NAVY,
                background: 'transparent',
                boxShadow: `inset 0 0 0 3px ${BG}, inset 0 0 0 4px ${NAVY}59`
              }}
            >
              Available dates <ArrowRight size={15} />
            </button>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
