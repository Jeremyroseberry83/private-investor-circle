import React from 'react';
import Head from 'next/head';
import { ArrowUpRight } from 'lucide-react';
import { useInView } from '../components/ui';
import { company } from '../site.config';

/**
 * 4IR Group roadshow — an unlisted landing page.
 *
 * Deliberately a real route rather than another case in index.jsx's page
 * switch: the whole point is a URL that can be sent to a company or a
 * sponsor, and the switch has no URLs.
 *
 * Unlisted, not secret. Nothing links to it and the robots meta keeps it out
 * of search — but the repo is public and the Luma links are live, so treat it
 * as shareable-on-purpose rather than confidential. The Luma events are
 * approval-required, which is what actually keeps the rooms curated.
 *
 * It also deliberately does NOT use the site palette. This page is read as
 * 4IR Group's, so it borrows their language — near-black ground under a faint
 * grid, oversized uppercase grotesque in cream, grey body copy — and carries
 * Private Investor Circle only as the convener. Nothing here imports the
 * champagne/navy tokens, and the display serif is overridden, because
 * globals.css puts Playfair on every h1 and h2.
 */

const INK = '#111820';       // near-black ground
const INK_LIFT = '#161E28';  // card / band surface
const CREAM = '#F2EFE6';     // headline + primary text
const GREY = '#939BA5';      // body copy
const LINE = 'rgba(242,239,230,0.09)';
const LINE_SOFT = 'rgba(242,239,230,0.05)';

// globals.css sets a Playfair display face on h1/h2. 4IR's headlines are a
// heavy grotesque, so every heading here names the sans stack explicitly.
const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

const HOST_URL = 'https://4irg.com/?utm_source=privateinvestorcircle';

// Dates and times straight off the Luma pages, in chronological order — a
// reader scanning for the next city should not have to sort them.
const CITIES = [
  {
    city: 'Boston',
    state: 'Boston, MA',
    day: 'Thursday, October 8',
    time: '6:00 – 9:00 PM',
    url: 'https://luma.com/4IRGroupBoston'
  },
  {
    city: 'Salt Lake City',
    state: 'Salt Lake City, UT',
    day: 'Tuesday, October 13',
    time: '4:00 – 7:00 PM MDT',
    url: 'https://luma.com/saltlake'
  },
  {
    city: 'Beverly Hills',
    state: 'Beverly Hills, CA',
    day: 'Tuesday, October 27',
    time: '5:00 – 8:00 PM PDT',
    url: 'https://luma.com/bevhills'
  },
  {
    city: 'Palm Beach',
    state: 'Palm Beach, FL',
    day: 'Thursday, November 5',
    time: '6:00 – 9:00 PM',
    url: 'https://luma.com/palmbeachworthave'
  }
];

const CONVERSATION = [
  'How venture hands off to private capital',
  'How sophisticated investors are underwriting robotics and physical AI',
  'Which opportunities are worth watching before the market catches on',
  'Where the next generation of frontier companies are being built'
];

/** The faint graph-paper wash 4IR lay over their dark sections. */
const gridWash = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  backgroundImage: `linear-gradient(${LINE_SOFT} 1px, transparent 1px), linear-gradient(90deg, ${LINE_SOFT} 1px, transparent 1px)`,
  backgroundSize: 'clamp(70px, 11vw, 150px) clamp(70px, 11vw, 150px)'
};

/** Set in type rather than an image — swap in the real asset when we have it. */
function Wordmark() {
  return (
    <span
      className="inline-flex items-baseline"
      style={{ fontFamily: SANS, color: CREAM, letterSpacing: '0.01em', whiteSpace: 'nowrap' }}
    >
      <span style={{ fontWeight: 400, fontSize: 17 }}>4</span>
      <span aria-hidden="true" style={{ opacity: 0.4, margin: '0 5px', fontWeight: 300, fontSize: 17 }}>|</span>
      <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-0.01em' }}>IR</span>
      <span style={{ fontWeight: 300, fontSize: 17, marginLeft: 5, letterSpacing: '0.02em' }}>GROUP</span>
    </span>
  );
}

function Label({ children, className = '' }) {
  return (
    <p
      className={className}
      style={{
        color: GREY,
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

function CityCard({ item, delay }) {
  const [ref, shown] = useInView(0.15);
  const [hover, setHover] = React.useState(false);

  return (
    <a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col p-7 sm:p-8"
      style={{
        backgroundColor: hover ? '#1B2531' : INK_LIFT,
        border: `1px solid ${hover ? 'rgba(242,239,230,0.24)' : LINE}`,
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(18px)',
        transition:
          `opacity 640ms cubic-bezier(0.22,1,0.36,1) ${delay}ms,` +
          ` transform 640ms cubic-bezier(0.22,1,0.36,1) ${delay}ms,` +
          ' background-color 260ms ease, border-color 260ms ease'
      }}
    >
      <Label>{item.day}</Label>

      <h3
        className="mt-3"
        style={{
          fontFamily: SANS,
          color: CREAM,
          fontSize: 'min(7vw, clamp(1.35rem, 2.4vw, 1.9rem))',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '-0.015em',
          lineHeight: 1.02
        }}
      >
        {item.city}
      </h3>

      <p className="mt-3" style={{ color: GREY, fontSize: 14.5, lineHeight: 1.6 }}>
        {item.state}
        <span aria-hidden="true" style={{ opacity: 0.45 }}> · </span>
        {item.time}
      </p>

      <span
        className="inline-flex items-center gap-1.5 pt-7"
        style={{
          marginTop: 'auto',
          alignSelf: 'flex-start',
          color: CREAM,
          fontFamily: SANS,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          borderBottom: `1px solid ${hover ? CREAM : 'rgba(242,239,230,0.25)'}`,
          paddingBottom: 3,
          transition: 'border-color 240ms ease'
        }}
      >
        View the invitation
        <ArrowUpRight size={14} />
      </span>
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
            thing standing between the page and a crawler that finds the URL
            somewhere else. */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="theme-color" content={INK} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      {/* Thin header, mark left, convener right — 4IR's own bar reads this way. */}
      <header className="px-6" style={{ borderBottom: `1px solid ${LINE}`, backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto py-5 flex items-center justify-between gap-4">
          <a href={HOST_URL} target="_blank" rel="noopener noreferrer">
            <Wordmark />
          </a>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span
              style={{
                color: GREY,
                fontFamily: SANS,
                fontSize: 'clamp(8px, 1.8vw, 10px)',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}
            >
              Convened by {company.shortName}
            </span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6" style={{ backgroundColor: INK, overflow: 'hidden' }}>
        <div aria-hidden="true" style={gridWash} />

        <div className="relative max-w-6xl mx-auto" style={{ paddingTop: 'clamp(4.5rem, 11vw, 9rem)', paddingBottom: 'clamp(4rem, 9vw, 7rem)' }}>
          <Label>
            Hosted by 4IR Group{' '}
            <span aria-hidden="true" style={{ opacity: 0.4 }}>|</span>{' '}
            <a href={HOST_URL} target="_blank" rel="noopener noreferrer" style={{ color: CREAM }}>
              4irgroup.com
            </a>
          </Label>

          <h1
            className="mt-7"
            style={{
              fontFamily: SANS,
              color: CREAM,
              fontSize: 'min(13vw, clamp(2.5rem, 7.4vw, 5.6rem))',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-0.028em',
              lineHeight: 0.96
            }}
          >
            <span style={{ display: 'block' }}>Investor</span>
            <span style={{ display: 'block' }}>Evenings.</span>
          </h1>

          <p
            className="mt-8"
            style={{ color: GREY, fontSize: 'clamp(15px, 1.7vw, 18px)', lineHeight: 1.7, maxWidth: '44ch' }}
          >
            Four private evenings with the people deploying capital across deep tech and physical
            AI.
          </p>

          <div className="mt-10" style={{ borderTop: `1px solid ${LINE}`, paddingTop: 22 }}>
            <Label>
              Sponsored by Finstrat{' '}
              <span aria-hidden="true" style={{ opacity: 0.4 }}>|</span> Nixon Peabody
            </Label>
          </div>
        </div>
      </section>

      {/* THE GATHERING */}
      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: INK_LIFT, borderTop: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <Label className="mb-6">The gathering</Label>
            <h2
              style={{
                fontFamily: SANS,
                color: CREAM,
                fontSize: 'min(9vw, clamp(1.8rem, 3.6vw, 2.9rem))',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '-0.025em',
                lineHeight: 1.02,
                textWrap: 'balance'
              }}
            >
              Family offices, founders and institutional allocators.
            </h2>
          </div>

          <div>
            <p style={{ color: GREY, fontSize: 17, lineHeight: 1.8 }}>
              A private gathering of the decision-makers responsible for deploying capital across
              deep tech and physical AI. The conversation centers on where capital is actually
              flowing in the frontier:
            </p>

            <ul className="mt-8" style={{ borderTop: `1px solid ${LINE}` }}>
              {CONVERSATION.map((line, i) => (
                <li
                  key={line}
                  className="flex gap-5"
                  style={{ borderBottom: `1px solid ${LINE}`, padding: '17px 0' }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      color: GREY,
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                      fontSize: 12,
                      paddingTop: 4,
                      flexShrink: 0
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ color: CREAM, fontSize: 16, lineHeight: 1.65 }}>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THE ROADSHOW */}
      <section className="relative px-6 py-16 md:py-24" style={{ backgroundColor: INK, overflow: 'hidden' }}>
        <div aria-hidden="true" style={gridWash} />

        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <Label className="mb-6">The roadshow</Label>
            <h2
              style={{
                fontFamily: SANS,
                color: CREAM,
                fontSize: 'min(9vw, clamp(1.8rem, 3.6vw, 2.9rem))',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '-0.025em',
                lineHeight: 1.02
              }}
            >
              Four cities.
            </h2>
            <p className="mt-6" style={{ color: GREY, fontSize: 16.5, lineHeight: 1.8 }}>
              Each evening is private, and registration is subject to host approval. Open an
              invitation to see the agenda and request a place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {CITIES.map((item, i) => (
              <CityCard key={item.url} item={item} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: INK_LIFT, borderTop: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto">
          <h2
            style={{
              fontFamily: SANS,
              color: CREAM,
              fontSize: 'min(10vw, clamp(1.9rem, 4.4vw, 3.4rem))',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-0.028em',
              lineHeight: 1.0,
              maxWidth: '16ch',
              textWrap: 'balance'
            }}
          >
            Present. Or sponsor a city.
          </h2>
          <p className="mt-7" style={{ color: GREY, fontSize: 17, lineHeight: 1.8, maxWidth: '54ch' }}>
            Tell us which city and what you would want the room to take away, and we will come back
            on what is still open.
          </p>

          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent('4IR Group roadshow')}`}
              className="inline-flex items-center gap-2 px-7 py-3.5"
              style={{
                backgroundColor: CREAM,
                color: INK,
                fontFamily: SANS,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}
            >
              Get in touch
            </a>
            <a
              href={HOST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5"
              style={{
                border: `1px solid rgba(242,239,230,0.3)`,
                color: CREAM,
                fontFamily: SANS,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}
            >
              About 4IR Group
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12" style={{ backgroundColor: INK, borderTop: `1px solid ${LINE}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-5" style={{ paddingBottom: 22, borderBottom: `1px solid ${LINE}` }}>
            <Wordmark />
            <Label>Convened by {company.name}</Label>
          </div>

          {/* Capital-raising context means this is not optional boilerplate —
              it travels with the page wherever the link is forwarded. */}
          <p className="mt-7" style={{ fontSize: 11.5, lineHeight: 1.75, color: 'rgba(147,155,165,0.72)', maxWidth: '78ch' }}>
            {company.name} hosts private gatherings and convenings. Nothing on this page is an offer
            to sell or a solicitation of an offer to buy any security, nor is it investment, legal or
            tax advice. {company.name} is not a registered broker-dealer or investment adviser. Any
            investment discussion that follows an introduction is conducted directly between the
            parties involved, under their own counsel.
          </p>

          <p className="mt-6" style={{ fontSize: 11.5, color: 'rgba(147,155,165,0.5)' }}>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
