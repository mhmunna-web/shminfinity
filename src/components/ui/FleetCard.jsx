function FleetCard({ car }) {
  return (
    <div className="fleet-card">

      <div className="fleet-image">
        <img src={car.image} alt={car.name} />
      </div>

      <div className="fleet-content">

        <span className="fleet-badge">
          {car.type}
        </span>

        <h3 className="fleet-title">
          {car.name}
        </h3>

        <p className="fleet-year">
          {car.year} • {car.color}
        </p>

        <div className="fleet-specs">

          <p>👥 {car.passengers} Passengers</p>

          <p>🧳 {car.luggage} Luggage</p>

          <p>⚙️ {car.transmission}</p>

          <p>⛽ {car.fuel}</p>

        </div>

        <button className="fleet-btn">
          Book Now
        </button>

      </div>

    </div>
  );
}

export default FleetCard;