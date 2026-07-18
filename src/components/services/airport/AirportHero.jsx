import "../../../styles/AirportHero.css";
import airportHero from "../../../assets/services/airport-transfer.jpg";

const AirportHero = () => {
  return (
    <section className="airport-hero">
      <img
        src={airportHero}
        alt="Airport Transfer"
        className="airport-hero-image"
      />

      <div className="airport-overlay">
        <div className="airport-content">
          <span className="airport-subtitle">
            SHM Infinity
          </span>

          <h1>
            Premium Airport
            <br />
            Transfer Service
          </h1>

          <p>
            <strong>From Any Airport to Any Destination in Finland.</strong>
            <br />
            <br />
            Private airport transfers to hotels, homes, businesses and cities
            across Finland. Enjoy a comfortable, punctual and stress-free
            journey with our professional chauffeurs. Travel in luxury with
            fixed pricing, 24/7 availability and a seamless door-to-door
            experience.
          </p>

          <div className="airport-buttons">
            <a
              href="/booking"
              className="airport-btn primary-btn"
            >
              Book Now
            </a>

            <a
              href="#airport-overview"
              className="airport-btn secondary-btn"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirportHero;