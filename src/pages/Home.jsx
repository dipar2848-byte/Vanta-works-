import { useRef } from "react";
import LeadForm from "../LeadForm";
import useScrollProgress from "../hooks/useScrollProgress";

export default function Home() {
  const scroll = useScrollProgress();

  const openCalendly = () => {
    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/vantaworkss/30min",
    });
  };

  return (
    <div className="site">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner">

          <div className="logo-wrap">
            <div className="logo-box">VW</div>
            <div className="logo-text">
              <span>VANTA</span>
              <span>WORKS</span>
            </div>
          </div>

          <nav>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>

          <button className="nav-btn" onClick={openCalendly}>
            Book Strategy Call
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="hero section">
        <div className="container stack center">

          <h1>
            Websites That Turn <br />
            Visitors Into Customers
          </h1>

          <p>
            Premium websites, WhatsApp automation, booking systems,
            and lead funnels for local businesses.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="primary-btn">View Work</a>
            <a href="https://wa.me/91YOURNUMBER" className="secondary-btn">
              WhatsApp
            </a>
          </div>

          <div className="hero-price">
            Starting from ₹9,999
          </div>

        </div>
      </section>

      {/* STATEMENT */}
      <section className="section">
        <div className="container center stack">

          <h2>Most Businesses Have No Lead System</h2>

          <div className="statement-list">
            <div>Landing pages that convert</div>
            <div>WhatsApp automation follow-ups</div>
            <div>CRM lead tracking system</div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container">

          <div className="section-top center">
            <span>SERVICES</span>
            <h2>Built for Growth</h2>
          </div>

          <div className="services-grid">
            <div className="service-card">Premium Website</div>
            <div className="service-card">Lead System</div>
            <div className="service-card">Automation</div>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="container">

          <div className="section-top center">
            <span>PRICING</span>
            <h2>Choose Plan</h2>
          </div>

          <div className="pricing-grid">

            <div className="price-card">
              <h3>Starter</h3>
              <p className="package-price">₹9,999</p>

              <ul>
                <li>Website</li>
                <li>WhatsApp integration</li>
                <li>Basic SEO</li>
              </ul>

              <a className="price-btn" href="https://wa.me/91YOURNUMBER">
                Get Started
              </a>
            </div>

            <div className="price-card featured">
              <h3>Growth</h3>
              <p className="package-price">₹19,999</p>

              <ul>
                <li>CRM system</li>
                <li>Lead tracking</li>
                <li>Automation</li>
              </ul>

              <a className="price-btn" href="https://wa.me/91YOURNUMBER">
                Get Started
              </a>
            </div>

            <div className="price-card">
              <h3>Pro</h3>
              <p className="package-price">₹34,999+</p>

              <ul>
                <li>AI chatbot</li>
                <li>Analytics</li>
                <li>Advanced automation</li>
              </ul>

              <a className="price-btn" href="https://wa.me/91YOURNUMBER">
                Get Started
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* LEAD FORM */}
      <section id="contact" className="section">
        <div className="container">

          <div className="lead-container">

            <div className="lead-info">
              <h2>Get a Free Strategy Plan</h2>
              <p>We design your full lead system.</p>
            </div>

            <LeadForm />

          </div>

        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <a className="floating-whatsapp" href="https://wa.me/91YOURNUMBER">
        WhatsApp
      </a>

    </div>
  );
}