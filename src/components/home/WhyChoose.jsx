import "../../styles/whyChoose.css";

function WhyChoose() {
  const features = [
    {
      icon: "🚖",
      title: "Professional Drivers",
      text: "Experienced, licensed and friendly drivers ensuring a safe journey."
    },
    {
      icon: "⭐",
      title: "Premium Service",
      text: "Luxury vehicles and exceptional comfort for every trip."
    },
    {
      icon: "🕒",
      title: "24/7 Availability",
      text: "Book a ride anytime, day or night."
    },
    {
      icon: "✈️",
      title: "Airport Transfers",
      text: "Reliable airport pickups and drop-offs."
    },
    {
      icon: "💳",
      title: "Transparent Pricing",
      text: "No hidden charges. Fair pricing every time."
    },
    {
      icon: "🛡️",
      title: "Safe & Reliable",
      text: "Your safety is always our highest priority."
    }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <h2 className="section-title">Why Choose SHM Infinity?</h2>

        <div className="why-grid">
          {features.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;