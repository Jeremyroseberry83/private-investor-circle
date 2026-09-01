import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu, X, Mail } from 'lucide-react';
import HomePage from '../components/HomePage';
import EventsPage from '../components/EventsPage';
import PlanYoursPage from '../components/PlanYoursPage';
import FaqPage from '../components/FaqPage';
import DatesPage from '../components/DatesPage';
import AboutPage from '../components/AboutPage';
import ContactForm from '../components/ContactForm';
import Translate from '../components/Translate';
import { company, colors, nav as navItems } from '../site.config';

const TITLE = `${company.name} — Private Investor Gatherings`;
const DESCRIPTION =
  'Your firm presents exclusively to a curated room of 30–50 principals, family offices, wealth managers and RIAs. Private investor gatherings hosted by Ran Gimeno and Jeremy Roseberry in Palm Beach, Miami, New York, Chicago, Dallas and Beverly Hills.';

export default function Site() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactContext, setContactContext] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only the home page opens on a full-bleed dark hero, so only there does the
  // nav start transparent-over-image. Every other page opens on a slim band
  // that the nav would disappear into.
  const overHero = !scrolled && currentPage === 'home';

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openContact = (type, message) => {
    // Guard against onClick={openContact} passing the DOM click event as `type`.
    setContactContext(typeof type === 'string' ? { type, message: message || '' } : null);
    setShowContactModal(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'events':  return <EventsPage onNavigate={handleNavClick} onContactClick={openContact} />;
      case 'plan':    return <PlanYoursPage onNavigate={handleNavClick} onContactClick={openContact} />;
      case 'faqs':    return <FaqPage onNavigate={handleNavClick} onContactClick={openContact} />;
      case 'dates':   return <DatesPage onNavigate={handleNavClick} onContactClick={openContact} />;
      case 'about':      return <AboutPage onContactClick={openContact} onNavigate={handleNavClick} />;
      default:           return <HomePage onContactClick={openContact} onNavigate={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.BG }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`https://${company.domain}`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={company.name} />
        <meta property="og:url" content={`https://${company.domain}`} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`https://${company.domain}/images/og-cover.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`https://${company.domain}/images/og-cover.jpg`} />
      </Head>

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: overHero ? 'transparent' : colors.NAVY,
          borderBottom: overHero ? '1px solid transparent' : `1px solid rgba(216,195,165,0.30)`
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between gap-3">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label={`${company.name} home`}
          >
            <img
              src="/images/monogram.svg"
              alt=""
              aria-hidden="true"
              style={{ height: 36, width: 36, display: 'block', flexShrink: 0 }}
            />
            <div style={{ textAlign: 'left' }}>
              <div
                className="font-bold"
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(12px, 3.2vw, 17px)',
                  letterSpacing: '0.14em',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap'
                }}
              >
                {company.name.toUpperCase()}
              </div>
              <div
                style={{
                  fontSize: '9px',
                  fontWeight: 600,
                  letterSpacing: '1.6px',
                  textTransform: 'uppercase',
                  color: colors.SECONDARY,
                  lineHeight: 1.6,
                  whiteSpace: 'nowrap'
                }}
              >
                {company.tagline}
              </div>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-semibold transition-colors"
                  style={{
                    color: isActive ? colors.SECONDARY : 'rgba(255,255,255,0.78)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontSize: 12,
                    paddingBottom: '4px',
                    borderBottom: `2px solid ${isActive ? colors.SECONDARY : 'transparent'}`,
                    transition: 'color 0.2s, border-color 0.2s'
                  }}
                  onMouseOver={(e) => { if (!isActive) e.currentTarget.style.borderBottomColor = 'rgba(216,195,165,0.55)'; }}
                  onMouseOut={(e) => { if (!isActive) e.currentTarget.style.borderBottomColor = 'transparent'; }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Translate />
            <button
              onClick={openContact}
              className="px-6 py-2.5 text-sm font-semibold rounded-full"
              style={{
                background: `linear-gradient(90deg, ${colors.SECONDARY} 0%, ${colors.SECONDARY_MID} 100%)`,
                color: colors.INK,
                whiteSpace: 'nowrap'
              }}
            >
              Request an invitation
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#FFFFFF', flexShrink: 0 }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden" style={{ backgroundColor: colors.NAVY, borderTop: '1px solid rgba(216,195,165,0.30)' }}>
            <div className="px-6 py-5 flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-semibold text-left"
                  style={{
                    color: currentPage === item.id ? colors.SECONDARY : 'rgba(255,255,255,0.85)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em'
                  }}
                >
                  {item.name}
                </button>
              ))}
              <Translate />
              <button
                onClick={() => { openContact(); setMobileMenuOpen(false); }}
                className="px-4 py-3 text-sm font-semibold rounded-full w-full"
                style={{
                  background: `linear-gradient(90deg, ${colors.SECONDARY} 0%, ${colors.SECONDARY_MID} 100%)`,
                  color: colors.INK
                }}
              >
                Request an invitation
              </button>
            </div>
          </div>
        )}
      </nav>

      <main style={{ paddingTop: 0 }}>{renderPage()}</main>

      {currentPage !== 'home' && (
        <button
          onClick={openContact}
          className="fixed bottom-8 right-8 p-4 rounded-full shadow-lg z-40"
          style={{
            background: `linear-gradient(135deg, ${colors.SECONDARY} 0%, ${colors.SECONDARY_MID} 100%)`,
            color: colors.INK
          }}
          aria-label="Request an invitation"
        >
          <Mail size={24} />
        </button>
      )}

      {showContactModal && (
        <ContactForm
          onClose={() => setShowContactModal(false)}
          initialType={contactContext?.type}
          initialMessage={contactContext?.message}
        />
      )}

      <footer
        className="py-12 px-6"
        style={{
          background: `linear-gradient(120deg, ${colors.NAVY_DEEP} 0%, ${colors.NAVY} 100%)`,
          color: 'white',
          borderTop: `3px solid ${colors.SECONDARY}`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left"
            style={{
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingBottom: '1.5rem',
              marginBottom: '1.5rem',
              borderBottom: '1px solid rgba(216,195,165,0.30)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src="/images/monogram.svg" alt="" style={{ height: 32, width: 32 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.14em' }}>
                  {company.name.toUpperCase()}
                </div>
                <div style={{ fontSize: 11, color: colors.SECONDARY, letterSpacing: '1.4px', textTransform: 'uppercase' }}>
                  {company.tagline}
                </div>
              </div>
            </div>

            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 transition-opacity hover:opacity-100"
              style={{ fontSize: 13, opacity: 0.82 }}
            >
              <Mail size={14} strokeWidth={1.8} />
              {company.email}
            </a>
          </div>

          {/* Capital-raising context means this disclaimer isn't optional
              boilerplate — keep it on every page. Have counsel review the
              exact wording before launch. */}
          <p
            className="mx-auto text-center"
            style={{ fontSize: 11.5, lineHeight: 1.75, color: 'rgba(255,255,255,0.42)', maxWidth: '78ch' }}
          >
            {company.name} hosts private gatherings and convenings. Nothing on this site is an offer to
            sell or a solicitation of an offer to buy any security, nor is it investment, legal or tax
            advice. {company.name} is not a registered broker-dealer or investment adviser. Any
            investment discussion that follows an introduction is conducted directly between the
            parties involved, under their own counsel.
          </p>

          <div className="text-xs text-center mt-6" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
