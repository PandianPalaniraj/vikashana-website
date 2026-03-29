const steps = [
  {
    num: '01',
    title: 'Register Your School',
    desc: 'Sign up in 2 minutes. Tell us your school name, number of students, and admin email. No paperwork.',
    icon: '🏫',
  },
  {
    num: '02',
    title: 'Import Students & Staff',
    desc: 'Upload your existing student list via Excel or add them one by one. Classes and sections are pre-configured.',
    icon: '📥',
  },
  {
    num: '03',
    title: 'Invite Parents',
    desc: 'Parents receive a WhatsApp/SMS with a download link for the mobile app and a one-tap login. No tech skills needed.',
    icon: '📲',
  },
  {
    num: '04',
    title: 'Go Live in a Day',
    desc: 'Start marking attendance, posting homework, collecting fees — everything works from day one. We provide free onboarding.',
    icon: '🚀',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div className="section-tag">Simple Setup</div>
          <h2 className="section-title">Up and Running in One Day</h2>
          <p className="section-sub" style={{ margin:'12px auto 0' }}>
            No IT team needed. No long onboarding. Just register and start using.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0, position:'relative' }} className="hiw-grid">
          {/* Connector line */}
          <div style={{ position:'absolute', top:40, left:'12.5%', right:'12.5%', height:2, background:'linear-gradient(90deg, var(--primary-lt), var(--primary), var(--primary-lt))', zIndex:0 }} className="hiw-line" />

          {steps.map((s, i) => (
            <div key={s.num} style={{ textAlign:'center', padding:'0 16px', position:'relative', zIndex:1 }}>
              <div style={{
                width:80, height:80, borderRadius:'50%',
                background: i % 2 === 0 ? 'var(--primary)' : '#fff',
                border:`3px solid var(--primary)`,
                display:'flex', alignItems:'center', justifyContent:'center',
                margin:'0 auto 24px',
                fontSize:28,
                boxShadow:'var(--shadow)',
              }}>
                {s.icon}
              </div>
              <div style={{ fontSize:11, fontWeight:700, color:'var(--primary)', letterSpacing:2, marginBottom:8, textTransform:'uppercase' }}>{s.num}</div>
              <h3 style={{ fontSize:17, fontWeight:700, marginBottom:10 }}>{s.title}</h3>
              <p style={{ fontSize:13, color:'var(--muted)', lineHeight:1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign:'center', marginTop:56 }}>
          <p style={{ fontSize:15, color:'var(--muted)', marginBottom:20 }}>Our team handles your complete onboarding — for free.</p>
          <a href="https://wa.me/91XXXXXXXXXX?text=Hi%2C%20I%20want%20to%20onboard%20my%20school%20on%20Vikashana"
            target="_blank" rel="noopener" className="btn-primary">
            Start Free Onboarding →
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 820px) {
          .hiw-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px !important; }
          .hiw-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .hiw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
