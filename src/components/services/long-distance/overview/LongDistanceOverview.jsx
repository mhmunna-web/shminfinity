import "../../../../styles/LongDistanceOverview.css";

const highlights = [
  {
    title: "Door-to-Door Service",
    description:
      "We pick you up from your exact location and drive you directly to your destination anywhere in Finland.",
  },
  {
    title: "Fixed Transparent Pricing",
    description:
      "No hidden charges or surprise fees. You'll know the total price before your journey begins.",
  },
  {
    title: "Luxury Tesla Fleet",
    description:
      "Travel in modern premium Tesla vehicles with spacious interiors, comfort and zero-emission performance.",
  },
  {
    title: "Professional Chauffeurs",
    description:
      "Experienced, courteous and reliable drivers who ensure a smooth and safe journey every time.",
  },
];

const LongDistanceOverview = () => {
  return (
    <section className="long-overview" id="long-overview">
      <div className="long-overview-container">
        <div className="long-overview-left">
          <span className="overview-tag">
            Long Distance Travel
          </span>

          <h2>
            Comfortable Journeys
            <br />
            Across Finland
          </h2>

          <p>
            Whether you're travelling between cities, heading to a business
            meeting, visiting family or planning a private trip, SHM Infinity
            delivers a premium long-distance travel experience designed around
            comfort, safety and reliability.
          </p>

          <p>
            From Helsinki to Lapland or anywhere in between, our professional
            chauffeurs ensure every journey is relaxing, punctual and completely
            stress-free.
          </p>
        </div>

        <div className="long-overview-right">
          {highlights.map((item, index) => (
            <div
              className="overview-card"
              key={index}
            >
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongDistanceOverview;