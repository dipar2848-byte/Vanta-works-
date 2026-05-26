import LeadForm from "../LeadForm"

export default function Home() {
const openCalendly = () => {
  window.Calendly.initPopupWidget({
    url: "PASTE-YOUR-CALENDLY-LINK",
  });

  return false;
};
  return (
    <div className="site">

      <div className="noise"></div>

      {/* NAVBAR */}
      <header className="navbar">

        <div className="logo-wrap">

          <div className="logo-box">
            VW
          </div>

          <div className="logo-text">
            <span>VANTA</span>
            <span>WORKS</span>
          </div>

        </div>

        <nav>
          <a href="#work">Work</a>
          <a href="#services">Systems</a>
          <a href="#pricing">Packages</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
  href="#"
  onClick={openCalendly}
  className="nav-btn"
>
  Start Strategy Session
</a>

      </header>

      {/* HERO */}
      <section className="hero">

        <div className="hero-bg"></div>

        <div className="hero-center">

          <div className="hero-badge">
            DIGITAL GROWTH SYSTEMS FOR LOCAL BUSINESSES
          </div>

          <h1>
            Websites That Turn <br />
            Visitors Into <span>Customers</span>
          </h1>

          <p>
            Vanta Works builds premium websites, WhatsApp lead systems,
            booking flows, and automation setups that help businesses
            generate more enquiries and conversions online.
          </p>

          <div className="hero-buttons">

            <a href="#work" className="primary-btn">
              View Live Demo
            </a>

            <a
              href="https://wa.me/91YOURNUMBER"
              target="_blank"
              className="secondary-btn"
            >
              Chat on WhatsApp
            </a>

          </div>

          <div className="hero-price">
            Starting from ₹9,999 • Premium websites + lead systems
          </div>

          <div className="hero-stats">

            <div>
              <h3>Premium</h3>
              <p>Modern Interfaces</p>
            </div>

            <div>
              <h3>Smart</h3>
              <p>Business Automation</p>
            </div>

            <div>
              <h3>Focused</h3>
              <p>Lead Generation Systems</p>
            </div>

          </div>

        </div>

      </section>

      {/* STATEMENT */}
      <section className="statement-section">

        <span>WHY BUSINESSES LOSE CUSTOMERS</span>

        <h2>
          Most Businesses Have <br />
          No Real Lead System.
        </h2>

        <p>
          Customers visit. Nobody follows up. Leads get lost in WhatsApp.
          We solve this using websites, booking systems, and smart enquiry flows.
        </p>

      </section>

      {/* FEATURED WORK */}
      <section className="featured" id="work">

        <div className="section-top">
          <span>LIVE DEMOS</span>
          <h2>Conversion-Focused Projects</h2>
        </div>

        <div className="project-card">

          <div className="project-info">

            <span>Luxury Salon System</span>

            <h3>Good Fellas</h3>

            <p>
              Premium salon website focused on visual branding,
              mobile conversion, WhatsApp enquiries, and modern customer experience.
            </p>

            <a
              href="https://good-fellassalon-a37k.vercel.app/#reviews"
              target="_blank"
            >
              View Live Project ↗
            </a>

          </div>

          <div className="project-preview">

            <iframe
              src="https://good-fellassalon-a37k.vercel.app/#reviews"
              title="preview"
            ></iframe>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="services" id="services">

        <div className="section-top center">
          <span>HOW THE SYSTEM WORKS</span>
          <h2>Built To Generate Enquiries</h2>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <h3>Premium Website</h3>
            <p>Modern mobile-first experience that builds trust.</p>
          </div>

          <div className="service-card">
            <h3>Lead Capture System</h3>
            <p>Forms + WhatsApp + tracking dashboard.</p>
          </div>

          <div className="service-card">
            <h3>Booking Automation</h3>
            <p>Convert visitors into appointments automatically.</p>
          </div>

        </div>

      </section>

      {/* LEAD FORM */}
      <section className="lead-section" id="contact">

        <div className="section-top center">
          <span>GET A FREE STRATEGY PLAN</span>
          <h2>Tell Us About Your Business</h2>
        </div>

        <div className="lead-container">

          <div className="lead-info">
            <h3>
              We build systems that turn visitors into paying customers using automation, booking flows, and lead funnels.
            </h3>

            <div className="lead-points">
              <div>✓ Premium Website</div>
              <div>✓ WhatsApp Integration</div>
              <div>✓ Booking System</div>
              <div>✓ Lead Automation</div>
            </div>
          </div>

          <LeadForm />

        </div>

      </section>
<section className="pricing" id="pricing">

  <div className="section-top center">
    <span>PACKAGES</span>
    <h2>Choose Your Growth System</h2>
  </div>

  <div className="pricing-grid">

    {/* STARTER */}
    <div className="price-card">

      <h3>Starter Website</h3>
      <p className="package-price">₹9,999</p>
      <h4>High-converting business website</h4>

      <ul>
        <li>Modern responsive website (mobile-first)</li>
        <li>Premium UI/UX design</li>
        <li>WhatsApp click-to-chat integration</li>
        <li>Contact / lead form (Web3Forms)</li>
        <li>Email delivery of enquiries (via Web3Forms)</li>
        <li>Basic SEO setup</li>
        <li>Fast deployment (live website)</li>
      </ul>

      <a
        href="https://wa.me/91YOURNUMBER?text=I%20want%20the%20Starter%20Website%20Package"
        target="_blank"
      >
        Get Started
      </a>

    </div>

    {/* GROWTH SYSTEM */}
    <div className="price-card featured-price">

      <div className="popular-tag">MOST POPULAR</div>

      <h3>Growth System</h3>
      <p className="package-price">₹19,999</p>
      <h4>Complete lead management system</h4>

      <ul>
        <li>Everything in Starter Package</li>
        <li>Supabase CRM database (lead storage)</li>
        <li>Admin dashboard (SaaS-style interface)</li>
        <li>Lead management system (search / delete / view)</li>
        <li>Lead tracking foundation (CRM structure)</li>
        <li>Booking system integration (Calendly)</li>
        <li>Custom email automation (advanced workflows)</li>
        <li>Conversion-focused UI dashboard</li>
      </ul>

      <a
        href="https://wa.me/91YOURNUMBER?text=I%20want%20the%20Growth%20System%20Package"
        target="_blank"
      >
        Get Started
      </a>

    </div>

    {/* AUTOMATION */}
    <div className="price-card">

      <h3>Automation System</h3>
      <p className="package-price">₹34,999+</p>
      <h4>Advanced business automation engine</h4>

      <ul>
        <li>Everything in Growth System</li>
        <li>AI chatbot integration</li>
        <li>Automated follow-up sequences (email / WhatsApp)</li>
        <li>Advanced lead scoring system</li>
        <li>Conversion tracking & analytics</li>
        <li>Workflow automation system</li>
        <li>Performance optimization layer</li>
      </ul>

      <a
        href="https://wa.me/91YOURNUMBER?text=I%20want%20the%20Automation%20System%20Package"
        target="_blank"
      >
        Get Started
      </a>

    </div>

  </div>

</section>

          {/* DASHBOARD PREVIEW */}
      <section className="dashboard-preview">

        <div className="section-top center">
          <span>BUSINESS DASHBOARD</span>
          <h2>Track Leads & Enquiries</h2>
        </div>

        <div className="dashboard-box">

          <div className="dashboard-content">

            <div className="dashboard-card">
              <h3>24</h3>
              <p>New Leads</p>
            </div>

            <div className="dashboard-card">
              <h3>89%</h3>
              <p>Reply Rate</p>
            </div>

            <div className="dashboard-card">
              <h3>12</h3>
              <p>Bookings</p>
            </div>

          </div>

        </div>

      </section>

      {/* REVIEWS */}
      <section className="reviews" id="reviews">

        <div className="section-top center">
          <span>CLIENT RESULTS</span>
          <h2>Trusted by Modern Businesses</h2>
        </div>

        <div className="reviews-grid">

          <div className="review-card">
            <p>“Website improved our enquiries massively.”</p>
            <h4>Good Fellas Salon</h4>
          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="contact">

        <h2>Build a System That Brings Customers</h2>

        <a
  href="#"
  onClick={openCalendly}
  className="contact-btn"
>
  Launch My Growth System
</a>

      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/91YOURNUMBER"
        target="_blank"
        className="floating-whatsapp"
      >
        WhatsApp
      </a>

    </div>
  )
}
