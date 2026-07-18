import "../../../../styles/LongDistanceDestinations.css";

const destinations = [
  {
    route: "Helsinki → Tampere",
    distance: "Approx. 180 km",
    description:
      "Fast, comfortable and private chauffeur service between Finland's capital and Tampere.",
  },
  {
    route: "Helsinki → Turku",
    distance: "Approx. 170 km",
    description:
      "Relax in our luxury Tesla while enjoying a smooth journey to Finland's historic coastal city.",
  },
  {
    route: "Helsinki → Oulu",
    distance: "Approx. 610 km",
    description:
      "Long-distance executive travel with premium comfort for business or personal journeys.",
  },
  {
    route: "Helsinki → Rovaniemi",
    distance: "Approx. 820 km",
    description:
      "Travel to the Arctic Circle in complete luxury with flexible stops along the route.",
  },
  {
    route: "Helsinki → Vaasa",
    distance: "Approx. 440 km",
    description:
      "Reliable chauffeur-driven transportation for meetings, events and family travel.",
  },
  {
    route: "Anywhere in Finland",
    distance: "Custom Route",
    description:
      "Need a different destination? We provide private long-distance transportation anywhere in Finland.",
  },
];

const LongDistanceDestinations = () => {
  return (
    <section className="long-destinations">
      <div className="long-destinations-container">

        <div className="destination-header">

          <span className="destination-tag">
            POPULAR ROUTES
          </span>

          <h2>
            Travel Anywhere
            <br />
            Across Finland
          </h2>

          <p>
            Whether you're travelling for business, leisure or family,
            SHM Infinity provides luxury chauffeur-driven transportation
            between Finland's most popular destinations.
          </p>

        </div>

        <div className="destination-grid">

          {destinations.map((item, index) => (

            <div
              className="destination-card"
              key={index}
            >

              <span className="route-distance">
                {item.distance}
              </span>

              <h3>
                {item.route}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default LongDistanceDestinations;