'use client';

import { useState } from 'react';
import Image from 'next/image';

const IMG_B2B =
  'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/bck96tj18jxv1m1t5m5e40s5/new-chat/hDH5qF62CBFzjcjXJpUyV.JPG';

// ── B2B Section ────────────────────────────────────────────────────────
const B2B_BENEFITS = [
  { num: '01', title: 'Exkluzivní rabat', body: 'Distributoři a zahradní centra získají obchodní slevu 20–35 % dle odebraného množství.' },
  { num: '02', title: 'Podpora prodeje', body: 'Vzorky na prodejnu, tištěné katalogy, produktové fotografie a marketingové materiály.' },
  { num: '03', title: 'Zakázková výroba', body: 'Výroba pod vaší značkou nebo na přesné rozměry vašich typizovaných projektů.' },
  { num: '04', title: 'Prémiové garance', body: 'Záruka 10 let na materiál a sváry pro všechny obchodní partnery.' },
];

function B2BSection() {
  return (
    <section
      id="b2b"
      style={{
        background: 'var(--inox-dusk)',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top layout: 2 cols */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center',
            marginBottom: '4.5rem',
          }}
          className="section-grid"
        >
          {/* Left — text */}
          <div className="reveal">
            <div
              className="section-tag"
              style={{ color: 'var(--inox-steel)' }}
            >
              Pro partnery &amp; distributory
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.6rem)',
                fontWeight: 800,
                color: 'var(--inox-white)',
                lineHeight: 1.02,
                letterSpacing: '-0.01em',
                marginBottom: '1.8rem',
              }}
            >
              Produkt,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--inox-steel)', fontWeight: 700 }}>
                který přetrvá.
              </em>
            </h2>
            <p
              style={{
                color: 'var(--inox-parchment)',
                lineHeight: 1.8,
                marginBottom: '1.4rem',
                fontWeight: 400,
                opacity: 0.85,
              }}
            >
              Hledáme architektonická studia, zahradní centra, hotely a facility management
              firmy, které chtějí nabídnout trvalou hodnotu — ne sezónní komoditu.
            </p>
            <p
              style={{
                color: 'var(--inox-parchment)',
                lineHeight: 1.8,
                marginBottom: '2.8rem',
                fontWeight: 400,
                opacity: 0.75,
              }}
            >
              Pracujeme s omezeným počtem partnerů, abychom zaručili kvalitu vztahu
              a dodacích lhůt. Pokud máte zájem — napište nám jako první.
            </p>
            <a
              href="#kontakt"
              className="btn-spring"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--inox-white)',
                background: 'var(--inox-accent)',
                border: 'none',
                padding: '0.95rem 2.4rem',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.18s cubic-bezier(0.34,1.56,0.64,1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--inox-accent-hover)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--inox-accent)';
              }}
            >
              Stát se partnerem →
            </a>
          </div>

          {/* Right — image */}
          <div
            className="reveal reveal-delay-2"
            style={{
              position: 'relative',
              height: '460px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={IMG_B2B}
              alt="Nerezové modulární nádoby — ukázka pro firemní projekty"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 960px) 100vw, 50vw"
            />
            {/* Coral corner label — UFO element */}
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '-1px',
                background: 'var(--inox-accent)',
                padding: '0.6rem 1.2rem',
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '0.6rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--inox-white)',
              }}
            >
              Limitovaný počet partnerů
            </div>
          </div>
        </div>

        {/* Benefits cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            border: '1px solid rgba(200,205,216,0.15)',
          }}
          className="b2b-benefits-grid"
        >
          {B2B_BENEFITS.map((b, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                padding: '2rem 1.5rem',
                borderRight: i < 3 ? '1px solid rgba(200,205,216,0.15)' : 'none',
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  color: 'var(--inox-accent)',
                  marginBottom: '0.8rem',
                }}
              >
                {b.num}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--inox-white)',
                  marginBottom: '0.6rem',
                  letterSpacing: '0.02em',
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  fontSize: '0.86rem',
                  color: 'var(--inox-parchment)',
                  lineHeight: 1.7,
                  fontWeight: 400,
                  margin: 0,
                  opacity: 0.8,
                }}
              >
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .b2b-benefits-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .b2b-benefits-grid > div:nth-child(2) { border-right: none !important; }
          .b2b-benefits-grid > div:nth-child(1),
          .b2b-benefits-grid > div:nth-child(2) { border-bottom: 1px solid rgba(200,205,216,0.15) !important; }
          .b2b-benefits-grid > div:nth-child(3) { border-right: 1px solid rgba(200,205,216,0.15) !important; }
        }
        @media (max-width: 600px) {
          .b2b-benefits-grid {
            grid-template-columns: 1fr !important;
          }
          .b2b-benefits-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(200,205,216,0.15) !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── Konfigurátor ───────────────────────────────────────────────────────
type TvaryKey = 'rovne' | 'L' | 'U' | 'custom';
type VyskaKey = '35' | '55' | '70' | '90';
type PovrchKey = 'satine' | 'zrcadlo' | 'matny';
type ExtrasKey = 'izolace' | 'zavlaha' | 'kolecka';

const TVARY: { key: TvaryKey; label: string }[] = [
  { key: 'rovne', label: 'Přímá linka' },
  { key: 'L', label: 'L-tvar' },
  { key: 'U', label: 'U-tvar' },
  { key: 'custom', label: 'Vlastní tvar' },
];
const VYSKY: { key: VyskaKey; label: string }[] = [
  { key: '35', label: '35 cm' },
  { key: '55', label: '55 cm' },
  { key: '70', label: '70 cm' },
  { key: '90', label: '90 cm' },
];
const POVRCHY: { key: PovrchKey; label: string; note: string }[] = [
  { key: 'satine', label: 'Saténový brus', note: '(standard)' },
  { key: 'zrcadlo', label: 'Zrcadlový lesk', note: '(+12 %)' },
  { key: 'matny', label: 'Jemný mat', note: '(+6 %)' },
];
const EXTRAS: { key: ExtrasKey; label: string; price: number }[] = [
  { key: 'izolace', label: 'Zimní zateplení', price: 1800 },
  { key: 'zavlaha', label: 'Samozavlažování', price: 2400 },
  { key: 'kolecka', label: 'Zvedací kolečka', price: 900 },
];

const BASE_PRICES: Record<TvaryKey, number> = {
  rovne: 14500,
  L: 22000,
  U: 31000,
  custom: 0,
};
const HEIGHT_MULT: Record<VyskaKey, number> = {
  '35': 1.0,
  '55': 1.25,
  '70': 1.45,
  '90': 1.65,
};
const SURFACE_MULT: Record<PovrchKey, number> = {
  satine: 1.0,
  zrcadlo: 1.12,
  matny: 1.06,
};

function KonfiguratorSection() {
  const [tvar, setTvar] = useState<TvaryKey>('rovne');
  const [vyska, setVyska] = useState<VyskaKey>('55');
  const [povrch, setPovrch] = useState<PovrchKey>('satine');
  const [extras, setExtras] = useState<Set<ExtrasKey>>(new Set());

  const toggleExtra = (key: ExtrasKey) => {
    setExtras((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const isCustom = tvar === 'custom';
  const basePrice = BASE_PRICES[tvar];
  const extrasPrice = Array.from(extras).reduce((sum, k) => sum + EXTRAS.find((e) => e.key === k)!.price, 0);
  const totalRaw = basePrice * HEIGHT_MULT[vyska] * SURFACE_MULT[povrch] + extrasPrice;
  const total = isCustom ? null : Math.round(totalRaw / 100) * 100;

  const fmt = (n: number) =>
    new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 0 }).format(n);

  const btnActive: React.CSSProperties = {
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '0.8rem',
    letterSpacing: '0.06em',
    padding: '0.55rem 1.2rem',
    border: '1px solid var(--inox-accent)',
    background: 'var(--inox-accent)',
    color: 'var(--inox-white)',
    cursor: 'pointer',
    transition: 'all 0.18s',
  };

  const btnInactive: React.CSSProperties = {
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '0.8rem',
    letterSpacing: '0.06em',
    padding: '0.55rem 1.2rem',
    border: '1px solid var(--inox-parchment)',
    background: 'transparent',
    color: 'var(--inox-soil)',
    cursor: 'pointer',
    transition: 'all 0.18s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '0.6rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--inox-stone)',
    marginBottom: '0.5rem',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '0.9rem',
    fontWeight: 400,
    color: 'var(--inox-bark)',
    background: 'var(--inox-white)',
    border: '1px solid var(--inox-parchment)',
    padding: '0.85rem 1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section
      id="konfigurator"
      style={{
        background: 'var(--inox-white)',
        padding: '7rem 2rem',
        borderTop: '1px solid var(--inox-parchment)',
      }}
    >
      <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ display: 'block' }}>
            Nezávazný konfigurátor
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
              fontWeight: 800,
              color: 'var(--inox-bark)',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
              maxWidth: '560px',
            }}
          >
            Sestavte si svou nádobu.
          </h2>
          <p
            style={{
              color: 'var(--inox-stone)',
              fontWeight: 400,
              maxWidth: '480px',
              margin: '1rem 0 0',
              lineHeight: 1.7,
              fontSize: '0.95rem',
            }}
          >
            Orientační ceny. Přesná nabídka vždy na základě výkresu a konzultace.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="config-layout"
        >
          {/* Left — controls */}
          <div className="reveal">
            {/* Tvar */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--inox-stone)',
                  marginBottom: '1rem',
                }}
              >
                Tvar
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {TVARY.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setTvar(t.key)}
                    style={tvar === t.key ? btnActive : btnInactive}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Výška */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--inox-stone)',
                  marginBottom: '1rem',
                }}
              >
                Výška
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {VYSKY.map((v) => (
                  <button
                    key={v.key}
                    onClick={() => setVyska(v.key)}
                    style={vyska === v.key ? btnActive : btnInactive}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Povrch */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--inox-stone)',
                  marginBottom: '1rem',
                }}
              >
                Povrch
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {POVRCHY.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => setPovrch(p.key)}
                    style={povrch === p.key ? btnActive : btnInactive}
                  >
                    {p.label}{' '}
                    <span style={{ opacity: 0.65, fontSize: '0.72rem' }}>{p.note}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--inox-stone)',
                  marginBottom: '1rem',
                }}
              >
                Volitelné příplatky
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {EXTRAS.map((ex) => {
                  const active = extras.has(ex.key);
                  return (
                    <button
                      key={ex.key}
                      onClick={() => toggleExtra(ex.key)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontFamily: 'var(--font-jakarta), sans-serif',
                        fontSize: '0.85rem',
                        padding: '0.7rem 1.2rem',
                        border: `1px solid ${active ? 'var(--inox-accent)' : 'var(--inox-parchment)'}`,
                        background: active ? 'rgba(45,106,79,0.06)' : 'transparent',
                        color: 'var(--inox-soil)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.18s',
                      }}
                    >
                      <span>
                        {active ? '✓ ' : '+ '}
                        {ex.label}
                      </span>
                      <span style={{ color: 'var(--inox-stone)', fontSize: '0.8rem' }}>
                        {fmt(ex.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — price card */}
          <div
            className="reveal reveal-delay-2"
            style={{
              background: 'var(--inox-bark)',
              padding: '2.5rem 2rem',
              position: 'sticky',
              top: '5rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--inox-steel)',
                marginBottom: '1.5rem',
                opacity: 0.75,
              }}
            >
              Orientační cena od
            </div>

            {isCustom ? (
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--inox-white)',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}
              >
                Na základě výkresu
              </div>
            ) : (
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  color: 'var(--inox-white)',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {fmt(total!)}
              </div>
            )}

            {!isCustom && (
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--inox-steel)',
                  marginBottom: '2rem',
                  lineHeight: 1.5,
                  opacity: 0.7,
                }}
              >
                Bez DPH · Orientační cena · Nezahrnuje dopravu
              </div>
            )}

            {/* Summary list */}
            <div
              style={{
                borderTop: '1px solid rgba(200,205,216,0.18)',
                paddingTop: '1.2rem',
                marginBottom: '2rem',
                fontSize: '0.8rem',
                color: 'var(--inox-steel)',
                lineHeight: 2,
                opacity: 0.8,
              }}
            >
              <div>{TVARY.find((t) => t.key === tvar)?.label}</div>
              <div>Výška {vyska} cm</div>
              <div>{POVRCHY.find((p) => p.key === povrch)?.label}</div>
              {Array.from(extras).map((k) => (
                <div key={k}>+ {EXTRAS.find((e) => e.key === k)?.label}</div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="btn-spring"
              style={{
                display: 'block',
                textAlign: 'center',
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--inox-white)',
                background: 'var(--inox-accent)',
                padding: '0.9rem 1rem',
                textDecoration: 'none',
                transition: 'background 0.2s, transform 0.18s cubic-bezier(0.34,1.56,0.64,1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--inox-accent-hover)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--inox-accent)';
              }}
            >
              Poslat poptávku →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .config-layout {
            grid-template-columns: 1fr !important;
          }
          .config-layout > div:last-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── FAQ ────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'Jak dlouho nerezová nádoba vydrží?',
    a: 'Ocel AISI 304 odolává korozí, UV záření i průmyslovým exhalátům. Při standardním venkovním používání vydrží desítky let bez jakékoliv povrchové úpravy. Poskytujeme záruku 10 let na materiál a sváry.',
  },
  {
    q: 'Jaké rostliny v nádobě mohu pěstovat?',
    a: 'Prakticky vše — byliny, trvalky, keře i stromy. Se zimním zateplením snadno přezimují i subtropické druhy: fíky, olivy, citrusy, datlovníky. Kořeny jsou chráněny před mrazem do −20 °C.',
  },
  {
    q: 'Co zahrnuje samozavlažování?',
    a: 'Zásobní nádrž v základně zásobuje půdu kapilárně. Rostliny čerpají vodu přesně dle potřeby. Nádrž doplňujete jednou za 1–3 týdny. Senzor hladiny je volitelný doplněk.',
  },
  {
    q: 'Jaká je dodací lhůta?',
    a: 'Standardní zakázka: 3–5 týdnů. Větší či nestandardní projekty: po konzultaci. Po potvrzení objednávky vás vždy informujeme o přesném termínu.',
  },
  {
    q: 'Mohu nádobu přesunout po přestěhování?',
    a: 'Ano. Modulární systém umožňuje demontáž, přepravu a opětovnou montáž na novém místě. Žádná ztráta investice, žádný odpad.',
  },
  {
    q: 'Jak probíhá objednávka na míru?',
    a: 'Kontaktujte nás přes formulář nebo telefonicky. Odešleme vám návrh výkresu a cenovou nabídku do 24 hodin. Po schválení výkresu a záloze zahájíme výrobu.',
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{
        background: 'var(--inox-cream)',
        padding: '7rem 2rem',
        borderTop: '1px solid var(--inox-parchment)',
      }}
    >
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ display: 'block' }}>
            Časté dotazy
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 800,
              color: 'var(--inox-bark)',
              lineHeight: 1.02,
              letterSpacing: '-0.01em',
            }}
          >
            Máte otázky?
          </h2>
        </div>

        <div style={{ borderTop: '1px solid var(--inox-parchment)' }}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="reveal"
                style={{ borderBottom: '1px solid var(--inox-parchment)' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.5rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-jakarta), sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--inox-bark)',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      width: '28px',
                      height: '28px',
                      flexShrink: 0,
                      background: isOpen ? 'var(--inox-accent)' : 'transparent',
                      border: `1px solid ${isOpen ? 'var(--inox-accent)' : 'var(--inox-parchment)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      color: isOpen ? 'var(--inox-white)' : 'var(--inox-stone)',
                      transition: 'all 0.25s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--inox-stone)',
                      lineHeight: 1.75,
                      fontWeight: 400,
                      paddingBottom: '1.5rem',
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Kontakt ────────────────────────────────────────────────────────────
type FormData = {
  jmeno: string;
  email: string;
  telefon: string;
  zprava: string;
  typ: string;
};
type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

function KontaktSection() {
  const [form, setForm] = useState<FormData>({
    jmeno: '',
    email: '',
    telefon: '',
    zprava: '',
    typ: 'soukromy',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('server error');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '0.9rem',
    fontWeight: 400,
    color: 'var(--inox-white)',
    background: 'rgba(253,251,247,0.06)',
    border: '1px solid rgba(163,184,158,0.3)',
    padding: '0.85rem 1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '0.6rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--inox-leaf)',
    marginBottom: '0.5rem',
    opacity: 0.7,
  };

  return (
    <section
      id="kontakt"
      style={{
        background: 'var(--inox-green-deep)',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="section-grid"
        >
          {/* Left — info */}
          <div className="reveal">
            <div
              className="section-tag"
              style={{ color: 'var(--inox-leaf)' }}
            >
              Kontakt
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 'clamp(2.2rem, 3.8vw, 3.6rem)',
                fontWeight: 800,
                color: 'var(--inox-white)',
                lineHeight: 1.02,
                letterSpacing: '-0.01em',
                marginBottom: '2rem',
              }}
            >
              Začněme rozhovorem.
            </h2>
            <p
              style={{
                color: 'var(--inox-leaf)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
                fontWeight: 400,
                opacity: 0.85,
                maxWidth: '420px',
              }}
            >
              Každý projekt začíná konzultací. Napište nám nebo zavolejte —
              odpovídáme do 24 hodin. Nabídku připravíme bezplatně a bez závazku.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {[
                { label: 'E-mail', value: 'info@atelier-inox.cz' },
                { label: 'Telefon', value: '+420 777 000 000' },
                { label: 'Výroba', value: 'Brno, Česká republika' },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-jakarta), sans-serif',
                      fontSize: '0.58rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--inox-leaf)',
                      opacity: 0.6,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jakarta), sans-serif',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--inox-white)',
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-2">
            {status === 'error' && (
              <div style={{
                background: 'rgba(220,50,50,0.1)', border: '1px solid rgba(220,50,50,0.4)',
                padding: '0.85rem 1.2rem', marginBottom: '1.2rem',
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '0.85rem', color: '#ff8080',
              }}>
                Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo nás kontaktujte přímo.
              </div>
            )}
            {status === 'sent' ? (
              <div
                style={{
                  background: 'rgba(163,184,158,0.1)',
                  border: '1px solid var(--inox-leaf)',
                  padding: '3rem 2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-jakarta), sans-serif',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--inox-leaf)',
                    marginBottom: '1rem',
                  }}
                >
                  Děkujeme.
                </div>
                <p
                  style={{
                    color: 'var(--inox-leaf)',
                    fontWeight: 400,
                    opacity: 0.8,
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Vaši zprávu jsme obdrželi. Odpovíme do 24 hodin.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'rgba(253,251,247,0.04)',
                  border: '1px solid rgba(163,184,158,0.2)',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                {/* Typ */}
                <div>
                  <label htmlFor="typ" style={labelStyle}>
                    Typ poptávky
                  </label>
                  <select
                    id="typ"
                    name="typ"
                    value={form.typ}
                    onChange={handleChange}
                    style={{ ...inputStyle }}
                    required
                  >
                    <option value="soukromy">Soukromý zákazník</option>
                    <option value="architekt">Architekt / designér</option>
                    <option value="developer">Developer / správce nemovitostí</option>
                    <option value="partner">Distributor / obchodní partner</option>
                    <option value="hotel">Hotel / resort</option>
                  </select>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                  }}
                  className="form-row"
                >
                  <div>
                    <label htmlFor="jmeno" style={labelStyle}>
                      Jméno *
                    </label>
                    <input
                      id="jmeno"
                      name="jmeno"
                      type="text"
                      value={form.jmeno}
                      onChange={handleChange}
                      placeholder="Jan Novák"
                      required
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--inox-accent)')}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(163,184,158,0.3)')}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefon" style={labelStyle}>
                      Telefon
                    </label>
                    <input
                      id="telefon"
                      name="telefon"
                      type="tel"
                      value={form.telefon}
                      onChange={handleChange}
                      placeholder="+420 777 000 000"
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--inox-accent)')}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(163,184,158,0.3)')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jan.novak@firma.cz"
                    required
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--inox-accent)')}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(163,184,158,0.3)')}
                  />
                </div>

                <div>
                  <label htmlFor="zprava" style={labelStyle}>
                    Popište váš projekt
                  </label>
                  <textarea
                    id="zprava"
                    name="zprava"
                    value={form.zprava}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Rozměry prostoru, přibližný počet kusů, speciální požadavky…"
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = 'var(--inox-accent)')}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = 'rgba(163,184,158,0.3)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  onClick={() => { if (status === 'error') setStatus('idle'); }}
                  className="btn-spring"
                  style={{
                    fontFamily: 'var(--font-jakarta), sans-serif',
                    fontSize: '0.72rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--inox-white)',
                    background: 'var(--inox-accent)',
                    border: 'none',
                    padding: '1rem 2rem',
                    cursor: status === 'sending' ? 'wait' : 'pointer',
                    transition: 'background 0.2s, transform 0.18s cubic-bezier(0.34,1.56,0.64,1)',
                    opacity: status === 'sending' ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'sending')
                      (e.currentTarget as HTMLElement).style.background = 'var(--inox-accent-hover)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--inox-accent)';
                  }}
                >
                  {status === 'sending' ? 'Odesílám…' : status === 'error' ? 'Zkusit znovu →' : 'Odeslat poptávku →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        background: 'var(--inox-bark)',
        padding: '3.5rem 2rem',
        borderTop: '1px solid rgba(200,205,216,0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '1.15rem',
              letterSpacing: '0.12em',
              color: 'var(--inox-white)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '0.3rem',
            }}
          >
            Atelier Inox
          </div>
          <div
            style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '0.62rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--inox-steel)',
              opacity: 0.55,
            }}
          >
            Nerezové modulární nádoby · Brno
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {[
            { href: '#pribeh', label: 'Příběh' },
            { href: '#system', label: 'Systém' },
            { href: '#galerie', label: 'Galerie' },
            { href: '#b2b', label: 'Partneři' },
            { href: '#kontakt', label: 'Kontakt' },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--inox-steel)',
                opacity: 0.55,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.55')}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div
          style={{
            fontFamily: 'var(--font-jakarta), sans-serif',
            fontSize: '0.65rem',
            color: 'var(--inox-steel)',
            opacity: 0.35,
            letterSpacing: '0.08em',
          }}
        >
          © 2026 Atelier Inox
        </div>
      </div>
    </footer>
  );
}

// ── Main export ────────────────────────────────────────────────────────
export default function AtelierInoxBottom() {
  return (
    <>
      <B2BSection />
      <KonfiguratorSection />
      <FAQSection />
      <KontaktSection />
      <Footer />
    </>
  );
}
