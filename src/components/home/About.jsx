import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const About = () => {
  return (
    <section
      id="about"
      className="about"
      aria-labelledby="about-title"
      aria-label="About SHM Infinity"
    >
      <div className="about-image">
        <img
          src="/images/about/about-image.png"
          alt="SHM Infinity premium taxi service operating across Finland"
          loading="lazy"
        />
      </div>

      <div className="about-content">
        <span className="about-subtitle">
          ABOUT SHM INFINITY
        </span>

        <SectionTitle id="about-title">
          Premium Taxi Service
          <br />
          Across Finland
        </SectionTitle>

        <p>
          SHM Infinity provides premium taxi services with luxury vehicles,
          professional drivers, and reliable transportation across Finland.
          Whether you need an airport transfer, business travel, long-distance
          transportation, or a city taxi, we ensure a safe, comfortable, and
          punctual journey throughout Helsinki, Vantaa, Espoo, and other cities
          across Finland.
        </p>

        <div
          className="about-features"
          aria-label="Why choose SHM Infinity"
        >
          <div>✓ Professional Drivers</div>
          <div>✓ Luxury Vehicles</div>
          <div>✓ Airport Transfer</div>
          <div>✓ Business Travel</div>
          <div>✓ Fixed Pricing</div>
          <div>✓ 24/7 Service</div>
        </div>

        <Button
          href="#fleet"
          variant="primary"
          aria-label="Explore our premium taxi fleet"
        >
          Explore Our Fleet
        </Button>
      </div>
    </section>
  );
};

export default About;