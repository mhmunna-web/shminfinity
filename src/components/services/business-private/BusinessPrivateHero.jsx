import { Link } from "react-router-dom";
import businessTravelImage from "../../../assets/services/business-travel.jpg";
import "../../../styles/BusinessPrivateHero.css";

const BusinessPrivateHero = () => {
  return (
    <section
      className="business-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,.78)), url(${businessTravelImage})`,
      }}
    >
      <div className="business-hero-overlay"></div>

      <div className="business-hero-container">
        <span className="business-hero-tag">
          BUSINESS & PRIVATE TRAVEL
        </span>

        <h1>
          Executive Tesla
          <br />
          Chauffeur Service
        </h1>

        <p>
          Professional chauffeur services for business executives,
          corporate clients, hotel transfers and private occasions.
          Experience luxury, punctuality and comfort with SHM Infinity
          across Finland.
        </p>

        <div className="business-hero-buttons">
          <Link
            to="/booking"
            className="business-hero-primary-btn"
          >
            Book Your Journey
          </Link>

          <Link
            to="/contact"
            className="business-hero-secondary-btn"
          >
            Contact Us
          </Link>
        </div>

        <div className="business-hero-stats">
          <div className="business-stat">
            <h3>24/7</h3>
            <span>Available</span>
          </div>

          <div className="business-stat">
            <h3>100%</h3>
            <span>Fixed Pricing</span>
          </div>

          <div className="business-stat">
            <h3>Tesla</h3>
            <span>Premium Fleet</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPrivateHero;