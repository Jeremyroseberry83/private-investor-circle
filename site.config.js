/**
 * Central config for PrivateInvestorCircle.com.
 *
 * Palette is the Noir / Midnight-Navy / Antique-Gold pairing:
 *   Noir Black #111111 · Charcoal #2E2E2E · Antique Gold #C9A84C
 *   Champagne #E8D6B3 · Ivory #FAF8F5 · Midnight Navy #102542 · Brass #C79C5A
 *
 * Navy carries the *text* weight (buttons, links, active nav) because gold on
 * white fails contrast at body sizes. Gold carries the *accent* weight — rules,
 * eyebrows, and every accent that sits on a dark ground, where it reads best.
 * Don't swap those two roles without re-checking contrast.
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
    principals: 'Jeremy Roseberry & Ran Gimeno'
  },

  colors: {
    PRIMARY: '#102542',        // Midnight Navy — buttons, links, active states
    PRIMARY_DEEP: '#0A1830',
    PRIMARY_LIGHT: '#EDF0F5',  // pale navy tint — card/badge grounds
    SECONDARY: '#C9A84C',      // Antique Gold — accents, rules, on-dark type
    SECONDARY_DEEP: '#8A6B28',  // bronze — 4.98:1 on white, so it is safe for text
    SECONDARY_LIGHT: '#F6EFDF', // champagne tint — card/badge grounds
    SLATE: '#2E2E2E',          // Charcoal — headings and body on light
    MUTED: '#6E6A62',          // warm grey — secondary body copy
    INK: '#0E3A44',            // Deep Petrol Teal — dark section grounds
    INK_LIGHT: '#14505D',      // lifted teal — second stop in dark gradients
    BG: '#FAF8F5'              // Ivory — page ground
  },

  nav: [
    { name: 'Gatherings', id: 'gatherings' },
    { name: 'For Companies', id: 'companies' },
    { name: 'About', id: 'about' }
  ],

  translateLanguages: 'en,es,fr,pt,he,zh-CN'
};
