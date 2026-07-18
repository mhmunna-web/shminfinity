import "../../../../styles/BusinessPrivateProcess.css";

const steps = [
  {
    step: "01",
    title: "Choose Your Service",
    description:
      "Select executive transfer, corporate travel, hotel transfer or event transportation based on your travel requirements.",
  },
  {
    step: "02",
    title: "Confirm Your Booking",
    description:
      "Provide your pickup location, destination, schedule and any special requests through our simple booking process.",
  },
  {
    step: "03",
    title: "Meet Your Chauffeur",
    description:
      "Your professional chauffeur arrives on time in a premium Tesla vehicle, ready to provide a smooth and comfortable journey.",
  },
  {
    step: "04",
    title: "Arrive in Comfort",
    description:
      "Relax and enjoy a first-class travel experience while we ensure you reach your destination safely and on schedule.",
  },
];

const BusinessPrivateProcess = () => {
  return (
    <section className="business-process">
      <div className="business-process-container">

        <div className="business-process-header">

          <span className="business-process-tag">
            HOW IT WORKS
          </span>

          <h2>
            Simple Booking,
            <br />
            Exceptional Service
          </h2>

          <p>
            Booking your executive chauffeur service is quick and effortless.
            From reservation to arrival, every step is designed for comfort,
            reliability and professionalism.
          </p>

        </div>

        <div className="business-process-action">
          <a
            href="/booking"
            className="business-process-book-btn"
          >
            Book Your Journey
          </a>
        </div>

        <div className="business-process-grid">

          {steps.map((step) => (
            <div
              className="business-process-card"
              key={step.step}
            >

              <div className="business-process-number">
                {step.step}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BusinessPrivateProcess;