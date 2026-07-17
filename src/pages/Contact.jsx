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
    <section className="contact-page">

      <div className="contact-overlay"></div>

      <div className="contact-content">

        <div className="contact-header">

          <h1>Contact SHM Infinity</h1>

          <p>Premium Taxi Service in Finland</p>

          <p>
            We are available 24/7.
            Contact us anytime for bookings or enquiries.
          </p>

        </div>

        <div className="contact-container">

          <a href="tel:+35841291840" className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>+358 41 291 8840</p>
            </div>
          </a>

          <a href="mailto:shminfinity@gmail.com" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>shminfinity@gmail.com</p>
            </div>
          </a>

          <a
            href="https://wa.me/358449408543"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaWhatsapp className="contact-icon" />
            <div>
              <h3>WhatsApp</h3>
              <p>Chat with us instantly</p>
            </div>
          </a>

          <div className="follow-box">

            <h2>Follow Us</h2>

            <div className="social-links">

              <a
                href="https://facebook.com/shminfinity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="social-icon" />
                <span>Facebook</span>
              </a>

              <a
                href="https://instagram.com/shminfinity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" />
                <span>Instagram</span>
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;