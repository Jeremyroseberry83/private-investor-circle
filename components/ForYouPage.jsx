import React from 'react';
import { ArrowRight, Check, Mail } from 'lucide-react';
import {
  VideoHeader, Eyebrow, PRIMARY, SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';

export default function ForYouPage({ onContactClick }) {
  const forFirms = () =>
    onContactClick(
      'Company raising capital',
      'We are a firm interested in presenting at a private investor evening. What we do and who we are trying to reach: '
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
        eyebrow="Two sides of the room"
        title="We work with the firm presenting"
        accent="and the allocators in the seats."
        subtitle="Both start the same way: a conversation, in confidence, about what you are actually trying to do. No deck required for the first call."
      />

      {/* Two tracks */}
      <section className="pt-6 pb-16 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-9 md:p-10" style={{ backgroundColor: 'white', border: '1px solid #E7E2D9', borderTop: `4px solid ${PRIMARY}` }}>
            <Eyebrow color={PRIMARY} className="mb-3">For firms</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: 19, lineHeight: 1.35 }}>
              You want the room to yourself for an evening.
            </h3>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
              One firm presents — yours. We build the guest list around your target investor, host
              the evening, and hand you the follow-up list afterwards. We will also tell you plainly
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
            <button
              onClick={forFirms}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: PRIMARY, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Start a conversation <ArrowRight size={14} />
            </button>
          </div>

          <div className="rounded-2xl p-9 md:p-10" style={{ backgroundColor: '#F2EADE', borderTop: `4px solid ${SECONDARY}` }}>
            <Eyebrow color={SECONDARY_DEEP} className="mb-3">For advisors &amp; allocators</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: 19, lineHeight: 1.35 }}>
              You want the conversation, not the conference.
            </h3>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
              An evening with one firm worth hearing, a room of peers worth knowing, and none of the
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
            <button
              onClick={forAllocators}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: SECONDARY_DEEP, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Introduce yourself <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Why the conference floor fails */}
      <section className="pt-4 pb-16 md:pb-24 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <Eyebrow color={SECONDARY_DEEP} className="mb-4">The honest version</Eyebrow>
          <h2
            className="font-bold mb-6"
            style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
          >
            A booth is not a relationship.{' '}
            <span style={{ color: SECONDARY_DEEP, fontStyle: 'italic' }}>It is a queue.</span>
          </h2>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: '70ch' }}>
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
              <div key={c.lead} className="rounded-xl p-7" style={{ backgroundColor: BG, border: '1px solid #E7E2D9' }}>
                <p className="font-bold mb-2.5" style={{ color: SLATE, fontSize: 16 }}>{c.lead}</p>
                <p style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: '1px solid #E7E2D9',
              borderBottom: '1px solid #E7E2D9',
              padding: '2.5rem 0',
              textAlign: 'center',
              marginBottom: 48
            }}
          >
            <p
              className="font-bold mx-auto mb-4"
              style={{ color: SLATE, fontSize: 'clamp(1.3rem, 2.4vw, 1.85rem)', lineHeight: 1.35, maxWidth: '34ch' }}
            >
              Here, the entire room is yours for the evening — not just a booth and a few contacts at
              a conference.
            </p>
            <p style={{ color: MUTED, fontSize: 15 }}>
              We host and introduce. Any business that follows is settled directly between you and
              the investor, under your own counsel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-9 md:p-10" style={{ border: '1px solid #E7E2D9', backgroundColor: 'white' }}>
              <Eyebrow color={PRIMARY} className="mb-6">What we need from you</Eyebrow>
              <ul className="space-y-4">
                {[
                  'A clear picture of your target investor, so we can build the list around it',
                  'The city and rough timing that suit your firm',
                  'A principal who will present in person',
                  'Materials that hold up to a sophisticated reader',
                  'Names you already know, so we do not duplicate your own network'
                ].map((t) => (
                  <li key={t} className="flex gap-3" style={{ color: MUTED, fontSize: 15, lineHeight: 1.65 }}>
                    <span style={{ color: MUTED, flexShrink: 0 }}>›</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-9 md:p-10" style={{ backgroundColor: '#F2EADE' }}>
              <Eyebrow color={SECONDARY_DEEP} className="mb-6">What you get back</Eyebrow>
              <ul className="space-y-4">
                {[
                  'A curated room of 30–50 principals, family offices, wealth managers & RIAs',
                  'The full attention of that room — one firm presents, no competing pitches',
                  'A digital contact list of every attendee, with name, firm and interest',
                  'Warm introductions to anyone who would like to continue',
                  'Photographer and videographer on-site, with branded assets and a recap film'
                ].map((t) => (
                  <li key={t} className="flex gap-3" style={{ color: SLATE, fontSize: 15.5, lineHeight: 1.65 }}>
                    <Check size={17} style={{ color: SECONDARY_DEEP, flexShrink: 0, marginTop: 3 }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
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
        <button
          onClick={forFirms}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
          style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
        >
          <Mail size={17} />
          Get in touch
        </button>
      </section>
    </div>
  );
}
