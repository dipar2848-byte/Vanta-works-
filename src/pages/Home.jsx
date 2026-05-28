import { useRef } from "react";
import LeadForm from "../LeadForm";
// WebGL disabled for stability
// import WebGLScene from "../three/WebGLScene";
import useScrollProgress from "../hooks/useScrollProgress";

export default function Home() {
  const scroll = useScrollProgress();

  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/vantaworkss/30min",
    });
    return false;
  };

  return (
    <div className="site">

      <div className="noise"></div>

      {/* NAVBAR */}
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
          <a href="#contact">Contact</a>
        </nav>

        <a href="#" onClick={openCalendly} className="nav-btn">
          Start Strategy Session
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-center">
          <div className="hero-badge">DIGITAL GROWTH SYSTEMS</div>

          <h1>
            Websites That Turn <br />
            Visitors Into <span>Customers</span>
          </h1>

          <p>
            Premium websites, WhatsApp automation, booking flows and lead systems.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="primary-btn">View Work</a>
            <a href="https://wa.me/91YOURNUMBER" className="secondary-btn">
              WhatsApp
            </a>
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
          Customers visit. No follow-up. Leads get lost.
        </p>

        <div className="statement-list">
          <div className="statement-item">Landing pages that convert traffic</div>
          <div className="statement-item">Automated WhatsApp follow-ups</div>
          <div className="statement-item">CRM-based lead tracking</div>
        </div>
      </section>

      {/* WORK */}
      <section className="featured" id="work">
        <div className="section-top">
          <span>LIVE DEMO</span>
          <h2>Projects</h2>
        </div>

        <div className="project-card">
          <div className="project-info">
            <span>Salon System</span>
            <h3>Good Fellas</h3>
            <p>Premium conversion-focused website.</p>

            <a href="https://good-fellassalon-a37k.vercel.app/" target="_blank">
              View Project
            </a>
          </div>

          <div className="project-preview"></div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-top center">
          <span>WHAT WE BUILD</span>
          <h2>Systems</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Website</h3>
            <p>High conversion UI</p>
          </div>

          <div className="service-card">
            <h3>Lead System</h3>
            <p>WhatsApp + CRM</p>
          </div>

          <div className="service-card">
            <h3>Automation</h3>
            <p>Follow-ups</p>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="lead-section" id="contact">
        <div className="lead-container">
          <div className="lead-info">
            <h3>Build your system</h3>
          </div>

          <LeadForm />
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="section-top center">
          <span>PACKAGES</span>
          <h2>Pricing</h2>
        </div>

        <div className="pricing-grid">

          <div className="price-card">
            <h3>Starter</h3>
            <p className="package-price">₹9,999</p>

            <ul>
              <li>Website</li>
              <li>WhatsApp</li>
              <li>SEO</li>
            </ul>

            <a href="https://wa.me/91YOURNUMBER">Get Started</a>
          </div>

          <div className="price-card featured-price">
            <h3>Growth</h3>
            <p className="package-price">₹19,999</p>

            <ul>
              <li>CRM</li>
              <li>Leads</li>
              <li>Automation</li>
            </ul>

            <a href="https://wa.me/91YOURNUMBER">Get Started</a>
          </div>

          <div className="price-card">
            <h3>Pro</h3>
            <p className="package-price">₹34,999+</p>

            <ul>
              <li>AI</li>
              <li>Funnels</li>
              <li>Analytics</li>
            </ul>

            <a href="https://wa.me/91YOURNUMBER">Get Started</a>
          </div>

        </div>
      </section>

      {/* FLOAT */}
      <a className="floating-whatsapp" href="https://wa.me/91YOURNUMBER">
        WhatsApp
      </a>

    </div>
  );
}