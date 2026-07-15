const About = () => {
  return (
    <section
      id="about"
      className="about"
    >
      <div className="about-image">
        <img
          src="/images/about/about-image.png"
          alt="About SHM Infinity"
        />
      </div>

      <div className="about-content">
        <span className="about-subtitle">
          ABOUT SHM INFINITY
        </span>

        <h2>
          Premium Taxi Service
          <br />
          Across Finland
        </h2>

        <p>
          SHM Infinity provides premium taxi
          services with luxury vehicles,
          professional drivers and reliable
          transportation across Finland.

          Whether you need airport transfer,
          business travel or city taxi,
          we ensure a comfortable and safe
          journey every time.
        </p>

        <div className="about-features">
          <div>✓ Professional Drivers</div>
          <div>✓ Luxury Vehicles</div>
          <div>✓ Airport Transfer</div>
          <div>✓ Business Travel</div>
          <div>✓ Fixed Pricing</div>
          <div>✓ 24/7 Service</div>
        </div>

        <a
          href="#fleet"
          className="primary-btn"
        >
          Explore Our Fleet
        </a>
      </div>
    </section>
  );
};

export default About;