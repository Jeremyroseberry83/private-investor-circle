import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { SECONDARY, SECONDARY_DEEP, SLATE, MUTED, INK } from './ui';
import { company } from '../site.config';

// Netlify needs the payload url-encoded, not JSON.
const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

// Must match the form name AND field list in public/__forms.html, or Netlify
// silently drops submissions. Change one, change both.
const FORM_NAME = 'invitation';

const TYPES = [
  'Requesting an invitation',
  'Hosting a gathering',
  'Company raising capital',
  'Investor or connector',
  'Press or partnership',
  'Something else'
];

export default function ContactForm({ onClose, initialType, initialMessage }) {
  const [form, setForm] = useState({
    type: TYPES.includes(initialType) ? initialType : TYPES[0],
    name: '',
    email: '',
    organization: '',
    message: initialMessage || ''
  });
  const [state, setState] = useState('idle'); // idle | sending | done | error

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...form })
      });
      setState(res.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  };

  const field = {
    width: '100%',
    padding: '13px 15px',
    borderRadius: 10,
    border: '1px solid #E7E2D9',
    color: SLATE,
    fontSize: 15,
    backgroundColor: '#fff'
  };

  const label = { display: 'block', fontWeight: 600, marginBottom: 8, color: SLATE, fontSize: 13 };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: 'rgba(14,58,68,0.72)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-8 sm:p-10 relative"
        style={{ maxHeight: '92vh', overflowY: 'auto', borderTop: `4px solid ${SECONDARY}` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6" style={{ color: MUTED }} aria-label="Close">
          <X size={22} />
        </button>

        {state === 'done' ? (
          <div className="text-center py-6">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: '#F6EFDF' }}
            >
              <span style={{ color: SECONDARY_DEEP, fontSize: 26 }}>✓</span>
            </div>
            <h2 className="font-bold mb-3" style={{ color: SLATE, fontSize: 22 }}>
              Thank you — your note is with us.
            </h2>
            <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>
              Ran or Jeremy reads every message personally. Expect a reply within two business days.
            </p>
            <button
              onClick={onClose}
              className="mt-8 px-7 py-3 rounded-full text-sm font-bold"
              style={{ background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_DEEP} 100%)`, color: INK }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-bold mb-2" style={{ color: SLATE, fontSize: 24, letterSpacing: '-0.02em' }}>
              Request an invitation
            </h2>
            <p className="mb-8" style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.7 }}>
              Tell us who you are and what you are working on. Everything you send stays between us.
            </p>

            {/* Netlify detects forms at BUILD time by scanning static HTML, not
                this React component — public/__forms.html carries a matching
                plain <form> so the form gets registered. Keep them in sync. */}
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={submit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="hidden">
                <label>
                  Leave blank: <input name="bot-field" onChange={change} />
                </label>
              </p>

              <div>
                <label style={label}>I'm reaching out about</label>
                <select name="type" value={form.type} onChange={change} style={field}>
                  {TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={label}>Your name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={change}
                  placeholder="First and last"
                  style={field}
                />
              </div>

              <div>
                <label style={label}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={change}
                  placeholder="you@company.com"
                  style={field}
                />
              </div>

              <div>
                <label style={label}>Company or firm</label>
                <input
                  type="text"
                  name="organization"
                  value={form.organization}
                  onChange={change}
                  placeholder="Optional"
                  style={field}
                />
              </div>

              <div>
                <label style={label}>What should we know?</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={change}
                  placeholder="A few lines is plenty."
                  style={{ ...field, resize: 'none' }}
                />
              </div>

              {state === 'error' && (
                <p style={{ color: '#B4232B', fontSize: 14 }}>
                  Something went wrong. Email{' '}
                  <a href={`mailto:${company.email}`} style={{ textDecoration: 'underline' }}>
                    {company.email}
                  </a>{' '}
                  directly and we'll pick it up.
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'sending'}
                className="w-full py-3.5 rounded-full font-bold"
                style={{
                  background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_DEEP} 100%)`,
                  color: INK,
                  opacity: state === 'sending' ? 0.65 : 1,
                  fontSize: 15
                }}
              >
                {state === 'sending' ? 'Sending…' : 'Send'}
              </button>
            </form>

            <div className="mt-8 pt-7" style={{ borderTop: '1px solid #E7E2D9' }}>
              <p className="mb-3" style={{ color: MUTED, fontSize: 13 }}>Prefer email?</p>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2.5"
                style={{ color: SECONDARY_DEEP, fontSize: 14, fontWeight: 600 }}
              >
                <Mail size={15} strokeWidth={1.8} />
                {company.email}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
