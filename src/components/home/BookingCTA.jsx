import { Link } from "react-router-dom";
import "../../styles/bookingCTA.css";

function BookingCTA() {
  return (
    <section
      className="booking-cta"
      aria-labelledby="booking-title"
      aria-label="Book a premium taxi"
    >
      <div className="booking-cta-container">
        <h2
          id="booking-title"
          className="booking-title"
        >
          Ready to Book Your Ride?
        </h2>

        <p className="booking-text">
          Premium taxi service across Helsinki, Vantaa, Espoo, and throughout
          Finland. Book your ride today and travel with comfort, safety,
          reliability, and professional drivers.
        </p>

        <div
          className="booking-buttons"
          aria-label="Booking options"
        >
          <Link
            to="/booking"
            className="booking-btn booking-primary"
            aria-label="Book a premium taxi online"
          >
            Book Now
          </Link>

          <a
            href="https://wa.me/358449408543?text=Hello%20SHM%20Infinity,%20I'd%20like%20to%20book%20a%20taxi."
            target="_blank"
            rel="noopener noreferrer"
            className="booking-btn booking-whatsapp"
            aria-label="Book via WhatsApp"
          >
            WhatsApp
          </a>

          <a
            href="tel:+358449408543"
            className="booking-btn booking-call"
            aria-label="Call SHM Infinity"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;