const roles = [
  {
    role: 'Admin / Principal',
    icon: '👨‍💼',
    color: 'var(--primary)',
    bg: 'var(--primary-lt)',
    perks: [
      'Full school dashboard with KPIs',
      'Manage staff, students, classes',
      'Fee collection & financial reports',
      'Approve leaves & send announcements',
      'Subscription & settings control',
    ],
  },
  {
    role: 'Teacher',
    icon: '👩‍🏫',
    color: '#0891b2',
    bg: '#e0f2fe',
    perks: [
      'Mark attendance in one tap',
      'Post homework & upload materials',
      'View own timetable & next class',
      'Communicate with parents',
      'Submit leave requests',
    ],
  },
  {
    role: 'Parent',
    icon: '👨‍👩‍👧',
    color: '#059669',
    bg: '#d1fae5',
    perks: [
      'Real-time attendance alerts',
      'Pay fees online from app',
      'View homework & exam schedule',
      'School announcements instantly',
      'Direct message with school',
    ],
  },
  {
    role: 'Office Staff',
    icon: '🧑‍💻',
    color: '#d97706',
    bg: '#fef3c7',
    perks: [
      'Admissions pipeline management',
      'Student enrollment & records',
      'Fee receipt generation',
      'Parent communication',
      'Walk-in enquiry tracking',
    ],
  },
]

export default function Roles() {
  return (
    <section id="roles" style={{ background:'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div className="section-tag">Built for Everyone</div>
          <h2 className="section-title">A Tailored Experience for Each Role</h2>
          <p className="section-sub" style={{ margin:'12px auto 0' }}>
            Every person in your school gets the right tools — no clutter, no confusion.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:24 }} className="roles-grid">
          {roles.map(r => (
            <div key={r.role} style={{
              background:'#fff',
              border:`2px solid ${r.bg}`,
              borderRadius:20,
              padding:'28px 24px',
              display:'flex',
              flexDirection:'column',
              gap:0,
            }}>
              <div style={{ width:52, height:52, borderRadius:14, background:r.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, marginBottom:16 }}>
                {r.icon}
              </div>
              <h3 style={{ fontSize:16, fontWeight:700, color:r.color, marginBottom:16 }}>{r.role}</h3>
              <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
                {r.perks.map(p => (
                  <li key={p} style={{ display:'flex', gap:10, alignItems:'flex-start', fontSize:13, color:'#374151', lineHeight:1.5 }}>
                    <span style={{ color:r.color, marginTop:1, flexShrink:0 }}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .roles-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px)  { .roles-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
