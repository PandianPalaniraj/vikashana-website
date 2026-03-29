import { WA_REG } from '../constants'

const plans = [
  {
    name: 'Starter',
    price: '₹15',
    per: '/ student / month',
    desc: 'All web modules, unlimited students. No mobile app.',
    color: '#3b82f6',
    bg: '#eff6ff',
    features: [
      'Unlimited students & teachers',
      'All web modules',
      'Fee management & receipts',
      'Homework & exams',
      'Advanced reports',
      'Parent web portal',
      'Annual billing discount',
    ],
    notIncluded: ['Mobile app (parent & teacher)'],
    cta: 'Start 30-Day Trial',
    href: WA_REG,
    popular: false,
  },
  {
    name: 'Pro',
    price: '₹25',
    per: '/ student / month',
    desc: 'Everything in Starter plus the full mobile experience.',
    color: 'var(--primary)',
    bg: 'var(--primary)',
    features: [
      'Everything in Starter',
      'Parent mobile app',
      'Teacher mobile app',
      'Push notifications',
      'Priority WhatsApp support',
      'Annual billing discount',
    ],
    notIncluded: [],
    cta: 'Start 30-Day Trial',
    href: WA_REG,
    popular: true,
  },
  {
    name: 'Premium',
    price: '₹40',
    per: '/ student / month',
    desc: 'Pro plus payroll and GPS transport tracking.',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    features: [
      'Everything in Pro',
      'Teacher payroll module',
      'Transport + GPS tracking',
      'Dedicated support',
      'Custom reports',
    ],
    notIncluded: [],
    cta: 'Start 30-Day Trial',
    href: WA_REG,
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    per: 'pricing',
    desc: 'Multi-campus, custom integrations and dedicated account manager.',
    color: '#d97706',
    bg: '#fffbeb',
    features: [
      'Fully customizable',
      'Multi-campus support',
      'Custom integrations',
      'Dedicated account manager',
      'SLA guarantee',
      'On-premise option',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    href: WA_REG,
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{ background:'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div className="section-tag">Simple Pricing</div>
          <h2 className="section-title">Affordable for Every School</h2>
          <p className="section-sub" style={{ margin:'12px auto 0' }}>
            30-day free trial on all plans. Per-student pricing — pay only for who you manage. No setup fees.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:20, alignItems:'flex-start' }} className="pricing-grid">
          {plans.map(p => (
            <div key={p.name} style={{
              background: p.popular ? p.bg : '#fff',
              border: p.popular ? 'none' : '1px solid var(--border)',
              borderRadius:20,
              padding:'28px 24px 32px',
              position:'relative',
              boxShadow: p.popular ? 'var(--shadow-lg)' : 'none',
              transform: p.popular ? 'scale(1.04)' : 'none',
            }}>
              {p.popular && (
                <div style={{ position:'absolute', top:-14, left:'50%', transform:'translateX(-50%)', background:'#fbbf24', color:'#1c1917', padding:'4px 16px', borderRadius:99, fontSize:12, fontWeight:700, whiteSpace:'nowrap' }}>
                  ⭐ Most Popular
                </div>
              )}

              <div style={{ fontSize:13, fontWeight:700, color: p.popular ? 'rgba(255,255,255,0.7)' : p.color, textTransform:'uppercase', letterSpacing:1, marginBottom:8 }}>{p.name}</div>
              <div style={{ display:'flex', alignItems:'baseline', gap:4, marginBottom:6 }}>
                <span style={{ fontSize:36, fontWeight:900, color: p.popular ? '#fff' : 'var(--text)' }}>{p.price}</span>
                <span style={{ fontSize:13, color: p.popular ? 'rgba(255,255,255,0.6)' : 'var(--muted)' }}>{p.per}</span>
              </div>
              <p style={{ fontSize:13, color: p.popular ? 'rgba(255,255,255,0.7)' : 'var(--muted)', marginBottom:24, lineHeight:1.5 }}>{p.desc}</p>

              <a href={p.href} target="_blank" rel="noopener"
                className={p.popular ? 'btn-white' : 'btn-outline'}
                style={{ width:'100%', justifyContent:'center', display:'flex', marginBottom:24,
                  ...(p.popular ? {} : { borderColor: p.color, color: p.color }) }}>
                {p.cta}
              </a>

              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                {p.features.map(f => (
                  <li key={f} style={{ display:'flex', gap:8, alignItems:'flex-start', fontSize:13,
                    color: p.popular ? 'rgba(255,255,255,0.85)' : '#374151', lineHeight:1.5 }}>
                    <span style={{ color: p.popular ? '#86efac' : '#22c55e', flexShrink:0, marginTop:1 }}>✓</span>
                    {f}
                  </li>
                ))}
                {p.notIncluded.map(f => (
                  <li key={f} style={{ display:'flex', gap:8, alignItems:'flex-start', fontSize:13, color:'#94a3b8', lineHeight:1.5 }}>
                    <span style={{ flexShrink:0, marginTop:1 }}>✕</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p style={{ textAlign:'center', fontSize:13, color:'var(--muted)', marginTop:36 }}>
          All prices exclusive of GST. Annual billing available at 20% discount. Custom pricing for 5+ branches.
        </p>
      </div>
      <style>{`
        @media (max-width: 1024px) { .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .pricing-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
