import Button from "../ui/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: "url('/images/hero/hero-bg.PNG')",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-subtitle">
          WELCOME TO SHM INFINITY
        </p>

        <h1>
          Premium Taxi Service
          <br />
          in Finland
        </h1>

        <h2>
          Trust in Motion
        </h2>

        <p className="hero-description">
          Experience luxury, safety and reliability
          with SHM Infinity.
          We provide premium taxi services
          across Finland with professional
          drivers and modern vehicles.
        </p>

        <div className="hero-buttons">

          <Button
            href="https://wa.me/358449408543?text=Hello%20SHM%20Infinity,%20I'd%20like%20to%20book%20a%20taxi."
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Book Your Ride
          </Button>

          <Button
            href="#fleet"
            variant="secondary"
          >
            View Our Fleet
          </Button>

        </div>
      </div>
    </section>
  );
};

export default Hero;