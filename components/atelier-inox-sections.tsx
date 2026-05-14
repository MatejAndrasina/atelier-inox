'use client';

import Image from 'next/image';

// ── Image URLs ──────────────────────────────────────────────────────
const IMG_STORY =
  'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/bck96tj18jxv1m1t5m5e40s5/new-chat/Oiu5UU_KJ8IpZfKNePZX-.JPG';
const IMG_GAL_TALL =
  'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/bck96tj18jxv1m1t5m5e40s5/new-chat/IzDt7ysgKqXzuXVxG_Rd4.JPG';
const IMG_GAL_1 =
  'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/bck96tj18jxv1m1t5m5e40s5/new-chat/rwoBej8LWGoqk7FL4J0GL.JPG';
const IMG_GAL_2 =
  'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/bck96tj18jxv1m1t5m5e40s5/new-chat/7dIqprTHZRYaxbxhsZ_mY.JPG';
const IMG_MODULAR =
  'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/bck96tj18jxv1m1t5m5e40s5/new-chat/hDH5qF62CBFzjcjXJpUyV.JPG';

// ── Divider ────────────────────────────────────────────────
function BotanicalDivider() {
  return (
    <div
      style={{
        background: 'var(--inox-bark)',
        textAlign: 'center',
        padding: '1.8rem 2rem',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
        <div style={{ flex: 1, maxWidth: '120px', height: '1px', background: 'rgba(45,106,79,0.25)' }} />
        <span
          style={{
            fontFamily: 'var(--font-jakarta), sans-serif',
            fontSize: '0.65rem',
            fontWeight: 600,
            color: 'var(--inox-accent)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Trvale · Modulárně · Z Brna
        </span>
        <div style={{ flex: 1, maxWidth: '120px', height: '1px', background: 'rgba(45,106,79,0.25)' }} />
      </div>
    </div>
  );
}

// ── Příběh ───────────────────────────────────────────────────────────
function PribehSection() {
  return (
    <section
      id="pribeh"
      style={{
        background: 'var(--inox-cream)',
        padding: '7rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
        className="section-grid"
      >
        {/* Left — image with overlapping label */}
        <div
          className="reveal"
          style={{
            position: 'relative',
            height: '540px',
            overflow: 'hidden',
          }}
        >
          <Image
            src={IMG_STORY}
            alt="Nerezové nádoby s rostlinami na brněnské terase v létě"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 960px) 100vw, 50vw"
          />

        </div>

        {/* Right — story */}
        <div className="reveal reveal-delay-2">
          <div className="section-tag">Náš příběh</div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              fontWeight: 800,
              color: 'var(--inox-bark)',
              marginBottom: '1.8rem',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
            }}
          >
            Zrodilo se<br />z frustrace.
          </h2>
          <p
            style={{
              color: 'var(--inox-soil)',
              marginBottom: '1.2rem',
              lineHeight: 1.75,
              fontWeight: 400,
              fontSize: '1rem',
            }}
          >
            Hledali jsme nádoby na naši brněnskou terasu. Kvalitní, trvanlivé —
            takové, které přežijí desítky zim bez jediného nátěru.
            Nic takového jsme nenašli. Buď plast, nebo přepálená cena za průměrné provedení.
            Rozhodli jsme se je udělat sami.
          </p>
          <p
            style={{
              color: 'var(--inox-soil)',
              marginBottom: '1.2rem',
              lineHeight: 1.75,
              fontWeight: 400,
              fontSize: '1rem',
            }}
          >
            Táta přišel s nápadem: nerezová ocel vydrží generace. Modulární systém
            znamená, že každý projekt je jedinečný — žádné katalogové kompromisy.
            Zateplení a samozavlažování z toho dělá chytrou pomůcku, ne jen dekoraci.
          </p>
          <p
            style={{
              color: 'var(--inox-soil)',
              marginBottom: '2.5rem',
              lineHeight: 1.75,
              fontWeight: 400,
              fontSize: '1rem',
            }}
          >
            Dnes vyrábíme ručně v České republice. Každá nádoba je zakázková. Každá
            vydrží déle, než se odvážíme počítat. Přímý výrobce = férová cena
            a plná odpovědnost za každý svar.
          </p>
          <div
            style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--inox-stone)',
              borderTop: '2px solid var(--inox-parchment)',
              paddingTop: '1.2rem',
            }}
          >
            Rodinná výroba, Brno
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Systém — Bento Box Grid ───────────────────────────────────────────
const FEATURES = [
  {
    num: '01',
    title: 'Modulární tvarování',
    body: 'Panely a rohy se zaklesnou do libovolného tvaru — přímá linka, L-tvar, U-tvar nebo vlastní konfigurace. Přesně na váš prostor.',
    wide: true,     // spans 2 cols in row 1
    dark: true,
  },
  {
    num: '02',
    title: 'Zimní zateplení',
    body: 'Izolační panely chrání kořeny až do −20 °C. Fíky, olivy, citrusy přezimují venku bez přesunu dovnitř.',
    wide: false,
    dark: false,
  },
  {
    num: '03',
    title: 'Samozavlažování',
    body: 'Zásobní nádrž v základně zásobuje půdu kapilárně. Doplnění jednou za 1–3 týdny.',
    wide: false,
    tall: true,    // spans 2 rows in col 4
    dark: true,
  },
  {
    num: '04',
    title: 'Nerezová ocel AISI 304',
    body: 'Stejný materiál jako chirurgické nástroje. Žádná koroze, žádný nátěr, žádná péče. Navždy.',
    wide: false,
    dark: false,
  },
  {
    num: '05',
    title: 'Rozměry na míru',
    body: 'Sdělte nám rozměry prostoru. My navrhneme optimální konfiguraci.',
    wide: false,
    dark: false,
  },
  {
    num: '06',
    title: 'Udržitelná volba',
    body: '100% recyklovatelná ocel. Žádná plastová pojiva, žádný mikroplastový odpad. Jedna investice na celý život.',
    wide: true,    // spans 2 cols in row 2
    dark: false,
  },
];

function SystemSection() {
  return (
    <section
      id="system"
      style={{
        background: 'var(--inox-bark)',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            marginBottom: '4rem',
            alignItems: 'end',
          }}
          className="section-grid"
        >
          <div className="reveal">
            <div className="section-tag" style={{ color: 'var(--inox-accent)' }}>
              <span style={{ width: '20px', height: '2px', background: 'var(--inox-accent)', display: 'inline-block' }} />
              Systém
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                fontWeight: 800,
                color: '#faf9f6',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
              }}
            >
              Šest důvodů,<br />proč nerez.
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <p style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '1rem',
              fontWeight: 400,
              color: 'rgba(250,249,246,0.55)',
              lineHeight: 1.75,
              borderLeft: '3px solid var(--inox-accent)',
              paddingLeft: '1.2rem',
              margin: 0,
            }}>
              Žádná plastová pojiva, žádné nátěry, žádný mikroplastový odpad do půdy.
              Jen čistý kov a čistý záměr.
            </p>
          </div>
        </div>

        {/* Bento Box Grid — 3 cols, varied sizes */}
        <div
          className="bento-grid reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: 'minmax(200px, auto)',
            gap: '1px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Card 01 — wide (spans 2 cols) */}
          <div style={{
            gridColumn: 'span 2',
            background: 'var(--inox-dusk)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '220px',
          }}>
            <div style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '0.6rem', fontWeight: 600,
              color: 'var(--inox-accent)', letterSpacing: '0.22em', textTransform: 'uppercase',
            }}>01</div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
                fontWeight: 800, color: '#faf9f6',
                marginBottom: '0.8rem', lineHeight: 1.05, letterSpacing: '-0.015em',
              }}>Modulární tvarování</h3>
              <p style={{
                fontSize: '0.9rem', color: 'rgba(250,249,246,0.55)',
                lineHeight: 1.7, fontWeight: 400, margin: 0, maxWidth: '480px',
              }}>
                Panely a rohy se zaklesnou do libovolného tvaru — přímá linka, L-tvar,
                U-tvar nebo zcela vlastní konfigurace. Přesně na váš prostor, bez kompromisů.
              </p>
            </div>
          </div>

          {/* Card 03 — tall (spans 2 rows in col 3) */}
          <div style={{
            gridRow: 'span 2',
            background: 'var(--inox-green-deep)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '0.6rem', fontWeight: 600,
              color: 'var(--inox-leaf)', letterSpacing: '0.22em', textTransform: 'uppercase',
            }}>03</div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 'clamp(1.4rem, 2vw, 1.9rem)',
                fontWeight: 800, color: '#faf9f6',
                marginBottom: '1rem', lineHeight: 1.05, letterSpacing: '-0.015em',
              }}>Samozavlažování</h3>
              <p style={{
                fontSize: '0.9rem', color: 'rgba(250,249,246,0.6)',
                lineHeight: 1.7, fontWeight: 400, margin: 0,
              }}>
                Zásobní nádrž v základně zásobuje půdu kapilárně. Rostliny čerpají
                přesně tolik, kolik potřebují. Doplnění jednou za 1–3 týdny.
              </p>
            </div>
            <div style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '4rem', fontWeight: 800, color: 'rgba(78,140,98,0.2)',
              lineHeight: 1, marginTop: 'auto',
            }}>
              H₂O
            </div>
          </div>

          {/* Card 02 */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '200px',
            borderRight: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '0.6rem', fontWeight: 600,
              color: 'var(--inox-steel)', letterSpacing: '0.22em', textTransform: 'uppercase',
            }}>02</div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '1.35rem',
                fontWeight: 800, color: '#faf9f6',
                marginBottom: '0.7rem', lineHeight: 1.05, letterSpacing: '-0.01em',
              }}>Zimní zateplení</h3>
              <p style={{
                fontSize: '0.88rem', color: 'rgba(250,249,246,0.5)',
                lineHeight: 1.65, fontWeight: 400, margin: 0,
              }}>
                Izolační panely chrání kořeny až do −20 °C. Subtropické druhy přezimují venku.
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div style={{
            background: 'var(--inox-dusk)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '200px',
          }}>
            <div style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '0.6rem', fontWeight: 600,
              color: 'var(--inox-accent)', letterSpacing: '0.22em', textTransform: 'uppercase',
            }}>04</div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '1.35rem',
                fontWeight: 800, color: '#faf9f6',
                marginBottom: '0.7rem', lineHeight: 1.05, letterSpacing: '-0.01em',
              }}>Nerezová ocel AISI 304</h3>
              <p style={{
                fontSize: '0.88rem', color: 'rgba(250,249,246,0.5)',
                lineHeight: 1.65, fontWeight: 400, margin: 0,
              }}>
                Chirurgická ocel. Žádná koroze, žádný nátěr. Odolnost vůči UV záření i zimě.
              </p>
            </div>
          </div>

          {/* Card 05 */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '200px',
            borderRight: '1px solid rgba(255,255,255,0.06)',
            borderLeft: '1px solid rgba(255,255,255,0.06)',
          }}>
            <div style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '0.6rem', fontWeight: 600,
              color: 'var(--inox-steel)', letterSpacing: '0.22em', textTransform: 'uppercase',
            }}>05</div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '1.35rem',
                fontWeight: 800, color: '#faf9f6',
                marginBottom: '0.7rem', lineHeight: 1.05, letterSpacing: '-0.01em',
              }}>Rozměry na míru</h3>
              <p style={{
                fontSize: '0.88rem', color: 'rgba(250,249,246,0.5)',
                lineHeight: 1.65, fontWeight: 400, margin: 0,
              }}>
                Sdělte nám rozměry prostoru. Navrhneme optimální modulární konfiguraci.
              </p>
            </div>
          </div>

          {/* Card 06 — wide (spans 2 cols) */}
          <div style={{
            gridColumn: 'span 2',
            background: 'rgba(45,106,79,0.08)',
            padding: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '3rem',
            minHeight: '180px',
            borderTop: '1px solid rgba(45,106,79,0.2)',
          }} className="bento-06">
            <div style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '4.5rem', fontWeight: 800,
              color: 'rgba(45,106,79,0.2)', lineHeight: 1, flexShrink: 0,
            }}>06</div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '1.5rem',
                fontWeight: 800, color: '#faf9f6',
                marginBottom: '0.6rem', lineHeight: 1.05, letterSpacing: '-0.01em',
              }}>Udržitelná volba</h3>
              <p style={{
                fontSize: '0.9rem', color: 'rgba(250,249,246,0.5)',
                lineHeight: 1.65, fontWeight: 400, margin: 0,
              }}>
                100% recyklovatelná ocel. Žádná plastová pojiva, žádný mikroplastový odpad do půdy.
                Jedna investice na celý život — nebo mnohem déle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-grid > div[style*="span 2"],
          .bento-grid > div[style*="span 2"] {
            grid-column: span 1 !important;
          }
          .bento-grid > div[style*="span 2"] {
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── Galerie ──────────────────────────────────────────────────────────
function GalerieSection() {
  return (
    <section
      id="galerie"
      style={{
        background: 'var(--inox-cream)',
        padding: '7rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          className="reveal"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '3rem',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="section-tag">Galerie</div>
            <h2
              style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                fontWeight: 800,
                color: 'var(--inox-bark)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
              }}
            >
              Realizace, které<br />mluví za sebe.
            </h2>
          </div>
          <a href="#kontakt" className="btn-spring" style={{
            fontFamily: 'var(--font-jakarta), sans-serif',
            fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#fff', background: 'var(--inox-accent)',
            border: '2px solid var(--inox-accent)',
            padding: '0.9rem 2rem', textDecoration: 'none', fontWeight: 600,
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--inox-accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--inox-accent)')}
          >
            Chci takové →
          </a>
        </div>

        {/* Photo grid: tall left + 2 right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gridTemplateRows: '280px 280px',
            gap: '1rem',
          }}
          className="gallery-grid"
        >
          {/* Tall image (spans 2 rows) */}
          <div
            className="reveal"
            style={{
              gridRow: '1 / 3',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src={IMG_GAL_TALL}
              alt="Nerezová modulární nádoba s mladým stromem — Brno"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top', transition: 'transform 0.6s ease' }}
              sizes="(max-width: 960px) 100vw, 55vw"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.2rem',
                left: '1.2rem',
                background: 'rgba(20,26,20,0.75)',
                backdropFilter: 'blur(8px)',
                padding: '0.45rem 1rem',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--inox-leaf)',
                  fontWeight: 600,
                }}
              >
                Brno · Terasa · Lípa
              </span>
            </div>
          </div>

          {/* Small 1 */}
          <div
            className="reveal reveal-delay-2"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <Image
              src={IMG_GAL_1}
              alt="Nerezové nádoby na brněnské střešní terase — podzimní pohled"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
              sizes="(max-width: 960px) 100vw, 45vw"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.2rem',
                left: '1.2rem',
                background: 'rgba(20,26,20,0.75)',
                backdropFilter: 'blur(8px)',
                padding: '0.45rem 1rem',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--inox-leaf)',
                  fontWeight: 600,
                }}
              >
                Brno · Terasa · 2024
              </span>
            </div>
          </div>

          {/* Small 2 */}
          <div
            className="reveal reveal-delay-3"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <Image
              src={IMG_GAL_2}
              alt="Modulární nádoby L-tvar na střešní terase Brno"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.6s ease' }}
              sizes="(max-width: 960px) 100vw, 45vw"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.2rem',
                left: '1.2rem',
                background: 'rgba(20,26,20,0.75)',
                backdropFilter: 'blur(8px)',
                padding: '0.45rem 1rem',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--inox-leaf)',
                  fontWeight: 600,
                }}
              >
                Brno · Terasa · 2024
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: 260px 260px 260px !important;
          }
          .gallery-grid > div:first-child {
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

// ── Modularita ────────────────────────────────────────────────────────
const MODULE_PIECES = [
  { num: '01', label: 'Boční panel' },
  { num: '02', label: 'Rohový spoj' },
  { num: '03', label: 'Izolace' },
  { num: '04', label: 'Zásobník' },
  { num: '05', label: 'Dno + drenáž' },
  { num: '06', label: 'Horní lem' },
];

function ModularitaSection() {
  return (
    <section
      style={{
        background: 'var(--inox-green-deep)',
        padding: '7rem 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
        }}
        className="section-grid"
      >
        {/* Left — text */}
        <div className="reveal">
          <div
            className="section-tag"
            style={{ color: 'var(--inox-leaf)' }}
          >
            <span style={{ width: '20px', height: '2px', background: 'var(--inox-leaf)', display: 'inline-block' }} />
            Modularita
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              fontWeight: 800,
              color: '#faf9f6',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}
          >
            Jako Lego —<br />ale navěky.
          </h2>
          <p
            style={{
              color: 'rgba(250,249,246,0.65)',
              lineHeight: 1.8,
              marginBottom: '1.4rem',
              fontWeight: 400,
              fontSize: '1rem',
            }}
          >
            Panely se spojí do libovolného tvaru. Izolační vložky se jednoduše zasunou
            mezi ocelové stěny. Volitelná zásobní nádrž se umístí do základny. Výsledek
            je pevný, estetický a trvá desítky let.
          </p>
          <p
            style={{
              color: 'rgba(250,249,246,0.65)',
              lineHeight: 1.8,
              marginBottom: '2.8rem',
              fontWeight: 400,
              fontSize: '1rem',
            }}
          >
            Stěhujete se? Nádoba se rozebere, přepraví a znovu sestaví.
            Žádný odpad, žádná ztráta investice.
          </p>
          <a
            href="#kontakt"
            className="btn-spring"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '0.75rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#fff',
              background: 'var(--inox-accent)',
              border: '2px solid var(--inox-accent)',
              padding: '0.9rem 2.2rem',
              textDecoration: 'none',
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--inox-accent-hover)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--inox-accent-hover)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--inox-accent)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--inox-accent)';
            }}
          >
            Domluvit konzultaci →
          </a>
        </div>

        {/* Right — module grid */}
        <div
          className="reveal reveal-delay-2"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            border: '1px solid rgba(78,140,98,0.2)',
          }}
        >
          {MODULE_PIECES.map((m, i) => (
            <div
              key={m.label}
              style={{
                padding: '1.8rem 1.4rem',
                borderRight: i % 3 !== 2 ? '1px solid rgba(78,140,98,0.15)' : 'none',
                borderBottom: i < 3 ? '1px solid rgba(78,140,98,0.15)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '0.58rem',
                  letterSpacing: '0.15em',
                  color: 'var(--inox-accent)',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                }}
              >
                {m.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(250,249,246,0.75)',
                  fontWeight: 500,
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process ───────────────────────────────────────────────────────────
const STEPS = [
  {
    num: '1',
    title: 'Poptávka',
    body: 'Vyplňte formulář nebo nás zavolejte. Odpovídáme do 24 hodin.',
  },
  {
    num: '2',
    title: 'Návrh',
    body: 'Zašleme výkres a přesnou cenovou nabídku. Bez závazku.',
  },
  {
    num: '3',
    title: 'Výroba',
    body: 'Ruční výroba v ČR. Dodací lhůta 3–5 týdnů.',
  },
  {
    num: '4',
    title: 'Dodání',
    body: 'Doručení a montáž kdekoliv v ČR a SR.',
  },
];

function ProcessSection() {
  return (
    <section
      style={{
        background: 'var(--inox-cream)',
        padding: '7rem 2rem',
        borderTop: '1px solid var(--inox-parchment)',
        borderBottom: '1px solid var(--inox-parchment)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="reveal">
          <div className="section-tag" style={{ display: 'inline-flex', justifyContent: 'center' }}>
            Jak to funguje
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
              fontWeight: 800,
              color: 'var(--inox-bark)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
            }}
          >
            Od nápadu k hotové nádobě.
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            position: 'relative',
          }}
          className="steps-grid"
        >
          {/* Connector line */}
          <div
            style={{
              position: 'absolute',
              top: '28px',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              background: 'var(--inox-parchment)',
              zIndex: 0,
            }}
            className="steps-line"
          />

          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${i + 1}`}
              style={{ textAlign: 'center', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  background: 'var(--inox-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#fff',
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-jakarta), sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'var(--inox-bark)',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--inox-stone)',
                  lineHeight: 1.7,
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .steps-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem 1rem;
          }
          .steps-line { display: none; }
        }
      `}</style>
    </section>
  );
}

// ── Main export ───────────────────────────────────────────────────────
export default function AtelierInoxSections() {
  return (
    <>
      <BotanicalDivider />
      <PribehSection />
      <SystemSection />
      <GalerieSection />
      <ModularitaSection />
      <ProcessSection />
    </>
  );
}
