import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LeadForm from "../LeadForm";
import WebGLBackground from "../components/WebGLBackground";

export default function Home() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);

  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/vantaworkss/30min"
    });
    return false;
  };

  // HERO SCROLL MOTION
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScroll, [0, 1], ["0%", "-20%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  // STORY SCROLL MOTION
  const { scrollYProgress: storyScroll } = useScroll({
    target: storyRef,
    offset: ["start start", "end start"]
  });

  const storyY = useTransform(storyScroll, [0, 1], ["0%", "-25%"]);
  const storyOpacity = useTransform(storyScroll, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div className="site">

      {/* WEBGL BACKGROUND */}
      <WebGLBackground />

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
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <a onClick={openCalendly} className="nav-btn">
          Start Strategy Session
        </a>

      </header>

      {/* HERO (CINEMATIC) */}
      <section ref={heroRef} className="hero">

        <motion.div style={{ y: heroY, opacity: heroOpacity }}>

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
              Vanta Works builds premium websites, WhatsApp systems,
              booking flows, and automation setups that generate real leads.
            </p>

            <div className="hero-buttons">
              <a href="#work" className="primary-btn">View Live Demo</a>
              <a onClick={openCalendly} className="secondary-btn">Chat / Call</a>
            </div>

          </div>

        </motion.div>

      </section>

      {/* STATEMENT (SCROLL STORY) */}
      <section ref={storyRef} className="statement-section">

        <motion.div style={{ y: storyY, opacity: storyOpacity }}>

          <span>WHY BUSINESSES LOSE CUSTOMERS</span>

          <h2>
            Most Businesses Have <br />
            No Real Lead System.
          </h2>

          <p>
            Customers visit. Nobody follows up. Leads get lost in WhatsApp.
            We fix this with automation + funnels + CRM systems.
          </p>

        </motion.div>

      </section>

      {/* FEATURED WORK */}
      <section className="featured" id="work">

        <div className="section-top center">
          <span>LIVE DEMOS</span>
          <h2>Conversion-Focused Projects</h2>
        </div>

        <div className="project-card">

          <div className="project-info">
            <span>Luxury Salon System</span>

            <h3>Good Fellas</h3>

            <p>
              Premium salon website focused on bookings, WhatsApp leads,
              and conversion optimization.
            </p>

            <a href="https://good-fellassalon-a37k.vercel.app/#reviews" target="_blank">
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

      {/* SERVICES */}
      <section className="services" id="services">

        <div className="section-top center">
          <span>HOW IT WORKS</span>
          <h2>Built To Generate Enquiries</h2>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <h3>Premium Website</h3>
            <p>Modern UI that builds trust instantly.</p>
          </div>

          <div className="service-card">
            <h3>Lead System</h3>
            <p>Forms + WhatsApp + CRM tracking.</p>
          </div>

          <div className="service-card">
            <h3>Automation</h3>
            <p>Booking + follow-up system.</p>
          </div>

        </div>

      </section>

      {/* LEAD FORM */}
      <section className="lead-section" id="contact">

        <div className="section-top center">
          <span>GET STARTED</span>
          <h2>Tell Us About Your Business</h2>
        </div>

        <div className="lead-container">

          <div className="lead-info">
            <h3>
              Turn your website into a customer acquisition system.
            </h3>

            <div className="lead-points">
              <div>✓ Premium Design</div>
              <div>✓ WhatsApp Integration</div>
              <div>✓ CRM System</div>
              <div>✓ Automation Setup</div>
            </div>
          </div>

          <LeadForm />

        </div>

      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">

        <div className="section-top center">
          <span>PACKAGES</span>
          <h2>Choose Your Growth System</h2>
        </div>

        <div className="pricing-grid">

          <div className="price-card">
            <h3>Starter</h3>
            <p className="package-price">₹9,999</p>
            <h4>High-converting website</h4>

            <ul>
              <li>Mobile-first design</li>
              <li>WhatsApp integration</li>
              <li>Lead form</li>
              <li>SEO setup</li>
            </ul>

            <a href="https://wa.me/91YOURNUMBER">Get Started</a>
          </div>

          <div className="price-card featured-price">
            <h3>Growth System</h3>
            <p className="package-price">₹19,999</p>
            <h4>Full lead management system</h4>

            <ul>
              <li>CRM dashboard</li>
              <li>Lead tracking</li>
              <li>Booking system</li>
              <li>Email automation</li>
            </ul>

            <a href="https://wa.me/91YOURNUMBER">Get Started</a>
          </div>

          <div className="price-card">
            <h3>Automation</h3>
            <p className="package-price">₹34,999+</p>
            <h4>Advanced automation engine</h4>

            <ul>
              <li>AI chatbot</li>
              <li>Follow-up system</li>
              <li>Analytics</li>
              <li>Workflow automation</li>
            </ul>

            <a href="https://wa.me/91YOURNUMBER">Get Started</a>
          </div>

        </div>

      </section>

      {/* DASHBOARD */}
      <section className="dashboard-preview">

        <div className="section-top center">
          <span>DASHBOARD</span>
          <h2>Track Your Leads</h2>
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
          <h2>Trusted by Businesses</h2>
        </div>

        <div className="reviews-grid">

          <div className="review-card">
            <p>“Our enquiries increased massively after launch.”</p>
            <h4>Good Fellas Salon</h4>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="contact">

        <h2>Build Your Growth System</h2>

        <a onClick={openCalendly} className="contact-btn">
          Start Now
        </a>

      </section>

      {/* WHATSAPP */}
      <a href="https://wa.me/91YOURNUMBER" className="floating-whatsapp">
        WhatsApp
      </a>

    </div>
  );
}