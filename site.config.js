/**
 * Central config for PrivateInvestorCircle.com.
 *
 * The palette follows the live site, not the Private Gathering Overview PDF —
 * the two are different systems and the live one is what prospects meet, and
 * what the circle logo was drawn for:
 *   Near-black #161311 · Champagne #D8C3A5 · Warm ivory #FAF7F2
 *
 * Champagne carries the accent weight on dark grounds (11:1 on INK) and deep
 * taupe carries it on light (5.1:1 on BG) — champagne itself is far too pale
 * for text on ivory. GOLD #D8B46C is sampled from the PDF and is deliberately
 * restricted to hairlines and the mark: when it was doing every job at once it
 * read as mustard.
 *
 * NAVY is chrome only — the nav and the footer, framing the page. Content
 * sections stay warm near-black. Don't let navy leak into a hero or a dark
 * section band or the frame stops reading as a frame.
 */

module.exports = {
  company: {
    name: 'Private Investor Circle',
    shortName: 'PIC',
    tagline: 'By Invitation Only',
    domain: 'privateinvestorcircle.com',
    // Swap for a branded inbox (e.g. invitations@privateinvestorcircle.com)
    // once that mailbox exists — this is the only place it's defined.
    email: 'jeremy@roseberrycapital.net',
    // Ran is listed first everywhere in the source collateral — keep that order.
    principals: 'Ran Gimeno & Jeremy Roseberry',
    // Luma page where advisors and allocators join the circle as attendees.
    circleJoinUrl: 'https://luma.com/PrivateInvestorCircle'
  },

  // Cities from the Private Gathering Overview.
  //
  // availableDates below is seeded from the Fall Dates 2026 sheet, which is
  // marked PRIVATE & CONFIDENTIAL — confirm you want these public before the
  // deploy goes out. Dates already past have been dropped. Edit this array to
  // update the calendar; nothing else needs touching.
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
    INK: '#161311',            // warm near-black — dark section grounds
    INK_LIGHT: '#221D19',      // lifted near-black — second stop in dark gradients
    BG: '#FAF7F2'              // warm ivory — page ground
  },

  // Openings by region. These follow Ran's and Jeremy's own travel, which is
  // why they are sparse — edit this array and the Dates page follows.
  availableDates: [
    {
      region: 'South Florida — Palm Beach & Miami',
      dates: [
        'Tuesday, September 29',
        'Wednesday, September 30',
        'Thursday, October 9',
        'Wednesday, October 21',
        'Thursday, October 22',
        'November 5, 10 or 11'
      ],
      note: 'December: the first and second weeks have limited availability.'
    },
    {
      region: 'Southern California — Beverly Hills & Santa Barbara',
      dates: ['September 25 or 26', 'October 1', 'October 2']
    },
    {
      region: 'Cayman Islands',
      dates: ['November 2 – 5']
    }
  ],


  nav: [
    { name: 'Events', id: 'events' },
    { name: 'For You', id: 'foryou' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'About', id: 'about' }
  ],

  translateLanguages: 'en,es,fr,pt,he,zh-CN'
};
