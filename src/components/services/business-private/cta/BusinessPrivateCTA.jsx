import { Link } from "react-router-dom";
import "../../../../styles/BusinessPrivateCTA.css";

const BusinessPrivateCTA = () => {
  return (
    <section className="business-cta">
      <div className="business-cta-container">

        <div className="business-cta-glow"></div>

        <span className="business-cta-tag">
          READY TO TRAVEL?
        </span>

        <h2>
          Executive Chauffeur
          <br />
          Service You Can Trust
        </h2>

        <p>
          Whether you're attending business meetings, corporate events,
          hotel transfers or private occasions, SHM Infinity delivers
          premium Tesla chauffeur services with professionalism,
          reliability and exceptional comfort across Finland.
        </p>

        <div className="business-cta-buttons">

          <Link
            to="/booking"
            className="business-cta-primary-btn"
          >
            Book Your Journey
          </Link>

          <Link
            to="/contact"
            className="business-cta-secondary-btn"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default BusinessPrivateCTA;