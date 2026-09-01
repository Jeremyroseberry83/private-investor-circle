import React from 'react';
import { ArrowRight, ArrowUpRight, Calendar, Check, Mail } from 'lucide-react';
import { company } from '../site.config';
import {
  VideoHeader, Eyebrow, Reveal, GOLD, NAVY, NAVY_DEEP,
  PRIMARY, SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';

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
        accent="and curate the allocators in the seats."
        subtitle="Both start the same way: a conversation, in confidence, about what you are actually trying to do. No deck required for the first call."
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

      {/* THE HONEST VERSION — video runs the full block at low opacity under a
          heavy wash, so the copy stays the subject and the footage is texture. */}
      <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
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
          style={{ background: 'linear-gradient(180deg, rgba(22,19,17,0.86) 0%, rgba(22,19,17,0.92) 100%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <Eyebrow color={SECONDARY} className="mb-4">The honest version</Eyebrow>
          <h2
            className="text-white font-bold mb-6"
            style={{ fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
          >
            A booth is not a relationship.{' '}
            <span style={{ color: SECONDARY, fontStyle: 'italic' }}>It is a queue.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.76)', fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: '70ch' }}>
            Three things go wrong on a conference floor, and none of them are fixed by a bigger
            stand or a better giveaway.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {[
              {
                lead: 'You are one of forty',
                body: 'Competing pitches on either side, and an audience pacing itself across a hall. Nobody gives you their full attention because nobody can.'
              },
              {
                lead: 'The wrong badges',
                body: 'Conversations with people whose mandate, cheque size or authority never fit — polite exchanges that could not have ended in a yes.'
              },
              {
                lead: 'A list of strangers',
                body: 'Scanned badges with no context and no warmth. Interest cools in the two weeks nobody knew how to follow up.'
              }
            ].map((c) => (
              <div
                key={c.lead}
                className="rounded-xl p-7"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(216,195,165,0.26)' }}
              >
                <p className="text-white font-bold mb-2.5" style={{ fontSize: 16 }}>{c.lead}</p>
                <p style={{ color: 'rgba(255,255,255,0.74)', fontSize: 14.5, lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: '1px solid rgba(216,195,165,0.3)',
              borderBottom: '1px solid rgba(216,195,165,0.3)',
              padding: '2.5rem 0',
              textAlign: 'center'
            }}
          >
            <p
              className="text-white font-bold mx-auto mb-4"
              style={{ fontSize: 'clamp(1.3rem, 2.4vw, 1.85rem)', lineHeight: 1.35, maxWidth: '34ch' }}
            >
              Here, the entire room is yours — not just a booth and a few contacts at a conference.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15 }}>
              We host and introduce. Any business that follows is settled directly between you and
              the investor, under your own counsel.
            </p>
          </div>
        </div>
      </section>

      {/* THE EXCHANGE — two panels read as a trade rather than two lists:
          the left quiet and numbered (work you do), the right on the navy
          gradient (what comes back). The arrow between them carries the idea
          on desktop and is hidden on mobile, where the stack already implies
          the order. */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <Eyebrow color={SECONDARY_DEEP} className="mb-4">The exchange</Eyebrow>
              <h2
                className="font-bold"
                style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
              >
                What we need.{' '}
                <span style={{ color: SECONDARY_DEEP, fontStyle: 'italic' }}>What you receive.</span>
              </h2>
            </div>
          </Reveal>

          <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <Reveal>
              <div
                className="h-full rounded-2xl p-9 md:p-10"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E7E2D9' }}
              >
                <Eyebrow color={MUTED} className="mb-7">You provide</Eyebrow>
                <ul>
                  {[
                    'Your offering overview, emailed to us to review and diligence',
                    'Full details of the current offering and past performance',
                    'A clear understanding of your target investor, so we can build the list around it',
                    'The city and rough timing that suit your firm',
                    'A principal who will present in person',
                    'Materials that hold up to a sophisticated reader',
                    'Your company logo, website and copy, for marketing the gathering'
                  ].map((t, i) => (
                    <li
                      key={t}
                      className="flex gap-4"
                      style={{ padding: '13px 0', borderBottom: i === 6 ? 'none' : '1px solid #F0EBE3' }}
                    >
                      <span
                        style={{
                          color: SECONDARY_DEEP,
                          fontSize: 11.5,
                          fontWeight: 700,
                          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                          paddingTop: 4,
                          flexShrink: 0
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.65 }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Sits on the seam between the two panels at md+ only. */}
            <div
              aria-hidden="true"
              className="hidden md:flex"
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 2,
                width: 46,
                height: 46,
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: SECONDARY,
                color: NAVY_DEEP,
                boxShadow: '0 6px 18px rgba(23,38,69,0.22)'
              }}
            >
              <ArrowRight size={20} strokeWidth={2.2} />
            </div>

            <Reveal delay={110}>
              <div
                className="h-full rounded-2xl p-9 md:p-10"
                style={{
                  background: `linear-gradient(155deg, ${NAVY_DEEP} 0%, ${NAVY} 60%, #20365C 100%)`,
                  border: `1px solid ${GOLD}3D`
                }}
              >
                <Eyebrow color={SECONDARY} className="mb-7">You receive</Eyebrow>
                <ul>
                  {[
                    'A pre-event list, so you can market your offering ahead of the day and open next steps — coffee on the day, or a one-to-one afterwards',
                    'A curated room of 30–50 principals, family offices, wealth managers & RIAs',
                    'The full attention of that room — one firm presents, no competing pitches',
                    'A digital contact list of every attendee, with name, firm and interest',
                    'Warm introductions to anyone who would like to continue',
                    'Photographer and videographer on-site, with branded assets and a recap film'
                  ].map((t, i) => (
                    <li
                      key={t}
                      className="flex gap-4"
                      style={{ padding: '13px 0', borderBottom: i === 5 ? 'none' : '1px solid rgba(216,195,165,0.18)' }}
                    >
                      <Check size={17} style={{ color: SECONDARY, flexShrink: 0, marginTop: 3 }} />
                      <span style={{ color: 'rgba(255,255,255,0.86)', fontSize: 15.5, lineHeight: 1.65 }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
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
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
            style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
          >
            <Mail size={17} />
            Get in touch
          </button>
          <button
            onClick={() => onNavigate && onNavigate('dates')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold"
            style={{ border: '1.5px solid rgba(216,195,165,0.55)', color: SECONDARY, background: 'transparent' }}
          >
            <Calendar size={16} />
            See available dates
          </button>
          <a
            href={company.circleJoinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold"
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
