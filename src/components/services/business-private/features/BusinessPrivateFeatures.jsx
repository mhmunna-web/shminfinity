import "../../../../styles/BusinessPrivateFeatures.css";

const features = [
  {
    title: "Executive Transfer",
    description:
      "Professional chauffeur service for executives and VIP clients with punctual pickups, luxury comfort and complete privacy.",
  },
  {
    title: "Corporate Travel",
    description:
      "Reliable transportation for meetings, conferences, client visits and daily business travel across Finland.",
  },
  {
    title: "Hotel Transfer",
    description:
      "Smooth transfers between hotels, airports and business destinations with fixed pricing and exceptional service.",
  },
  {
    title: "Event Transportation",
    description:
      "Premium transportation for corporate events, private celebrations and special occasions with flexible scheduling.",
  },
];

const BusinessPrivateFeatures = () => {
  return (
    <section className="business-features">
      <div className="business-features-container">

        <div className="business-features-heading">
          <span className="business-features-tag">
            OUR SERVICES
          </span>

          <h2>
            Business & Private
            <br />
            Chauffeur Solutions
          </h2>

          <p>
            Designed for professionals, executives and private clients
            who expect punctuality, comfort and premium service on every
            journey.
          </p>
        </div>

        <div className="business-features-grid">
          {features.map((feature, index) => (
            <div className="business-feature-card" key={index}>

              <div className="business-feature-icon">
                ✓
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessPrivateFeatures;