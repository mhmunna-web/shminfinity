import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import FleetCarousel from "../components/FleetCarousel";
import Testimonials from "../components/home/Testimonials";
import WhyChoose from "../components/home/WhyChoose";
import BookingCTA from "../components/home/BookingCTA";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <FleetCarousel />
      <Testimonials />
      <WhyChoose />
      <BookingCTA />
    </>
  );
}

export default Home;