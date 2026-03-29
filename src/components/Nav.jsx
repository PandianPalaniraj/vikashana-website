import { useState, useEffect } from 'react'
import { WA_DEMO } from '../constants'

const links = [
  { label: 'Features',    href: '#features'    },
  { label: 'Roles',       href: '#roles'        },
  { label: 'How It Works',href: '#how-it-works' },
  { label: 'Pricing',     href: '#pricing'      },
  { label: 'Contact',     href: '#contact'      },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
      background: '#ffffff',
      borderBottom: '1px solid #E2E8F0',
      boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.10)' : '0 1px 12px rgba(0,0,0,0.06)',
      transition: 'box-shadow .3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo-horizontal.svg" alt="Vikashana" style={{ height: 44, width: 'auto' }} />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ fontSize: 14, fontWeight: 500, color: '#374151', textDecoration: 'none', transition: 'color .15s' }}
              onMouseEnter={e => e.target.style.color = '#6366F1'}
              onMouseLeave={e => e.target.style.color = '#374151'}
              onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }} className="desktop-nav">
          <a href="https://app.vikashana.com" target="_blank" rel="noopener"
            style={{ padding: '8px 20px', fontSize: 14, fontWeight: 600, color: '#6366F1', border: '1.5px solid #6366F1', borderRadius: 8, background: 'transparent', textDecoration: 'none', transition: 'all .15s' }}
            onMouseEnter={e => { e.target.style.background = '#EEF2FF' }}
            onMouseLeave={e => { e.target.style.background = 'transparent' }}>
            Login
          </a>
          <a href={WA_DEMO} target="_blank" rel="noopener"
            style={{ padding: '9px 20px', fontSize: 14, fontWeight: 600, color: '#fff', background: '#6366F1', border: 'none', borderRadius: 8, textDecoration: 'none', transition: 'background .15s' }}
            onMouseEnter={e => { e.target.style.background = '#4F46E5' }}
            onMouseLeave={e => { e.target.style.background = '#6366F1' }}>
            Book Demo
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(o => !o)} aria-label="Menu"
          style={{ display: 'none', background: 'none', border: 'none', padding: 6, cursor: 'pointer' }}
          className="mobile-menu-btn">
          <svg width="24" height="24" fill="none" stroke="#374151" strokeWidth="2">
            {open
              ? <><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          background: '#fff', borderTop: '1px solid #e2e8f0',
          padding: '16px 20px 24px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ padding: '10px 0', fontSize: 15, fontWeight: 500, color: '#374151', borderBottom: '1px solid #f1f5f9' }}
              onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
            <a href="https://app.vikashana.com" target="_blank" rel="noopener" className="btn-outline" style={{ flex: 1, justifyContent: 'center', fontSize: 14 }}>Login</a>
            <a href={WA_DEMO} target="_blank" rel="noopener" className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: 14 }}>Book Demo</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
