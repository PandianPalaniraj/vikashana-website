import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Stats        from './components/Stats'
import Features     from './components/Features'
import Roles        from './components/Roles'
import HowItWorks   from './components/HowItWorks'
import Pricing      from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA          from './components/CTA'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Roles />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
