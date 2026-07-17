import BookingForm from "../components/booking/BookingForm";

import "../styles/booking.css";

function Booking() {
  return (
    <main className="booking-page">

      <div className="container">

        <h1 className="booking-title">
          Book Your Ride
        </h1>

        <p className="booking-subtitle">
          Fast, reliable and premium taxi service across Finland.
          Complete the form below and send your booking request directly via WhatsApp.
        </p>

        <BookingForm />

      </div>

    </main>
  );
}

export default Booking;