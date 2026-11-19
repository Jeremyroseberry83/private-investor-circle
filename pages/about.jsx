import React from 'react';
import Site from './index';

/**
 * /about — a real URL for the About page.
 *
 * The site swaps pages through React state, which is not an address. This
 * renders the same site with the About page already open, so the page can be linked
 * to, shared, bookmarked and indexed on its own.
 */
export default function Page() {
  return <Site initialPage="about" />;
}
