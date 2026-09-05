import React from 'react';
import { Plus, Minus, ArrowRight, Search } from 'lucide-react';
import {
  VideoHeader, Eyebrow, Reveal,
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
    heading: 'For advisors and allocators',
    items: [
      {
        q: 'Can I attend as an investor or advisor?',
        a: 'Yes, by invitation. Tell us who you are and what your mandate is, and we will let you know when a gathering genuinely fits it. We would rather you came to two right rooms than eight wrong ones.'
      },
      {
        q: 'Can I bring a +1?',
        a: 'Not on your own registration — every seat is chosen, and the balance of the room is the point of it. But do send them the link. If they register and are approved we would be glad to have them, and someone you would vouch for is someone we want to know anyway.'
      },
      {
        q: 'Will my name be shared?',
        a: 'Only with the presenting firm, and only because you agreed to it — every invitation carries a clause you acknowledge when you register, so nothing is shared that you did not consent to. Beyond that we do not circulate guest lists, publish who attended, or sell your details to anyone.'
      },
      {
        q: 'Who hosts these?',
        a: 'Ran Gimeno (MBA, AIF®) and Jeremy Roseberry. Both are in the room throughout, making the introductions that would not otherwise happen.'
      }
    ]
  },
{
    heading: 'Event economics',
    items: [
      {
        q: 'Do you participate in our capital raise?',
        a: 'No. We take no success fee, no promote and no carried interest. Private Investor Circle is not a registered broker-dealer or investment adviser — we host the room and make the introductions, and anything that follows is settled directly between you and the investor, under your own counsel. Ran Gimeno is separately a registered representative of Nobles & Richards, a broker-dealer; that is a distinct capacity and not the basis on which we host.'
      },
      {
        q: 'How much do you charge for a single event?',
        a: 'Pricing has two parts: a flat host fee for the gathering, and the venue. Both move with the city — which room, and how far we travel to reach it — so any single published number would be wrong for most firms. Tell us the city and roughly when, and you will have a firm figure in the first conversation. For context, a gathering typically costs less than sponsoring a private wealth conference, where you would be one of forty stands rather than the only firm in the room.'
      },
      {
        q: 'Who pays for the venue?',
        a: 'Either the presenting firm or us as hosts — it is negotiable between the two of us, and we will structure it whichever way suits the firm. Invited guests are never asked to contribute: there is no ticket and no bill at the table. What is worth knowing is that we can usually secure a room for less than a firm would pay approaching it directly, through private memberships and standing relationships with the venues we host in. We pass that rate through rather than marking it up. Either way we arrange the venue, catering and production ourselves, so the presenting firm is talking to guests on the day rather than managing vendors.'
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
        q: 'What do you need from us?',
        a: 'Enough to build the room properly and to market the gathering. None of it is onerous, and we ask for it after a first conversation, not before.',
        list: [
          'Your offering overview, emailed to us to review and diligence',
          'Full details of the current offering and past performance',
          'A clear understanding of your target investor, so we can build the list around it',
          'The city and rough timing that suit your firm',
          'A principal who will present in person',
          'Materials that hold up to a sophisticated reader',
          'Your company logo, website and copy, for marketing the gathering'
        ]
      },
      {
        q: 'How far in advance do we need to book?',
        a: 'Three to five weeks is the comfortable window from first conversation to the gathering itself, and dates are held first-come. If you need to move faster we can often accommodate it in South Florida or Southern California — those are the markets where our venue relationships run deepest.'
      }
    ]
  }
];

/**
 * One question. The open/close animation uses the grid-template-rows 0fr→1fr
 * technique rather than max-height: it animates to the content's real height,
 * so long answers don't snap or clip the way a guessed max-height does.
 */
// Group tints — warm, low-saturation, and deliberately close in value so the
// page still reads as one surface rather than five stacked cards.
const GROUP_TINTS = [
  { bg: '#FFFFFF', bar: '#172645' },
  { bg: '#F7F3EC', bar: '#C2A986' },
  { bg: '#EEF1F7', bar: '#1E3A5F' },
  { bg: '#F7F3EC', bar: '#7A6752' },
  { bg: '#FFFFFF', bar: '#D8B46C' }
];

function Item({ q, a, list, isOpen, onToggle }) {
  return (
    <div
      style={{
        borderBottom: '1px solid #E7E2D9',
        borderLeft: `2px solid ${isOpen ? SECONDARY : 'transparent'}`,
        paddingLeft: isOpen ? 18 : 0,
        backgroundColor: isOpen ? 'rgba(216,195,165,0.07)' : 'transparent',
        transition: 'border-color 240ms ease, padding-left 240ms ease, background-color 240ms ease'
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-start justify-between gap-6 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '22px 18px 22px 0' }}
      >
        <span className="font-semibold" style={{ color: SLATE, fontSize: 17, lineHeight: 1.45 }}>
          {q}
        </span>
        <span
          style={{
            color: isOpen ? SECONDARY_DEEP : MUTED,
            flexShrink: 0,
            marginTop: 2,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 320ms cubic-bezier(0.22,1,0.36,1), color 240ms ease'
          }}
        >
          {isOpen ? <Minus size={19} /> : <Plus size={19} />}
        </span>
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 340ms cubic-bezier(0.22,1,0.36,1)'
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div style={{ paddingBottom: 26, paddingRight: 18, maxWidth: '72ch' }}>
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
        </div>
      </div>
    </div>
  );
}

export default function FaqPage({ onNavigate, onContactClick }) {
  const [open, setOpen] = React.useState('0:0');
  const [query, setQuery] = React.useState('');

  const q = query.trim().toLowerCase();
  const groups = React.useMemo(
    () =>
      GROUPS.map((g) => ({
        ...g,
        items: q
          ? g.items.filter(
              (it) =>
                it.q.toLowerCase().includes(q) ||
                it.a.toLowerCase().includes(q) ||
                (it.list || []).some((l) => l.toLowerCase().includes(q))
            )
          : g.items
      })).filter((g) => g.items.length > 0),
    [q]
  );

  const total = GROUPS.reduce((n, g) => n + g.items.length, 0);
  const showing = groups.reduce((n, g) => n + g.items.length, 0);

  const jump = (heading) => {
    const el = document.getElementById(`faq-${heading.replace(/\s+/g, '-').toLowerCase()}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <VideoHeader
        video="/videos/faqs.mp4"
        poster="/images/toast.jpg"
        eyebrow="Frequently asked"
        title="The questions we receive"
        accent="before your first gathering."
        subtitle="We would rather answer it properly than have you guess"
        subtitleCaps
      />

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">
          {/* Rail: search, jump links and a live count. Sticks below the nav on
              desktop so a reader never loses the map while scrolling. */}
          <aside className="lg:sticky" style={{ top: 108 }}>
            <div className="relative mb-7">
              <Search
                size={16}
                style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: MUTED }}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions"
                aria-label="Search questions"
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 40px',
                  borderRadius: 999,
                  border: '1px solid #E7E2D9',
                  backgroundColor: '#FFFFFF',
                  color: SLATE,
                  fontSize: 14.5
                }}
              />
            </div>

            <nav className="flex flex-wrap lg:flex-col gap-x-2 gap-y-1">
              {groups.map((g) => (
                <button
                  key={g.heading}
                  onClick={() => jump(g.heading)}
                  className="text-left"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '9px 0',
                    color: MUTED,
                    fontSize: 14.5,
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 8,
                    borderBottom: '1px solid transparent'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.color = SECONDARY_DEEP; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = MUTED; }}
                >
                  <span>{g.heading}</span>
                  <span
                    style={{
                      color: SECONDARY_DEEP,
                      fontSize: 11.5,
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
                    }}
                  >
                    {g.items.length}
                  </span>
                </button>
              ))}
            </nav>

            <p className="mt-7" style={{ color: MUTED, fontSize: 13.5, lineHeight: 1.7 }}>
              {q ? `${showing} of ${total} questions` : `${total} questions`}
            </p>
          </aside>

          <div>
            {groups.length === 0 && (
              <div className="rounded-2xl p-10 text-center" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E7E2D9' }}>
                <p className="font-semibold mb-2" style={{ color: SLATE, fontSize: 17 }}>
                  Nothing matches &ldquo;{query}&rdquo;.
                </p>
                <p className="mb-6" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.7 }}>
                  Ask us directly and we will answer it properly.
                </p>
                <button
                  onClick={() => onContactClick && onContactClick('Something else', `My question: ${query}`)}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold"
                  style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK, border: 'none', cursor: 'pointer' }}
                >
                  Ask this question
                  <ArrowRight size={15} />
                </button>
              </div>
            )}

            {groups.map((group, gi) => (
              <div
                key={group.heading}
                id={`faq-${group.heading.replace(/\s+/g, '-').toLowerCase()}`}
                className="mb-8 rounded-2xl px-6 py-7 md:px-8 md:py-8"
                style={{
                  // Alternating tints, each with its own accent bar, so the eye
                  // can find where one group of questions ends and the next
                  // begins without counting headings.
                  backgroundColor: GROUP_TINTS[gi % GROUP_TINTS.length].bg,
                  border: '1px solid #EFE9E0',
                  borderLeft: `3px solid ${GROUP_TINTS[gi % GROUP_TINTS.length].bar}`,
                  scrollMarginTop: 110
                }}
              >
                <Reveal>
                  <Eyebrow color={SECONDARY_DEEP} className="mb-5">{group.heading}</Eyebrow>
                  <div style={{ borderTop: '1px solid #E7E2D9' }}>
                    {group.items.map((item, ii) => {
                      const key = `${group.heading}:${item.q}`;
                      return (
                        <Item
                          key={key}
                          q={item.q}
                          a={item.a}
                          list={item.list}
                          isOpen={open === key || (q.length > 0 && gi === 0 && ii === 0)}
                          onToggle={() => setOpen(open === key ? null : key)}
                        />
                      );
                    })}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
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
          style={{
            color: SECONDARY,
            fontSize: 'clamp(12px, 1.6vw, 15px)',
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            lineHeight: 1.6
          }}
        >
          Just ask
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => onContactClick && onContactClick('Something else', 'My question: ')}
            className="inline-flex justify-center items-center gap-2 sm:gap-2.5 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-bold whitespace-nowrap"
            style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
          >
            Ask us directly
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => onNavigate && onNavigate('events')}
            className="inline-flex justify-center items-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-semibold whitespace-nowrap"
            style={{ border: '1.5px solid rgba(216,195,165,0.55)', color: SECONDARY, background: 'transparent' }}
          >
            See how it works
          </button>
        </div>
      </section>
    </div>
  );
}
