import "../../../../styles/AirportFeatures.css";

const features = [
  {
    title: "Airport Pickup",
    description:
      "Professional chauffeur waiting for you at the airport with a smooth and stress-free pickup experience.",
  },
  {
    title: "Airport Drop-off",
    description:
      "Reach the airport comfortably and on time with our reliable luxury transfer service.",
  },
  {
    title: "Meet & Greet",
    description:
      "Your chauffeur welcomes you inside the terminal and assists you with your luggage.",
  },
  {
    title: "24/7 Availability",
    description:
      "Airport transfer service is available day and night, every day of the year.",
  },
];

const AirportFeatures = () => {
  return (
    <section className="airport-features">
      <div className="features-container">

        <span className="features-tag">
          Why Choose Us
        </span>

        <h2>
          Everything Included
          <br />
          In Your Airport Transfer
        </h2>

        <div className="features-grid">          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
            >
              <h3>{feature.title}</h3>

              <p>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AirportFeatures;