import "../../../../styles/ToursBenefits.css";

const benefits = [
  {
    number: "01",
    title: "Private Tours",
    description:
      "Enjoy fully private sightseeing experiences with flexible schedules and personalized routes.",
  },
  {
    number: "02",
    title: "Luxury Tesla Fleet",
    description:
      "Travel in premium Tesla vehicles offering exceptional comfort, safety and sustainability.",
  },
  {
    number: "03",
    title: "Family Friendly",
    description:
      "Spacious vehicles with child seats available to ensure a safe and relaxing journey for everyone.",
  },
  {
    number: "04",
    title: "Professional Chauffeurs",
    description:
      "Friendly and experienced chauffeurs providing reliable, punctual and first-class service.",
  },
];

const ToursBenefits = () => {
  return (
    <section className="tours-benefits">
      <div className="tours-benefits-container">
        <div className="tours-benefits-content">
          <span>WHY CHOOSE US</span>

          <h2>
            Premium Travel
            <br />
            Without Compromise
          </h2>

          <p>
            Whether you're planning a family holiday, sightseeing adventure
            or seasonal tour, SHM Infinity provides a luxury travel
            experience designed around comfort, flexibility and reliability.
          </p>
        </div>

        <div className="tours-benefits-grid">
          {benefits.map((item) => (
            <div className="benefit-card" key={item.number}>
              <span className="benefit-number">{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursBenefits;