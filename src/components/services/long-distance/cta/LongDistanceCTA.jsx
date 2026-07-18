import { Link } from "react-router-dom";
import "../../../../styles/LongDistanceCTA.css";

const LongDistanceCTA = () => {
  return (
    <section className="long-distance-cta">
      <div className="long-distance-cta-container">

        <div className="cta-glow"></div>

        <span className="cta-tag">
          READY TO TRAVEL?
        </span>

        <h2>
          Experience Luxury
          <br />
          Long Distance Travel
        </h2>

        <p>
          Whether you're travelling for business, leisure or a special
          occasion, SHM Infinity provides premium Tesla chauffeur
          services across Finland with exceptional comfort,
          professionalism and reliability.
        </p>

        <div className="cta-buttons">

          <Link
            to="/booking"
            className="cta-primary-btn"
          >
            Book Your Journey
          </Link>

          <Link
            to="/contact"
            className="cta-secondary-btn"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default LongDistanceCTA;