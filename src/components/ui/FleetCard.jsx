function FleetCard({ car }) {
  return (
    <article
      className="fleet-card"
      aria-label={`${car.name} premium taxi`}
    >
      <div className="fleet-image">
        <img
          src={car.image}
          alt={`${car.name} ${car.year} ${car.color} premium taxi in Finland`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="fleet-content">
        <span
          className="fleet-badge"
          aria-label={`Vehicle category: ${car.type}`}
        >
          {car.type}
        </span>

        <h3 className="fleet-title">
          {car.name}
        </h3>

        <p className="fleet-year">
          {car.year} • {car.color}
        </p>

        <div
          className="fleet-specs"
          aria-label={`${car.name} specifications`}
        >
          <p>👥 {car.passengers} Passengers</p>

          <p>🧳 {car.luggage} Luggage</p>

          <p>⚙️ {car.transmission}</p>

          <p>⚡ {car.fuel}</p>
        </div>
      </div>
    </article>
  );
}

export default FleetCard;