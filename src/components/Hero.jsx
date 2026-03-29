import { WA_DEMO, WA_REG } from '../constants'

export default function Hero() {
  return (
    <section id="hero" style={{
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 45%, #5046e5 100%)',
      paddingTop: 140,
      paddingBottom: 100,
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Background blobs */}
      <div style={{ position:'absolute', top:-120, right:-120, width:500, height:500, borderRadius:'50%', background:'rgba(255,255,255,0.04)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:-80, left:-80,  width:350, height:350, borderRadius:'50%', background:'rgba(255,255,255,0.04)', pointerEvents:'none' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }} className="hero-grid">

          {/* Left */}
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.2)', borderRadius:99, padding:'6px 16px', marginBottom:28 }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'#4ade80', flexShrink:0 }} />
              <span style={{ fontSize:13, color:'rgba(255,255,255,0.85)', fontWeight:500 }}>30-day free trial · No credit card required</span>
            </div>

            <h1 style={{ fontSize:'clamp(36px, 5vw, 60px)', fontWeight:900, color:'#fff', lineHeight:1.05, letterSpacing:'-1.5px', marginBottom:8 }}>
              Vikashana
            </h1>
            <p style={{ fontSize:'clamp(14px, 1.6vw, 18px)', color:'#a5b4fc', fontWeight:700, letterSpacing:'1px', textTransform:'uppercase', marginBottom:20 }}>
              Developing Schools, Shaping Futures
            </p>

            <p style={{ fontSize:'clamp(15px, 2vw, 18px)', color:'rgba(255,255,255,0.75)', lineHeight:1.7, marginBottom:36, maxWidth:480 }}>
              Attendance, fees, homework, exams, timetable — all in one place.
              Parents get real-time updates on their mobile app. Works offline too.
            </p>

            <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              <a href={WA_DEMO} target="_blank" rel="noopener" className="btn-white">
                📅 Book Free Demo
              </a>
              <a href={WA_REG} target="_blank" rel="noopener" className="btn-outline" style={{ color:'#fff', borderColor:'rgba(255,255,255,0.45)', background:'rgba(255,255,255,0.1)' }}>
                🏫 Register School
              </a>
            </div>

            <div style={{ display:'flex', gap:24, marginTop:36, flexWrap:'wrap' }}>
              {[
                { val:'500+', label:'Schools' },
                { val:'1.2L+', label:'Students' },
                { val:'4.8★', label:'Rating' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize:22, fontWeight:800, color:'#fff' }}>{s.val}</div>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,0.6)', marginTop:2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard mockup */}
          <div style={{ display:'flex', justifyContent:'center', alignItems:'flex-start' }} className="hero-right">
            <div style={{
              background:'rgba(255,255,255,0.06)',
              border:'1px solid rgba(255,255,255,0.12)',
              borderRadius:20,
              padding:24,
              width:'100%',
              maxWidth:400,
              backdropFilter:'blur(8px)',
            }}>
              {/* Mock header */}
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <div style={{ width:36, height:36, borderRadius:9, background:'var(--primary)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <span style={{ color:'#fff', fontSize:16 }}>🏫</span>
                </div>
                <div>
                  <div style={{ fontSize:13, fontWeight:700, color:'#fff' }}>St. Mary's School</div>
                  <div style={{ fontSize:11, color:'rgba(255,255,255,0.5)' }}>Dashboard — Today</div>
                </div>
                <div style={{ marginLeft:'auto', background:'#4ade8022', color:'#4ade80', fontSize:11, fontWeight:600, padding:'3px 10px', borderRadius:99, border:'1px solid #4ade8044' }}>Live</div>
              </div>

              {/* KPI row */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, marginBottom:16 }}>
                {[
                  { icon:'👥', val:'842', label:'Students' },
                  { icon:'✅', val:'94%', label:'Attendance' },
                  { icon:'💰', val:'₹2.4L', label:'Collected' },
                ].map(k => (
                  <div key={k.label} style={{ background:'rgba(255,255,255,0.08)', borderRadius:10, padding:'10px 8px', textAlign:'center' }}>
                    <div style={{ fontSize:18, marginBottom:4 }}>{k.icon}</div>
                    <div style={{ fontSize:15, fontWeight:800, color:'#fff' }}>{k.val}</div>
                    <div style={{ fontSize:10, color:'rgba(255,255,255,0.5)' }}>{k.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent activity */}
              <div style={{ fontSize:11, color:'rgba(255,255,255,0.4)', fontWeight:600, textTransform:'uppercase', letterSpacing:1, marginBottom:10 }}>Recent Activity</div>
              {[
                { icon:'📋', text:'Attendance marked — Class 8A', time:'9:15 AM' },
                { icon:'💸', text:'Fee received — Riya Sharma', time:'10:02 AM' },
                { icon:'📚', text:'Homework posted — Math Class 7', time:'11:30 AM' },
              ].map((a, i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                  <span style={{ fontSize:14 }}>{a.icon}</span>
                  <span style={{ fontSize:12, color:'rgba(255,255,255,0.7)', flex:1 }}>{a.text}</span>
                  <span style={{ fontSize:10, color:'rgba(255,255,255,0.35)' }}>{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  )
}
