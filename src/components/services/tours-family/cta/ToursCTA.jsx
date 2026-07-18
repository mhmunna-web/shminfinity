import { Link } from "react-router-dom";
import "../../../../styles/ToursCTA.css";

const ToursCTA = () => {
  return (
    <section className="tours-cta">
      <div className="tours-cta-container">
        <span>READY TO EXPLORE FINLAND?</span>

        <h2>
          Book Your Private
          <br />
          Tour Today
        </h2>

        <p>
          Whether it's a family holiday, sightseeing adventure or seasonal
          experience, SHM Infinity is ready to provide premium Tesla travel
          with comfort, safety and reliability.
        </p>

        <div className="tours-cta-buttons">
          <Link
            to="/booking"
            className="tours-cta-primary"
          >
            Book Now
          </Link>

          <Link
            to="/contact"
            className="tours-cta-secondary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToursCTA;