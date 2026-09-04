import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import {
  VideoHeader, Reveal, useInView,
  NAVY, SECONDARY, SECONDARY_MID, SECONDARY_DEEP, SLATE, MUTED, INK, BG
} from './ui';
import { calendar } from '../site.config';

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

/** Day-of-week for the 1st, and the length of the month. UTC on purpose — a
 *  local-midnight Date shifts a day for anyone west of Greenwich. */
function monthShape(year, month) {
  return {
    firstWeekday: new Date(Date.UTC(year, month - 1, 1)).getUTCDay(),
    dayCount: new Date(Date.UTC(year, month, 0)).getUTCDate()
  };
}

/** '2 – 5' for a window, '21' for a single evening. */
function dayLabel(days) {
  return days.length > 1 ? `${days[0]} – ${days[days.length - 1]}` : String(days[0]);
}

function Legend() {
  const swatch = (background, border) => ({
    display: 'inline-block',
    width: 13,
    height: 13,
    borderRadius: 4,
    background,
    border,
    flexShrink: 0
  });
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
      <span className="inline-flex items-center gap-2.5" style={{ color: MUTED, fontSize: 13 }}>
        <span aria-hidden="true" style={swatch('#FFFFFF', `1.5px solid ${SECONDARY_DEEP}`)} />
        Open
      </span>
      <span className="inline-flex items-center gap-2.5" style={{ color: MUTED, fontSize: 13 }}>
        <span aria-hidden="true" style={swatch(NAVY, `1.5px solid ${NAVY}`)} />
        Booked
      </span>
    </div>
  );
}

/**
 * One month: the grid, then a row per opening.
 *
 * The grid is the glance and the rows are the detail — a 34px cell cannot
 * carry a city name, and a list on its own does not show you how much of a
 * month is already spoken for.
 */
function MonthCard({ month, onBook, delay }) {
  const [ref, shown] = useInView(0.15);
  const { firstWeekday, dayCount } = monthShape(month.year, month.month);

  // Day number -> the opening that owns it, so the grid can colour a cell
  // without walking the openings array for every square.
  const byDay = {};
  month.openings.forEach((o) => o.days.forEach((d) => { byDay[d] = o; }));

  const openCount = month.openings.filter((o) => o.status === 'open').length;
  // Three states, not two: a month with openings left, a month that is spoken
  // for, and a month we have not published yet.
  const status = openCount
    ? `${openCount} open`
    : month.openings.length
      ? 'Fully booked'
      : 'To come';

  const cells = [];
  for (let i = 0; i < firstWeekday; i += 1) cells.push(null);
  for (let d = 1; d <= dayCount; d += 1) cells.push(d);

  return (
    <div
      ref={ref}
      className="rounded-2xl p-6 sm:p-7"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #E7E2D9',
        boxShadow: '0 1px 2px rgba(46,39,35,0.04), 0 14px 34px rgba(46,39,35,0.05)',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(18px)',
        transition:
          `opacity 640ms cubic-bezier(0.22,1,0.36,1) ${delay}ms,` +
          ` transform 640ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`
      }}
    >
      <div className="flex items-baseline justify-between gap-3 mb-5">
        <h3 className="font-bold" style={{ color: SLATE, fontSize: 19, letterSpacing: '-0.01em' }}>
          {month.label}{' '}
          <span style={{ color: MUTED, fontWeight: 400, fontSize: 15 }}>{month.year}</span>
        </h3>
        <span
          style={{
            color: openCount ? SECONDARY_DEEP : MUTED,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap'
          }}
        >
          {status}
        </span>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {WEEKDAYS.map((w, i) => (
          <div
            key={i}
            aria-hidden="true"
            className="text-center"
            style={{ color: MUTED, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', paddingBottom: 4 }}
          >
            {w}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <div key={`blank-${i}`} style={{ aspectRatio: '1 / 1' }} />;
          const opening = byDay[day];
          const booked = Boolean(opening) && opening.status === 'booked';
          const open = Boolean(opening) && opening.status === 'open';
          return (
            <div
              key={day}
              className="flex items-center justify-center"
              style={{
                aspectRatio: '1 / 1',
                borderRadius: 8,
                fontSize: 12.5,
                fontWeight: opening ? 700 : 400,
                color: booked ? '#FFFFFF' : open ? SLATE : 'rgba(110,104,98,0.55)',
                backgroundColor: booked ? NAVY : 'transparent',
                border: open ? `1.5px solid ${SECONDARY_DEEP}` : '1.5px solid transparent'
              }}
            >
              {day}
            </div>
          );
        })}
      </div>

      {month.cities && (
        <div className="mt-6">
          <div
            style={{
              color: SECONDARY_DEEP,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 4
            }}
          >
            Available in
          </div>
          <div style={{ color: SLATE, fontSize: 13.5, lineHeight: 1.5 }}>{month.cities}</div>
        </div>
      )}

      <div
        className={month.cities ? 'mt-4' : 'mt-6'}
        style={{ borderTop: month.openings.length ? '1px solid #EFEAE1' : 'none' }}
      >
        {month.openings.map((o) => {
          const booked = o.status === 'booked';
          return (
            <div
              key={dayLabel(o.days)}
              className="flex items-center justify-between gap-3"
              style={{ borderBottom: '1px solid #EFEAE1', padding: '13px 0' }}
            >
              <div className="flex items-baseline gap-3" style={{ minWidth: 0 }}>
                <span
                  style={{
                    color: booked ? MUTED : SLATE,
                    fontSize: 14.5,
                    fontWeight: 700,
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {dayLabel(o.days)}
                </span>
                <span style={{ color: booked ? MUTED : SLATE, fontSize: 14.5, lineHeight: 1.4 }}>
                  {o.city}
                </span>
              </div>

              {booked ? (
                <span
                  className="inline-flex items-center rounded-full"
                  style={{
                    backgroundColor: NAVY,
                    color: '#FFFFFF',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '7px 14px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  Booked
                </span>
              ) : (
                <button
                  onClick={() => onBook(`${month.label} ${dayLabel(o.days)}`, o.city)}
                  className="inline-flex items-center gap-1.5 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`,
                    color: INK,
                    fontSize: 12.5,
                    fontWeight: 700,
                    padding: '8px 15px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  Book now
                  <ArrowRight size={13} />
                </button>
              )}
            </div>
          );
        })}

        {month.note && (
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, fontStyle: 'italic' }}>
            {month.note}
          </p>
        )}
      </div>
    </div>
  );
}

export default function DatesPage({ onNavigate, onContactClick }) {
  // "Book now" opens the event intake form with the date and region already
  // filled in, so a request arrives saying which slot the firm actually wants.
  const book = (date, city) =>
    onContactClick(
      'Hosting a gathering',
      date
        ? `We would like to book ${date} — ${city}. About our firm and what we would present: `
        : 'We would like to host a gathering. City and rough timing we have in mind: '
    );

  return (
    <div>
      <VideoHeader
        video="/videos/about.mp4"
        poster="/images/band-about.jpg"
        eyebrow="Private investor gatherings"
        title="Available dates"
        accent="for your firm."
        subtitle="Ran and Jeremy host only a few gatherings a month, so each room stays genuinely curated. These openings follow their own travel."
      />

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          {/* Scarcity is real here, not a tactic — say it plainly and once. */}
          <div
            className="rounded-xl px-7 py-6 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            style={{ backgroundColor: '#F2EADE', borderLeft: `3px solid ${SECONDARY_DEEP}` }}
          >
            <div>
              <p style={{ color: SLATE, fontSize: 16, lineHeight: 1.75, fontWeight: 600 }}>
                Several firms are requesting these dates.
              </p>
              <p className="mt-1.5" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.75 }}>
                October through January is being locked in now, on a first-come basis.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Legend />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {calendar.map((month, i) => (
              <MonthCard
                key={`${month.year}-${month.month}`}
                month={month}
                onBook={book}
                delay={i * 80}
              />
            ))}
          </div>

          <Reveal>
            <p className="mt-10" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.8, fontStyle: 'italic' }}>
              These dates coincide with Ran&rsquo;s and Jeremy&rsquo;s own travel. With enough lead
              time we can plan around another date or city — and in South Florida or Southern
              California we can often move faster.
            </p>
          </Reveal>
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
          None of these work?
        </h2>
        <p
          className="mx-auto mb-9"
          style={{ color: 'rgba(255,255,255,0.72)', fontSize: 16, lineHeight: 1.8, maxWidth: '52ch' }}
        >
          Let&rsquo;s connect on your preferred city and roughly when, and we&rsquo;ll try to
          accommodate.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => book(null, null)}
            className="inline-flex justify-center items-center gap-2 sm:gap-2.5 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-bold whitespace-nowrap"
            style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_MID} 100%)`, color: INK }}
          >
            <Calendar size={16} />
            Ask about another date
          </button>
          <button
            onClick={() => onNavigate && onNavigate('events')}
            className="inline-flex justify-center items-center gap-2 px-5 sm:px-8 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-semibold whitespace-nowrap"
            style={{ border: '1.5px solid rgba(216,195,165,0.55)', color: SECONDARY, background: 'transparent' }}
          >
            What we offer
          </button>
        </div>
      </section>
    </div>
  );
}
