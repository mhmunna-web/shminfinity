import { Link } from "react-router-dom";
import "../../../../styles/AirportCTA.css";

const AirportCTA = () => {
  return (
    <section className="airport-cta">
      <div className="airport-cta-container">

        <div className="airport-cta-glow"></div>

        <span className="airport-cta-tag">
          READY TO FLY?
        </span>

        <h2>
          Premium Airport
          <br />
          Transfer Service
        </h2>

        <p>
          Whether you're arriving or departing, SHM Infinity provides
          reliable Tesla airport transfers with professional chauffeurs,
          real-time flight monitoring and fixed transparent pricing
          throughout Finland.
        </p>

        <div className="airport-cta-buttons">

          <Link
            to="/booking"
            className="airport-cta-primary-btn"
          >
            Book Your Airport Transfer
          </Link>

          <Link
            to="/contact"
            className="airport-cta-secondary-btn"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AirportCTA;