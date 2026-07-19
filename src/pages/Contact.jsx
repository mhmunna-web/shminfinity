import SEO from "../components/seo/SEO";

import "../styles/contact.css";

import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <SEO
        title="Contact SHM Infinity | Premium Taxi Service Finland"
        description="Contact SHM Infinity for premium taxi services across Helsinki, Vantaa, Espoo, and throughout Finland. Call, WhatsApp, email, or connect with us on social media."
        keywords="Contact SHM Infinity, Taxi Contact Finland, Helsinki Taxi Contact, WhatsApp Taxi Finland, Premium Taxi Finland"
        url="https://www.shminfinity.fi/contact"
      />

      <main className="contact-page">
        <div className="contact-overlay"></div>

        <div className="contact-content">
          <header className="contact-header">
            <h1>Contact SHM Infinity</h1>

            <p>Premium Taxi Service in Finland</p>

            <p>
              We are available 24/7. Contact us anytime for bookings,
              airport transfers, business travel, or general enquiries.
            </p>
          </header>

          <section
            className="contact-container"
            aria-label="Contact information"
          >
            <a
              href="tel:+358413291840"
              className="contact-card"
              aria-label="Call SHM Infinity"
            >
              <FaPhoneAlt
                className="contact-icon"
                aria-hidden="true"
              />

              <div>
                <h2>Phone</h2>
                <p>+358413291840</p>
              </div>
            </a>

            <a
              href="mailto:shminfinity@gmail.com"
              className="contact-card"
              aria-label="Email SHM Infinity"
            >
              <FaEnvelope
                className="contact-icon"
                aria-hidden="true"
              />

              <div>
                <h2>Email</h2>
                <p>shminfinity@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/358449408543?text=Hello%20SHM%20Infinity,%20I'd%20like%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label="Chat with SHM Infinity on WhatsApp"
            >
              <FaWhatsapp
                className="contact-icon"
                aria-hidden="true"
              />

              <div>
                <h2>WhatsApp</h2>
                <p>Chat with us instantly</p>
              </div>
            </a>

            <section
              className="follow-box"
              aria-labelledby="follow-title"
            >
              <h2 id="follow-title">Follow Us</h2>

              <div className="social-links">
                <a
                  href="https://facebook.com/shminfinity"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit SHM Infinity Facebook page"
                >
                  <FaFacebookF
                    className="social-icon"
                    aria-hidden="true"
                  />
                  <span>Facebook</span>
                </a>

                <a
                  href="https://instagram.com/shminfinity"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit SHM Infinity Instagram page"
                >
                  <FaInstagram
                    className="social-icon"
                    aria-hidden="true"
                  />
                  <span>Instagram</span>
                </a>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contact;