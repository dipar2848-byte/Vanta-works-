import { useRef } from "react";
import LeadForm from "../LeadForm";

export default function Home() {
  const openCalendly = () => {
    window.Calendly?.initPopupWidget({
      url: "https://calendly.com/vantaworkss/30min",
    });
  };

  return (
    <div className="site">

      {/* NAV */}
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
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="nav-btn" onClick={openCalendly}>
          Strategy Call
        </button>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>
          Websites That Turn <br />
          Visitors Into <span>Customers</span>
        </h1>

        <p>
          Premium websites + WhatsApp lead systems + booking automation for real business growth.
        </p>

        <div className="hero-buttons">
          <a href="#work" className="primary-btn">View Work</a>
          <a href="https://wa.me/91YOURNUMBER" className="secondary-btn">
            WhatsApp
          </a>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement-section">
        <span>WHY BUSINESSES LOSE CUSTOMERS</span>

        <h2>Most Businesses Have No Real Lead System.</h2>

        <p>
          Visitors come in, but there is no follow-up system — leads are lost.
        </p>

        <div className="statement-list">
          <div>Landing pages that convert traffic</div>
          <div>Automated WhatsApp follow-ups</div>
          <div>CRM-based lead tracking</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2 className="section-title">Systems We Build</h2>

        <div className="services-grid">
          <div className="card">
            <h3>Premium Website</h3>
            <p>High conversion UI designed for trust & speed.</p>
          </div>

          <div className="card">
            <h3>Lead System</h3>
            <p>WhatsApp + CRM integration for tracking leads.</p>
          </div>

          <div className="card">
            <h3>Automation</h3>
            <p>Follow-ups, booking flow, and notifications.</p>
          </div>
        </div>
      </section>

      {/* PRICING (DETAILED + FIXED STRUCTURE) */}
      <section className="pricing" id="pricing">

        <h2 className="section-title">Pricing & Packages</h2>

        <div className="pricing-grid">

          {/* STARTER */}
          <div className="price-card">
            <h3>Starter Website</h3>
            <p className="price">₹9,999</p>

            <p className="desc">High-converting business website setup</p>

            <ul>
              <li>Modern responsive website (mobile-first)</li>
              <li>Premium UI/UX design</li>
              <li>WhatsApp click-to-chat integration</li>
              <li>Contact / lead form (Web3Forms)</li>
              <li>Email delivery of enquiries</li>
              <li>Basic SEO setup</li>
              <li>Fast deployment</li>
            </ul>

            <a
              className="btn"
              href="https://wa.me/91YOURNUMBER?text=I%20want%20Starter%20Website"
            >
              Get Started
            </a>
          </div>

          {/* GROWTH */}
          <div className="price-card featured">
            <h3>Growth System</h3>
            <p className="price">₹19,999</p>

            <p className="desc">Complete lead management system</p>

            <ul>
              <li>Everything in Starter Package</li>
              <li>Supabase CRM database</li>
              <li>Admin dashboard for leads</li>
              <li>Lead tracking system</li>
              <li>Booking system integration</li>
              <li>Email automation workflows</li>
            </ul>

            <a
              className="btn"
              href="https://wa.me/91YOURNUMBER?text=I%20want%20Growth%20System"
            >
              Get Started
            </a>
          </div>

          {/* AUTOMATION */}
          <div className="price-card">
            <h3>Automation System</h3>
            <p className="price">₹34,999+</p>

            <p className="desc">Advanced business automation engine</p>

            <ul>
              <li>Everything in Growth System</li>
              <li>AI chatbot integration</li>
              <li>Automated follow-ups</li>
              <li>Lead scoring system</li>
              <li>Analytics dashboard</li>
            </ul>

            <a
              className="btn"
              href="https://wa.me/91YOURNUMBER?text=I%20want%20Automation%20System"
            >
              Get Started
            </a>
          </div>

        </div>
      </section>

      {/* LEAD FORM */}
      <section id="contact" className="contact">
        <h2>Start Your Project</h2>
        <LeadForm />
      </section>

    </div>
  );
}