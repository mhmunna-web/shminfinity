import SEO from "../components/seo/SEO";
import BookingForm from "../components/booking/BookingForm";

import "../styles/booking.css";

function Booking() {
  return (
    <>
      <SEO
        title="Book a Taxi Online | SHM Infinity"
        description="Book your premium taxi online with SHM Infinity. Airport transfers, business travel, city rides, long-distance transportation, and private tours across Helsinki, Vantaa, Espoo, and throughout Finland."
        keywords="Book Taxi Finland, Online Taxi Booking, Helsinki Taxi Booking, Airport Transfer Booking, Premium Taxi Finland, Business Taxi, SHM Infinity"
        url="https://www.shminfinity.fi/booking"
      />

      <main className="booking-page">
        <div className="container">
          <h1 className="booking-title">
            Book Your Ride
          </h1>

          <p className="booking-subtitle">
            Fast, reliable, and premium taxi service across Finland.
            Complete the form below and send your booking request directly via WhatsApp.
          </p>

          <BookingForm />
        </div>
      </main>
    </>
  );
}

export default Booking;