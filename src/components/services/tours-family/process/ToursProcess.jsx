import "../../../../styles/ToursProcess.css";

const steps = [
  {
    number: "01",
    title: "Choose Your Tour",
    description:
      "Select your preferred sightseeing tour, seasonal trip or family travel experience.",
  },
  {
    number: "02",
    title: "Book Your Journey",
    description:
      "Tell us your destination, travel date and any special requests including child seats.",
  },
  {
    number: "03",
    title: "Enjoy the Experience",
    description:
      "Relax in a premium Tesla while our professional chauffeur takes care of the entire journey.",
  },
];

const ToursProcess = () => {
  return (
    <section className="tours-process">
      <div className="tours-process-container">
        <div className="tours-process-header">
          <span>HOW IT WORKS</span>

          <h2>
            Book in Minutes,
            <br />
            Travel in Luxury
          </h2>

          <p>
            We make every booking simple, fast and stress-free, so you can
            focus on enjoying your trip.
          </p>
        </div>

        <div className="tours-process-grid">
          {steps.map((step) => (
            <div className="process-card" key={step.number}>
              <span className="process-number">
                {step.number}
              </span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursProcess;