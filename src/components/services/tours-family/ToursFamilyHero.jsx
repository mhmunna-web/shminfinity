import { Link } from "react-router-dom";
import toursFamilyImage from "../../../assets/services/tours-family.jpg";
import "../../../styles/ToursFamilyHero.css";

const ToursFamilyHero = () => {
  return (
    <section
      className="tours-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,.78)), url(${toursFamilyImage})`,
      }}
    >
      <div className="tours-hero-overlay"></div>

      <div className="tours-hero-container">

        <span className="tours-hero-tag">
          TOURS & FAMILY TRAVEL
        </span>

        <h1>
          Discover Finland
          <br />
          In Premium Comfort
        </h1>

        <p>
          Enjoy unforgettable sightseeing tours, seasonal adventures and
          comfortable family travel in our premium Tesla vehicles.
          Experience Finland with professional chauffeurs, flexible
          schedules and first-class service.
        </p>

        <div className="tours-hero-buttons">

          <Link
            to="/booking"
            className="tours-hero-primary-btn"
          >
            Book Your Tour
          </Link>

          <Link
            to="/contact"
            className="tours-hero-secondary-btn"
          >
            Contact Us
          </Link>

        </div>

        <div className="tours-hero-stats">

          <div className="tours-stat">
            <h3>365</h3>
            <span>Days Available</span>
          </div>

          <div className="tours-stat">
            <h3>Private</h3>
            <span>Tours</span>
          </div>

          <div className="tours-stat">
            <h3>Tesla</h3>
            <span>Premium Fleet</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ToursFamilyHero;