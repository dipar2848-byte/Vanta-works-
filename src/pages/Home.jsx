import LeadForm from '../LeadForm'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {

  const { scrollYProgress } = useScroll()

  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.2])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0])

  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/vantaworkss/30min'
    })

    return false
  }

  return (
    <div className="cinematic-site">

      <div className="noise"></div>
      <div className="mega-glow glow-left"></div>
      <div className="mega-glow glow-right"></div>

      <header className="cinematic-navbar">

        <div className="logo-wrap">

          <motion.div
            className="logo-box"
            whileHover={{
              scale: 1.08,
              rotate: 8
            }}
          >
            VW
          </motion.div>

          <div className="logo-text">
            <span>VANTA</span>
            <span>WORKS</span>
          </div>

        </div>

        <nav>
          <a href="#services">Systems</a>
          <a href="#experience">Experience</a>
          <a href="#pricing">Packages</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="#"
          onClick={openCalendly}
          className="nav-btn"
        >
          Strategy Session
        </a>

      </header>

      <section className="cinematic-hero">

        <motion.div
          className="hero-orb"
          style={{
            scale: heroScale,
            opacity: heroOpacity
          }}
        />

        <div className="hero-grid"></div>

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            y: 60
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1.2
          }}
        >

          <motion.div
            className="hero-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            PREMIUM DIGITAL GROWTH SYSTEMS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Websites That Feel <br />
            Like The Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            We build cinematic websites, automation systems,
            conversion-focused booking flows, and premium business experiences
            engineered to generate enquiries.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >

            <a href="#pricing" className="primary-btn cinematic-btn">
              View Packages
            </a>

            <a
              href="https://wa.me/91YOURNUMBER"
              target="_blank"
              className="secondary-btn"
            >
              WhatsApp Chat
            </a>

          </motion.div>

          <motion.div
            className="hero-metrics"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >

            <motion.div whileHover={{ y: -8 }}>
              <h3>Premium</h3>
              <p>Luxury interfaces</p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }}>
              <h3>Smart</h3>
              <p>Automation systems</p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }}>
              <h3>Focused</h3>
              <p>Lead generation</p>
            </motion.div>

          </motion.div>

        </motion.div>

      </section>

      <section className="story-section" id="experience">

        <motion.div
          className="story-panel"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <span>WHY MOST BUSINES FAIL</span>

          <h2>
            Visitors arrive.
            <br />
            Nobody follows up.
          </h2>

          <p>
            Businesses lose customers every day because their websites
            are static brochures instead of conversion systems.
          </p>

        </motion.div>

      </section>

      <section className="systems-section" id="services">

        <div className="section-heading center">
          <span>WHAT WE BUILD</span>
          <h2>High-Converting Digital Systems</h2>
        </div>

        <div className="systems-grid">

          <motion.div
            className="system-card"
            whileHover={{ y: -12 }}
          >
            <div className="card-glow"></div>
            <h3>Premium Websites</h3>
            <p>
              Cinematic business websites engineered for trust and conversion.
            </p>
          </motion.div>

          <motion.div
            className="system-card"
            whileHover={{ y: -12 }}
          >
            <div className="card-glow"></div>
            <h3>CRM Systems</h3>
            <p>
              Smart lead tracking dashboards with conversion workflows.
            </p>
          </motion.div>

          <motion.div
            className="system-card"
            whileHover={{ y: -12 }}
          >
            <div className="card-glow"></div>
            <h3>Automation Engines</h3>
            <p>
              Booking systems, automation flows, and customer pipelines.
            </p>
          </motion.div>

        </div>

      </section>

      <section className="dashboard-scene">

        <div className="section-heading center">
          <span>BUSINESS CONTROL</span>
          <h2>Track Every Lead</h2>
        </div>

        <motion.div
          className="dashboard-frame"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <div className="dashboard-topbar">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="dashboard-grid">

            <div className="dashboard-widget">
              <h3>124</h3>
              <p>Total Leads</p>
            </div>

            <div className="dashboard-widget">
              <h3>89%</h3>
              <p>Response Rate</p>
            </div>

            <div className="dashboard-widget">
              <h3>37</h3>
              <p>Bookings</p>
            </div>

          </div>

        </motion.div>

      </section>

      <section className="pricing-scene" id="pricing">

        <div className="section-heading center">
          <span>PACKAGES</span>
          <h2>Choose Your Growth System</h2>
        </div>

        <div className="pricing-grid">

          <div className="cinematic-price-card">
            <h3>Starter</h3>
            <h4>₹9,999</h4>
            <p>Premium website foundation</p>
          </div>

          <div className="cinematic-price-card featured">
            <div className="popular-tag">MOST POPULAR</div>
            <h3>Growth</h3>
            <h4>₹19,999</h4>
            <p>CRM + dashboard + automation foundation</p>
          </div>

          <div className="cinematic-price-card">
            <h3>Automation</h3>
            <h4>₹34,999+</h4>
            <p>Advanced automation ecosystem</p>
          </div>

        </div>

      </section>

      <section className="faq-scene">

        <div className="section-heading center">
          <span>QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-grid">

          <div className="faq-card">
            <h3>How long does development take?</h3>
            <p>Usually between 7–14 days depending on complexity.</p>
          </div>

          <div className="faq-card">
            <h3>Do you provide hosting?</h3>
            <p>Yes. Deployment and hosting setup are included.</p>
          </div>

        </div>

      </section>

      <section className="lead-scene" id="contact">

        <div className="section-heading center">
          <span>START YOUR PROJECT</span>
          <h2>Tell Us About Your Business</h2>
        </div>

        <div className="lead-wrapper">

          <div className="lead-copy">
            <h3>
              We design conversion-focused systems built to generate enquiries.
            </h3>
          </div>

          <LeadForm />

        </div>

      </section>

      <section className="final-cta">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Build Something
          <br />
          Customers Remember
        </motion.h2>

        <motion.a
          href="#"
          onClick={openCalendly}
          className="contact-btn cinematic-btn"
          whileHover={{ scale: 1.05 }}
        >
          Launch My System
        </motion.a>

      </section>

    </div>
  )
}