import "../../styles/whyChoose.css";
import SectionTitle from "../ui/SectionTitle";

function WhyChoose() {
  const features = [
    {
      icon: "🚖",
      title: "Professional Drivers",
      text: "Experienced, licensed, and friendly drivers ensuring a safe and comfortable journey."
    },
    {
      icon: "⭐",
      title: "Premium Service",
      text: "Luxury vehicles with exceptional comfort for business, airport, and private travel."
    },
    {
      icon: "🕒",
      title: "24/7 Availability",
      text: "Book your premium taxi anytime, day or night, anywhere in Finland."
    },
    {
      icon: "✈️",
      title: "Airport Transfers",
      text: "Reliable airport pickup and drop-off services to and from Helsinki Airport."
    },
    {
      icon: "💳",
      title: "Transparent Pricing",
      text: "Fair, fixed, and transparent pricing with no hidden charges."
    },
    {
      icon: "🛡️",
      title: "Safe & Reliable",
      text: "Your safety is our highest priority with well-maintained vehicles and professional service."
    }
  ];

  return (
    <section
      className="why-choose"
      aria-labelledby="why-choose-title"
      aria-label="Why choose SHM Infinity"
    >
      <div className="container">
        <SectionTitle id="why-choose-title">
          Why Choose SHM Infinity?
        </SectionTitle>

        <div className="why-grid">
          {features.map((item) => (
            <article
              key={item.title}
              className="why-card"
            >
              <div
                className="why-icon"
                aria-hidden="true"
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;