import "../../../../styles/BusinessPrivateOverview.css";

const services = [
  {
    title: "Executive Transfer",
    description:
      "Professional chauffeur service for executives, directors and VIP clients with punctual arrivals and premium comfort.",
  },
  {
    title: "Corporate Travel",
    description:
      "Reliable transportation for meetings, conferences, roadshows and daily business travel across Finland.",
  },
  {
    title: "Hotel Transfer",
    description:
      "Luxury transfers between hotels, airports and business venues with a smooth, stress-free experience.",
  },
  {
    title: "Event Transportation",
    description:
      "Premium chauffeur service for corporate events, private functions and special occasions with flexible scheduling.",
  },
];

const BusinessPrivateOverview = () => {
  return (
    <section className="business-overview">
      <div className="business-overview-container">

        <div className="business-overview-content">

          <span className="business-tag">
            BUSINESS & PRIVATE TRAVEL
          </span>

          <h2>
            Executive Transportation
            <br />
            Tailored Around You
          </h2>

          <p className="business-description">
            Whether you're travelling for business meetings, hotel
            transfers, executive appointments or private events,
            SHM Infinity delivers first-class chauffeur services
            with premium Tesla vehicles, professional drivers and
            exceptional comfort throughout Finland.
          </p>

        </div>

        <div className="business-services-grid">

          {services.map((service, index) => (
            <div
              className="business-service-card"
              key={index}
            >

              <div className="business-card-number">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BusinessPrivateOverview;