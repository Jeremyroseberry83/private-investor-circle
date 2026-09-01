import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  DisplayHeading, HighlightGrid, PRIMARY, SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';
import { cities } from '../site.config';

export default function HomePage({ onContactClick, onNavigate }) {
  const [videoReady, setVideoReady] = React.useState(false);

  return (
    <div>
      {/* HERO — the poster paints immediately and the video crossfades in once
          it can actually play, so a slow connection sees a photograph rather
          than a black rectangle. */}
      <section
        className="relative w-full"
        style={{
          minHeight: '92vh',
          backgroundColor: INK,
          backgroundImage: 'url(/images/hero-poster.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          poster="/images/hero-poster.jpg"
          onPlaying={() => setVideoReady(true)}
          onLoadedData={(e) => { if (e.currentTarget.readyState >= 3) setVideoReady(true); }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: videoReady ? 1 : 0,
            transition: 'opacity 900ms ease-in-out'
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(22,19,17,0.97) 0%, rgba(22,19,17,0.88) 45%, rgba(22,19,17,0.78) 100%)'
          }}
        />

        <div
          style={{
            position: 'relative',
            minHeight: '92vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '9rem 1.5rem clamp(8rem, 15vw, 12rem)'
          }}
        >
          <div style={{ maxWidth: 880 }}>
            <p
              className="mb-7"
              style={{ color: SECONDARY, fontSize: 11, fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase' }}
            >
              Private Investor Event
            </p>

            <h1
              style={{
                fontSize: 'clamp(30px, 5.2vw, 56px)',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.12,
                letterSpacing: '-0.02em'
              }}
            >
              An evening with the advisors and allocators{' '}
              <span style={{ color: SECONDARY, fontStyle: 'italic' }}>worth being in relationship with.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.7,
                marginTop: '1.75rem',
                maxWidth: 680,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Your firm presents exclusively to a curated room of principals, family offices, wealth
              managers, and RIAs — real relationships, not a booth on a conference floor.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              <button
                onClick={onContactClick}
                style={{
                  padding: '15px 30px',
                  borderRadius: 999,
                  border: 'none',
                  background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`,
                  color: INK,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Ask about a date
              </button>
              <button
                onClick={() => onNavigate && onNavigate('evening')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '15px 30px',
                  borderRadius: 999,
                  border: '1.5px solid rgba(255,255,255,0.6)',
                  background: 'transparent',
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                See how the evening works
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Scoop — the curve is filled with a champagne-to-ivory gradient whose
            last stop is exactly BG, so the seam with the section below is
            invisible. A gold hairline rides the curve itself. Sits at
            bottom:-1 because sub-pixel rounding otherwise leaves a hair of
            video showing through. */}
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: -1,
            left: 0,
            right: 0,
            width: '100%',
            height: 'clamp(70px, 13vw, 200px)',
            display: 'block'
          }}
        >
          <defs>
            <linearGradient id="heroScoop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EFE4D2" />
              <stop offset="45%" stopColor="#F5EFE5" />
              <stop offset="100%" stopColor={BG} />
            </linearGradient>
          </defs>
          <path d="M0,200 L0,8 C360,150 1080,150 1440,8 L1440,200 Z" fill="url(#heroScoop)" />
          <path
            d="M0,8 C360,150 1080,150 1440,8"
            fill="none"
            stroke={SECONDARY}
            strokeWidth="2.5"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </section>

      {/* THESIS */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <DisplayHeading
            eyebrow="Why we convene"
            light="The introduction is"
            bold="the whole asset."
            tone="secondary"
          />
          <div>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.85, marginBottom: '1.5rem' }}>
              Firms rarely fail to raise because the offering was wrong. They fail because the right
              thirty people never sat down together — the principal with the mandate, the advisor
              with the client, the allocator who has funded this exact thing before.
            </p>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.85, marginBottom: '1.5rem' }}>
              That room does not assemble itself, and it will not be found on a conference floor. It
              is built one relationship at a time, by people who will not put their own name behind a
              table they would not sit at.
            </p>
            <p style={{ color: SLATE, fontSize: 17, lineHeight: 1.85, fontWeight: 600 }}>
              That is the whole practice. We build the room.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THE EVENING DELIVERS — condensed; the full four blocks live on
          the Evening page. */}
      <HighlightGrid
        eyebrow="What the evening delivers"
        title="One firm. One room. One evening."
        intro="No competing pitches, no expo hall, no panels — and a follow-up list in your hands afterwards."
        cards={[
          {
            title: 'The room is yours',
            body: 'One firm presents to 30–50 principals, family offices, wealth managers and RIAs, in a guest list we build around your target investor.'
          },
          {
            title: 'Direct access',
            body: 'The full attention of the room and real, relational conversation with the people who can actually move capital.'
          },
          {
            title: 'The follow-up list',
            body: 'Every attendee by name, firm and interest — plus warm introductions to anyone who would like to continue.'
          }
        ]}
      />

      {/* CITIES */}
      <section className="py-14 md:py-20 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="mb-7"
            style={{ color: SECONDARY_DEEP, fontSize: 11, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase' }}
          >
            Cities we host in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {cities.map((city, i) => (
              <React.Fragment key={city}>
                {i > 0 && (
                  <span aria-hidden="true" style={{ color: SECONDARY_DEEP, opacity: 0.55 }}>·</span>
                )}
                <span style={{ color: SLATE, fontSize: 'clamp(0.95rem, 2vw, 1.2rem)', fontWeight: 600 }}>
                  {city}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            className="font-bold"
            style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3.4vw, 2.5rem)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
          >
            Where do you sit at the table?
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            {
              eyebrow: 'For firms',
              title: 'You want the room to yourself for an evening.',
              body: 'Your offering, presented to allocators we have invited personally — and a follow-up list in your hands the week after.',
              accent: PRIMARY
            },
            {
              eyebrow: 'For advisors & allocators',
              title: 'You want the conversation, not the conference.',
              body: 'A seat at rooms we have already filtered, alongside principals, family offices and RIAs we know personally. Never a mass invitation.',
              accent: SECONDARY_DEEP
            }
          ].map((card) => (
            <button
              key={card.eyebrow}
              onClick={() => onNavigate && onNavigate('companies')}
              className="text-left rounded-2xl p-9 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: 'white',
                border: '1px solid #E7E2D9',
                borderTop: `3px solid ${card.accent}`,
                cursor: 'pointer'
              }}
            >
              <p className="font-bold uppercase mb-3" style={{ color: card.accent, fontSize: 11, letterSpacing: '0.2em' }}>
                {card.eyebrow}
              </p>
              <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: 19, lineHeight: 1.35 }}>
                {card.title}
              </h3>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>{card.body}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: card.accent }}>
                See how it works <ArrowRight size={14} />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-16 md:py-28 px-6 text-center" style={{ backgroundColor: INK }}>
        <span
          aria-hidden="true"
          style={{ display: 'block', width: 46, height: 3, borderRadius: 2, backgroundColor: SECONDARY, margin: '0 auto 34px' }}
        />
        <h2
          className="text-white font-bold mb-6 mx-auto"
          style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', letterSpacing: '-0.03em', maxWidth: '20ch', lineHeight: 1.12 }}
        >
          We set a date.
        </h2>
        <p
          className="mx-auto mb-10"
          style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, lineHeight: 1.8, maxWidth: '54ch' }}
        >
          We keep dates earmarked across the cities above. Tell us which one fits, and we will lock
          it in for your firm.
        </p>
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
          style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
        >
          Ask about a date
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
