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
    <section id="fleet" className="fleet">
      <SectionTitle>
        Our Premium Fleet
      </SectionTitle>

      <Swiper
        modules={[Navigation, EffectCoverflow]}
        effect="coverflow"
        navigation
        grabCursor
        centeredSlides
        loop
        speed={900}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 180,
          modifier: 1.8,
          scale: 0.92,
          slideShadows: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: "auto",
            centeredSlides: true,
          },
          1024: {
            slidesPerView: "auto",
            centeredSlides: true,
          },
        }}
      >
        {fleetData.map((car) => (
          <SwiperSlide
            key={car.id}
            style={{ width: "420px", maxWidth: "90vw" }}
          >
            <FleetCard car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FleetCarousel;