import React from 'react';
import Site from './index';

/**
 * /dates — a real URL for the calendar.
 *
 * The 2027 one-pager is a single page-wide link to this address, so it has to
 * resolve on its own rather than only being reachable by clicking inside the
 * site.
 */
export default function Dates() {
  return <Site initialPage="dates" />;
}
