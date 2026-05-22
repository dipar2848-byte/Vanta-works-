import './styles.css'

export default function App() {
  return (
    <div className="site">

      <div className="noise"></div>

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
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="nav-btn">
          Start Project
        </button>

      </header>

      <section className="hero">

        <div className="hero-bg"></div>

        <div className="hero-center">

          <div className="hero-badge">
            PREMIUM DIGITAL EXPERIENCES
          </div>

          <h1>
            Websites That <br />
            Feel <span>Luxury</span>
          </h1>

          <p>
            Vanta Works creates cinematic, premium websites for salons,
            grooming brands, luxury businesses, and modern brands that want
            to dominate online visually.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Let's Talk
            </button>

          </div>

        </div>

        <div className="hero-gradient"></div>

      </section>

      <section className="statement-section">

        <span>DESIGN PHILOSOPHY</span>

        <h2>
          Every Pixel Should <br />
          Feel Intentional.
        </h2>

      </section>

      <section className="featured" id="work">

        <div className="section-top">
          <span>FEATURED WORK</span>
          <h2>Selected Projects</h2>
        </div>

        <div className="project-card">

          <div className="project-info">

            <span>Luxury Salon Website</span>

            <h3>Good Fellas</h3>

            <p>
              Cinematic dark-themed salon experience with immersive typography,
              premium spacing, luxury branding, and smooth visual hierarchy.
            </p>

            <div className="tags">
              <div>Luxury UI</div>
              <div>Responsive</div>
              <div>Modern Branding</div>
            </div>

            <a
              href="https://good-fellassalon-a37k.vercel.app/#reviews"
              target="_blank"
            >
              Visit Website ↗
            </a>

          </div>

          <div className="project-preview">
            <img
              src="https://images.unsplash.com/photo-1503951458645-643d53bfd90f?q=80&w=1200&auto=format&fit=crop"
              alt="Project"
            />
          </div>

        </div>

        <div className="project-card reverse">

          <div className="project-info">

            <span>Beauty & Glow Experience</span>

            <h3>Shine & Glow</h3>

            <p>
              Elegant premium beauty website focused on clean storytelling,
              strong visual aesthetics, modern layouts, and elevated branding.
            </p>

            <div className="tags">
              <div>Beauty Brand</div>
              <div>Minimal UI</div>
              <div>Luxury Layout</div>
            </div>

            <a
              href="https://shine-glow.vercel.app/"
              target="_blank"
            >
              Visit Website ↗
            </a>

          </div>

          <div className="project-preview">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop"
              alt="Project"
            />
          </div>

        </div>

      </section>

      <section className="fullscreen-break">

        <div className="overlay"></div>

        <h2>
          Crafted To Feel <br />
          Premium.
        </h2>

      </section>

      <section className="services" id="services">

        <div className="section-top center">
          <span>SERVICES</span>
          <h2>What We Build</h2>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <h3>Luxury Websites</h3>
            <p>
              Premium responsive websites with strong visual identity.
            </p>
          </div>

          <div className="service-card">
            <h3>Brand Positioning</h3>
            <p>
              Digital experiences designed to elevate brand value.
            </p>
          </div>

          <div className="service-card">
            <h3>Modern UI Design</h3>
            <p>
              Cinematic layouts focused on aesthetics and clarity.
            </p>
          </div>

        </div>

      </section>

      <section className="reviews" id="reviews">

        <div className="section-top center">
          <span>CLIENT REVIEWS</span>
          <h2>Trusted by Businesses</h2>
        </div>

        <div className="reviews-grid">

          <div className="review-card">
            <p>
              “The website completely transformed our brand image online.
              Clients constantly compliment the design.”
            </p>

            <h4>Good Fellas Salon</h4>
          </div>

          <div className="review-card">
            <p>
              “Very modern, premium, and smooth from start to finish.
              Exactly what we wanted.”
            </p>

            <h4>Shine & Glow</h4>
          </div>

          <div className="review-card">
            <p>
              “Professional quality and strong attention to detail.
              Highly recommended.”
            </p>

            <h4>Client Review</h4>
          </div>

        </div>

      </section>

      <section className="contact" id="contact">

        <span>START YOUR PROJECT</span>

        <h2>
          Build a Brand <br />
          That Looks Premium
        </h2>

        <button>
          Contact Vanta Works
        </button>

      </section>

    </div>
  )
}