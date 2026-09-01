import React from 'react';
import { ArrowRight, Check, Mail } from 'lucide-react';
import {
  PageTopBand, Eyebrow,
  PRIMARY, SECONDARY, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';

export default function CompaniesPage({ onContactClick }) {
  const forCompanies = () =>
    onContactClick(
      'Company raising capital',
      'We are a company preparing to raise. Stage, sector and what we are raising for: '
    );
  const forCapital = () =>
    onContactClick(
      'Investor or connector',
      'I invest in / connect capital to private companies. My mandate and what I am looking for: '
    );

  return (
    <div>
      <PageTopBand image="/images/band-companies.svg" />

      <section className="pt-16 pb-8 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow color={SECONDARY_DEEP} className="mb-4">Two sides of the table</Eyebrow>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 700,
              color: SLATE,
              lineHeight: 1.2,
              marginBottom: '1.25rem'
            }}
          >
            We work with the company raising{' '}
            <span style={{ color: SECONDARY_DEEP, fontStyle: 'italic' }}>and the capital behind it</span>.
          </h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.85 }}>
            Both start the same way: a conversation, in confidence, about what you are actually
            trying to do. No deck required for the first call.
          </p>
        </div>
      </section>

      {/* Two tracks */}
      <section className="pt-6 pb-16 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-9 md:p-10" style={{ backgroundColor: 'white', border: '1px solid #E7E2D9', borderTop: `4px solid ${PRIMARY}` }}>
            <Eyebrow color={PRIMARY} className="mb-3">For companies</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: 19, lineHeight: 1.35 }}>
              You are raising, or getting ready to.
            </h3>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
              We host the room your story deserves — in front of capital that already understands
              your sector — and we tell you plainly if you are not ready for that room yet. Most
              companies we meet need one more quarter of proof before an introduction helps them.
            </p>
            <ul className="space-y-3 mb-7">
              {[
                'Private and growth-stage companies with real revenue or real assets',
                'Founders who can hold a room without a script',
                'A raise with a defined use of proceeds, not a round in search of a reason'
              ].map((t) => (
                <li key={t} className="flex gap-3" style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.65 }}>
                  <span style={{ color: PRIMARY, flexShrink: 0 }}>›</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={forCompanies}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: PRIMARY, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Start a conversation <ArrowRight size={14} />
            </button>
          </div>

          <div className="rounded-2xl p-9 md:p-10" style={{ backgroundColor: '#F6EFDF', borderTop: `4px solid ${SECONDARY}` }}>
            <Eyebrow color={SECONDARY_DEEP} className="mb-3">For capital &amp; connectors</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: 19, lineHeight: 1.35 }}>
              You want the conversation before the deck exists.
            </h3>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: 20 }}>
              A seat in rooms that have already been filtered, alongside operators, family offices
              and advisors we know personally. You will never receive a mass invitation from us, and
              your name will never appear on a circulated attendee list.
            </p>
            <ul className="space-y-3 mb-7">
              {[
                'Family offices, private investors and allocators with a defined mandate',
                'Operators and executives who join boards or advise seriously',
                'Bankers, lawyers and advisors who bring their best clients, not their pitch'
              ].map((t) => (
                <li key={t} className="flex gap-3" style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.65 }}>
                  <span style={{ color: SECONDARY_DEEP, flexShrink: 0 }}>›</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={forCapital}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: SECONDARY_DEEP, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Introduce yourself <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Why raises stall */}
      <section className="pt-4 pb-16 md:pb-24 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <Eyebrow color={SECONDARY_DEEP} className="mb-4">The honest version</Eyebrow>
          <h2
            className="font-bold mb-6"
            style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
          >
            Raises rarely stall on the business.{' '}
            <span style={{ color: SECONDARY_DEEP, fontStyle: 'italic' }}>They stall on the room.</span>
          </h2>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.8, marginBottom: 32, maxWidth: '70ch' }}>
            Three things go wrong over and over, and none of them are fixed by another cold list.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {[
              {
                lead: 'The wrong audience',
                body: 'Introductions to investors whose mandate, cheque size or timeline never fit — polite meetings that could not have ended in a yes.'
              },
              {
                lead: 'No second meeting',
                body: 'A good first conversation with nobody driving what happens next. Interest cools in the two weeks nobody followed up.'
              },
              {
                lead: 'No standing relationship',
                body: 'Every raise starts from zero because the last one was transactional. The network was rented, never built.'
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
              We are not a placement agent. We are the people who make sure the right conversation
              happens, in person, with someone accountable for what comes next.
            </p>
            <p style={{ color: MUTED, fontSize: 15 }}>
              The deal itself stays between you and the investor, under your own counsel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-9 md:p-10" style={{ border: '1px solid #E7E2D9', backgroundColor: 'white' }}>
              <Eyebrow color={PRIMARY} className="mb-6">What we need from you</Eyebrow>
              <ul className="space-y-4">
                {[
                  'A clear objective for the gathering, in one sentence',
                  'Materials that survive a sophisticated reader — numbers included',
                  'A principal who will be in the room, not a delegate',
                  'Names you already know, so we do not duplicate your own network',
                  'Realistic timing — six to ten weeks, not six days'
                ].map((t) => (
                  <li key={t} className="flex gap-3" style={{ color: MUTED, fontSize: 15, lineHeight: 1.65 }}>
                    <span style={{ color: MUTED, flexShrink: 0 }}>›</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-9 md:p-10" style={{ backgroundColor: '#F6EFDF' }}>
              <Eyebrow color={SECONDARY_DEEP} className="mb-6">What you get back</Eyebrow>
              <ul className="space-y-4">
                {[
                  'A named guest list built against your objective, agreed before invitations go out',
                  'Personal outreach from Jeremy and Ran — not an email blast',
                  'A hosted evening where the introductions actually get made',
                  'A written debrief naming the conversations worth pursuing',
                  'Warm handoffs within five business days, and a relationship that outlasts the raise'
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
          onClick={forCompanies}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
          style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_DEEP} 100%)`, color: INK }}
        >
          <Mail size={17} />
          Get in touch
        </button>
      </section>
    </div>
  );
}
