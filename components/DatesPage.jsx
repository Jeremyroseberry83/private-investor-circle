import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import {
  VideoHeader, Eyebrow,
  SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';
import { availableDates } from '../site.config';

export default function DatesPage({ onNavigate, onContactClick }) {
  // "Book now" opens the event intake form with the date and region already
  // filled in, so a request arrives saying which slot the firm actually wants.
  const book = (region, date) =>
    onContactClick(
      'Hosting a gathering',
      date
        ? `We would like to book ${date} — ${region}. About our firm and what we would present: `
        : 'We would like to host an evening. City and rough timing we have in mind: '
    );

  return (
    <div>
      <VideoHeader
        video="/videos/about.mp4"
        poster="/images/band-about.jpg"
        eyebrow="Private investor evenings"
        title="Available dates"
        accent="for your firm."
        subtitle="Ran and Jeremy host only a few evenings a month, so each room stays genuinely curated. These openings follow their own travel."
      />

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          {/* Scarcity is real here, not a tactic — say it plainly and once. */}
          <div
            className="rounded-xl px-7 py-6 mb-14"
            style={{ backgroundColor: '#F2EADE', borderLeft: `3px solid ${SECONDARY_DEEP}` }}
          >
            <p style={{ color: SLATE, fontSize: 16, lineHeight: 1.75, fontWeight: 600 }}>
              Several firms are requesting these dates.
            </p>
            <p className="mt-1.5" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.75 }}>
              September through December is being locked in now, on a first-come basis.
            </p>
          </div>

          {availableDates.map((group) => (
            <div key={group.region} className="mb-14">
              <Eyebrow color={SECONDARY_DEEP} className="mb-6">{group.region}</Eyebrow>

              <div style={{ borderTop: '1px solid #E7E2D9' }}>
                {group.dates.map((date) => (
                  <div
                    key={date}
                    className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3"
                    style={{ borderBottom: '1px solid #E7E2D9', padding: '18px 0' }}
                  >
                    <span className="font-semibold" style={{ color: SLATE, fontSize: 17 }}>
                      {date}
                    </span>
                    <button
                      onClick={() => book(group.region, date)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold"
                      style={{
                        background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`,
                        color: INK,
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Book now
                      <ArrowRight size={14} />
                    </button>
                  </div>
                ))}
              </div>

              {group.note && (
                <p className="mt-4" style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.7, fontStyle: 'italic' }}>
                  {group.note}
                </p>
              )}
            </div>
          ))}

          <p style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.8, fontStyle: 'italic' }}>
            These dates coincide with Ran&rsquo;s and Jeremy&rsquo;s own travel. With enough lead
            time we can plan around another date or city — and in South Florida or Southern
            California we can often move faster.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 text-center" style={{ backgroundColor: INK }}>
        <span
          aria-hidden="true"
          style={{ display: 'block', width: 46, height: 3, borderRadius: 2, backgroundColor: SECONDARY, margin: '0 auto 30px' }}
        />
        <h2
          className="text-white font-bold mb-6 mx-auto"
          style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', letterSpacing: '-0.025em', maxWidth: '22ch', lineHeight: 1.14 }}
        >
          None of these work?
        </h2>
        <p
          className="mx-auto mb-9"
          style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, lineHeight: 1.8, maxWidth: '52ch' }}
        >
          Tell us the city and roughly when, and we will build an evening around it.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => book(null, null)}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
            style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
          >
            <Calendar size={16} />
            Ask about another date
          </button>
          <button
            onClick={() => onNavigate && onNavigate('events')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold"
            style={{ border: '1.5px solid rgba(216,195,165,0.55)', color: SECONDARY, background: 'transparent' }}
          >
            What we offer
          </button>
        </div>
      </section>
    </div>
  );
}
