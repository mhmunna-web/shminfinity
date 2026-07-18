import "../../../../styles/LongDistanceBookingProcess.css";

const steps = [
  {
    number: "01",
    title: "Choose Your Destination",
    description:
      "Tell us your pickup location, destination and preferred travel time anywhere in Finland.",
  },
  {
    number: "02",
    title: "Confirm Your Booking",
    description:
      "Receive transparent pricing with no hidden fees and confirm your reservation in just a few minutes.",
  },
  {
    number: "03",
    title: "Meet Your Chauffeur",
    description:
      "Your professional chauffeur arrives on time in a premium Tesla, ready to assist with your journey.",
  },
  {
    number: "04",
    title: "Enjoy the Journey",
    description:
      "Relax in complete comfort while we safely take you to your destination with a smooth luxury experience.",
  },
];

const LongDistanceBookingProcess = () => {
  return (
    <section className="booking-process">
      <div className="booking-process-container">

        <div className="process-header">

          <span className="process-tag">
            HOW IT WORKS
          </span>

          <h2>
            Booking Your Journey
            <br />
            Is Simple
          </h2>

          <p>
            From booking to arrival, every step is designed to make your
            long-distance travel effortless, comfortable and stress-free.
          </p>

          <div className="process-action">
            <a href="/booking" className="process-book-btn">
              Book Your Journey
            </a>
          </div>

        </div>

        <div className="process-grid">

          {steps.map((step, index) => (
            <div className="process-card" key={index}>

              <div className="process-number">
                {step.number}
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

export default LongDistanceBookingProcess;