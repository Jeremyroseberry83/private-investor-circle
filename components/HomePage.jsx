import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  DisplayHeading, HighlightGrid, StatementBlock,
  PRIMARY, SECONDARY, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';

export default function HomePage({ onContactClick, onNavigate }) {
  return (
    <div>
      {/* HERO — a still, not video. Swap /public/images/hero.svg for a real
          photograph from a past gathering when one is cleared for use. */}
      <section
        className="relative w-full"
        style={{
          minHeight: '92vh',
          backgroundColor: INK,
          backgroundImage: 'url(/images/hero.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(14,58,68,0.92) 0%, rgba(14,58,68,0.62) 38%, rgba(14,58,68,0.42) 100%)'
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
            padding: '9rem 1.5rem 7rem'
          }}
        >
          <div style={{ maxWidth: 820 }}>
            <p
              className="mb-7"
              style={{
                color: SECONDARY,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.32em',
                textTransform: 'uppercase'
              }}
            >
              Private Gatherings · Galas · Capital Forums
            </p>

            <h1
              style={{
                fontSize: 'clamp(34px, 6vw, 62px)',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              Capital moves at the speed of{' '}
              <span style={{ color: SECONDARY, fontStyle: 'italic' }}>trust</span>.
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 19px)',
                color: 'rgba(255,255,255,0.86)',
                lineHeight: 1.7,
                marginTop: '1.75rem',
                maxWidth: 660,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Private Investor Circle is the gatherings practice of capital market strategists
              Jeremy Roseberry and Ran Gimeno. We put companies, capital and the people who
              connect them in the same room — deliberately small, deliberately curated.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '2.5rem'
              }}
            >
              <button
                onClick={onContactClick}
                style={{
                  padding: '15px 30px',
                  borderRadius: 999,
                  border: 'none',
                  background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_DEEP} 100%)`,
                  color: INK,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Request an invitation
              </button>
              <button
                onClick={() => onNavigate && onNavigate('gatherings')}
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
                See the gatherings
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
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
              Companies rarely fail to raise because the business was wrong. They fail because the
              right five people never sat down together — the operator with the story, the investor
              with the mandate, the advisor who has done this exact deal before.
            </p>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.85, marginBottom: '1.5rem' }}>
              That room does not assemble itself. It is built one relationship at a time, by people
              who have spent their careers on both sides of the table and who will not put their own
              name behind a table they would not sit at.
            </p>
            <p style={{ color: SLATE, fontSize: 17, lineHeight: 1.85, fontWeight: 600 }}>
              That is the whole practice. We build the room.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE HOST */}
      <HighlightGrid
        eyebrow="What we host"
        title="Three formats. One purpose."
        intro="Every gathering is designed around who needs to meet whom — the format follows from that, never the other way round."
        cards={[
          {
            title: 'Private dinners',
            body: 'Eight to twenty seats. One host company or one theme, a curated guest list, and a room quiet enough for a real conversation about numbers.'
          },
          {
            title: 'Capital forums',
            body: 'A half-day of structured presentations and unstructured hallway time, matching a small slate of companies to investors with a mandate that actually fits.'
          },
          {
            title: 'Galas & benefits',
            body: 'Larger, black-tie convenings built around a cause or a milestone — where the philanthropy is genuine and the relationships formed outlast the evening.'
          }
        ]}
      />

      {/* HOW WE WORK */}
      <StatementBlock
        lines={[
          'We do not sell tickets. We do not sell lists.',
          'Every seat in the room is there because someone decided it belonged there.'
        ]}
        title="Curated, hosted, and followed through."
        subtitle="Invitation → Introduction → Follow-through"
        cards={[
          {
            eyebrow: 'Before',
            lead: 'We build the guest list against the goal.',
            body: 'You tell us what a successful evening looks like. We work backwards from that to the names, and we make the asks ourselves.'
          },
          {
            eyebrow: 'During',
            lead: 'We host the room, not just book it.',
            body: 'Seating, sequencing, and the introductions that would not have happened on their own. Nobody stands alone holding a drink.'
          },
          {
            eyebrow: 'After',
            lead: 'The follow-up is the deliverable.',
            body: 'Warm handoffs within the week, a written record of who should speak to whom, and a standing relationship with everyone in the room.'
          }
        ]}
      />

      {/* TWO PATHS */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
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
              eyebrow: 'For companies',
              title: 'You are raising, or preparing to.',
              body: 'A gathering built around your story, in front of capital that already understands your sector — plus the honest read on whether you are ready for that room yet.',
              page: 'companies',
              accent: PRIMARY
            },
            {
              eyebrow: 'For capital & connectors',
              title: 'You are looking for the deal before it is a deck.',
              body: 'A seat at rooms we have already filtered, alongside operators, family offices and advisors we know personally. No mass invitations, ever.',
              page: 'companies',
              accent: SECONDARY_DEEP
            }
          ].map((card) => (
            <button
              key={card.eyebrow}
              onClick={() => onNavigate && onNavigate(card.page)}
              className="text-left rounded-2xl p-9 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: 'white',
                border: '1px solid #E7E2D9',
                borderTop: `3px solid ${card.accent}`,
                cursor: 'pointer'
              }}
            >
              <p
                className="font-bold uppercase mb-3"
                style={{ color: card.accent, fontSize: 11, letterSpacing: '0.2em' }}
              >
                {card.eyebrow}
              </p>
              <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: 19, lineHeight: 1.35 }}>
                {card.title}
              </h3>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>{card.body}</p>
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: card.accent }}
              >
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
          Invitations are extended, not requested.
        </h2>
        <p
          className="mx-auto mb-10"
          style={{ color: 'rgba(255,255,255,0.68)', fontSize: 16, lineHeight: 1.8, maxWidth: '54ch' }}
        >
          That said — if you believe you belong in one of these rooms, tell us who you are and what
          you are working on. We read every note personally.
        </p>
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
          style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_DEEP} 100%)`, color: INK }}
        >
          Request an invitation
          <ArrowRight size={16} />
        </button>
      </section>
    </div>
  );
}
