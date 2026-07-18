import { Link } from "react-router-dom";
import "../../styles/bookingCTA.css";

function BookingCTA() {
  return (
    <section className="booking-cta">
      <div className="booking-cta-container">

        <h2 className="booking-title">
          Ready to Book Your Ride?
        </h2>

        <p className="booking-text">
          Premium taxi service across Helsinki, Vantaa & Espoo.
          <br />
          Book your ride today and travel with comfort, safety and professionalism.
        </p>

        <div className="booking-buttons">

          <Link
            to="/booking"
            className="booking-btn booking-primary"
          >
            Book Now
          </Link>

          <a
            href="https://wa.me/358449408543"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn booking-whatsapp"
          >
            WhatsApp
          </a>

          <a
            href="tel:+358449408543"
            className="booking-btn booking-call"
          >
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}

export default BookingCTA;