import "../../../styles/LongDistanceHero.css";
import longDistanceHero from "../../../assets/services/long-distance.jpg";

const LongDistanceHero = () => {
  return (
    <section className="long-distance-hero">
      <img
        src={longDistanceHero}
        alt="Long Distance Travel"
        className="long-distance-hero-image"
      />

      <div className="long-distance-overlay">
        <div className="long-distance-content">

          <span className="long-distance-subtitle">
            SHM Infinity
          </span>

          <h1>
            Luxury Long
            <br />
            Distance Travel
          </h1>

          <p>
            <strong>
              Travel Anywhere in Finland with Comfort and Confidence.
            </strong>

            <br />
            <br />

            Whether you're travelling between cities, heading to a business
            meeting, visiting family or planning a private journey, SHM
            Infinity provides premium long-distance chauffeur services across
            Finland. Relax in a luxury Tesla while our professional drivers
            ensure a smooth, safe and comfortable journey from start to
            finish.
          </p>

          <div className="long-distance-buttons">

            <a
              href="/booking"
              className="long-distance-btn primary-btn"
            >
              Book Now
            </a>

            <a
              href="#long-distance-overview"
              className="long-distance-btn secondary-btn"
            >
              Learn More
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LongDistanceHero;