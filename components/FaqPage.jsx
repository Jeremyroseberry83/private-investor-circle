import React from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import {
  VideoHeader, Eyebrow,
  SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';
import { cities } from '../site.config';

// Answers come from the Private Gathering Overview plus the hosts directly.
// The pricing answer deliberately gives the structure (host fee + venue, both
// moving with city and travel) and no figures: the real numbers vary by venue
// and distance, and a published one would anchor every negotiation at the
// wrong place. Don't "helpfully" add a range later.
const GROUPS = [
  {
    heading: 'How we are profitable',
    items: [
      {
        q: 'What’s your business model?',
        a: 'We charge a flat fee to host the gathering. That is the whole model. We are not paid on whether you raise, so our incentive is that the room is right and you want a second one — not that a deal closes.'
      },
      {
        q: 'Do you participate in our capital raise?',
        a: 'No. We take no success fee, no promote and no carried interest, and we are not a registered broker-dealer or investment adviser. We host the room and make the introductions; anything that follows is settled directly between you and the investor, under your own counsel.'
      },
      {
        q: 'How much do you charge for a single event?',
        a: 'Pricing has two parts: a flat host fee for the gathering, and the venue. Both move with the city — which room, and how far we travel to reach it — so any single published number would be wrong for most firms. Tell us the city and roughly when, and you will have a firm figure in the first conversation. For context, a gathering typically costs less than sponsoring a private wealth conference, where you would be one of forty stands rather than the only firm in the room.'
      },
      {
        q: 'Who pays for the venue?',
        a: 'Either of us — it is negotiable, and we will structure it whichever way suits you. What is worth knowing is that we can usually secure a room for less than a firm would pay approaching it directly, through private memberships and standing relationships with the venues we host in. We pass that rate through rather than marking it up. Either way we arrange the venue, catering and production ourselves: you should be talking to guests on the day, not managing vendors.'
      }
    ]
  },
  {
    heading: 'The room and how it is built',
    items: [
      {
        q: 'Who attends?',
        a: 'Principals, family offices, wealth managers and RIAs — people with the authority to act, not delegates sent to collect brochures.'
      },
      {
        q: 'How many attend?',
        a: 'Typically thirty to fifty. But the number is whatever suits your offering: we have hosted rooms of ten to fifteen when the conversation needed to be that close, and rooms of eighty and up when the reach mattered more. Tell us which you want and we build to it.'
      },
      {
        q: 'How do you invite people?',
        a: 'Personally, and then through Luma. Every invitation comes from Ran or Jeremy by name, to someone we already know — Luma handles the registration and approvals behind it. We do not send a blast, buy a list, or paper a city hoping for RSVPs.'
      },
      {
        q: 'Can I invite others with the link I receive?',
        a: 'Yes. Send it to whoever you think belongs in the room. Everyone still registers through Luma and waits to be approved, so a forwarded link never becomes an open door.'
      },
      {
        q: 'How do you curate the room?',
        a: 'We build the guest list around the investor you are trying to reach, and then we keep pruning it. If someone has confirmed who is not who you want in the room, we disinvite them — often weeks before the gathering. A seat filled by the wrong person costs more than an empty one.'
      },
      {
        q: 'What questions do you ask invitees?',
        a: 'Everyone answers the same set when they register, which is how we know who is actually in the room before the day. On top of these you tailor three to five questions of your own — they sharpen the curation beforehand and hand you real context on each guest for your follow-up.',
        list: [
          'What company do you work for?',
          'What is your job title?',
          'Which best describes you?',
          'Who invited you?',
          'What city and state are you based out of?',
          'What are you hoping to get out of these events?',
          'What is your LinkedIn profile?',
          'Approximate assets you advise or manage (AUM)?',
          'Do you currently allocate to alternatives or private investments?',
          'Are you an accredited investor?'
        ]
      },
      {
        q: 'Where did your list come from?',
        a: 'Relationships built across two careers in capital markets — people Ran and Jeremy have advised, sat opposite at a table, or been introduced to by someone they trust. It was not purchased, scraped, or licensed from anyone.'
      },
      {
        q: 'Do you sell your list?',
        a: 'No — and we never will. The list is the practice. The moment it is for sale it stops being worth anything to the people on it, and they are the reason the gatherings work.'
      }
    ]
  },
  {
    heading: 'What you get back',
    items: [
      {
        q: 'Do we get the list of attendees?',
        a: 'Twice, in fact. You get a pre-event list of names and contact details so you can run your own outreach beforehand, and afterwards a digital contact list of every attendee — name, firm and their interest — along with warm introductions from us to anyone who would like to continue the conversation.'
      },
      {
        q: 'Is the gathering photographed or filmed?',
        a: 'Yes. A professional photographer and videographer are on-site, your firm is tagged in the social coverage, and you receive branded photo and video assets plus a final recap film of the gathering.'
      },
      {
        q: 'How do you follow up?',
        a: 'Warm email introductions in the days afterwards, and a written view of which conversations we think deserve a second meeting. Anyone can fill a room — the follow-through is the part we hold ourselves accountable for.'
      }
    ]
  },
  {
    heading: 'Where and when',
    items: [
      {
        q: 'Where do you host?',
        a: 'Private dining rooms, private residences, yachts, rooftops with a view, and sunset bespoke dinners — venues chosen so that a room of forty can actually hear one another.'
      },
      {
        q: 'Which cities?',
        a: `We host most often in ${cities.slice(0, -1).join(', ')} and ${cities[cities.length - 1]}. Those are simply where the gatherings run most frequently — with enough lead time we can plan around a different city, or a date that suits your firm better.`
      },
      {
        q: 'How far in advance do we need to book?',
        a: 'Three to five weeks is the comfortable window from first conversation to the gathering itself, and dates are held first-come. If you need to move faster we can often accommodate it in South Florida or Southern California — those are the markets where our venue relationships run deepest.'
      }
    ]
  },
  {
    heading: 'For advisors and allocators',
    items: [
      {
        q: 'Can I attend as an investor or advisor?',
        a: 'Yes, by invitation. Tell us who you are and what your mandate is, and we will let you know when a gathering genuinely fits it. We would rather you came to two right rooms than eight wrong ones.'
      },
      {
        q: 'Will my name be shared?',
        a: 'The presenting firm receives a contact list of attendees afterwards — that is a deliberate part of the format and worth knowing before you accept. Beyond that we do not circulate guest lists, publish who attended, or sell your details to anyone.'
      },
      {
        q: 'Who hosts these?',
        a: 'Ran Gimeno (MBA, AIF®) and Jeremy Roseberry. Both are in the room throughout, making the introductions that would not otherwise happen.'
      }
    ]
  }
];

function Item({ q, a, list, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid #E7E2D9' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-6 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '22px 0' }}
      >
        <span className="font-semibold" style={{ color: SLATE, fontSize: 17, lineHeight: 1.45 }}>
          {q}
        </span>
        <span style={{ color: SECONDARY_DEEP, flexShrink: 0, marginTop: 2 }}>
          {isOpen ? <Minus size={19} /> : <Plus size={19} />}
        </span>
      </button>
      {isOpen && (
        <div style={{ paddingBottom: 24, maxWidth: '72ch' }}>
          <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.8 }}>{a}</p>
          {list && (
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {list.map((item) => (
                <li key={item} className="flex gap-2.5" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.65 }}>
                  <span style={{ color: SECONDARY_DEEP, flexShrink: 0 }}>›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default function FaqPage({ onNavigate, onContactClick }) {
  // Keyed by "groupIndex:itemIndex" so a question can't be ambiguous across
  // groups. First question opens by default so the page never reads as a wall
  // of closed rows.
  const [open, setOpen] = React.useState('0:0');

  return (
    <div>
      <VideoHeader
        video="/videos/faqs.mp4"
        poster="/images/toast.jpg"
        eyebrow="Frequently asked"
        title="The questions we get"
        accent="before the first gathering."
        subtitle="If yours isn't here, ask us directly — we would rather answer it properly than have you guess."
      />

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-4xl mx-auto">
          {GROUPS.map((group, gi) => (
            <div key={group.heading} className={gi === 0 ? 'mb-14' : 'mb-14'}>
              <Eyebrow color={SECONDARY_DEEP} className="mb-6">{group.heading}</Eyebrow>
              <div style={{ borderTop: '1px solid #E7E2D9' }}>
                {group.items.map((item, ii) => {
                  const key = `${gi}:${ii}`;
                  return (
                    <Item
                      key={key}
                      q={item.q}
                      a={item.a}
                      list={item.list}
                      isOpen={open === key}
                      onToggle={() => setOpen(open === key ? null : key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
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
          Still have a question?
        </h2>
        <p
          className="mx-auto mb-9"
          style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, lineHeight: 1.8, maxWidth: '52ch' }}
        >
          Ran or Jeremy reads every note personally. Ask the awkward one — it is usually the one
          worth answering.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => onContactClick && onContactClick('Something else', 'My question: ')}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold"
            style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
          >
            Ask us directly
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => onNavigate && onNavigate('events')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold"
            style={{ border: '1.5px solid rgba(216,195,165,0.55)', color: SECONDARY, background: 'transparent' }}
          >
            See how it works
          </button>
        </div>
      </section>
    </div>
  );
}
