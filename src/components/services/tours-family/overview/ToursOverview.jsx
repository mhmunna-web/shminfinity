import "../../../../styles/ToursOverview.css";

const ToursOverview = () => {
  return (
    <section className="tours-overview">
      <div className="tours-overview-container">
        <div className="tours-overview-header">
          <span>DISCOVER FINLAND</span>

          <h2>
            Luxury Tours &
            <br />
            Family Travel
          </h2>

          <p>
            Whether you're exploring iconic landmarks, planning a family
            holiday or enjoying a private sightseeing experience, SHM
            Infinity delivers premium transportation with comfort,
            flexibility and exceptional service.
          </p>
        </div>

        <div className="tours-overview-grid">
          <div className="tour-card">
            <h3>Private Sightseeing</h3>

            <p>
              Explore Finland's most beautiful destinations with a private
              chauffeur and premium Tesla comfort.
            </p>
          </div>

          <div className="tour-card">
            <h3>Family-Friendly Travel</h3>

            <p>
              Spacious luxury vehicles with child seats available for safe
              and comfortable family journeys.
            </p>
          </div>

          <div className="tour-card">
            <h3>Seasonal Experiences</h3>

            <p>
              Enjoy unforgettable summer tours, winter adventures and
              customized sightseeing experiences across Finland.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToursOverview;