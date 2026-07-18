import "../../../../styles/AirportProcess.css";

const steps = [
  {
    number: "01",
    title: "Book Your Ride",
    description:
      "Reserve your airport transfer online or contact us with your pickup location, destination and flight details.",
  },
  {
    number: "02",
    title: "We Prepare Everything",
    description:
      "Our team schedules your journey and ensures your professional chauffeur is ready before your arrival.",
  },
  {
    number: "03",
    title: "Meet Your Chauffeur",
    description:
      "Your driver welcomes you, assists with your luggage and escorts you to your luxury vehicle.",
  },
  {
    number: "04",
    title: "Enjoy The Journey",
    description:
      "Sit back, relax and travel comfortably to any hotel, home, business or city anywhere in Finland.",
  },
];

const AirportProcess = () => {
  return (
    <section className="airport-process">

      <div className="process-container">

        <span className="process-tag">
          Simple Process
        </span>

        <h2>
          Your Airport Transfer
          <br />
          In Four Easy Steps
        </h2>

        <div className="process-grid">          {steps.map((step) => (
            <div
              className="process-card"
              key={step.number}
            >
              <div className="process-number">
                {step.number}
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default AirportProcess;