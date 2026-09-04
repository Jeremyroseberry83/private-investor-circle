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
    'Chicago', 'Dallas', 'Las Vegas', 'Boston', 'Newport, RI'
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
  calendar: [
    {
      label: 'September',
      year: 2026,
      month: 9,
      openings: [
        { days: [9], city: 'Miami', status: 'booked' },
        { days: [17], city: 'Boston', status: 'booked' },
        { days: [29], city: 'Palm Beach', status: 'booked' },
        { days: [30], city: 'Beverly Hills', status: 'booked' }
      ]
    },
    {
      label: 'October',
      year: 2026,
      month: 10,
      openings: [
        { days: [1], city: 'Southern California', status: 'open' },
        { days: [2], city: 'Southern California', status: 'open' },
        { days: [9], city: 'South Florida', status: 'open' },
        { days: [21], city: 'South Florida', status: 'open' },
        { days: [22], city: 'South Florida', status: 'open' }
      ]
    },
    {
      label: 'November',
      year: 2026,
      month: 11,
      cities: 'Palm Beach · Miami · Beverly Hills · Las Vegas',
      openings: [
        { days: [2, 3, 4, 5], city: 'Cayman Islands', status: 'open' },
        { days: [10], status: 'open' },
        { days: [11], status: 'open' },
        { days: [16], status: 'open' },
        { days: [17], status: 'open' }
      ]
    },
    {
      label: 'December',
      year: 2026,
      month: 12,
      cities: 'Palm Beach · Miami · Beverly Hills',
      openings: [
        { days: [1], status: 'open' },
        { days: [2], status: 'open' },
        { days: [8, 9, 10], status: 'open' },
        { days: [13, 14, 15, 16, 17], status: 'open' }
      ]
    },
    {
      label: 'January',
      year: 2027,
      month: 1,
      cities: 'Palm Beach · Miami · Beverly Hills',
      openings: [
        { days: [6], status: 'open' },
        { days: [7], status: 'open' },
        { days: [12, 13, 14], status: 'open' },
        { days: [19, 20, 21], status: 'open' },
        { days: [26, 27, 28], status: 'open' }
      ]
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
