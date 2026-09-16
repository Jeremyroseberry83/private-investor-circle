import React from 'react';
import Head from 'next/head';
import { ArrowUpRight, Download } from 'lucide-react';
import { useInView } from '../components/ui';
import { company } from '../site.config';

/**
 * 4IR Group roadshow — an unlisted landing page for companies and sponsors.
 *
 * Deliberately a real route rather than another case in index.jsx's page
 * switch: the whole point is a URL that can be sent to a partner, and the
 * switch has no URLs. Unlisted, not secret — nothing links here and the
 * robots meta keeps it out of search, but the repo is public and the Luma
 * links are live. The Luma events are approval-required, which is what
 * actually keeps the rooms curated.
 *
 * Palette and copy both come from 4IR's own sponsor one-pager, so the page
 * reads as theirs rather than ours: their near-navy ground, their gold, their
 * tier language. Private Investor Circle appears only as the convener.
 * Nothing here imports the site's champagne/navy tokens, and every heading
 * names the sans stack because globals.css puts Playfair on h1 and h2.
 */

const INK = '#0F1C29';       // ground — sampled from the one-pager
const INK_LIFT = '#142433';  // band surface
const INK_CARD = '#1F2E40';  // card surface
const GOLD = '#CCB273';      // their accent, straight off the PDF
const CREAM = '#EBEBED';
const GREY = '#A6A6AB';
const LINE = 'rgba(235,235,237,0.10)';
const LINE_SOFT = 'rgba(235,235,237,0.05)';

// The sponsorship cards sit light on the dark ground, which means the brand
// gold cannot come with them — #CCB273 on cream is 1.8:1. GOLD_DEEP is the
// same hue carried down to 5.4:1 so the accent survives the flip.
const CARD_LIGHT = '#F4F1E8';
const ON_LIGHT = '#0F1C29';        // 15.3:1 on the cream
const ON_LIGHT_MUTED = '#4A5763';  // 6.6:1
const GOLD_DEEP = '#7A5E22';       // 5.4:1
const LINE_LIGHT = 'rgba(15,28,41,0.14)';

const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

const HOST_URL = 'https://4irg.com/?utm_source=privateinvestorcircle';
const PARTNER_EMAIL = 'partnerships@4irgroup.com';
const ONE_PAGER = '/4ir-group-sponsorship.pdf';

const CITIES = [
  { city: 'Boston', date: 'Oct 8', day: 'Thursday, October 8', time: '6:00 – 9:00 PM', image: '/images/4ir/boston.jpg', url: 'https://luma.com/4IRGroupBoston' },
  { city: 'Salt Lake City', date: 'Oct 13', day: 'Tuesday, October 13', time: '4:00 – 7:00 PM MDT', image: '/images/4ir/salt-lake.jpg', url: 'https://luma.com/saltlake' },
  { city: 'Beverly Hills', date: 'Oct 27', day: 'Tuesday, October 27', time: '5:00 – 8:00 PM PDT', image: '/images/4ir/beverly-hills.jpg', url: 'https://luma.com/bevhills' },
  { city: 'Palm Beach', date: 'Nov 5', day: 'Thursday, November 5', time: '6:00 – 9:00 PM', image: '/images/4ir/palm-beach.jpg', url: 'https://luma.com/palmbeachworthave' },
  // The Luma listing for this one still carries Palm Beach, FL as its
  // location — their copy-paste, not ours. We say Chicago here.
  { city: 'Chicago', date: 'Nov 12', day: 'Thursday, November 12', time: '6:00 – 9:00 PM', image: '/images/4ir/chicago.jpg', url: 'https://luma.com/chicago4ir' }
];

const FEATURED = [
  { name: 'Seco Bio', domain: 'seco.bio', url: 'https://seco.bio' },
  { name: 'Phast', domain: 'phast.ai', url: 'https://phast.ai/' },
  { name: 'BOL', domain: 'bolvinwealth.com', url: 'https://www.bolvinwealth.com/' }
];

const STAGES = [
  {
    stage: 'Before event',
    lead: 'Marketing on your behalf',
    points: ['Branded invites', 'Targeted emails', 'Custom messaging', 'Landing page link']
  },
  {
    stage: 'During event',
    lead: 'Premium visibility',
    points: ['Speaking slot + CTA', 'Clear action link', 'Branded table and signage', 'Founder introductions']
  },
  {
    stage: 'After event',
    lead: 'Leads plus follow-up',
    points: ['Email to all attendees', 'Complete contact list', 'Key questions answered', 'Branded follow-up']
  }
];

// Ordered smallest scope first, so the list climbs with the range stated
// above it. No per-row price on purpose: the spread is $2.5K to $15K and
// where a sponsor lands inside it depends on scope and city, so a single
// number against each row would be wrong for most of them.
const TIERS = [
  { name: 'Bronze', detail: 'Logo on materials, networking through the evening, and two introductions made for you.' },
  { name: 'Silver', detail: 'Logo, one speaking slot, three founder introductions and the attendee list.' },
  { name: 'Gold', detail: 'Logo, two speaking slots, founder introductions, branded materials and the attendee list.' }
];

// The run of show, written as what a sponsor or a company gets at each point
// of the evening rather than what merely happens. `who` is the chip on the
// card, so a reader scanning for their own name finds it without reading.
const PROGRAM = [
  {
    time: '6:00',
    title: 'Doors and welcome reception',
    who: 'Everyone',
    body: 'Guests arrive into a branded room — your signage, your materials on the table. Drinks, and introductions made by the hosts rather than left to chance.'
  },
  {
    time: '6:30',
    title: 'Curated introductions',
    who: 'Sponsors & companies',
    body: 'The part a floor plan cannot do. We know who is in the room and what they came for, so we walk you over by name and stay for the first two minutes.'
  },
  {
    time: '7:00',
    title: 'The company presents',
    who: 'Companies',
    body: 'The floor, uninterrupted, in front of every allocator in the room. No competing pitches on either side, and no expo hall to shout over.'
  },
  {
    time: '7:45',
    title: 'Sponsor address and call to action',
    who: 'Sponsors',
    body: 'Your speaking slot — time on your feet, not a logo on a banner — closing on one clear next step and a link the room can act on that night.'
  },
  {
    time: '8:15',
    title: 'Dinner and open conversation',
    who: 'Everyone',
    body: 'The hour that does the work. Nobody is watching the clock for a next session, because there is not one.'
  },
  {
    time: '9:00',
    title: 'Close — and what follows',
    who: 'Sponsors & companies',
    body: 'The room ends; the list does not. Every attendee, their answers to the questions you chose, and a branded follow-up sent on your behalf in the days after.'
  }
];

const gridWash = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  backgroundImage: `linear-gradient(${LINE_SOFT} 1px, transparent 1px), linear-gradient(90deg, ${LINE_SOFT} 1px, transparent 1px)`,
  backgroundSize: 'clamp(70px, 11vw, 150px) clamp(70px, 11vw, 150px)'
};

const display = (size) => ({
  fontFamily: SANS,
  color: CREAM,
  fontSize: size,
  fontWeight: 800,
  textTransform: 'uppercase',
  letterSpacing: '-0.025em',
  lineHeight: 1.02
});

/** Set in type rather than an image — swap in the real asset when we have it. */
function Wordmark({ size = 17 }) {
  return (
    <span
      className="inline-flex items-baseline"
      style={{ fontFamily: SANS, color: CREAM, whiteSpace: 'nowrap' }}
    >
      <span style={{ fontWeight: 400, fontSize: size }}>4</span>
      <span aria-hidden="true" style={{ opacity: 0.4, margin: '0 5px', fontWeight: 300, fontSize: size }}>|</span>
      <span style={{ fontWeight: 800, fontSize: size, letterSpacing: '-0.01em' }}>IR</span>
      <span style={{ fontWeight: 300, fontSize: size, marginLeft: 5, letterSpacing: '0.02em' }}>GROUP</span>
    </span>
  );
}

function Label({ children, color = GOLD, className = '' }) {
  return (
    <p
      className={className}
      style={{
        color,
        fontFamily: SANS,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        lineHeight: 1.8
      }}
    >
      {children}
    </p>
  );
}

/** A Luma cover, its city and date, linking to the invitation. */
function CityCard({ item, delay }) {
  const [ref, shown] = useInView(0.12);
  const [hover, setHover] = React.useState(false);

  return (
    <a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col"
      style={{
        border: `1px solid ${hover ? GOLD : LINE}`,
        backgroundColor: INK_CARD,
        opacity: shown ? 1 : 0,
        transform: shown ? `translateY(${hover ? -4 : 0}px)` : 'translateY(20px)',
        transition:
          `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms,` +
          ` transform 320ms cubic-bezier(0.22,1,0.36,1), border-color 260ms ease`
      }}
    >
      <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', backgroundColor: INK_LIFT, flexShrink: 0 }}>
        <img
          src={item.image}
          alt={`${item.city} — 4IR Group Investor Evening`}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{
            display: 'block',
            transform: hover ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 600ms cubic-bezier(0.22,1,0.36,1)'
          }}
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <Label>{item.day}</Label>
        <h3 className="mt-2.5" style={display('min(6.5vw, clamp(1.2rem, 2vw, 1.55rem))')}>
          {item.city}
        </h3>
        <p className="mt-2" style={{ color: GREY, fontSize: 13.5, lineHeight: 1.6 }}>
          {item.time}
        </p>
        <span
          className="inline-flex items-center gap-1.5 pt-5"
          style={{
            marginTop: 'auto',
            alignSelf: 'flex-start',
            color: hover ? GOLD : CREAM,
            fontFamily: SANS,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            transition: 'color 240ms ease'
          }}
        >
          View the invitation
          <ArrowUpRight size={13} />
        </span>
      </div>
    </a>
  );
}

/** A featured company: the name, its domain, and a link out to it. */
function CompanyCard({ item }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col items-center justify-center text-center p-10 sm:p-12"
      style={{
        backgroundColor: INK_CARD,
        border: `1px solid ${hover ? GOLD : LINE}`,
        borderBottom: `3px solid ${GOLD}`,
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1), border-color 260ms ease'
      }}
    >
      <span style={display('min(8vw, clamp(1.3rem, 2.4vw, 1.9rem))')}>{item.name}</span>
      <span
        className="inline-flex items-center gap-1.5 mt-3"
        style={{
          color: hover ? GOLD : GREY,
          fontFamily: SANS,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          transition: 'color 240ms ease'
        }}
      >
        {item.domain}
        <ArrowUpRight size={13} />
      </span>
    </a>
  );
}

/**
 * One stage of the evening.
 *
 * The rail runs down the left on a phone and down the middle from lg up,
 * where cards alternate sides. The node is positioned against the same two
 * anchors, so it always sits on the line.
 */
function ProgramStep({ item, index }) {
  const [ref, shown] = useInView(0.2);
  const left = index % 2 === 0;

  return (
    <li
      ref={ref}
      className="relative pl-16 lg:pl-0 pb-10 lg:pb-14"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(18px)',
        transition: 'opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)'
      }}
    >
      <span
        aria-hidden="true"
        className="absolute top-0 left-5 lg:left-1/2 flex items-center justify-center"
        style={{
          width: 40,
          height: 40,
          marginLeft: -20,
          borderRadius: 999,
          backgroundColor: INK,
          border: `1px solid ${GOLD}`,
          color: GOLD,
          fontFamily: SANS,
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: '0.02em'
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-16">
        <div className={left ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2'}>
          <div
            className="p-6 sm:p-7"
            style={{ backgroundColor: INK_CARD, border: `1px solid ${LINE}`, borderTop: `2px solid ${GOLD}` }}
          >
            <div className={`flex flex-wrap items-baseline gap-x-4 gap-y-1 ${left ? 'lg:justify-end' : ''}`}>
              <span style={{ color: GOLD, fontFamily: SANS, fontSize: 15, fontWeight: 800, letterSpacing: '0.02em' }}>
                {item.time}
              </span>
              <span
                style={{
                  color: GREY,
                  fontFamily: SANS,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  border: `1px solid ${LINE}`,
                  padding: '3px 9px'
                }}
              >
                {item.who}
              </span>
            </div>

            <h3 className="mt-3" style={display('min(6.5vw, clamp(1.05rem, 1.7vw, 1.3rem))')}>
              {item.title}
            </h3>
            <p className="mt-3" style={{ color: GREY, fontSize: 15, lineHeight: 1.7 }}>
              {item.body}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

function GoldButton({ href, children, download, external }) {
  return (
    <a
      href={href}
      {...(download ? { download: '' } : {})}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5"
      style={{
        backgroundColor: GOLD,
        color: INK,
        fontFamily: SANS,
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </a>
  );
}

function GhostButton({ href, children, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5"
      style={{
        border: `1px solid rgba(235,235,237,0.32)`,
        color: CREAM,
        fontFamily: SANS,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </a>
  );
}

export default function FourIrRoadshow() {
  return (
    <div style={{ backgroundColor: INK, minHeight: '100vh' }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>4IR Group — Investor Evenings</title>
        {/* Unlisted: nothing on the site links here, so this meta is the only
            thing standing between the page and a crawler that finds the URL. */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="theme-color" content={INK} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      {/* A gold hairline across the top, the way the one-pager opens. */}
      <div aria-hidden="true" style={{ height: 4, backgroundColor: GOLD }} />

      <header className="px-6" style={{ borderBottom: `1px solid ${LINE}`, backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto py-4 flex items-center justify-between gap-4">
          <a href={HOST_URL} target="_blank" rel="noopener noreferrer">
            <Wordmark />
          </a>

          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {[['Cities', '#cities'], ['Sponsorship', '#sponsorship'], ['Program', '#program'], ['Companies', '#companies']].map(([name, href]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    color: GREY,
                    fontFamily: SANS,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase'
                  }}
                >
                  {name}
                </a>
              ))}
            </nav>
            {/* The header CTA hands over the one-pager rather than opening a
                mail client — a sponsor wants the numbers before they write. */}
            <GoldButton href={ONE_PAGER} download>
              <Download size={14} />
              Join as sponsor
            </GoldButton>
          </div>
        </div>
      </header>

      {/* HERO — the four covers are the hero. Everything above them is a
          tagline and a line of context, on purpose: the pictures and the
          companies are the point, not a headline about us. */}
      <section id="cities" className="relative px-6" style={{ backgroundColor: INK, overflow: 'hidden' }}>
        <div aria-hidden="true" style={gridWash} />

        <div
          className="relative max-w-6xl mx-auto text-center"
          style={{ paddingTop: 'clamp(3.5rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          <Label>5 Cities · 5 Investor Gatherings</Label>
          <p
            className="mt-6 mx-auto"
            style={{ color: CREAM, fontSize: 'clamp(16px, 2.1vw, 22px)', lineHeight: 1.6, maxWidth: '40ch', fontWeight: 300 }}
          >
            Private capital for the companies, infrastructure and ecosystems transforming physical
            industry.
          </p>
          <div aria-hidden="true" style={{ width: 54, height: 2, backgroundColor: GOLD, margin: '30px auto 0' }} />
        </div>

        <div className="relative max-w-6xl mx-auto" style={{ paddingBottom: 'clamp(3.5rem, 8vw, 6rem)' }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {CITIES.map((item, i) => (
              <CityCard key={item.url} item={item} delay={i * 80} />
            ))}
          </div>

          <p className="mt-8 text-center mx-auto" style={{ color: GREY, fontSize: 14.5, lineHeight: 1.75, maxWidth: '62ch' }}>
            Each evening is private, and registration is subject to host approval.
          </p>
        </div>
      </section>

      {/* SPONSORSHIP */}
      <section id="sponsorship" className="px-6 py-16 md:py-24" style={{ backgroundColor: INK_LIFT, borderTop: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto">
          <Label className="mb-6">Sponsorship</Label>
          <h2 style={display('min(9vw, clamp(1.9rem, 4vw, 3.1rem))')}>
            <span style={{ display: 'block' }}>Your firm, in front of</span>
            <span style={{ display: 'block', color: GOLD }}>the capital in the room.</span>
          </h2>
          <p className="mt-7" style={{ color: GREY, fontSize: 17, lineHeight: 1.8, maxWidth: '60ch' }}>
            Family offices, founders and institutional allocators, in five cities across five
            evenings. We market you to them before the night, put you in front of them on it, and
            hand you the room afterwards.
          </p>

          {/* Premier tier gets the gold frame; it is the one being sold. */}
          <div
            className="mt-12 p-7 sm:p-10"
            style={{ backgroundColor: CARD_LIGHT, borderTop: `5px solid ${GOLD}` }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
              <h3 style={{ ...display('min(7vw, clamp(1.3rem, 2.4vw, 1.85rem))'), color: ON_LIGHT }}>
                The full roadshow
              </h3>
              <Label color={GOLD_DEEP}>Exclusive · Limited to 5 slots · 2 remaining</Label>
            </div>

            <p className="mt-5" style={{ color: GOLD_DEEP, fontFamily: SANS, fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 800, letterSpacing: '0.01em' }}>
              $60,000
              <span style={{ color: ON_LIGHT_MUTED, fontWeight: 400 }}> · Every city, every gathering</span>
            </p>
            <p className="mt-2.5" style={{ color: ON_LIGHT_MUTED, fontSize: 14.5, lineHeight: 1.65 }}>
              Taking the whole roadshow rather than a city at a time, at a materially better rate
              than booking them individually.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-7 md:gap-9">
              {[
                ['You get', 'Pre-event marketing, an event speaking slot with a call to action, the complete attendee list and follow-up, and a branded suite.'],
                ['We do', 'Everything for you — marketing, logistics, introductions, and the post-event email to every attendee.'],
                ['Result', 'You become part of the frontier capital circle leading the new industrial age.']
              ].map(([k, v]) => (
                <div key={k} style={{ borderTop: `1px solid ${LINE_LIGHT}`, paddingTop: 16 }}>
                  <Label color={GOLD_DEEP}>{k}</Label>
                  <p className="mt-2.5" style={{ color: ON_LIGHT_MUTED, fontSize: 15, lineHeight: 1.7 }}>{v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BEFORE | DURING | AFTER */}
          <div className="mt-6 grid md:grid-cols-3 gap-5 lg:gap-6">
            {STAGES.map((s) => (
              <div key={s.stage} className="p-7" style={{ backgroundColor: CARD_LIGHT, borderTop: `3px solid ${GOLD}` }}>
                <Label color={GOLD_DEEP}>{s.stage}</Label>
                <p className="mt-3" style={{ color: ON_LIGHT, fontSize: 15.5, fontWeight: 700 }}>{s.lead}</p>
                <ul className="mt-4">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3" style={{ padding: '7px 0' }}>
                      <span aria-hidden="true" style={{ color: GOLD_DEEP, flexShrink: 0 }}>·</span>
                      <span style={{ color: ON_LIGHT_MUTED, fontSize: 14.5, lineHeight: 1.6 }}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Other tiers */}
          <div className="mt-14">
            <Label className="mb-6">A single city</Label>
            <p style={{ color: GOLD, fontFamily: SANS, fontSize: 'clamp(18px, 2.4vw, 26px)', fontWeight: 800, letterSpacing: '-0.01em' }}>
              $2,500 – $15,000
              <span style={{ color: GREY, fontWeight: 400, fontSize: 'clamp(15px, 1.7vw, 17px)' }}> per event</span>
            </p>
            <p className="mt-3" style={{ color: GREY, fontSize: 16, lineHeight: 1.75, maxWidth: '58ch' }}>
              Where a sponsor sits in that range depends on the scope they take and the city. These
              are the three we build from — tell us which matters and we will price it.
            </p>

            <div className="mt-8" style={{ borderTop: `1px solid ${LINE}` }}>
              {TIERS.map((t) => (
                <div
                  key={t.name}
                  className="flex flex-wrap items-baseline gap-x-6 gap-y-2"
                  style={{ borderBottom: `1px solid ${LINE}`, padding: '20px 0' }}
                >
                  <span style={{ ...display('clamp(1rem, 1.6vw, 1.15rem)'), minWidth: 110 }}>{t.name}</span>
                  <span style={{ color: GREY, fontSize: 14.5, lineHeight: 1.65, flex: '1 1 300px' }}>{t.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <GoldButton href={ONE_PAGER} download>
              <Download size={15} />
              Download the one-pager
            </GoldButton>
            <GhostButton href={`mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent('4IR Group roadshow — partnership')}`}>
              {PARTNER_EMAIL}
            </GhostButton>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="relative px-6 py-16 md:py-24" style={{ backgroundColor: INK, overflow: 'hidden' }}>
        <div aria-hidden="true" style={gridWash} />

        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-2xl mb-14">
            <Label className="mb-6">Program</Label>
            <h2 style={display('min(9vw, clamp(1.9rem, 4vw, 3.1rem))')}>
              How the evening runs.
            </h2>
            <p className="mt-7" style={{ color: GREY, fontSize: 17, lineHeight: 1.8 }}>
              The same shape in every city. Three hours, one room, and a running order built so
              the conversations that matter actually happen.
            </p>
          </div>

          <ol className="relative">
            {/* The rail. Fades at both ends so it reads as a thread rather
                than a border, and sits under the nodes. */}
            <span
              aria-hidden="true"
              className="absolute top-0 bottom-0 left-5 lg:left-1/2"
              style={{
                width: 1,
                marginLeft: -0.5,
                background: `linear-gradient(180deg, rgba(204,178,115,0) 0%, ${GOLD} 8%, ${GOLD} 88%, rgba(204,178,115,0) 100%)`
              }}
            />
            {PROGRAM.map((item, i) => (
              <ProgramStep key={item.time} item={item} index={i} />
            ))}
          </ol>

          <p className="mt-4" style={{ color: GREY, fontSize: 14.5, lineHeight: 1.75, maxWidth: '64ch' }}>
            A typical evening. Times shift with the city and the venue — Salt Lake City runs 4:00 to
            7:00 — but the shape does not.
          </p>
        </div>
      </section>

      {/* FEATURED COMPANIES */}
      <section id="companies" className="relative px-6 py-16 md:py-24" style={{ backgroundColor: INK, overflow: 'hidden' }}>
        <div aria-hidden="true" style={gridWash} />

        <div className="relative max-w-6xl mx-auto">
          <Label className="mb-6">In front of investors</Label>
          <h2 style={display('min(9vw, clamp(1.9rem, 4vw, 3.1rem))')}>
            The companies we are bringing.
          </h2>
          <p className="mt-7" style={{ color: GREY, fontSize: 17, lineHeight: 1.8, maxWidth: '58ch' }}>
            Featured across all five cities, in front of family offices, founders and institutional
            allocators deploying capital into deep tech and physical AI.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-5 lg:gap-6">
            {FEATURED.map((c) => (
              <CompanyCard key={c.url} item={c} />
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: INK_LIFT, borderTop: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ ...display('min(10vw, clamp(1.9rem, 4.4vw, 3.4rem))'), maxWidth: '18ch', textWrap: 'balance' }}>
            Become a premier partner.
          </h2>
          <p className="mt-7" style={{ color: GREY, fontSize: 17, lineHeight: 1.8, maxWidth: '56ch' }}>
            Only two premier slots remain. Limited partnership positions are reserved for frontier
            capital leaders.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <GoldButton href={`mailto:${PARTNER_EMAIL}?subject=${encodeURIComponent('4IR Group roadshow — premier partnership')}`}>
              {PARTNER_EMAIL}
            </GoldButton>
            <GhostButton href={HOST_URL} external>
              About 4IR Group
              <ArrowUpRight size={14} />
            </GhostButton>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12" style={{ backgroundColor: INK, borderTop: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-5" style={{ paddingBottom: 22, borderBottom: `1px solid ${LINE}` }}>
            <Wordmark />
            <Label color={GREY}>Convened by {company.name}</Label>
          </div>

          {/* Capital-raising context means this is not optional boilerplate —
              it travels with the page wherever the link is forwarded. */}
          <p className="mt-7" style={{ fontSize: 11.5, lineHeight: 1.75, color: 'rgba(166,166,171,0.72)', maxWidth: '78ch' }}>
            {company.name} hosts private gatherings and convenings. Nothing on this page is an offer
            to sell or a solicitation of an offer to buy any security, nor is it investment, legal or
            tax advice. {company.name} is not a registered broker-dealer or investment adviser. Any
            investment discussion that follows an introduction is conducted directly between the
            parties involved, under their own counsel.
          </p>

          <p className="mt-6" style={{ fontSize: 11.5, color: 'rgba(166,166,171,0.5)' }}>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
