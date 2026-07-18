import "../../../../styles/LongDistanceFeatures.css";

const features = [
  {
    title: "Private Intercity Travel",
    description:
      "Travel between any cities in Finland with a private chauffeur and enjoy complete comfort from pickup to destination.",
  },
  {
    title: "Business Executive Transfers",
    description:
      "Reliable transportation for executives, corporate meetings, conferences and important business appointments.",
  },
  {
    title: "Family & Group Journeys",
    description:
      "Spacious premium vehicles make long journeys comfortable for families, friends and extra luggage.",
  },
  {
    title: "Flexible Travel Schedule",
    description:
      "Choose your own departure time, preferred route and optional stops without depending on public transport.",
  },
  {
    title: "Luxury Tesla Experience",
    description:
      "Enjoy a quiet, smooth and environmentally friendly journey inside our modern premium Tesla fleet.",
  },
  {
    title: "Available 24/7 Across Finland",
    description:
      "Whether it's early morning or late at night, our professional chauffeurs are ready whenever you need them.",
  },
];

const LongDistanceFeatures = () => {
  return (
    <section className="long-features" id="long-features">
      <div className="long-features-container">

        <div className="long-features-header">

          <span className="features-tag">
            WHY CHOOSE SHM INFINITY
          </span>

          <h2>
            Premium Long Distance
            <br />
            Travel Experience
          </h2>

          <p className="features-description">
            Every journey is carefully planned to provide luxury,
            punctuality and complete peace of mind. Whether you're
            travelling for business, family or leisure, SHM Infinity
            delivers a first-class chauffeur experience across Finland.
          </p>

        </div>

        <div className="features-grid">

          {features.map((feature, index) => (

            <div
              className="feature-card"
              key={index}
            >

              <div className="feature-number">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <h3>
                {feature.title}
              </h3>

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

export default LongDistanceFeatures;