import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import {
  VideoHeader, Eyebrow,
  SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';
import { availableDates } from '../site.config';

export default function DatesPage({ onNavigate, onContactClick }) {
  const ask = (row) =>
    onContactClick(
      'Hosting a gathering',
      row
        ? `We would like to hold ${row.dates} in ${row.city}. About our firm: `
        : 'We would like to hold a date. City and rough timing we have in mind: '
    );

  return (
    <div>
      <VideoHeader
        video="/videos/about.mp4"
        poster="/images/band-about.jpg"
        eyebrow="Private investor evenings"
        title="Available dates"
        accent="for your firm."
        subtitle="Ran Gimeno and Jeremy Roseberry host private evenings — curated rooms of advisors, family offices and principals where a single firm presents, followed by real conversation and a warm follow-up list."
      />

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          <Eyebrow color={SECONDARY_DEEP} className="mb-8">Upcoming openings</Eyebrow>

          <div style={{ borderTop: '1px solid #E7E2D9' }}>
            {availableDates.map((row) => (
              <button
                key={`${row.dates}-${row.city}`}
                onClick={() => ask(row)}
                className="w-full flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-left group"
                style={{
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  // longhand after the shorthand reset, so the rule survives
                  borderBottom: '1px solid #E7E2D9',
                  cursor: 'pointer'
                }}
              >
                <span
                  className="font-bold"
                  style={{ color: SECONDARY_DEEP, fontSize: 16, minWidth: 150, letterSpacing: '0.01em' }}
                >
                  {row.dates}
                </span>
                <span className="font-semibold" style={{ color: SLATE, fontSize: 17.5, flexGrow: 1 }}>
                  {row.city}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: SECONDARY_DEEP }}
                >
                  Hold this date
                  <ArrowRight size={14} />
                </span>
              </button>
            ))}
          </div>

          <p className="mt-8" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.8, fontStyle: 'italic' }}>
            These dates and cities are a forecast of availability. With enough lead time we have the
            flexibility to plan around any date or city — and in South Florida or Southern California
            we can often move faster. Dates are held first-come.
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
            onClick={() => ask(null)}
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
