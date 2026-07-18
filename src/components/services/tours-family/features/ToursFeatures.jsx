import "../../../../styles/ToursFeatures.css";

const features = [
  {
    icon: "☀️",
    title: "Summer Tours",
    description:
      "Explore Finland's lakes, forests and coastal destinations with private luxury transportation during the summer season.",
  },
  {
    icon: "❄️",
    title: "Winter Tours",
    description:
      "Experience snowy landscapes, Northern Lights adventures and winter attractions in complete comfort.",
  },
  {
    icon: "📍",
    title: "Sightseeing",
    description:
      "Enjoy flexible private sightseeing tours with experienced chauffeurs and personalized itineraries.",
  },
  {
    icon: "👶",
    title: "Child Seat Available",
    description:
      "Travel safely with your family using child seats available upon request for a comfortable journey.",
  },
];

const ToursFeatures = () => {
  return (
    <section className="tours-features">
      <div className="tours-features-container">
        <div className="tours-features-header">
          <span>OUR SERVICES</span>

          <h2>
            Premium Tours for
            <br />
            Every Season
          </h2>

          <p>
            Whether you're travelling with family or exploring Finland's
            most beautiful destinations, we provide a premium Tesla travel
            experience designed around your comfort.
          </p>
        </div>

        <div className="tours-features-grid">
          {features.map((feature, index) => (
            <div className="tours-feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursFeatures;