import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  PageTopBand, SplitFeature, NumberStrip, CircleGrid, ProcessTrack, HighlightGrid,
  Eyebrow, SECONDARY, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';

export default function GatheringsPage({ onNavigate, onContactClick }) {
  return (
    <div>
      <PageTopBand image="/images/band-gatherings.svg" />

      {/* Opening headline sits in the page's normal flow, matching every
          other interior page. */}
      <section className="pt-16 pb-8 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow color={SECONDARY_DEEP} className="mb-4">The gatherings</Eyebrow>
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: 700,
              color: SLATE,
              lineHeight: 1.2,
              marginBottom: '1.25rem'
            }}
          >
            Small rooms, chosen guests,{' '}
            <span style={{ color: SECONDARY_DEEP, fontStyle: 'italic' }}>and a reason to be there</span>.
          </h1>
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.85 }}>
            We host three or four formats depending on what a client is trying to accomplish. What
            never changes is the standard for who is in the room and what happens after everyone
            goes home.
          </p>
        </div>
      </section>

      <SplitFeature
        eyebrow="How we think about it"
        title="A guest list is a design decision."
        image="/images/dinner.svg"
        ratio="4 / 3"
        quote="A gathering that produces nothing was not under-attended. It was under-curated."
      >
        <p style={{ marginBottom: '1.25rem' }}>
          Most business events optimise for headcount, because headcount is easy to sell and easy to
          measure. It is also the wrong number. Twelve people who each have a reason to talk to the
          other eleven will out-produce a ballroom of three hundred, every time.
        </p>
        <p>
          So we start from the outcome — a raise, a partnership, a board seat, a cause that needs
          funding — and work backwards to the shortest list of people who can actually move it. Then
          we make those asks personally, using relationships we have spent our careers building.
        </p>
      </SplitFeature>

      <NumberStrip
        items={[
          {
            title: 'Curated, not sold',
            body: 'No ticket sales, no sponsor tables, no attendee whose only qualification is a budget line.'
          },
          {
            title: 'Hosted in the room',
            body: 'We work the room ourselves — seating, sequencing, and the introductions that would not otherwise happen.'
          },
          {
            title: 'Off the record',
            body: 'No press, no recording, no attendee list circulated afterwards. Candour is the entire point.'
          },
          {
            title: 'Followed through',
            body: 'Warm handoffs within the week, and a documented view of which conversations deserve a second meeting.'
          }
        ]}
      />

      <CircleGrid
        eyebrow="Formats"
        title="Choose the room that fits the goal."
        intro="Each of these has a different centre of gravity. Most clients end up using more than one over a twelve-month arc."
        items={[
          { image: '/images/dinner.svg', label: 'Private dinners', note: '8–20 seats' },
          { image: '/images/forum.svg', label: 'Capital forums', note: 'Half day · 30–80 guests' },
          { image: '/images/gala.svg', label: 'Galas & benefits', note: 'Black tie · 150+' },
          { image: '/images/retreat.svg', label: 'Founder retreats', note: 'Multi-day · 10–25' }
        ]}
      />

      {/* PROCESS — navy track; gold reads poorly as a filled button colour
          under white text, so the interactive rail stays PRIMARY. */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <Eyebrow color={SECONDARY_DEEP} className="mb-4">The engagement</Eyebrow>
            <h2
              className="font-bold mb-5"
              style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
            >
              How a gathering comes together.
            </h2>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8 }}>
              Six to ten weeks from first conversation to the evening itself, depending on format and
              how much of the guest list already exists.
            </p>
          </div>

          <ProcessTrack
            steps={[
              {
                label: 'Define the outcome',
                stage: 'Week 1',
                body: 'We start with what a successful evening actually changes for you — a raise closed, a partnership opened, a board strengthened, a cause funded. Everything downstream is built against that sentence.',
                detail: [
                  'Objective and success measure agreed in writing',
                  'Format recommended: dinner, forum, gala or retreat',
                  'Budget and venue parameters set',
                  'Honest read on readiness — including when the answer is "not yet"'
                ]
              },
              {
                label: 'Build the list',
                stage: 'Weeks 2–5',
                body: 'The list is the product. We map who can move the outcome, cross it against relationships we can personally vouch for, and make the invitations ourselves rather than blasting a database.',
                detail: [
                  'Named target list built against the objective',
                  'Personal outreach from Jeremy and Ran',
                  'Guest mix balanced across capital, operators and advisors',
                  'Confirmations tracked; the room is re-balanced as replies land'
                ]
              },
              {
                label: 'Host the evening',
                stage: 'Event week',
                body: 'Venue, seating, sequencing and programme. We are in the room the whole time, making the introductions that would not have happened on their own.',
                detail: [
                  'Venue, catering and production managed end to end',
                  'Seating designed around the conversations you need',
                  'Short programme — remarks stay under the attention span',
                  'Live introductions made and noted'
                ]
              },
              {
                label: 'Follow through',
                stage: 'Weeks after',
                body: 'The week after the event decides whether the evening mattered. Warm handoffs, a written record of who should speak to whom, and a standing relationship with everyone who attended.',
                detail: [
                  'Written debrief with recommended next conversations',
                  'Warm email introductions within five business days',
                  'Feedback gathered from guests, not just the host',
                  'Invitation into the next relevant gathering'
                ]
              }
            ]}
          />
        </div>
      </section>

      <HighlightGrid
        eyebrow="What hosting includes"
        title="You bring the story. We bring the room."
        intro="Every engagement covers the full arc — the parts clients most often underestimate are the first and the last."
        cards={[
          {
            title: 'The list and the asks',
            body: 'Target mapping, personal outreach, confirmation tracking and a room re-balanced as RSVPs come in.'
          },
          {
            title: 'The evening itself',
            body: 'Venue, catering, production, seating design, run of show and hosting — you should be talking to guests, not managing vendors.'
          },
          {
            title: 'The week after',
            body: 'Debrief, warm introductions, and a documented view of which relationships are worth real time.'
          }
        ]}
      />

      {/* CLOSING */}
      <section className="py-16 md:py-28 px-6 text-center" style={{ backgroundColor: BG }}>
        <span
          aria-hidden="true"
          style={{ display: 'block', width: 46, height: 3, borderRadius: 2, backgroundColor: SECONDARY, margin: '0 auto 30px' }}
        />
        <h2
          className="font-bold mb-6 mx-auto"
          style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3.4vw, 2.4rem)', letterSpacing: '-0.03em', maxWidth: '22ch', lineHeight: 1.15 }}
        >
          Have an evening in mind?
        </h2>
        <p className="mx-auto mb-9" style={{ color: MUTED, fontSize: 16, lineHeight: 1.8, maxWidth: '56ch' }}>
          Tell us what you are trying to accomplish and roughly when. We will tell you honestly
          whether a gathering is the right instrument for it.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => onContactClick && onContactClick('Hosting a gathering', 'We are considering hosting a gathering. Here is what we are trying to accomplish: ')}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
            style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_DEEP} 100%)`, color: INK }}
          >
            Start the conversation
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => onNavigate && onNavigate('companies')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold"
            style={{ border: `1.5px solid ${SECONDARY_DEEP}`, color: SECONDARY_DEEP, background: 'transparent' }}
          >
            For companies raising
          </button>
        </div>
      </section>
    </div>
  );
}
