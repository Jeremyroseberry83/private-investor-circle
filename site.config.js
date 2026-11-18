/**
 * Central config for PrivateInvestorCircle.com.
 *
 * The palette follows the live site, not the Private Gathering Overview PDF —
 * the two are different systems and the live one is what prospects meet, and
 * what the circle logo was drawn for:
 *   Near-black #12151C · Champagne #D8C3A5 · Warm ivory #FAF7F2
 *
 * Champagne carries the accent weight on dark grounds (11:1 on INK) and deep
 * taupe carries it on light (5.1:1 on BG) — champagne itself is far too pale
 * for text on ivory. GOLD #D8B46C is sampled from the PDF and is deliberately
 * restricted to hairlines and the mark: when it was doing every job at once it
 * read as mustard.
 *
 * NAVY carries the chrome — nav and footer — plus exactly one content band:
 * the value-proposition section on the Events page, which is deliberately the
 * loudest thing on the site. Every other dark section stays warm near-black.
 * If navy spreads further, the frame stops reading as a frame.
 */

module.exports = {
  company: {
    name: 'Private Investor Circle',
    shortName: 'PIC',
    tagline: 'A Capital Society',
    domain: 'privateinvestorcircle.com',
    // Swap for a branded inbox (e.g. invitations@privateinvestorcircle.com)
    // once that mailbox exists — this is the only place it's defined.
    email: 'jeremy@roseberrycapital.net',
    // Ran is listed first everywhere in the source collateral — keep that order.
    principals: 'Ran Gimeno & Jeremy Roseberry',
    // Luma page where advisors and allocators join the circle as attendees.
    circleJoinUrl: 'https://luma.com/PrivateInvestorCircle'
  },

  // Cities from the Private Gathering Overview. These are where we host most
  // often, which is not the same list as the calendar below — a one-off like
  // Nashville belongs on the Events page, not here.
  cities: [
    'Palm Beach', 'Miami', 'Fort Lauderdale', 'Beverly Hills', 'New York',
    'Chicago', 'Dallas', 'Las Vegas', 'Salt Lake City', 'Boston', 'Newport, RI'
  ],

  colors: {
    // Matches the live site: warm near-black grounds, champagne type. Gold is
    // demoted to a hairline accent — it read as mustard when it was doing
    // every job at once.
    PRIMARY: '#2E2723',        // espresso — buttons/links/active states on light
    PRIMARY_DEEP: '#1C1714',
    PRIMARY_LIGHT: '#F2EFEA',  // pale warm tint — card/badge grounds
    SECONDARY: '#D8C3A5',      // Champagne — accent on dark, button fill (11:1 on INK)
    SECONDARY_MID: '#C2A986',  // gradient end for champagne buttons (8.3:1 with INK label)
    SECONDARY_DEEP: '#7A6752', // deep taupe — text on light grounds (5.1:1 on BG)
    SECONDARY_LIGHT: '#F2EADE',// pale champagne — card/badge grounds
    GOLD: '#D8B46C',           // sampled from the Overview PDF — hairlines and the mark only
    SLATE: '#2E2A26',          // warm charcoal — headings and body on light
    MUTED: '#6E6862',          // warm grey — secondary body copy
    NAVY: '#172645',           // sampled from the Overview PDF header — site chrome
    NAVY_DEEP: '#0F1B33',      // the PDF's darker CTA navy — footer gradient start
    INK: '#12151C',            // cool near-black — dark section grounds
    INK_LIGHT: '#1C212B',      // lifted near-black — second stop in dark gradients
    BG: '#FAF7F2'              // warm ivory — page ground
  },

  // The calendar the Dates page draws.
  //
  // One entry per month, in the order they should appear. Each opening owns
  // the day cells it covers, so a window like Cayman's 2-5 highlights four
  // days and still reads as one gathering rather than four.
  //
  // status: 'open'   -> champagne cell, "Book now"
  //         'booked' -> navy cell, "Booked", not clickable. Booked dates stay
  //                     on the calendar on purpose: a month that is spoken
  //                     for is evidence, and it dates the page for a reader.
  //
  // A month's `cities` are the cities every one of its openings can be hosted
  // in, stated once above the list. An opening only carries its own `city`
  // when it differs — a settled city on a booked date, or a fixed location
  // like the Cayman window. Repeating the same three cities on every row is
  // what a month-level field exists to avoid.
  //
  // Seeded from the Fall Dates 2026 sheet, which is marked PRIVATE &
  // CONFIDENTIAL - confirm you want these public before a deploy. Edit this
  // array to update the calendar; nothing else needs touching.
  // The calendar the Dates page draws. Six months, two rows of three.
  //
  // EVERY WEEKDAY IS OPEN unless something below says otherwise. That is the
  // programmatic posture: a firm planning a 2027 series should see a year it
  // can book into, not a short list of leftovers. Weekends are never offered.
  //
  //   from     first day of the month still on offer — November only, because
  //            the month is already underway. Bump it as the month passes.
  //   booked   days that are spoken for. These get a navy cell and a row of
  //            their own underneath. `city` is optional; a booked date with no
  //            city settled yet still shows as booked.
  //   blocked  days we are not offering. Same plain cell as a weekend, and no
  //            row underneath — the reason lives in a comment here, not on the
  //            public page.
  //
  // Holiday blackout: nothing from the week of Christmas through 7 January.
  //
  // Seeded from the Fall Dates 2026 sheet, which is marked PRIVATE &
  // CONFIDENTIAL — confirm you want these public before a deploy.
  // Weeks when allocators are already in a city for something else. This is
  // the reason a date is worth picking: a firm is not asking people to fly
  // somewhere, it is catching them where they already are.
  //
  // NAMING THESE IS DESCRIPTIVE, NOT AFFILIATION. We are not a side event,
  // partner or sponsor of any of them. Never use their logos, never write
  // "official", "in partnership with" or "side event of". The NFL polices its
  // marks hardest — run that row past counsel before it goes in a proposal.
  //
  // Third-party dates move. `tentative` marks the ones where sources disagree
  // or the organiser has not fixed the date; confirm before quoting any of
  // them to a sponsor. Verified 18 Nov 2026.
  convergence: [
    {
      window: 'Jan 19 – 21',
      city: 'Miami Beach',
      label: 'Uncorrelated Miami',
      note: 'Niche alternatives, pitched at family offices, RIAs and UHNW investors rather than institutions.',
      tentative: true
    },
    {
      window: 'Late January',
      city: 'Miami Beach',
      label: 'Miami Alts Week',
      note: 'A run of alternatives conferences in one week. Allocators stay in town across all of it.',
      tentative: true
    },
    {
      window: 'Feb 14',
      city: 'Los Angeles',
      label: 'Super Bowl LXI',
      note: 'At SoFi Stadium. The days before it are already a private-capital week across Beverly Hills.'
    },
    {
      window: 'Feb 22 – 25',
      city: 'Miami Beach',
      label: 'Global Alts',
      note: 'The largest capital introduction week of the year — upwards of 1,500 allocators in one convention center.'
    },
    {
      window: 'May 2 – 5',
      city: 'Beverly Hills',
      label: 'Milken Global Conference',
      note: 'Beyond the quarter, but it brings global capital to our own doorstep for four days.'
    }
  ],

  calendar: [
    {
      label: 'November',
      year: 2026,
      month: 11,
      cities: 'Palm Beach · Miami · Beverly Hills · Las Vegas',
      from: 16,
      booked: [
        { days: [17], city: 'Palm Beach' },
        { days: [18, 19, 20] }
      ]
    },
    {
      label: 'December',
      year: 2026,
      month: 12,
      cities: 'Palm Beach · Miami · Beverly Hills',
      booked: [
        { days: [2] },
        { days: [4] }
      ],
      // The 3rd sits between two booked evenings, so it comes off the board.
      // The 21st onward is the Christmas blackout.
      blocked: [3, 21, 22, 23, 24, 25, 28, 29, 30, 31]
    },
    {
      label: 'January',
      year: 2027,
      month: 1,
      cities: 'Palm Beach · Miami · Beverly Hills',
      booked: [
        { days: [14] }
      ],
      // 1–7 closes out the holiday blackout. The 25th is held.
      blocked: [1, 4, 5, 6, 7, 25]
    },
    {
      label: 'February',
      year: 2027,
      month: 2,
      cities: 'Palm Beach · Miami · Beverly Hills',
      // The 11th and 12th are held for a gathering ahead of the Super Bowl.
      // The 14th is the game itself and falls on a Sunday in 2027, so it is
      // already closed — listed anyway so the intent survives.
      blocked: [11, 12, 14]
    },
    {
      label: 'March',
      year: 2027,
      month: 3,
      cities: 'Palm Beach · Miami · Beverly Hills'
    },
    {
      label: 'April',
      year: 2027,
      month: 4,
      cities: 'Palm Beach · Miami · Beverly Hills'
    }
  ],

  nav: [
    { name: 'Events', id: 'events' },
    { name: 'Plan Yours', id: 'plan' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'About', id: 'about' }
  ],

  translateLanguages: 'en,es,fr,pt,he,zh-CN'
};
