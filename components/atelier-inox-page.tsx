'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AtelierInoxSections from './atelier-inox-sections';
import AtelierInoxBottom from './atelier-inox-bottom';

const IMG_HERO =
  'https://assets.macaly-user-data.dev/cdn-cgi/image/format=webp,width=2000,height=2000,fit=scale-down,quality=90,anim=true/bck96tj18jxv1m1t5m5e40s5/new-chat/0LDgSD8L5K5rNTG6IXQNh.JPG';

// ── Nav ──────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#pribeh', label: 'Příběh' },
    { href: '#system', label: 'Systém' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#b2b', label: 'Pro firmy' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.5s, border-color 0.5s, backdrop-filter 0.5s',
      background: 'rgba(58,78,56,0.72)',
      backdropFilter: 'blur(18px) saturate(1.4)',
      WebkitBackdropFilter: 'blur(18px) saturate(1.4)',
      borderBottom: '1px solid rgba(255,255,255,0.10)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

          <a href="#" style={{ textDecoration: 'none' }}>
            <div style={{ lineHeight: 1 }}>
              <div style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '1.5rem', fontWeight: 800,
                letterSpacing: '0.06em', color: '#faf9f6', textTransform: 'uppercase',
              }}>Atelier Inox</div>
              <div style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '0.56rem', letterSpacing: '0.24em',
                textTransform: 'uppercase', color: 'var(--inox-steel)', marginTop: '3px',
              }}>Nerezové modulární nádoby</div>
            </div>
          </a>

          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" style={{
                fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '0.75rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(250,249,246,0.7)',
                textDecoration: 'none', fontWeight: 400,
                position: 'relative', paddingBottom: '3px',
              }}>
                {l.label}
              </a>
            ))}
            <a href="#kontakt" className="btn-spring" style={{
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '0.7rem', letterSpacing: '0.16em',
              textTransform: 'uppercase', color: '#fff',
              background: 'var(--inox-accent)',
              padding: '0.55rem 1.5rem', textDecoration: 'none',
              fontWeight: 600, display: 'inline-block',
              border: '2px solid var(--inox-accent)',
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--inox-accent-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--inox-accent)')}
            >
              Poptávka
            </a>
          </div>

          <button className="nav-mobile" onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '5px',
            }} aria-label="Menu">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: '24px', height: '2px',
                background: '#faf9f6',
                transition: 'transform 0.3s, opacity 0.3s',
                transform:
                  menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 5px)' :
                    menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -5px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: 'var(--inox-bark)', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '1.5rem 0' }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', fontFamily: 'var(--font-jakarta), sans-serif',
                fontSize: '0.85rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'rgba(250,249,246,0.8)',
                textDecoration: 'none', padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>{l.label}</a>
            ))}
            <a href="#kontakt" onClick={() => setMenuOpen(false)} style={{
              display: 'inline-block', marginTop: '1.25rem',
              fontFamily: 'var(--font-jakarta), sans-serif',
              fontSize: '0.72rem', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: '#fff',
              background: 'var(--inox-accent)',
              padding: '0.75rem 2rem', textDecoration: 'none',
            }}>Poptávka</a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────
function HeroSection() {

  return (
    <section style={{
      minHeight: '100vh',
      background: 'var(--inox-bark)',
      position: 'relative',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }} className="hero-outer">

      {/* Left — text column */}
      <div style={{
        paddingTop: '72px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'calc(72px + 4rem) 2rem 4rem clamp(2rem, 8vw, 6rem)',
        position: 'relative',
        zIndex: 2,
      }}>

        {/* Label */}
        <div className="hero-anim hero-anim-1" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.7rem',
          marginBottom: '2rem',
        }}>
          <span style={{
            width: '24px', height: '2px', background: 'var(--inox-accent)', display: 'inline-block', flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--font-jakarta), sans-serif',
            fontSize: '0.65rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'var(--inox-accent)', fontWeight: 600,
          }}>Rodinná výroba Brno · AISI 304</span>
        </div>

        {/* Headline */}
        <h1 className="hero-anim hero-anim-2" style={{
          fontFamily: 'var(--font-jakarta), sans-serif',
          fontSize: 'clamp(3.2rem, 6vw, 6.4rem)',
          fontWeight: 800,
          color: '#fafaf8',
          lineHeight: 1.0,
          marginBottom: '2rem',
          letterSpacing: '-0.03em',
        }}>
          Nádoby,<br />
          <span style={{ color: 'var(--inox-accent)' }}>které</span><br />
          rostou<br />
          s vámi.
        </h1>

        <p className="hero-anim hero-anim-3" style={{
          fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
          color: 'rgba(250,249,246,0.6)',
          maxWidth: '400px',
          lineHeight: 1.75,
          marginBottom: '2.8rem',
          fontWeight: 400,
        }}>
          Modulární nerezový systém pro terasy a zahrady.
          Sestavíte přesně takový tvar, jaký potřebujete —
          se zateplením i samozavlažováním.
        </p>

        {/* CTAs */}
        <div className="hero-anim hero-anim-4"
          style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <a href="#system" className="btn-spring" style={{
            fontFamily: 'var(--font-jakarta), sans-serif',
            fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#fff', background: 'var(--inox-accent)',
            border: '2px solid var(--inox-accent)',
            padding: '1rem 2.4rem', textDecoration: 'none',
            fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--inox-accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--inox-accent)')}
          >
            Objevit systém →
          </a>
          <a href="#galerie" style={{
            fontFamily: 'var(--font-jakarta), sans-serif',
            fontSize: '0.75rem', letterSpacing: '0.1em',
            color: 'rgba(250,249,246,0.55)', textDecoration: 'none',
            fontWeight: 400, display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            borderBottom: '1px solid rgba(250,249,246,0.2)', paddingBottom: '2px',
          }}>
            Zobrazit realizace
          </a>
        </div>

        {/* Stats row */}
        <div className="hero-anim hero-anim-5" style={{
          display: 'flex', gap: '0',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '2rem', flexWrap: 'wrap',
        }}>
          {[
            { num: '25+', label: 'let životnosti' },
            { num: '∞', label: 'kombinací tvarů' },
            { num: 'CZ', label: 'ruční výroba Brno' },
          ].map((s, i, arr) => (
            <div key={s.label} style={{
              paddingRight: '2.5rem',
              marginRight: i < arr.length - 1 ? '2.5rem' : 0,
              borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-jakarta), sans-serif', fontSize: '2.2rem',
                fontWeight: 800, color: '#fafaf8',
                lineHeight: 1, marginBottom: '0.3rem',
              }}>{s.num}</div>
              <div style={{
                fontSize: '0.6rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--inox-steel)', fontWeight: 400,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — product photo (bleeds to edge) */}
      <div style={{ position: 'relative', overflow: 'hidden' }} className="hero-img-col">
        <Image
          src={IMG_HERO}
          alt="Nerezové modulární nádoby na terase — Atelier Inox"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          sizes="(max-width: 960px) 100vw, 50vw"
        />
        {/* Dark tint overlay blending into left column */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(46,61,46,0.5) 0%, rgba(46,61,46,0.04) 50%, transparent 100%)',
        }} />


      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: 'clamp(2rem, 8vw, 6rem)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
        zIndex: 3,
      }}>
        <span style={{
          fontFamily: 'var(--font-jakarta), sans-serif',
          fontSize: '0.55rem', letterSpacing: '0.22em',
          textTransform: 'uppercase', color: 'rgba(250,249,246,0.3)',
          writingMode: 'vertical-rl',
        }}>Scroll</span>
        <div style={{
          width: '1px', height: '48px',
          background: 'linear-gradient(to bottom, rgba(250,249,246,0.3), transparent)',
          animation: 'scrollPulse 2.5s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        /* Hero entrance */
        .hero-anim {
          opacity: 0;
          transform: translateY(14px);
          animation: heroEnter 0.9s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .hero-anim-1 { animation-delay: 0.06s; }
        .hero-anim-2 { animation-delay: 0.18s; }
        .hero-anim-3 { animation-delay: 0.30s; }
        .hero-anim-4 { animation-delay: 0.44s; }
        .hero-anim-5 { animation-delay: 0.56s; }

        @keyframes heroEnter {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.9; }
        }

        /* Nav link animated underline */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: var(--inox-accent);
          transition: width 0.3s cubic-bezier(0.23,1,0.32,1);
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #faf9f6 !important; }

        @media (max-width: 960px) {
          .hero-outer { grid-template-columns: 1fr !important; }
          .hero-img-col { height: 380px; order: -1; }
          .hero-img-col .hero-anim { display: none; }
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
        @media (min-width: 961px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}

// ── Main page assembly ────────────────────────────────────────────────
export default function AtelierInoxPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--inox-cream)' }}>
      <Nav />
      <main>
        <HeroSection />
        <AtelierInoxSections />
        <AtelierInoxBottom />
      </main>
    </div>
  );
}
