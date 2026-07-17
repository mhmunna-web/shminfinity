import { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";

import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFlagCheckered,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaCar,
  FaChild,
  FaSuitcase,
  FaRegEdit,
  FaWhatsapp,
} from "react-icons/fa";

const libraries = ["places"];

function BookingForm() {
  const initialForm = {
    name: "",
    phone: "",
    email: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "",
    vehicle: "",
    childSeat: "",
    luggage: "",
    notes: "",
  };

  const [formData, setFormData] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  const [pickupAutocomplete, setPickupAutocomplete] = useState(null);

  const [dropoffAutocomplete, setDropoffAutocomplete] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePickupChanged = () => {
    if (!pickupAutocomplete) return;

    const place = pickupAutocomplete.getPlace();

    if (place?.formatted_address) {
      setFormData((prev) => ({
        ...prev,
        pickup: place.formatted_address,
      }));
    }
  };

  const handleDropoffChanged = () => {
    if (!dropoffAutocomplete) return;

    const place = dropoffAutocomplete.getPlace();

    if (place?.formatted_address) {
      setFormData((prev) => ({
        ...prev,
        dropoff: place.formatted_address,
      }));
    }
  };

  if (!isLoaded) {
    return <p>Loading Google Maps...</p>;
  }  const handleBooking = () => {
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.pickup.trim() ||
      !formData.dropoff.trim() ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const message = `🚖 SHM Infinity Booking Request

👤 CUSTOMER INFORMATION

Name: ${formData.name}

Phone: ${formData.phone}

Email: ${formData.email || "-"}

📍 TRIP INFORMATION

Pickup: ${formData.pickup}

Drop-off: ${formData.dropoff}

Date: ${formData.date}

Time: ${formData.time}

🚖 RIDE DETAILS

Passengers: ${formData.passengers || "-"}

Vehicle: ${formData.vehicle || "-"}

Child Seat: ${formData.childSeat || "-"}

Large Bags: ${formData.luggage || "-"}

📝 ADDITIONAL INFORMATION

${formData.notes || "-"}

Thank you for choosing SHM Infinity.`;

    const whatsappURL =
      "https://wa.me/358449408543?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    setLoading(false);

    setFormData(initialForm);
  };

  return (
    <div className="booking-form">

      <h2 className="form-heading full-width">
        👤 Your Information
      </h2>

      <div className="input-group">
        <FaUser className="input-icon" />

        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <FaPhoneAlt className="input-icon" />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <FaEnvelope className="input-icon" />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <h2 className="form-heading full-width">
        📍 Trip Information
      </h2>      <div className="input-group">
        <FaMapMarkerAlt className="input-icon" />

        <Autocomplete
          onLoad={setPickupAutocomplete}
          onPlaceChanged={handlePickupChanged}
          options={{
            componentRestrictions: { country: "fi" },
          }}
        >
          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location *"
            value={formData.pickup}
            onChange={handleChange}
          />
        </Autocomplete>
      </div>

      <div className="input-group">
        <FaFlagCheckered className="input-icon" />

        <Autocomplete
          onLoad={setDropoffAutocomplete}
          onPlaceChanged={handleDropoffChanged}
          options={{
            componentRestrictions: { country: "fi" },
          }}
        >
          <input
            type="text"
            name="dropoff"
            placeholder="Drop-off Location *"
            value={formData.dropoff}
            onChange={handleChange}
          />
        </Autocomplete>
      </div>

      <div className="input-group">
        <FaCalendarAlt className="input-icon" />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <FaClock className="input-icon" />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>

      <h2 className="form-heading full-width">
        🚖 Ride Details
      </h2>

      <div className="input-group">
        <FaUsers className="input-icon" />

        <input
          type="number"
          name="passengers"
          min="1"
          max="8"
          placeholder="Number of Passengers"
          value={formData.passengers}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <FaCar className="input-icon" />

        <select
          name="vehicle"
          value={formData.vehicle}
          onChange={handleChange}
        >
          <option value="">Select Vehicle Type</option>
          <option value="Standard Taxi">Standard Taxi</option>
          <option value="Comfort Taxi">Comfort Taxi</option>
          <option value="Business Taxi">Business Taxi</option>
          <option value="Premium Taxi">Premium Taxi</option>
        </select>
      </div>

      <div className="input-group">
        <FaChild className="input-icon" />

        <select
          name="childSeat"
          value={formData.childSeat}
          onChange={handleChange}
        >
          <option value="">Child Seat Needed?</option>
          <option value="No">No</option>
          <option value="1 Child Seat">Yes - 1 Child Seat</option>
          <option value="2 Child Seats">Yes - 2 Child Seats</option>
        </select>
      </div>      <div className="input-group">
        <FaSuitcase className="input-icon" />

        <input
          type="number"
          name="luggage"
          min="0"
          max="10"
          placeholder="Number of Large Bags"
          value={formData.luggage}
          onChange={handleChange}
        />
      </div>

      <h2 className="form-heading full-width">
        📝 Additional Information
      </h2>

      <div className="input-group full-width textarea-group">
        <FaRegEdit className="input-icon textarea-icon" />

        <textarea
          name="notes"
          rows="6"
          placeholder="Example: Meet me at Terminal 2, I have 2 large suitcases, wheelchair access, or any special requests."
          value={formData.notes}
          onChange={handleChange}
        />
      </div>

      <button
        type="button"
        className="booking-submit"
        onClick={handleBooking}
        disabled={loading}
      >
        <FaWhatsapp />

        {loading
          ? "Opening WhatsApp..."
          : "Confirm Booking via WhatsApp"}
      </button>

      <p className="booking-note">
        ✓ We usually reply within 5–10 minutes on WhatsApp.
      </p>

    </div>
  );
}

export default BookingForm;