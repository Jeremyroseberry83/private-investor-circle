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
  // The 2027 weeks that already bring allocators to a city.
  //
  // These are NAMED on the page, with real dates. An earlier draft stripped the
  // names over a concern about looking like we farm other people's rooms.
  // Jeremy resolved it on 18 Nov 2026 by changing the posture instead: we
  // publish their calendar for free, and say so. Promoting someone's
  // conference at no charge is the opposite of poaching it, which is what
  // makes naming them safe.
  //
  // The copy carries the guardrail. We are NOT partnered with any of these —
  // never write "partner", "official", "in partnership with" or "side event
  // of", because those are factual claims about relationships we do not have
  // and they invite the exact complaint we are avoiding. "We attend several
  // ourselves" is true and does the same work. Never use their logos. The NFL
  // polices its marks hardest.
  //
  // `tentative` marks the ones where sources disagree or the organizer has not
  // fixed a date. Confirm before quoting any of them to a sponsor. Third-party
  // dates move; re-check this list each quarter. Verified 18 Nov 2026.
  //
  // Not listed, kept here because they are still worth watching:
  //   Apr 28-29   Paris      iConnections Global Alts Europe
  //   Mid-Nov     Singapore  iConnections Global Alts Asia (projected)
  //   Jets & Capital — jet-hangar gatherings, roughly 85% allocators. Their
  //     2027 destination is unannounced; their site has a "2027 Events"
  //     heading with no city under it.
  //   Latin American Family Office Forum and the TBM conference both ran in
  //     Miami in Nov 2026; 2027 dates not published.
  convergence: [
    {
      window: 'Jan 19 – 21',
      city: 'Miami Beach',
      label: 'Uncorrelated Miami',
      note: "Niche alternatives, pitched at family offices, RIAs and UHNW investors rather than institutions.",
      tentative: true
    },
    {
      window: 'Late January',
      city: 'Miami Beach',
      label: 'Miami Alts Week',
      note: "A run of alternatives conferences in one week. Allocators stay in town across all of it.",
      tentative: true
    },
    {
      window: 'Feb 14',
      city: 'Los Angeles',
      label: 'Super Bowl LXI',
      note: "At SoFi Stadium. The days before it are already a private capital week across Beverly Hills."
    },
    {
      window: 'Feb 22 – 25',
      city: 'Miami Beach',
      label: 'iConnections Global Alts',
      note: "The largest capital introduction week of the year — upwards of 1,500 allocators in one place."
    },
    {
      window: 'Mar 8 – 11',
      city: 'Palm Beach',
      label: 'Family Office Retreat',
      note: "Four days at the Palm Beach Polo & Country Club in Wellington, fifteen minutes from the airport.",
      tentative: true
    },
    {
      window: 'Mar 9',
      city: 'New York',
      label: 'Opal Family Office Winter Forum',
      note: "One day at the Marriott Marquis, and the first large family office gathering of the year up north."
    },
    {
      window: 'Apr 16 – 23',
      city: 'Miami',
      label: 'Tech Week',
      note: "Founder and venture programming across the city.",
      tentative: true
    },
    {
      window: 'Apr 26 – May 2',
      city: 'Boston',
      label: 'Tech Week',
      note: "The Northeast edition, a week of founder and venture programming."
    },
    {
      window: 'May 2 – 5',
      city: 'Beverly Hills',
      label: 'Milken Global Conference',
      note: "Four days that bring global capital to our own doorstep."
    },
    {
      window: 'Jun 7 – 13',
      city: 'New York',
      label: 'Tech Week',
      note: "A week of founder and venture programming across the city, open rather than ticketed."
    },
    {
      window: 'Jun 8 – 9',
      city: 'New York',
      label: 'iConnections Global Alts New York',
      note: "Allocators and managers at The Glasshouse — and it lands inside Tech Week, so the city is full twice over."
    },
    {
      window: 'Aug 31 – Sep 1',
      city: 'Water Mill, NY',
      label: 'Opal Family Office Legacy Summit',
      note: "The Hamptons at the end of the season, which is where a good many of these families already are."
    },
    {
      window: 'Sep 13 – 19',
      city: 'Los Angeles',
      label: 'Tech Week',
      note: "The west coast edition, a week of venture and founder programming across the city."
    },
    {
      window: 'Sep 14 – 15',
      city: 'New York',
      label: 'Family Office Forum',
      note: "Two days in a private event space off Times Square.",
      tentative: true
    },
    {
      window: 'Oct 4 – 10',
      city: 'San Francisco',
      label: 'Tech Week',
      note: "Bay Area venture week. No longer back to back with the Los Angeles edition."
    },
    {
      window: 'Early December',
      city: 'Miami Beach',
      label: 'Art Basel',
      note: "The first week of December every year, and the week South Florida fills with collectors and capital.",
      tentative: true
    }
  ],

  // The calendar the Dates page draws. November 2026 through December 2027.
  //
  // EVERY WEEKDAY IS OPEN unless something below says otherwise. That is the
  // programmatic posture: a firm planning a series should see a year it can
  // book into, not a short list of leftovers. Weekends are never offered.
  //
  //   from     first day of the month still on offer — the current month only,
  //            because it is already underway. Bump it as the month passes.
  //   booked   days spoken for. Navy cell, and a row of their own underneath.
  //            `city` is optional; a booked date with no city settled yet
  //            still shows as booked.
  //   blocked  days we are not offering. Same plain cell as a weekend, and no
  //            row underneath — the reason lives in a comment here, not on the
  //            public page.
  //
  //   cities   leans on the season (see `convergence`): Florida through the
  //            winter, the north and west once it warms. It is a lean, not a
  //            rule — Miami in June is fine if someone asks for it.
  //
  // Seeded from the Fall Dates 2026 sheet, which is marked PRIVATE &
  // CONFIDENTIAL — confirm you want these public before a deploy.
  calendar: [
    {
      label: 'November',
      year: 2026,
      month: 11,
      cities: 'Palm Beach · Miami · Beverly Hills · Las Vegas',
      from: 18,
      booked: [
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
      // The 3rd sits between two booked evenings. The 21st onward is Christmas.
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
      // The 11th and 12th are held for a gathering ahead of the Super Bowl. The 14th is the game, and a Sunday.
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
    },
    {
      label: 'May',
      year: 2027,
      month: 5,
      cities: 'Beverly Hills · New York · Las Vegas',
      // Memorial Day.
      blocked: [31]
    },
    {
      label: 'June',
      year: 2027,
      month: 6,
      cities: 'Beverly Hills · New York · Las Vegas'
    },
    {
      label: 'July',
      year: 2027,
      month: 7,
      cities: 'Beverly Hills · New York · Las Vegas',
      // Independence Day, observed.
      blocked: [5]
    },
    {
      label: 'August',
      year: 2027,
      month: 8,
      cities: 'Beverly Hills · New York · Las Vegas'
    },
    {
      label: 'September',
      year: 2027,
      month: 9,
      cities: 'Beverly Hills · New York · San Francisco · Salt Lake City',
      // Labor Day.
      blocked: [6]
    },
    {
      label: 'October',
      year: 2027,
      month: 10,
      cities: 'Beverly Hills · New York · San Francisco · Salt Lake City'
    },
    {
      label: 'November',
      year: 2027,
      month: 11,
      cities: 'Beverly Hills · New York · San Francisco · Salt Lake City',
      // Thanksgiving and the Friday after.
      blocked: [25, 26]
    },
    {
      label: 'December',
      year: 2027,
      month: 12,
      cities: 'Palm Beach · Miami · Beverly Hills',
      // The Christmas blackout again, same as 2026.
      blocked: [20, 21, 22, 23, 24, 27, 28, 29, 30, 31]
    }
  ],

  nav: [
    { name: 'Events', id: 'events' },
    { name: 'Plan Yours', id: 'plan' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'About', id: 'about' }
  ],

  // Every page has its own URL. The site swaps components through state, but
  // state is not an address — a page nobody can link to cannot be sent in an
  // email, shared, or indexed. Each id below has a route file in pages/ that
  // renders the site with that page already open, and the nav pushes these
  // paths so the address bar always matches what is on screen.
  //
  // Adding a page means three things: a case in renderPage, an entry here, and
  // a route file. Miss the route file and the link 404s.
  paths: {
    home: '/',
    events: '/events',
    plan: '/plan-yours',
    faqs: '/faqs',
    about: '/about',
    dates: '/dates'
  },

  // Title and description per page, so a shared link says what it is rather
  // than repeating the home page everywhere.
  meta: {
    home: null,
    events: {
      title: 'Past Gatherings',
      description: 'Gatherings we have hosted that gave companies access to private capital — the rooms, the cities and the firms we have worked with.'
    },
    plan: {
      title: 'Plan Your Gathering',
      description: 'How a gathering designed to give you access to private capital comes together: one firm in the room, a guest list built around your target investor, and every detail handled.'
    },
    faqs: {
      title: 'Questions',
      description: 'What a gathering costs, who attends, how the guest list is built, and what access to private capital actually looks like on the night.'
    },
    about: {
      title: 'About',
      description: 'Ran Gimeno and Jeremy Roseberry host gatherings that give companies access to private capital, across the United States.'
    },
    dates: {
      title: 'Available Dates',
      description: 'Open dates through December 2027 for a gathering that gives you access to private capital — for your raise, your cause or your charity.'
    }
  },

  translateLanguages: 'en,es,fr,pt,he,zh-CN'
};
