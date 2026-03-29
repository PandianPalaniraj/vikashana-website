const stats = [
  { val: '500+',  label: 'Schools Onboarded',    icon: '🏫' },
  { val: '1.2L+', label: 'Students Managed',      icon: '👨‍🎓' },
  { val: '98%',   label: 'Uptime SLA',             icon: '⚡' },
  { val: '4.8★',  label: 'Average App Rating',    icon: '⭐' },
  { val: '30 days', label: 'Free Trial',             icon: '🎁' },
  { val: '24/7',  label: 'WhatsApp Support',       icon: '💬' },
]

export default function Stats() {
  return (
    <section style={{ background:'var(--bg-soft)', padding:'48px 0' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:16 }} className="stats-grid">
          {stats.map(s => (
            <div key={s.label} style={{ textAlign:'center', padding:'20px 12px' }}>
              <div style={{ fontSize:28, marginBottom:6 }}>{s.icon}</div>
              <div style={{ fontSize:'clamp(22px, 3vw, 32px)', fontWeight:900, color:'var(--primary)', lineHeight:1 }}>{s.val}</div>
              <div style={{ fontSize:12, color:'var(--muted)', marginTop:6, lineHeight:1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  )
}
