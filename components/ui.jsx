import React from 'react';
import { colors } from '../site.config';

// Re-exported from site.config so every page imports colors from one place
// and the palette can't drift between files.
export const PRIMARY = colors.PRIMARY;
export const PRIMARY_DEEP = colors.PRIMARY_DEEP;
export const PRIMARY_LIGHT = colors.SECONDARY; // champagne — the accent on dark grounds
export const SECONDARY = colors.SECONDARY;
export const SECONDARY_DEEP = colors.SECONDARY_DEEP;
export const SECONDARY_MID = colors.SECONDARY_MID;
export const GOLD = colors.GOLD;
export const SECONDARY_LIGHT = colors.SECONDARY; // same champagne; the two tones converged
export const SLATE = colors.SLATE;
export const MUTED = colors.MUTED;
export const INK = colors.INK;
export const INK_LIGHT = colors.INK_LIGHT;
export const NAVY = colors.NAVY;
export const NAVY_DEEP = colors.NAVY_DEEP;
export const BG = colors.BG;

/**
 * Accent — highlights a phrase inside a heading.
 * On dark grounds pass tone="dark"; on a colored (e.g. secondary) hero pass
 * tone="secondary"; on white leave the default.
 */
export function Accent({ children, tone }) {
  const explicit = tone === 'dark' ? PRIMARY : tone === 'secondary' ? SECONDARY_LIGHT : null;
  return (
    <span style={{ color: explicit || 'var(--accent, ' + PRIMARY_LIGHT + ')' }}>
      {children}
    </span>
  );
}

export function Eyebrow({ children, color = PRIMARY, className = '' }) {
  return (
    <p
      className={`text-xs font-bold uppercase ${className}`}
      style={{ color, letterSpacing: '0.24em' }}
    >
      {children}
    </p>
  );
}

/**
 * PageHero — full-bleed image under a heavy brand-colour wash.
 * The wash is what makes a stock-looking frame read as brand rather than
 * decoration, and it guarantees text contrast regardless of the photo.
 *
 * Consider PageTopBand (below) instead for a lighter page-opening treatment
 * with the headline in the page's normal flow — the two don't have to be
 * used the same way on every page.
 */
export function PageHero({ eyebrow, title, subtitle, image, video, videoOpacity = 0.2, stats, tone = 'primary' }) {
  const [videoReady, setVideoReady] = React.useState(false);
  const wash =
    tone === 'secondary'
      ? `linear-gradient(180deg, rgba(16,37,66,0.94) 0%, rgba(16,37,66,0.89) 100%)`
      : `linear-gradient(180deg, rgba(22,19,17,0.94) 0%, rgba(22,19,17,0.88) 100%)`;
  const accent = tone === 'secondary' ? SECONDARY_LIGHT : PRIMARY_LIGHT;

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      {/* Video takes precedence over a still. It sits at low opacity against the
          brand ground so the type stays the subject, not the footage.
          Hero media is never lazy-loaded — it's the first thing painted. */}
      {video ? (
        <>
          {image && (
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            onPlaying={() => setVideoReady(true)}
            onLoadedData={(e) => { if (e.currentTarget.readyState >= 3) setVideoReady(true); }}
            style={{
              opacity: videoReady ? videoOpacity : 0,
              transition: 'opacity 700ms ease-in-out'
            }}
          >
            <source src={video} type="video/mp4" />
            <source src={video.replace(/\.mp4$/, '.mov')} type="video/quicktime" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                tone === 'secondary'
                  ? 'linear-gradient(180deg, rgba(16,37,66,0.55) 0%, rgba(16,37,66,0.42) 100%)'
                  : 'linear-gradient(180deg, rgba(22,19,17,0.58) 0%, rgba(22,19,17,0.44) 100%)'
            }}
          />
        </>
      ) : (
        <>
          {image && (
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0" style={{ background: wash }} />
        </>
      )}

      <div
        className="relative max-w-4xl mx-auto px-6 text-center"
        style={{
          paddingTop: 'clamp(110px, 14vw, 180px)',
          paddingBottom: 'clamp(90px, 12vw, 150px)',
          '--accent': accent
        }}
      >
        {eyebrow && (
          <p
            className="text-xs font-bold uppercase mb-7"
            style={{ color: accent, letterSpacing: '0.28em' }}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className="text-white font-bold mb-7 mx-auto"
          style={{
            fontSize: 'clamp(2rem, 4.2vw, 3.4rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            maxWidth: '20ch'
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="text-white mx-auto"
            style={{ fontSize: 'clamp(1rem, 1.35vw, 1.13rem)', lineHeight: 1.75, opacity: 0.82, maxWidth: '58ch' }}
          >
            {subtitle}
          </p>
        )}

        {stats && (
          <div
            className="mt-14 mx-auto grid grid-cols-1 sm:grid-cols-3 rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.22)', maxWidth: 680 }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="py-8 px-5"
                style={{ borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.22)' }}
              >
                <div
                  className="text-white font-bold mb-2"
                  style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}
                >
                  {s.value}
                </div>
                <div
                  className="text-white uppercase"
                  style={{ fontSize: '10.5px', letterSpacing: '0.14em', opacity: 0.72, lineHeight: 1.6 }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * VideoHeader — the interior-page counterpart to the home hero: a looping,
 * muted clip under a heavy wash with the page's headline over it. Shorter than
 * the home hero (it opens a page, it isn't the page), and the poster paints
 * first so a slow connection sees a photograph rather than a black band.
 */
export function VideoHeader({ video, poster, eyebrow, title, accent, subtitle }) {
  const [ready, setReady] = React.useState(false);
  return (
    <section
      className="relative w-full"
      style={{
        minHeight: 'clamp(360px, 52vh, 560px)',
        backgroundColor: INK,
        backgroundImage: `url(${poster})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        poster={poster}
        onPlaying={() => setReady(true)}
        onLoadedData={(e) => { if (e.currentTarget.readyState >= 3) setReady(true); }}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: ready ? 1 : 0,
          transition: 'opacity 900ms ease-in-out'
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(22,19,17,0.97) 0%, rgba(22,19,17,0.88) 45%, rgba(22,19,17,0.80) 100%)'
        }}
      />

      <div
        className="relative mx-auto px-6 text-center"
        style={{
          maxWidth: 900,
          minHeight: 'clamp(360px, 52vh, 560px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 'clamp(7rem, 13vw, 9rem)',
          paddingBottom: 'clamp(3rem, 6vw, 4.5rem)'
        }}
      >
        {eyebrow && (
          <p
            className="mb-6"
            style={{ color: SECONDARY, fontSize: 11, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase' }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="text-white"
          style={{ fontSize: 'clamp(1.9rem, 4.4vw, 3rem)', fontWeight: 700, lineHeight: 1.16, letterSpacing: '-0.015em' }}
        >
          {title}
          {accent && <span style={{ color: SECONDARY, fontStyle: 'italic' }}> {accent}</span>}
        </h1>
        {subtitle && (
          <p
            className="mt-6 mx-auto"
            style={{ color: 'rgba(255,255,255,0.84)', fontSize: 'clamp(15px, 1.7vw, 17.5px)', lineHeight: 1.75, maxWidth: '62ch' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/**
 * PageTopBand — slim decorative image strip, no overlaid copy. A lighter
 * page-opening treatment than PageHero: put your real headline in the
 * page's normal flow right below it (see EventsPage.jsx / AboutPage.jsx
 * for the pattern), so every page opens the same way.
 */
export function PageTopBand({ image }) {
  return (
    <section
      style={{
        minHeight: '180px',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(22,19,17,0.62)' }} />
    </section>
  );
}

/* ============================================================
   Section patterns. Compose these to build out a page — mix and
   match rather than using every one on every page.
   ============================================================ */

/** SplitFeature — image one side, copy the other. Alternates via `flip`. */
export function SplitFeature({ eyebrow, title, children, image, flip, quote, dark, ratio = '4 / 3' }) {
  const bg = dark ? INK : 'transparent';
  const heading = dark ? '#FFFFFF' : SLATE;
  const body = dark ? 'rgba(255,255,255,0.78)' : MUTED;
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: bg, '--accent': dark ? PRIMARY_LIGHT : PRIMARY }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={flip ? 'order-2' : 'order-2 md:order-1'}>
          {eyebrow && <Eyebrow color={dark ? PRIMARY_LIGHT : PRIMARY} className="mb-4">{eyebrow}</Eyebrow>}
          <h2
            className="font-bold mb-7"
            style={{
              color: heading,
              fontSize: 'clamp(1.7rem, 3vw, 2.5rem)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em'
            }}
          >
            {title}
          </h2>
          <div style={{ color: body, fontSize: '17px', lineHeight: 1.78 }}>{children}</div>
        </div>

        <div className={flip ? 'order-1' : 'order-1 md:order-2'}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ aspectRatio: ratio, backgroundColor: '#EDE8E0' }}
          >
            <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          {quote && (
            <div
              className="rounded-xl px-7 py-6 mt-0"
              style={{
                backgroundColor: dark ? 'rgba(255,255,255,0.07)' : colors.PRIMARY_LIGHT,
                borderTop: `3px solid ${PRIMARY}`,
                borderRadius: '0 0 12px 12px',
                marginTop: -4
              }}
            >
              <p
                style={{
                  color: dark ? 'rgba(255,255,255,0.9)' : SLATE,
                  fontSize: '15px',
                  lineHeight: 1.7,
                  fontStyle: 'italic'
                }}
              >
                {quote}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** NumberStrip — bordered 01/02/03/04 row. Sits under a SplitFeature. */
export function NumberStrip({ items }) {
  return (
    <div className="max-w-6xl mx-auto px-6 pb-28">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden"
        style={{ border: '1px solid #E7E2D9' }}
      >
        {items.map((it, i) => (
          <div
            key={it.title}
            className="p-8"
            style={{ borderLeft: i === 0 ? 'none' : '1px solid #E7E2D9' }}
          >
            <div
              className="mb-4"
              style={{
                color: PRIMARY,
                fontSize: '13px',
                letterSpacing: '0.14em',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <h4 className="font-bold mb-3" style={{ color: SLATE, fontSize: '16px' }}>
              {it.title}
            </h4>
            <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>{it.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** HighlightGrid — cards on a dark ground, first one filled. Lifts on hover. */
export function HighlightGrid({ eyebrow, title, intro, cards, tone = 'primary' }) {
  const accent = tone === 'secondary' ? SECONDARY_LIGHT : PRIMARY_LIGHT;
  const fill = tone === 'secondary' ? SECONDARY : PRIMARY;
  return (
    <section className="py-28 px-6" style={{ backgroundColor: INK }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          {eyebrow && <Eyebrow color={accent} className="mb-4">{eyebrow}</Eyebrow>}
          <h2
            className="text-white font-bold mb-6"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            {title}
          </h2>
          {intro && (
            <p style={{ color: 'rgba(255,255,255,0.76)', fontSize: '17px', lineHeight: 1.78 }}>
              {intro}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="rounded-xl p-8 transition-transform hover:-translate-y-1"
              style={{
                backgroundColor: i === 0 ? fill : '#FFFFFF',
                // The filled card is espresso on a near-black ground — barely
                // lighter than what it sits on, so it needs the gold hairline
                // to read as a card rather than a hole.
                border: i === 0 ? `1px solid ${GOLD}55` : 'none'
              }}
            >
              <h4
                className="font-bold mb-3"
                style={{ color: i === 0 ? '#FFFFFF' : SLATE, fontSize: '17px' }}
              >
                {c.title}
              </h4>
              <p
                style={{
                  color: i === 0 ? 'rgba(255,255,255,0.92)' : MUTED,
                  fontSize: '15px',
                  lineHeight: 1.7
                }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** CountUp — animates a number from 0 to `end` once it scrolls into view. */
export function CountUp({ end, duration = 1400, prefix = '', suffix = '', decimals = 0 }) {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const started = React.useRef(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(end * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

/**
 * CityList — the city names fade and rise in sequence the first time the row
 * scrolls into view. One observer on the container drives all of them, with a
 * per-item transition-delay, rather than one observer per name. Small travel
 * and a short stagger on purpose: the effect should read as the list settling,
 * not as an entrance.
 */
export function CityList({ items, color = SLATE, dotColor = SECONDARY_DEEP }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const ease = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div ref={ref} className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
      {items.map((city, i) => (
        <React.Fragment key={city}>
          {i > 0 && (
            <span
              aria-hidden="true"
              style={{
                color: dotColor,
                opacity: shown ? 0.5 : 0,
                transition: `opacity 520ms ${ease}`,
                transitionDelay: `${i * 70}ms`
              }}
            >
              ·
            </span>
          )}
          <span
            style={{
              color,
              fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              opacity: shown ? 1 : 0,
              transform: shown ? 'translateY(0)' : 'translateY(10px)',
              transition: `opacity 620ms ${ease}, transform 620ms ${ease}`,
              transitionDelay: `${i * 70}ms`
            }}
          >
            {city}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

/**
 * Reveal — fades and lifts its children the first time they scroll into view,
 * with an optional stagger delay. Movement is small on purpose: enough to draw
 * the eye down the section, not enough to feel like a slideshow. Respects
 * prefers-reduced-motion by rendering the finished state immediately.
 */
export function Reveal({ children, delay = 0, y = 18 }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

/** StatBand — full-bleed image with oversized figures across it. */
export function StatBand({ image, stats, tone = 'primary' }) {
  const accent = tone === 'secondary' ? SECONDARY_LIGHT : PRIMARY_LIGHT;
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(22,19,17,0.72)' }} />
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="font-bold mb-3"
                style={{
                  color: accent,
                  fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
                }}
              >
                {s.value}
              </div>
              <p className="text-white" style={{ fontSize: '14px', opacity: 0.88, lineHeight: 1.6 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** CircleGrid — round images with labels. For formats and applications. */
export function CircleGrid({ eyebrow, title, intro, items, dark }) {
  const bg = dark ? INK : '#F7F4EF';
  const heading = dark ? '#FFFFFF' : SLATE;
  return (
    <section className="py-28 px-6" style={{ backgroundColor: bg }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          {eyebrow && <Eyebrow color={dark ? PRIMARY_LIGHT : PRIMARY} className="mb-4">{eyebrow}</Eyebrow>}
          <h2
            className="font-bold mb-6"
            style={{
              color: heading,
              fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em'
            }}
          >
            {title}
          </h2>
          {intro && (
            <p style={{ color: dark ? 'rgba(255,255,255,0.76)' : MUTED, fontSize: '17px', lineHeight: 1.78 }}>
              {intro}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {items.map((it) => (
            <div key={it.label} className="text-center">
              <div
                className="rounded-full overflow-hidden mx-auto mb-5"
                style={{ width: '100%', maxWidth: 190, aspectRatio: '1 / 1', backgroundColor: '#EDE8E0' }}
              >
                <img src={it.image} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="font-bold" style={{ color: heading, fontSize: '15px' }}>
                {it.label}
              </p>
              {it.note && (
                <p className="mt-1" style={{ color: dark ? 'rgba(255,255,255,0.6)' : MUTED, fontSize: '13px' }}>
                  {it.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** StatementBlock — dark centred statement with supporting cards. */
export function StatementBlock({ lines, title, subtitle, cards, tone = 'primary' }) {
  const accent = tone === 'secondary' ? SECONDARY_LIGHT : PRIMARY_LIGHT;
  return (
    <section className="py-28 px-6" style={{ backgroundColor: INK }}>
      <div className="max-w-5xl mx-auto text-center">
        {lines && (
          <div className="mb-8">
            {lines.map((l) => (
              <p key={l} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '17px', lineHeight: 1.85 }}>
                {l}
              </p>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center gap-3 mb-8">
          <span style={{ width: 22, height: 1, backgroundColor: accent, opacity: 0.6 }} />
          <span style={{ color: accent, fontSize: 13 }}>◆</span>
          <span style={{ width: 22, height: 1, backgroundColor: accent, opacity: 0.6 }} />
        </div>

        <h2
          className="text-white font-bold mb-5"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.1rem)', letterSpacing: '-0.03em', lineHeight: 1.08 }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="mb-16 mx-auto"
            style={{
              color: accent,
              fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
              letterSpacing: '0.04em',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              maxWidth: '54ch'
            }}
          >
            {subtitle}
          </p>
        )}

        {cards && (
          <div className="grid md:grid-cols-3 gap-5 text-left">
            {cards.map((c) => (
              <div key={c.eyebrow} className="rounded-xl p-8" style={{ backgroundColor: '#F7F4EF' }}>
                <p
                  className="font-bold uppercase mb-4"
                  style={{ color: PRIMARY, fontSize: '11px', letterSpacing: '0.2em' }}
                >
                  {c.eyebrow}
                </p>
                <p className="font-bold mb-3" style={{ color: SLATE, fontSize: '17px' }}>
                  {c.lead}
                </p>
                <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>{c.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * DisplayHeading — light top line, bold bottom line, short accent rule above.
 * The weight contrast is what makes a long headline scan as two ideas
 * rather than one dense block.
 */
export function DisplayHeading({ eyebrow, light, bold, tone = 'primary', align = 'left', dark }) {
  const rule = tone === 'secondary' ? SECONDARY : PRIMARY;
  const ink = dark ? '#FFFFFF' : '#0E1622';
  const sub = dark ? 'rgba(255,255,255,0.62)' : MUTED;
  return (
    <div style={{ textAlign: align }}>
      {eyebrow && (
        <p
          className="text-xs font-bold uppercase"
          style={{ color: sub, letterSpacing: '0.16em', marginBottom: 22 }}
        >
          {eyebrow}
        </p>
      )}
      <span
        aria-hidden="true"
        style={{
          display: 'block',
          width: 72,
          height: 4,
          borderRadius: 2,
          backgroundColor: rule,
          marginBottom: 30,
          marginLeft: align === 'center' ? 'auto' : 0,
          marginRight: align === 'center' ? 'auto' : 0
        }}
      />
      <h2
        style={{
          color: ink,
          fontSize: 'clamp(2.1rem, 4.6vw, 3.7rem)',
          lineHeight: 1.04,
          letterSpacing: '-0.035em',
          marginBottom: 34
        }}
      >
        <span style={{ fontWeight: 400, display: 'block' }}>{light}</span>
        <span style={{ fontWeight: 800, display: 'block' }}>{bold}</span>
      </h2>
    </div>
  );
}

/**
 * ProcessTrack — tabbed stages over a progress rail.
 * Turns a static step list into something the reader drives.
 */
export function ProcessTrack({ steps, tone = 'primary' }) {
  const [active, setActive] = React.useState(0);
  const accent = tone === 'secondary' ? SECONDARY : PRIMARY;
  const deep = tone === 'secondary' ? SECONDARY_DEEP : PRIMARY_DEEP;
  const pct = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 0;

  return (
    <div>
      <div
        className="inline-flex flex-wrap rounded-full p-1.5 mb-14"
        style={{ border: '1px solid #E7E2D9', backgroundColor: '#FFFFFF' }}
      >
        {steps.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
            style={{
              background: i === active ? `linear-gradient(90deg, ${accent} 0%, ${deep} 100%)` : 'transparent',
              color: i === active ? '#FFFFFF' : MUTED
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mb-12">
        <div className="flex justify-between mb-4">
          {steps.map((s, i) => (
            <span
              key={s.label}
              className="uppercase"
              style={{
                fontSize: 11,
                letterSpacing: '0.13em',
                fontWeight: i === active ? 700 : 500,
                color: i === active ? SLATE : '#A8A196',
                flex: 1,
                textAlign: i === 0 ? 'left' : i === steps.length - 1 ? 'right' : 'center'
              }}
            >
              {s.stage}
            </span>
          ))}
        </div>

        <div style={{ position: 'relative', height: 6, borderRadius: 3, backgroundColor: '#EAE5DC' }}>
          <div
            style={{
              position: 'absolute',
              inset: '0 auto 0 0',
              width: `${pct}%`,
              borderRadius: 3,
              background: `linear-gradient(90deg, ${accent} 0%, ${deep} 100%)`,
              transition: 'width 420ms cubic-bezier(0.22,1,0.36,1)'
            }}
          />
          <span
            style={{
              position: 'absolute',
              top: '50%',
              left: `${pct}%`,
              width: 15,
              height: 15,
              borderRadius: '50%',
              backgroundColor: deep,
              border: '3px solid #FFFFFF',
              boxShadow: '0 0 0 1px #E7E2D9',
              transform: 'translate(-50%, -50%)',
              transition: 'left 420ms cubic-bezier(0.22,1,0.36,1)'
            }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-x-12 gap-y-6 items-start">
        <div className="md:col-span-3">
          <div
            style={{
              color: accent,
              fontSize: 13,
              letterSpacing: '0.15em',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              marginBottom: 10
            }}
          >
            {String(active + 1).padStart(2, '0')}
          </div>
          <h4 className="font-bold" style={{ color: SLATE, fontSize: 20, lineHeight: 1.25 }}>
            {steps[active].label}
          </h4>
        </div>
        <div className="md:col-span-9">
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8 }}>{steps[active].body}</p>
          {steps[active].detail && (
            <ul className="mt-6 grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {steps[active].detail.map((d) => (
                <li key={d} className="flex gap-3" style={{ color: MUTED, fontSize: 15, lineHeight: 1.65 }}>
                  <span style={{ color: accent, flexShrink: 0 }}>›</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
