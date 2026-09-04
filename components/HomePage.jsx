import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  DisplayHeading, CityList, Reveal, NAVY,
  SECONDARY, SECONDARY_DEEP, MUTED, INK, BG
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
            <h1
              style={{
                fontSize: 'clamp(30px, 5.2vw, 56px)',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.12,
                letterSpacing: '-0.02em'
              }}
            >
              Trusted relationships{' '}
              <span style={{ color: SECONDARY, fontStyle: 'italic' }}>in capital markets.</span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(12px, 1.5vw, 15px)',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.6,
                marginTop: '1.75rem',
                maxWidth: 680,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Curated rooms for causes, companies and capital.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              <button
                onClick={() => onNavigate && onNavigate('dates')}
                className="w-full sm:w-auto"
                style={{
                  padding: '15px 30px',
                  borderRadius: 999,
                  border: `1.5px solid ${NAVY}`,
                  backgroundColor: '#FFFFFF',
                  color: NAVY,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: `inset 0 0 0 3px #FFFFFF, inset 0 0 0 4px ${NAVY}59`
                }}
              >
                Available dates
              </button>
              <button
                onClick={() => onNavigate && onNavigate('events')}
                className="w-full sm:w-auto"
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
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
                What We Offer
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

      {/* CITIES — same block and treatment as the Events page, so the two
          pages state the reach identically. The names animate in; the note
          under them does the qualifying. */}
      <section
        className="py-14 md:py-20 px-6"
        style={{ backgroundColor: BG, borderTop: `1px solid ${NAVY}` }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="mb-7"
            style={{ color: SECONDARY_DEEP, fontSize: 11, fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase' }}
          >
            Cities we host in
          </p>
          <CityList items={cities} />
          <p className="mx-auto mt-8" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.8, maxWidth: '58ch' }}>
            These are where we host most often. With enough lead time we have the flexibility to
            plan around a different city or a date that suits your firm.
          </p>
        </div>
      </section>

      {/* THESIS */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <DisplayHeading
              eyebrow="What we do"
              light="The relational introduction is"
              bold="the whole asset."
              tone="secondary"
            />
          </Reveal>
          <Reveal delay={90}>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.85, marginBottom: '1.5rem' }}>
              Firms rarely stall because their deal was bad or their strategy was wrong. They stall
              because the right thirty people never sat down together — the allocator whose mandate
              already fits, the advisor whose clients would care, or the operator who has already
              solved their problem.
            </p>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.85 }}>
              That kind of room takes time to build. We have spent years getting to know the people
              in it, and we still make every invitation ourselves.
            </p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
