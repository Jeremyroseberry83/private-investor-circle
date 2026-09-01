import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Play } from 'lucide-react';
import {
  VideoHeader, Eyebrow, PRIMARY, SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
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
      'Delivered after the evening for your outreach'
    ]
  },
  {
    n: '04',
    title: 'Marketing',
    points: [
      'Professional photographer & videographer on-site',
      'Social coverage tagging your firm',
      'Branded photo & video assets delivered to you',
      'A final recap film of the evening'
    ]
  }
];

// Quotes are placeholders — replace with what each of them actually said.
// `video` is empty until you have a URL; the Watch button only renders once
// one is filled in, so nothing breaks in the meantime. Any URL works — Vimeo,
// YouTube, a file on this site.
const TESTIMONIALS = [
  {
    name: 'Joe Colura',
    firm: '4IR Group',
    quote: '[Placeholder — two or three sentences in Joe\u2019s own words. The most useful version names what the evening produced for 4IR, not how nice it was.]',
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

// Titles pulled from the Luma pages themselves. Add a new entry to put another
// event on the page — nothing else needs touching.
const PAST_EVENTS = [
  {
    title: 'Investor Day — Inside the Harvard/MIT Kendall Square Robotics & AI Deep Tech Ecosystem',
    place: 'Boston · September 17',
    url: 'https://luma.com/bostonsept17'
  },
  {
    title: 'Valois Salon: A Private Dinner in Boston',
    place: 'Boston',
    url: 'https://luma.com/privatedinnerboston'
  },
  {
    title: 'A Private Evening — Sunset on the Miami River',
    place: 'Miami · The Capital Grille private dining room',
    url: 'https://luma.com/kkyvdxzh'
  }
];

export default function EventsPage({ onNavigate, onContactClick }) {
  return (
    <div>
      <VideoHeader
        video="/videos/evening.mp4"
        poster="/images/band-evening.jpg"
        eyebrow="Private investor event"
        title="An evening with the advisors and allocators"
        accent="worth being in relationship with."
        subtitle="Your firm presents exclusively to a curated room of principals, family offices, wealth managers, and RIAs — real relationships, not a booth on a conference floor."
      />

      {/* A still here, not a clip — the header above already runs this
          footage and two loops of the same room competes with itself. */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: '16 / 9', backgroundColor: INK }}>
            <img src="/images/ballroom.jpg" alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <Eyebrow color={PRIMARY} className="mb-4">What this is</Eyebrow>
            <p className="mb-5" style={{ color: MUTED, fontSize: 17, lineHeight: 1.85 }}>
              A single firm presents its offering to a room we have built around it. Thirty to fifty
              principals, family offices, wealth managers and RIAs — people with the authority to
              act, not delegates sent to collect brochures.
            </p>
            <p className="mb-5" style={{ color: MUTED, fontSize: 17, lineHeight: 1.85 }}>
              Then dinner, and the part that actually matters: unhurried conversation with allocators
              who came because they were personally invited.
            </p>
            <p style={{ color: SLATE, fontSize: 17, lineHeight: 1.85, fontWeight: 600, fontStyle: 'italic' }}>
              Here, the entire room is yours for the evening — not just a booth and a few contacts at
              a conference.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THE EVENING DELIVERS */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <Eyebrow color={SECONDARY_DEEP} className="mb-10">What the evening delivers</Eyebrow>

          <div className="grid md:grid-cols-2 gap-x-14 gap-y-12">
            {DELIVERS.map((d) => (
              <div key={d.n}>
                <div
                  className="mb-3"
                  style={{
                    color: SECONDARY_DEEP,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
                  }}
                >
                  {d.n}
                </div>
                <h3 className="font-bold mb-5" style={{ color: SLATE, fontSize: 21 }}>
                  {d.title}
                </h3>
                <ul className="space-y-3.5">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex gap-3" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.65 }}>
                      <Check size={16} style={{ color: SECONDARY_DEEP, flexShrink: 0, marginTop: 3 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <Eyebrow color={SECONDARY} className="mb-4">From the hosts who have done this</Eyebrow>
            <h2
              className="text-white font-bold"
              style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', lineHeight: 1.14, letterSpacing: '-0.025em' }}
            >
              What the firms say afterwards.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-xl p-8 flex flex-col"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(216,195,165,0.28)' }}
              >
                <span aria-hidden="true" style={{ color: SECONDARY, fontSize: 34, lineHeight: 1, marginBottom: 14 }}>
                  &ldquo;
                </span>
                <blockquote
                  style={{ color: 'rgba(255,255,255,0.86)', fontSize: 15.5, lineHeight: 1.75, flexGrow: 1 }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 pt-6" style={{ borderTop: '1px solid rgba(216,195,165,0.24)' }}>
                  <div className="text-white font-bold" style={{ fontSize: 16 }}>{t.name}</div>
                  <div style={{ color: SECONDARY, fontSize: 13, marginTop: 2 }}>{t.firm}</div>
                  {t.video && (
                    <a
                      href={t.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm font-semibold"
                      style={{ color: SECONDARY }}
                    >
                      <Play size={13} fill={SECONDARY} strokeWidth={0} />
                      Watch
                    </a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow color={SECONDARY_DEEP} className="mb-4">Past events</Eyebrow>
            <h2
              className="font-bold mb-5"
              style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', lineHeight: 1.14, letterSpacing: '-0.025em' }}
            >
              Evenings we have hosted.
            </h2>
            <p style={{ color: MUTED, fontSize: 16.5, lineHeight: 1.8 }}>
              A sense of the rooms, the cities and the company they keep.
            </p>
          </div>

          <div style={{ borderTop: '1px solid #E7E2D9' }}>
            {PAST_EVENTS.map((e) => (
              <a
                key={e.url}
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-6 group"
                style={{ borderBottom: '1px solid #E7E2D9', padding: '24px 0' }}
              >
                <span>
                  <span className="block font-semibold" style={{ color: SLATE, fontSize: 17.5, lineHeight: 1.4 }}>
                    {e.title}
                  </span>
                  <span className="block mt-1.5" style={{ color: MUTED, fontSize: 14.5 }}>
                    {e.place}
                  </span>
                </span>
                <span
                  className="inline-flex items-center gap-1.5 flex-shrink-0 text-sm font-semibold"
                  style={{ color: SECONDARY_DEEP, marginTop: 3 }}
                >
                  View
                  <ArrowUpRight size={15} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-5xl mx-auto text-center">
          <Eyebrow color={SECONDARY} className="mb-6">Cities we host in</Eyebrow>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-4">
            {cities.map((city, i) => (
              <React.Fragment key={city}>
                {i > 0 && (
                  <span aria-hidden="true" style={{ color: SECONDARY, opacity: 0.5, fontSize: 15 }}>
                    ·
                  </span>
                )}
                <span
                  className="text-white"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 1.35rem)', fontWeight: 600, letterSpacing: '-0.01em' }}
                >
                  {city}
                </span>
              </React.Fragment>
            ))}
          </div>
          <p className="mx-auto mt-8" style={{ color: 'rgba(255,255,255,0.66)', fontSize: 15.5, lineHeight: 1.8, maxWidth: '58ch' }}>
            These are where we host most often. With enough lead time we have the flexibility to
            plan around a different city or a date that suits your firm.
          </p>
        </div>
      </section>

      {/* BEYOND THE INVESTOR EVENING */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Eyebrow color={PRIMARY} className="mb-4">Beyond the investor evening</Eyebrow>
            <h2
              className="font-bold mb-5"
              style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', lineHeight: 1.14, letterSpacing: '-0.025em' }}
            >
              The same room-building, other occasions.
            </h2>
            <p style={{ color: MUTED, fontSize: 16.5, lineHeight: 1.8 }}>
              The private investor evening is what we run most. The underlying craft — curating a
              guest list and hosting it properly — carries to other gatherings just as well.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Galas & benefits',
                body: 'Larger black-tie convenings around a cause or a milestone, where the philanthropy is genuine and the relationships outlast the evening.'
              },
              {
                title: 'Relational connecting',
                body: 'Introductions made deliberately and off-calendar, between people who should know each other well before either needs something.'
              },
              {
                title: 'Capital raising support',
                body: 'The room, the follow-up list and the warm handoffs that turn a good first conversation into a second one.'
              }
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-xl p-8"
                style={{ backgroundColor: 'white', border: '1px solid #E7E2D9', borderTop: `3px solid ${SECONDARY}` }}
              >
                <h4 className="font-bold mb-3" style={{ color: SLATE, fontSize: 17 }}>{c.title}</h4>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="py-16 md:py-28 px-6 text-center" style={{ backgroundColor: 'white' }}>
        <div className="max-w-3xl mx-auto">
          <Eyebrow color={SECONDARY_DEEP} className="mb-6">Next step</Eyebrow>
          <h2
            className="font-bold mb-5"
            style={{ color: SLATE, fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            We set a date.
          </h2>
          <p className="mx-auto mb-9" style={{ color: MUTED, fontSize: 16.5, lineHeight: 1.8, maxWidth: '54ch' }}>
            We keep dates earmarked across the cities above. Tell us which city and roughly when, and
            we will lock one in for your firm.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => onContactClick && onContactClick('Hosting a gathering', 'We would like to host a private investor evening. City and rough timing we have in mind: ')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
              style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
            >
              Ask about a date
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigate && onNavigate('foryou')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold"
              style={{ border: `1.5px solid ${SECONDARY_DEEP}`, color: SECONDARY_DEEP, background: 'transparent' }}
            >
              Is this right for my firm?
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
