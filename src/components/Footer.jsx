import { WA_DEMO } from '../constants'

const cols = [
  {
    title: 'Product',
    links: [
      { label: 'Features',     href: '#features'    },
      { label: 'Pricing',      href: '#pricing'     },
      { label: 'How It Works', href: '#how-it-works'},
      { label: 'Roles',        href: '#roles'       },
      { label: 'Login',        href: 'https://app.vikashana.com' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',       href: '#' },
      { label: 'Blog',           href: '#' },
      { label: 'Careers',        href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use',   href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center',   href: '#' },
      { label: 'WhatsApp Support', href: WA_DEMO },
      { label: 'Book a Demo',   href: WA_DEMO },
      { label: 'System Status', href: '#' },
      { label: 'Contact Us',    href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background:'#0f172a', color:'#94a3b8', paddingTop:64, paddingBottom:32 }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:40, marginBottom:48 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom:16 }}>
              <img src="/logo-horizontal.svg" alt="Vikashana" style={{ height:32, width:'auto' }} />
            </div>
            <p style={{ fontSize:14, lineHeight:1.7, maxWidth:280, marginBottom:20 }}>
              Complete school management software for Indian schools. Attendance, fees, homework, parent app — all in one place.
            </p>
            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <a href="https://play.google.com/store" target="_blank" rel="noopener"
                style={{ display:'flex', alignItems:'center', gap:8, background:'#1e293b', color:'#fff', padding:'8px 14px', borderRadius:8, fontSize:12, fontWeight:600, border:'1px solid #334155' }}>
                <span style={{ fontSize:16 }}>▶</span> Google Play
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener"
                style={{ display:'flex', alignItems:'center', gap:8, background:'#1e293b', color:'#fff', padding:'8px 14px', borderRadius:8, fontSize:12, fontWeight:600, border:'1px solid #334155' }}>
                <span style={{ fontSize:16 }}>🍎</span> App Store
              </a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize:13, fontWeight:700, color:'#fff', textTransform:'uppercase', letterSpacing:1, marginBottom:16 }}>{col.title}</div>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener"
                      style={{ fontSize:14, color:'#94a3b8', transition:'color .2s' }}
                      onMouseEnter={e => e.target.style.color='#fff'}
                      onMouseLeave={e => e.target.style.color='#94a3b8'}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid #1e293b', paddingTop:24, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <p style={{ fontSize:13 }}>© {new Date().getFullYear()} Vikashana. All rights reserved. Made with ❤️ in India.</p>
          <div style={{ display:'flex', gap:20 }}>
            {['Privacy', 'Terms', 'Cookies'].map(l => (
              <a key={l} href="#" style={{ fontSize:13, color:'#64748b' }}
                onMouseEnter={e => e.target.style.color='#fff'}
                onMouseLeave={e => e.target.style.color='#64748b'}>{l}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
