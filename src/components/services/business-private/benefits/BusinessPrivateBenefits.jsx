import "../../../../styles/BusinessPrivateBenefits.css";

const benefits = [
  {
    title: "Executive Chauffeurs",
    description:
      "Experienced, professional chauffeurs dedicated to providing a smooth, discreet and first-class travel experience.",
  },
  {
    title: "Premium Tesla Fleet",
    description:
      "Travel in luxury Tesla vehicles that combine elegant design, comfort and sustainable electric performance.",
  },
  {
    title: "Always On Time",
    description:
      "Precise scheduling and real-time route planning ensure you always arrive on time for every journey.",
  },
  {
    title: "Fixed Transparent Pricing",
    description:
      "Enjoy clear, upfront pricing with no hidden fees, surge pricing or unexpected charges.",
  },
  {
    title: "24/7 Availability",
    description:
      "Our chauffeur services are available day and night to fit your business schedule and private travel needs.",
  },
  {
    title: "Privacy & Professionalism",
    description:
      "Confidential, respectful service tailored for executives, VIP clients and private travellers.",
  },
];

const BusinessPrivateBenefits = () => {
  return (
    <section className="business-benefits">
      <div className="business-benefits-container">

        <div className="business-benefits-header">

          <span className="business-benefits-tag">
            WHY CHOOSE SHM INFINITY
          </span>

          <h2>
            Premium Service
            <br />
            Without Compromise
          </h2>

          <p>
            Every journey is designed to deliver comfort, reliability and
            professionalism, making SHM Infinity the trusted choice for
            executive and private transportation throughout Finland.
          </p>

        </div>

        <div className="business-benefits-grid">

          {benefits.map((benefit, index) => (
            <div
              className="business-benefit-card"
              key={index}
            >

              <div className="business-benefit-number">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BusinessPrivateBenefits;