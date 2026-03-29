const testimonials = [
  {
    name: 'Rekha Menon',
    role: 'Principal, Brilliant Academy, Kochi',
    avatar: 'RM',
    color: '#7c3aed',
    rating: 5,
    text: 'We switched from maintaining registers to Vikashana and the difference is night and day. Attendance takes 2 minutes now. Parents are so happy with the app — they message us asking for more features!',
  },
  {
    name: 'Suresh Patel',
    role: 'Admin, New Era School, Surat',
    avatar: 'SP',
    color: '#0891b2',
    rating: 5,
    text: 'Fee collection used to take our staff a full week every month. With Vikashana, reminders go out automatically and parents pay online. We\'ve reduced pending fees by 40%.',
  },
  {
    name: 'Anita Sharma',
    role: 'Vice Principal, Delhi Public School, Patna',
    avatar: 'AS',
    color: '#059669',
    rating: 5,
    text: 'The onboarding team was incredibly helpful. Within one day our 800 students were on the system. The parent mobile app has a 4.9 rating from our parent community.',
  },
  {
    name: 'Thomas George',
    role: 'Trustee, St. Joseph\'s School, Thrissur',
    avatar: 'TG',
    color: '#d97706',
    rating: 5,
    text: 'We\'ve tried 3 other school ERP systems before Vikashana. This is the only one that actually gets used by all our teachers. The mobile-first design is a big reason why.',
  },
  {
    name: 'Priya Krishnaswamy',
    role: 'Parent, Class 6 student, Chennai',
    avatar: 'PK',
    color: '#e11d48',
    rating: 5,
    text: 'As a working parent I was always worried about missing school updates. Now I get instant notifications about attendance, homework and fees. I feel so connected to my child\'s school.',
  },
  {
    name: 'Mohan Das',
    role: 'Correspondent, Green Valley School, Vizag',
    avatar: 'MD',
    color: '#0284c7',
    rating: 5,
    text: 'Vikashana helped us scale from 300 to 900 students without adding admin staff. The automation is incredible. Worth every rupee.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div className="section-tag">Loved by Schools</div>
          <h2 className="section-title">What Schools Say About Us</h2>
          <p className="section-sub" style={{ margin:'12px auto 0' }}>
            500+ schools across India trust Vikashana to run their day-to-day operations.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24 }} className="testi-grid">
          {testimonials.map(t => (
            <div key={t.name} style={{
              background:'#fff',
              border:'1px solid var(--border)',
              borderRadius:16,
              padding:'24px 22px',
              display:'flex',
              flexDirection:'column',
              gap:16,
            }}>
              <div style={{ display:'flex', gap:2 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} style={{ color:'#f59e0b', fontSize:14 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize:14, color:'#374151', lineHeight:1.7, flex:1 }}>"{t.text}"</p>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <div style={{ width:40, height:40, borderRadius:'50%', background:t.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:700, fontSize:13, flexShrink:0 }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize:14, fontWeight:700 }}>{t.name}</div>
                  <div style={{ fontSize:12, color:'var(--muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .testi-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
