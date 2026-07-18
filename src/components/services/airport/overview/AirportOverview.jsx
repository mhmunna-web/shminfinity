import "../../../../styles/AirportOverview.css";

const overviewCards = [
  {
    title: "Meet & Greet",
    description:
      "Your chauffeur will welcome you inside the airport and assist you with your luggage.",
  },
  {
    title: "Fixed Pricing",
    description:
      "Transparent pricing with no hidden fees. Know your fare before you travel.",
  },
  {
    title: "24/7 Service",
    description:
      "Available day and night to match every flight schedule throughout the year.",
  },
];

const AirportOverview = () => {
  return (
    <section className="airport-overview">
      <div className="overview-container">

        <div className="overview-left">

          <span className="overview-tag">
            Airport Transfer
          </span>

          <h2>
            Stress-Free Airport
            <br />
            Transportation
          </h2>

          <p>
            SHM Infinity provides premium airport transportation with
            professional chauffeurs, luxury Tesla vehicles and reliable
            service throughout Finland.
          </p>

          <p>
            Whether you are arriving or departing, we ensure every journey is
            comfortable, punctual and completely hassle-free.
          </p>

        </div>

        <div className="overview-right">          {overviewCards.map((card, index) => (
            <div
              className="overview-card"
              key={index}
            >
              <h3>
                ✓ {card.title}
              </h3>

              <p>
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AirportOverview;