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
      "Premium airport pickup and drop-off service from Helsinki Airport to any destination in Finland.",
    features: [
      "Airport Pickup",
      "Airport Drop-off",
      "Meet & Greet",
      "24/7 Airport Service",
    ],
    link: "/services/airport-transfer",
  },

  {
    title: "Taxi & Long Distance",
    image: longDistanceImg,
    description:
      "Luxury long-distance taxi service with fixed-price travel across Finland.",
    features: [
      "City Taxi",
      "Long Distance",
      "Door-to-Door",
      "Fixed Price Trips",
    ],
    link: "/services/long-distance",
  },

  {
    title: "Business & Private Travel",
    image: businessImg,
    description:
      "Executive transportation for corporate clients, hotels and business meetings.",
    features: [
      "Executive Transfer",
      "Corporate Travel",
      "Hotel Transfer",
      "Event Transportation",
    ],
    link: "/services/business-travel",
  },

  {
    title: "Tours & Family Travel",
    image: toursImg,
    description:
      "Private sightseeing tours and family travel with premium comfort.",
    features: [
      "Summer Tours",
      "Winter Tours",
      "Sightseeing",
      "Child Seat Available",
    ],
    link: "/services/tours-family",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="services"
    >
      <SectionTitle>
        Our Premium Services
      </SectionTitle>

      <div className="services-container">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
          >
            <div className="service-image">
              <img
                src={service.image}
                alt={service.title}
              />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={service.link}
                className="service-btn"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;