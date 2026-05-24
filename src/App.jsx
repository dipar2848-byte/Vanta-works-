import './styles.css'

export default function App() {
  return (
    <div className="site">

      <div className="noise"></div>

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

        <button className="nav-btn">
          Book Strategy Call
        </button>

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

            <button className="primary-btn">
              View Live Demo
            </button>

            <button className="secondary-btn">
              Chat on WhatsApp
            </button>

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
              <h3>Fast</h3>
              <p>3-5 Day Delivery</p>
            </div>

            <div>
              <h3>Smart</h3>
              <p>Lead Systems Included</p>
            </div>

          </div>

        </div>

        <div className="hero-gradient"></div>

      </section>

      {/* PROBLEM SOLUTION */}

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

            <div className="tags">
              <div>WhatsApp CTA</div>
              <div>Premium UI</div>
              <div>Lead Focused</div>
            </div>

            <a
              href="https://good-fellassalon-a37k.vercel.app/#reviews"
              target="_blank"
            >
              View Live Project ↗
            </a>

          </div>

          <div className="project-preview">

            <div className="browser-bar">

              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>Live Preview</p>

            </div>

            <iframe
              src="https://good-fellassalon-a37k.vercel.app/#reviews"
              title="Good Fellas"
            ></iframe>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="services" id="services">

        <div className="section-top center">
          <span>HOW THE SYSTEM WORKS</span>
          <h2>Built To Generate Enquiries</h2>
        </div>

        <div className="services-grid">

          <div className="service-card">

            <h3>Premium Website</h3>

            <p>
              Modern mobile-first experience that instantly builds trust.
            </p>

          </div>

          <div className="service-card">

            <h3>Lead Capture System</h3>

            <p>
              Forms, WhatsApp flows, and enquiry tracking dashboard included.
            </p>

          </div>

          <div className="service-card">

            <h3>Booking & Automation</h3>

            <p>
              Convert visitors into appointments using simple automated flows.
            </p>

          </div>

        </div>

      </section>

      {/* PACKAGES */}

      <section className="pricing" id="pricing">

        <div className="section-top center">
          <span>PACKAGES</span>
          <h2>Choose Your Growth System</h2>
        </div>

        <div className="pricing-grid">

          <div className="price-card">

            <h3>Starter</h3>

            <h4>Perfect For Small Businesses</h4>

            <ul>
              <li>Premium Website</li>
              <li>WhatsApp Integration</li>
              <li>Mobile Optimization</li>
              <li>Lead Capture Form</li>
            </ul>

            <button>Get Started</button>

          </div>

          <div className="price-card featured-price">

            <div className="popular-tag">
              MOST POPULAR
            </div>

            <h3>Growth System</h3>

            <h4>Best For Scaling Businesses</h4>

            <ul>
              <li>Everything In Starter</li>
              <li>Booking System</li>
              <li>Lead Dashboard</li>
              <li>Priority WhatsApp Setup</li>
            </ul>

            <button>Boost My Business</button>

          </div>

          <div className="price-card">

            <h3>Automation</h3>

            <h4>Advanced Conversion System</h4>

            <ul>
              <li>AI Chatbot</li>
              <li>Automated Follow-Ups</li>
              <li>Advanced Lead Flow</li>
              <li>Conversion Optimization</li>
            </ul>

            <button>Go Automated</button>

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

            <p>
              “The website completely upgraded our business image and brought in more enquiries.”
            </p>

            <h4>Good Fellas Salon</h4>

          </div>

          <div className="review-card">

            <p>
              “Clients started contacting us directly through WhatsApp after launch.”
            </p>

            <h4>Shine & Glow</h4>

          </div>

          <div className="review-card">

            <p>
              “Premium quality with a real business-focused approach.”
            </p>

            <h4>Client Review</h4>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="contact" id="contact">

        <span>READY TO GROW?</span>

        <h2>
          Build a System <br />
          That Brings Customers
        </h2>

        <p>
          Premium websites, lead systems, booking flows, and automation —
          all designed to help your business convert better online.
        </p>

        <button>
          Start Your Project
        </button>

      </section>

    </div>
  )
}