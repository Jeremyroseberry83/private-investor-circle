import React from 'react';
import Site from './index';

/**
 * /dates — a real URL for the calendar.
 *
 * The site swaps pages through React state, so until now the calendar could
 * only be reached by clicking inside the site. Anything sent to a firm from
 * outside — a one-pager, an email — needs an address it can point at. This
 * renders the same site with the calendar already open.
 */
export default function Dates() {
  return <Site initialPage="dates" />;
}
