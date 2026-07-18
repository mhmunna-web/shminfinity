import "../../../../styles/AirportCoverage.css";

const cities = [
  "Helsinki",
  "Espoo",
  "Vantaa",
  "Tampere",
  "Turku",
  "Oulu",
  "Lahti",
  "Jyväskylä",
  "Kuopio",
  "Vaasa",
  "Rovaniemi",
  "Anywhere in Finland",
];

const AirportCoverage = () => {
  return (
    <section className="airport-coverage">
      <div className="coverage-container">
        <span className="coverage-tag">
          Nationwide Service
        </span>

        <h2>
          We Drive
          <br />
          Anywhere In Finland
        </h2>

        <p className="coverage-text">
          Whether you arrive at Helsinki Airport or any other airport in
          Finland, SHM Infinity provides luxury private transfers to hotels,
          homes, businesses and every major city across the country.
        </p>

        <div className="coverage-grid">
          {cities.map((city, index) => (
            <div
              className="coverage-card"
              key={index}
            >
              <span className="coverage-icon">
                📍
              </span>

              <h3>{city}</h3>
            </div>
          ))}
        </div>

        <div className="coverage-bottom">
          <h3>Your Destination Not Listed?</h3>

          <p>
            No problem. We provide private airport transfers to every city,
            town and destination across Finland. Simply tell us where you need
            to go, and we'll take care of the rest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AirportCoverage;