import React from 'react';
import { ArrowRight, ArrowUpRight, Calendar, Mail } from 'lucide-react';
import { company } from '../site.config';
import {
  VideoHeader, Eyebrow, Reveal, CountUp, useInView, GOLD, NAVY, NAVY_DEEP,
  PRIMARY, SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';


// Two explicit columns rather than a two-column grid: the grid flows row-wise,
// which would run the reading order across the page instead of down each side.
const VALUE_COLUMNS = [
  [
    {
      n: '01',
      t: 'Pre-event',
      d: 'The guest list ahead of the day, so you know who will be in the room before you walk into it.'
    },
    {
      n: '02',
      t: 'No other sponsors',
      d: 'The full attention of that room \u2014 one firm presents, and there are no competing pitches on either side of you.'
    },
    {
      n: '03',
      t: 'Curated list',
      d: 'Contact details for everyone who attended, with their permission \u2014 their firm, their interest, and their answers to the questions you chose for your follow-up.'
    }
  ],
  [
    {
      n: '04',
      t: 'Curated invites',
      d: 'A room of 30\u201350 principals, family offices, wealth managers and RIAs, each invited personally on an invitation branded to your firm.'
    },
    {
      n: '05',
      t: 'Warm introductions',
      d: 'Made in the room on the day \u2014 Ran and Jeremy walk you over, rather than emailing later.'
    },
    {
      n: '06',
      t: 'Marketing assets',
      d: 'Photographer and videographer on-site, with branded photo and video assets and a recap film you keep.'
    }
  ]
];

/**
 * One row of the value panel. Hover state lives here rather than in a
 * stylesheet so the tint, the medallion and the left rule all move together
 * on the same event — a single gesture, not three coincidences.
 */
function ValueItem({ item, shown, delay, last }) {
  const [hover, setHover] = React.useState(false);
  const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="px-0 py-5 sm:px-4"
      style={{
        borderRadius: 12,
        borderBottom: last ? '1px solid transparent' : '1px solid rgba(216,195,165,0.14)',
        backgroundColor: hover ? 'rgba(255,255,255,0.045)' : 'transparent',
        boxShadow: hover ? `inset 2px 0 0 ${SECONDARY}` : 'inset 0 0 0 0 transparent',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(14px)',
        transition:
          `opacity 620ms ${ease} ${delay}ms, transform 620ms ${ease} ${delay}ms,` +
          ' background-color 260ms ease, box-shadow 260ms ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 42,
            height: 42,
            borderRadius: 999,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: SECONDARY,
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: '0.02em',
            border: `1px solid rgba(216,195,165,${hover ? 0.55 : 0.3})`,
            backgroundColor: `rgba(216,195,165,${hover ? 0.16 : 0.07})`,
            transition: 'background-color 260ms ease, border-color 260ms ease'
          }}
        >
          {item.n}
        </span>
        <div
          style={{
            color: SECONDARY,
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase'
          }}
        >
          {item.t}
        </div>
      </div>
      {/* Indents under the label only where there is width to spare; on a
          phone it runs the full column instead of down a 24-character gutter. */}
      <div
        className="pl-0 sm:pl-[58px]"
        style={{ color: 'rgba(255,255,255,0.84)', fontSize: 15.5, lineHeight: 1.65 }}
      >
        {item.d}
      </div>
    </div>
  );
}

function ValuePanel() {
  const [ref, shown] = useInView(0.12);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl p-6 sm:p-9 md:p-12"
      style={{
        background: `linear-gradient(155deg, ${NAVY_DEEP} 0%, ${NAVY} 60%, #20365C 100%)`,
        border: `1px solid ${GOLD}3D`,
        boxShadow: '0 30px 70px rgba(8,16,34,0.28)',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)'
      }}
    >
      {/* Champagne glow off the top-right corner, and a lit top edge. Both are
          decoration only, so they sit behind the content and take no clicks. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(120% 80% at 88% 0%, rgba(216,195,165,0.16) 0%, rgba(216,195,165,0) 58%)'
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '8%',
          right: '8%',
          height: 1,
          pointerEvents: 'none',
          background: 'linear-gradient(90deg, rgba(216,195,165,0) 0%, rgba(216,195,165,0.55) 50%, rgba(216,195,165,0) 100%)'
        }}
      />

      {/* No grid gap: each column pads itself instead, so the hairline on the
          second one lands centred between them rather than hugging its edge.
          Both the padding and the rule are md-and-up — stacked, a vertical
          line would cut the list in half. */}
      <div className="relative grid md:grid-cols-2">
        {VALUE_COLUMNS.map((column, ci) => (
          <div
            key={ci}
            className={
              ci === 0
                ? 'md:pr-7 lg:pr-10'
                : 'md:pl-7 lg:pl-10 md:border-l md:border-[rgba(216,195,165,0.14)]'
            }
          >
            {column.map((item, i) => (
              <ValueItem
                key={item.n}
                item={item}
                shown={shown}
                delay={(ci * 3 + i) * 90}
                last={i === column.length - 1}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PlanYoursPage({ onNavigate, onContactClick }) {
  const forFirms = () =>
    onContactClick(
      'Company raising capital',
      'We are a firm interested in presenting at a private investor gathering. What we do and who we are trying to reach: '
    );
  const forAllocators = () =>
    onContactClick(
      'Investor or connector',
      'I am an advisor / allocator interested in attending. My firm and mandate: '
    );

  return (
    <div>
      <VideoHeader
        video="/videos/foryou.mp4"
        poster="/images/band-companies.jpg"
        eyebrow="Plan yours"
        title="We work with the firm presenting"
        accent="and curate the allocators attending."
        subtitle="Both start the same way: a conversation"
        subtitleCaps
      />

      {/* Two tracks */}
      <section className="pt-6 pb-16 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-9 md:p-10" style={{ backgroundColor: 'white', border: '1px solid #E7E2D9', borderTop: `4px solid ${PRIMARY}` }}>
            <Eyebrow color={PRIMARY} className="mb-3">For firms</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: 19, lineHeight: 1.35 }}>
              You want the room to yourself.
            </h3>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
              One firm presents — yours. We build the guest list around your target investor, host
              the gathering, and hand you the follow-up list afterwards. We will also tell you plainly
              if we think the room would be wasted on you right now.
            </p>
            <ul className="space-y-3 mb-7">
              {[
                'A defined offering and a clear target investor profile',
                'A principal who will present in person, not a delegate',
                'Materials that survive a sophisticated reader — numbers included'
              ].map((t) => (
                <li key={t} className="flex gap-3" style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.65 }}>
                  <span style={{ color: PRIMARY, flexShrink: 0 }}>›</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <button
                onClick={() => onNavigate && onNavigate('dates')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold"
                style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK, border: 'none', cursor: 'pointer' }}
              >
                <Calendar size={15} />
                See available dates
              </button>
              <button
                onClick={forFirms}
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: PRIMARY, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                or start a conversation <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div className="rounded-2xl p-9 md:p-10" style={{ backgroundColor: '#F2EADE', borderTop: `4px solid ${SECONDARY}` }}>
            <Eyebrow color={SECONDARY_DEEP} className="mb-3">For advisors &amp; allocators</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: 19, lineHeight: 1.35 }}>
              You want the conversation, not the conference.
            </h3>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
              A gathering with one firm worth hearing, a room of peers worth knowing, and none of the
              expo-hall noise. You will never receive a mass invitation from us, and your name will
              never appear on a circulated attendee list without your say-so.
            </p>
            <ul className="space-y-3 mb-7">
              {[
                'Principals, family offices, wealth managers and RIAs',
                'Allocators with a defined mandate and the authority to act',
                'Advisors who bring their best clients, not their pitch'
              ].map((t) => (
                <li key={t} className="flex gap-3" style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.65 }}>
                  <span style={{ color: SECONDARY_DEEP, flexShrink: 0 }}>›</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={company.circleJoinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold"
                style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
              >
                Join the Circle
                <ArrowUpRight size={15} />
              </a>
              <button
                onClick={forAllocators}
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: SECONDARY_DEEP, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                or introduce yourself <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* THE QUOTE — one line, the darkest surface on the page. It states the
          claim; the block after it argues for it. */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ background: 'linear-gradient(155deg, #09121F 0%, #101C33 100%)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span
              aria-hidden="true"
              style={{ display: 'block', width: 46, height: 3, borderRadius: 2, backgroundColor: SECONDARY, margin: '0 auto 30px' }}
            />
            <p
              className="font-display text-white"
              style={{ fontSize: 'clamp(1.6rem, 3.6vw, 2.7rem)', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em' }}
            >
              Here, the entire room is yours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* THE HONEST VERSION — video runs the full block at low opacity under a
          heavy wash, so the copy stays the subject and the footage is texture. */}
      <section className="relative overflow-hidden" style={{ backgroundColor: NAVY_DEEP }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          poster="/images/band-companies.jpg"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.22
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(15,27,51,0.86) 0%, rgba(23,38,69,0.93) 100%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <Eyebrow color={SECONDARY} className="mb-4">Compared to a conference</Eyebrow>
          <h2
            className="text-white font-bold mb-6"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
          >
            A booth is not a relationship.{' '}
            <span style={{ color: SECONDARY, fontStyle: 'italic' }}>It is a queue.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.76)', fontSize: 16, lineHeight: 1.8, marginBottom: 18, maxWidth: '70ch' }}>
            Conferences earn their place. They are top of funnel — broad exposure, brand presence,
            volume — and every firm looking to increase its distribution footprint or raise capital
            should be doing some of that.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.76)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: '70ch' }}>
            What a conference floor is not specifically built for is the follow-up — the
            conversation that comes after. Three things go wrong there, and none of them are fixed
            by a bigger stand or a better giveaway.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {[
              {
                lead: 'You are one of twenty-five',
                ticker: true,
                body: 'Sponsors competing for space on the same floor, with pitches on either side of you and an audience pacing itself across a hall. Nobody gives you their full attention because nobody\u00A0can.'
              },
              {
                lead: 'Wrong connections',
                body: 'Not a failing of the format — a conference is built for broad exposure, so the room is wide by design. You meet good people whose role, mandate, check size or authority never lines up with what you are raising. Pleasant conversations that could not have ended in a yes, and rarely the return you\u00A0sponsored\u00A0for.'
              },
              {
                lead: 'A list of service providers',
                body: 'Most of the hall is selling something too. On a good day you meet one to three real investors — and afterwards you are cold-emailing a list of names with no context and no warmth. Interest cools in the two weeks nobody knew how to follow up.'
              }
            ].map((c, i) => (
              <Reveal key={c.lead} delay={i * 90}>
                <div
                  className="h-full rounded-xl p-7"
                  style={{
                    background: 'linear-gradient(160deg, #FFFFFF 0%, #F6F2EA 100%)',
                    border: `1px solid ${GOLD}3D`,
                    boxShadow: '0 16px 38px rgba(8,16,34,0.28)'
                  }}
                >
                  {/* The ratio is the argument for this card — show it, don't
                      just assert it in the prose underneath. */}
                  {c.ticker && (
                    <div className="flex items-baseline gap-2.5 mb-4">
                      <span
                        style={{
                          color: SECONDARY_DEEP,
                          fontSize: 40,
                          fontWeight: 700,
                          lineHeight: 1,
                          fontFamily: "'Playfair Display', Georgia, serif"
                        }}
                      >
                        1
                      </span>
                      <span style={{ color: MUTED, opacity: 0.5, fontSize: 24, lineHeight: 1 }}>/</span>
                      <span
                        style={{
                          color: SECONDARY_DEEP,
                          fontSize: 40,
                          fontWeight: 700,
                          lineHeight: 1,
                          fontFamily: "'Playfair Display', Georgia, serif"
                        }}
                      >
                        <CountUp end={25} suffix="+" duration={1800} />
                      </span>
                      <span
                        style={{
                          color: MUTED,
                          fontSize: 11.5,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          marginLeft: 4
                        }}
                      >
                        sponsors
                      </span>
                    </div>
                  )}
                  <p className="font-bold mb-2.5" style={{ color: SLATE, fontSize: 16 }}>{c.lead}</p>
                  <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.7 }}>{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* THE VALUE — one panel, not two. An exchange framing led with what the
          firm has to hand over; this leads with what it gets. What we need is
          answered in the FAQ, where a prospect looks for it rather than being
          shown it before they have decided anything.

          The panel is the loudest navy on the site, so it earns some depth:
          a lit top edge, a champagne glow off the top-right corner, serif
          numerals in the same face the guardrails and the 1/25+ ticker use,
          and a stagger that runs DOWN each column rather than across. */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <Eyebrow color={SECONDARY_DEEP} className="mb-4">The value</Eyebrow>
              <h2
                className="font-bold"
                style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
              >
                What you receive.
              </h2>
              <p className="mt-5" style={{ color: MUTED, fontSize: 16.5, lineHeight: 1.8, maxWidth: '58ch' }}>
                Every gathering includes all six. Nothing here is an upgrade or an add-on.
              </p>
            </div>
          </Reveal>

          <ValuePanel />
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 md:py-28 px-6 text-center" style={{ backgroundColor: INK }}>
        <span
          aria-hidden="true"
          style={{ display: 'block', width: 46, height: 3, borderRadius: 2, backgroundColor: SECONDARY, margin: '0 auto 34px' }}
        />
        <h2
          className="text-white font-bold mb-10 mx-auto"
          style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', letterSpacing: '-0.03em', maxWidth: '20ch', lineHeight: 1.12 }}
        >
          Let's start the conversation.
        </h2>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={forFirms}
            className="inline-flex justify-center items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold w-full sm:w-auto"
            style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
          >
            <Mail size={17} />
            Get in touch
          </button>
          <button
            onClick={() => onNavigate && onNavigate('dates')}
            className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold w-full sm:w-auto"
            style={{ border: '1.5px solid rgba(216,195,165,0.55)', color: SECONDARY, background: 'transparent' }}
          >
            <Calendar size={16} />
            See available dates
          </button>
          <a
            href={company.circleJoinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold w-full sm:w-auto"
            style={{ border: '1.5px solid rgba(216,195,165,0.55)', color: SECONDARY }}
          >
            Join the Circle
            <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
    </div>
  );
}
