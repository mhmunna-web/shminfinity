import fleetData from "../data/fleetData";
import FleetCard from "./ui/FleetCard";
import SectionTitle from "./ui/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function FleetCarousel() {
  return (
    <section
      id="fleet"
      className="fleet"
      aria-labelledby="fleet-title"
      aria-label="Luxury Taxi Fleet"
    >
      <SectionTitle id="fleet-title">
        Luxury Fleet
      </SectionTitle>

      <p className="section-subtitle">
        Executive, business, and premium taxi vehicles for airport transfers,
        business travel, city rides, and long-distance transportation across
        Finland.
      </p>

      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        navigation
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        speed={900}
        slidesPerView={"auto"}
        aria-label="SHM Infinity luxury taxi fleet"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1.8,
          scale: 0.92,
          slideShadows: false,
        }}
      >
        {fleetData.map((car) => (
          <SwiperSlide
            key={car.id}
            style={{
              width: "420px",
              maxWidth: "90vw",
            }}
          >
            <FleetCard car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FleetCarousel;