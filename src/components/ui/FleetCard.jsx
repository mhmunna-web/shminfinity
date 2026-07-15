function FleetCard({ car }) {
  return (
    <div className="fleet-card">

      <div className="fleet-image">
        <img
          src={car.image}
          alt={car.name}
        />
      </div>

      <div className="fleet-info">

        <h3>{car.name}</h3>

        <p>
          {car.year} • {car.color}
        </p>

        <span className="fleet-badge">
          {car.type}
        </span>

        <div className="fleet-details">

          <p>👥 {car.passengers} Passengers</p>

          <p>🧳 {car.luggage} Luggage</p>

          <p>⚙️ {car.transmission}</p>

          <p>⛽ {car.fuel}</p>

        </div>

      </div>

    </div>
  );
}

export default FleetCard;