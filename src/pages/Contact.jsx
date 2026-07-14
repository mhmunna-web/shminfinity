import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">

          <Link to="/">

            <img
              src="/images/logo/shm-logo.PNG"
              alt="SHM Infinity"
            />

          </Link>

        </div>

        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>

          <li>
            <a href="/#fleet">Fleet</a>
          </li>

          <li>
            <a href="/#services">Services</a>
          </li>

          <li>
            <a href="/#about">About</a>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        <a
          href="https://wa.me/358449408543"
          target="_blank"
          rel="noopener noreferrer"
          className="book-btn"
        >
          Book Now
        </a>

      </nav>

      {/* ================= CONTACT PAGE ================= */}

      <section className="contact-page">

        <div className="contact-overlay"></div>

        <div className="contact-header">

          <h1>Contact SHM Infinity</h1>

          <p>
            Premium Taxi Service in Finland
          </p>

          <p>
            We're available 24/7.
            Choose your preferred way to contact us.
          </p>

        </div>

        <div className="contact-container">          {/* ================= PHONE ================= */}

          <a
            href="tel:+35841291840"
            className="contact-card"
          >

            <span className="contact-icon">
              📞
            </span>

            <h3>Phone</h3>

          </a>

          {/* ================= EMAIL ================= */}

          <a
            href="mailto:shminfinity@gmail.com"
            className="contact-card"
          >

            <span className="contact-icon">
              ✉️
            </span>

            <h3>Email</h3>

          </a>

          {/* ================= WHATSAPP ================= */}

          <a
            href="https://wa.me/358449408543"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <span className="contact-icon">
              💬
            </span>

            <h3>WhatsApp</h3>

          </a>

          {/* ================= FOLLOW US ================= */}

          <div className="follow-box">

            <h2>
              Follow Us
            </h2>

            <div className="social-links">

              <a
                href="https://facebook.com/shminfinity"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘 Facebook
              </a>

              <a
                href="https://instagram.com/shminfinity"
                target="_blank"
                rel="noopener noreferrer"
              >
                📷 Instagram
              </a>

            </div>

          </div>        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <p>
          All Rights Reserved by SHM Infinity © 2026.
        </p>

      </footer>

    </>
  );
}

export default Contact;