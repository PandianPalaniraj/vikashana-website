import { useState } from 'react'
import { WA_DEMO, WA_REG, FORMSPREE_URL } from '../constants'

const INIT = { name: '', school: '', phone: '', message: '' }

export default function CTA() {
  const [form,    setForm]    = useState(INIT)
  const [status,  setStatus]  = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INIT)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const field = (key, label, type = 'text', required = true) => (
    <div>
      <label style={{ display:'block', fontSize:13, fontWeight:600, color:'#374151', marginBottom:6 }}>{label}{required && ' *'}</label>
      <input
        type={type}
        required={required}
        value={form[key]}
        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
        style={{ width:'100%', padding:'10px 14px', border:'1px solid #d1d5db', borderRadius:8, fontSize:14, outline:'none', boxSizing:'border-box' }}
        onFocus={e => e.target.style.borderColor='var(--primary)'}
        onBlur={e => e.target.style.borderColor='#d1d5db'}
      />
    </div>
  )

  return (
    <section id="contact" style={{ background:'var(--bg-soft)' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }} className="cta-grid">

          {/* Left — Big CTA */}
          <div>
            <div className="section-tag">Get Started Today</div>
            <h2 className="section-title" style={{ marginTop:8 }}>Ready to Transform Your School?</h2>
            <p style={{ fontSize:16, color:'var(--muted)', lineHeight:1.7, marginTop:14, marginBottom:36 }}>
              Join 500+ schools that manage attendance, fees, homework and parent communication
              with Vikashana. Start free — no credit card needed.
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
              <a href={WA_DEMO} target="_blank" rel="noopener" className="btn-primary" style={{ width:'fit-content' }}>
                📅 Book a Free Demo
              </a>
              <a href={WA_REG} target="_blank" rel="noopener" className="btn-outline" style={{ width:'fit-content' }}>
                🏫 Register My School
              </a>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:12, marginTop:36 }}>
              {[
                '✅ Free up to 50 students — forever',
                '✅ 30-day free trial on all paid plans',
                '✅ Free onboarding & data migration',
                '✅ No annual contract — cancel anytime',
              ].map(p => (
                <div key={p} style={{ fontSize:14, color:'#374151', display:'flex', gap:8 }}>
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <div style={{ background:'#fff', border:'1px solid var(--border)', borderRadius:20, padding:32, boxShadow:'var(--shadow)' }}>
            <h3 style={{ fontSize:20, fontWeight:700, marginBottom:6 }}>Contact Us</h3>
            <p style={{ fontSize:13, color:'var(--muted)', marginBottom:24 }}>We'll get back to you within 24 hours.</p>

            {status === 'success' ? (
              <div style={{ textAlign:'center', padding:'40px 20px' }}>
                <div style={{ fontSize:48, marginBottom:16 }}>🎉</div>
                <h4 style={{ fontSize:18, fontWeight:700, marginBottom:8 }}>Message Received!</h4>
                <p style={{ fontSize:14, color:'var(--muted)' }}>Our team will reach out within 24 hours. Meanwhile, feel free to WhatsApp us for instant support.</p>
                <a href={WA_DEMO} target="_blank" rel="noopener" className="btn-primary" style={{ marginTop:20 }}>
                  WhatsApp Us Now
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
                {field('name',    'Your Name')}
                {field('school',  'School Name')}
                {field('phone',   'Phone Number', 'tel')}
                <div>
                  <label style={{ display:'block', fontSize:13, fontWeight:600, color:'#374151', marginBottom:6 }}>Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us about your school and what you need…"
                    style={{ width:'100%', padding:'10px 14px', border:'1px solid #d1d5db', borderRadius:8, fontSize:14, outline:'none', resize:'vertical', boxSizing:'border-box', fontFamily:'inherit' }}
                    onFocus={e => e.target.style.borderColor='var(--primary)'}
                    onBlur={e => e.target.style.borderColor='#d1d5db'}
                  />
                </div>
                {status === 'error' && (
                  <p style={{ fontSize:13, color:'#ef4444' }}>Something went wrong. Please WhatsApp us directly.</p>
                )}
                <button type="submit" className="btn-primary" disabled={status === 'sending'}
                  style={{ width:'100%', justifyContent:'center' }}>
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
                <p style={{ fontSize:12, color:'var(--muted)', textAlign:'center' }}>
                  Or WhatsApp us directly at{' '}
                  <a href={WA_DEMO} target="_blank" rel="noopener" style={{ color:'var(--primary)', fontWeight:600 }}>+91 XXXXXXXXXX</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 820px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
