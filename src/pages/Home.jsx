import { useRef } from "react";
import LeadForm from "../LeadForm";
import WebGLScene from "../three/WebGLScene";
import useScrollProgress from "../hooks/useScrollProgress";

export default function Home() {
  const scroll = useScrollProgress();
  const heroRef = useRef(null);

  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/vantaworkss/30min",
    });
    return false;
  };

  return (
    <div className="site">

      {/* ================= WEBGL BACKGROUND ================= */}
      <div className="webgl-bg">
        <WebGLScene scroll={scroll} />
      </div>

      <div className="noise"></div>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">

        <div className="logo-wrap">
          <div className="logo-box">VW</div>
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

        <a href="#" onClick={openCalendly} className="nav-btn">
          Start Strategy Session
        </a>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero">

        <div className="hero-bg"></div>

        <div
          className="hero-center"
          style={{ transform: `translateY(${scroll * -40}px)` }}
        >
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

      {/* ================= STATEMENT ================= */}
  <section className="statement-section">
  <span>WHY BUSINESSES LOSE CUSTOMERS</span>

  <h2>
    Most Businesses Have <br />
    No Real Lead System.
  </h2>

  <p>
    Customers visit. Nobody follows up. Leads get lost in WhatsApp.
    We solve this using structured systems:
  </p>

  <div className="statement-list">
    <div className="statement-item">- Landing pages that convert traffic</div>
    <div className="statement-item">- Automated WhatsApp follow-ups</div>
    <div className="statement-item">- CRM-based lead tracking</div>
  </div>
</section>

      {/* ================= FEATURED WORK ================= */}
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
            />
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
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

      {/* ================= LEAD FORM ================= */}
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

      {/* ================= PRICING (FULL RESTORED) ================= */}
      <section className="pricing" id="pricing">

        <div className="section-top center">
          <span>PACKAGES</span>
          <h2>Choose Your Growth System</h2>
        </div>

        <div className="pricing-grid">

          <div className="price-card">
            <h3>Starter Website</h3>
            <p className="package-price">₹9,999</p>
            <h4>High-converting business website</h4>

            <ul>
              <li>Modern responsive website (mobile-first)</li>
              <li>Premium UI/UX design</li>
              <li>WhatsApp click-to-chat integration</li>
              <li>Contact / lead form (Web3Forms)</li>
              <li>Email delivery of enquiries</li>
              <li>Basic SEO setup</li>
              <li>Fast deployment</li>
<a
  href="https://wa.me/91YOURNUMBER"
  target="_blank"
  className="price-btn"
>
  Get Started
</a>
            </ul>

          </div>

          <div className="price-card featured-price">
            <h3>Growth System</h3>
            <p className="package-price">₹19,999</p>
            <h4>Complete lead management system</h4>

            <ul>
              <li>Everything in Starter Package</li>
              <li>Supabase CRM database</li>
              <li>Admin dashboard</li>
              <li>Lead tracking system</li>
              <li>Booking system integration</li>
              <li>Email automation workflows</li>
<a
  href="https://wa.me/91YOURNUMBER"
  target="_blank"
  className="price-btn"
>
  Get Started
</a>
            </ul>
          </div>

          <div className="price-card">
            <h3>Automation System</h3>
            <p className="package-price">₹34,999+</p>
            <h4>Advanced business automation engine</h4>

            <ul>
              <li>Everything in Growth System</li>
              <li>AI chatbot integration</li>
              <li>Automated follow-ups</li>
              <li>Lead scoring system</li>
              <li>Analytics dashboard</li>
<a
  href="https://wa.me/91YOURNUMBER"
  target="_blank"
  className="price-btn"
>
  Get Started
</a>
            </ul>
          </div>

        </div>

      </section>
<section className="final-cta">
  <h2>Start Your Project With Us</h2>

  <p>
    Book a free strategy session and we’ll map your complete lead system.
  </p>

  <button
  type="button"
  onClick={openCalendly}
  className="cta-btn"
>
  Book Strategy Call
</button>
</section>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/91YOURNUMBER"
        target="_blank"
        className="floating-whatsapp"
      >
        WhatsApp
      </a>

    </div>
  );
}