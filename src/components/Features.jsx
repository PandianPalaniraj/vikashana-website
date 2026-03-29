const features = [
  {
    icon: '📋',
    title: 'Smart Attendance',
    desc: 'Mark attendance in seconds. Parents notified instantly via app when child is absent. Daily & monthly reports.',
    color: '#ede9fe',
  },
  {
    icon: '💰',
    title: 'Fee Management',
    desc: 'Send fee reminders, collect online or offline payments, generate receipts and outstanding reports.',
    color: '#dbeafe',
  },
  {
    icon: '📚',
    title: 'Homework & Exams',
    desc: 'Post homework with due dates, upload exam timetables, publish results — all visible to parents instantly.',
    color: '#dcfce7',
  },
  {
    icon: '🗓️',
    title: 'Timetable',
    desc: 'Build class-wise timetables. Teachers see their schedule. Parents see what subjects are today.',
    color: '#fef9c3',
  },
  {
    icon: '📢',
    title: 'Announcements',
    desc: 'Broadcast school announcements to all parents, a specific class, or an individual student in one tap.',
    color: '#fee2e2',
  },
  {
    icon: '🚌',
    title: 'Transport & Leaves',
    desc: 'Manage bus routes, track student leave applications and approvals — paperless and fast.',
    color: '#f0fdf4',
  },
  {
    icon: '📊',
    title: 'Reports & Analytics',
    desc: 'Attendance trends, fee collection summaries, class-wise performance — exportable to Excel/PDF.',
    color: '#f5f3ff',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Parent Mobile App',
    desc: 'iOS & Android app for parents to track attendance, pay fees, view homework and communicate with school.',
    color: '#fff7ed',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    desc: 'Data encrypted at rest and in transit. 98% uptime SLA. GDPR-compliant. Daily automatic backups.',
    color: '#f0f9ff',
  },
]

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div className="section-tag">Everything You Need</div>
          <h2 className="section-title">One Platform, Every School Need</h2>
          <p className="section-sub" style={{ margin:'12px auto 0' }}>
            From attendance to fee collection, homework to results — Vikashana handles it all
            so you can focus on education.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 }} className="features-grid">
          {features.map(f => (
            <div key={f.title} style={{
              background:'#fff',
              border:'1px solid var(--border)',
              borderRadius:16,
              padding:28,
              transition:'box-shadow .2s, transform .2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow='var(--shadow-lg)'; e.currentTarget.style.transform='translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='none' }}>
              <div style={{ width:48, height:48, borderRadius:12, background:f.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, marginBottom:16 }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize:17, fontWeight:700, marginBottom:8 }}>{f.title}</h3>
              <p style={{ fontSize:14, color:'var(--muted)', lineHeight:1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
