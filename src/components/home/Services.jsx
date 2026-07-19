import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";

import airportImg from "../../assets/services/airport-transfer.jpg";
import longDistanceImg from "../../assets/services/long-distance.jpg";
import businessImg from "../../assets/services/business-travel.jpg";
import toursImg from "../../assets/services/tours-family.jpg";

const services = [
  {
    title: "Airport Transfer",
    image: airportImg,
    description:
      "Premium airport pickup and drop-off service between Helsinki Airport and destinations across Finland.",
    features: [
      "Airport Pickup",
      "Airport Drop-off",
      "Meet & Greet",
      "24/7 Airport Service",
    ],
    link: "/services/airport-transfer",
    alt: "Airport transfer taxi service at Helsinki Airport",
  },
  {
    title: "Taxi & Long Distance",
    image: longDistanceImg,
    description:
      "Reliable long-distance and city taxi service with fixed-price transportation across Finland.",
    features: [
      "City Taxi",
      "Long Distance",
      "Door-to-Door",
      "Fixed Price Trips",
    ],
    link: "/services/long-distance",
    alt: "Long distance premium taxi service in Finland",
  },
  {
    title: "Business & Private Travel",
    image: businessImg,
    description:
      "Executive transportation for business meetings, hotels, VIP guests and corporate travel.",
    features: [
      "Executive Transfer",
      "Corporate Travel",
      "Hotel Transfer",
      "Event Transportation",
    ],
    link: "/services/business-travel",
    alt: "Executive business travel and premium transportation service",
  },
  {
    title: "Tours & Family Travel",
    image: toursImg,
    description:
      "Comfortable private sightseeing tours and family travel with professional drivers throughout Finland.",
    features: [
      "Summer Tours",
      "Winter Tours",
      "Sightseeing",
      "Child Seat Available",
    ],
    link: "/services/tours-family",
    alt: "Private sightseeing and family travel service in Finland",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="services"
      aria-labelledby="services-title"
      aria-label="Premium Taxi Services"
    >
      <SectionTitle id="services-title">
        Our Premium Taxi Services
      </SectionTitle>

      <div className="services-container">
        {services.map((service) => (
          <article
            className="service-card"
            key={service.title}
          >
            <div className="service-image">
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
              />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={service.link}
                className="service-btn"
                aria-label={`Book ${service.title} service`}
              >
                Book Now
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;