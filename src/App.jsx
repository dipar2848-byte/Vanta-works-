export default function App() {
  return (
    <div className="site">
      <header className="navbar">
        <div className="logo">VANTA WORKS</div>

        <nav>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="nav-btn">Start Project</button>
      </header>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge">
            PREMIUM DIGITAL EXPERIENCES
          </div>

          <h1>
            Websites That <br />
            Feel <span>Luxury</span>
          </h1>

          <p>
            Vanta Works creates cinematic, premium websites for salons,
            grooming brands, and modern businesses that want to stand out.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              View Projects
            </button>

            <button className="secondary-btn">
              Let's Talk
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h2>2+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>100%</h2>
              <span>Satisfaction</span>
            </div>

            <div>
              <h2>24/7</h2>
              <span>Support</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="main-preview">
            <iframe
              src="https://good-fellassalon-a37k.vercel.app/#reviews"
              title="Good Fellas"
            ></iframe>
          </div>

          <div className="preview-row">
            <div className="small-preview">
              <iframe
                src="https://shine-glow.vercel.app/"
                title="Shine Glow"
              ></iframe>
            </div>

            <div className="small-preview">
              <iframe
                src="https://good-fellassalon-a37k.vercel.app/#reviews"
                title="Good Fellas 2"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee">
        <div>MODERN — PREMIUM — CINEMATIC — LUXURY — HIGH-END — RESPONSIVE</div>
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
              A cinematic dark-themed salon website built with immersive
              typography, luxury spacing, smooth layout transitions,
              and premium visual hierarchy.
            </p>

            <a
              href="https://good-fellassalon-a37k.vercel.app/#reviews"
              target="_blank"
            >
              Visit Website ↗
            </a>
          </div>

          <div className="project-preview">
            <iframe
              src="https://good-fellassalon-a37k.vercel.app/#reviews"
              title="Good Fellas Frame"
            ></iframe>
          </div>
        </div>

        <div className="project-card reverse">
          <div className="project-info">
            <span>Beauty & Glow Experience</span>

            <h3>Shine & Glow</h3>

            <p>
              Elegant premium beauty website focused on strong branding,
              visual storytelling, and a clean modern luxury aesthetic.
            </p>

            <a
              href="https://shine-glow.vercel.app/"
              target="_blank"
            >
              Visit Website ↗
            </a>
          </div>

          <div className="project-preview">
            <iframe
              src="https://shine-glow.vercel.app/"
              title="Shine Glow Frame"
            ></iframe>
          </div>
        </div>
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
              Digital experiences that elevate perceived brand value.
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