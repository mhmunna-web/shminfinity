import SEO from "../components/seo/SEO";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import FleetCarousel from "../components/FleetCarousel";
import WhyChoose from "../components/home/WhyChoose";
import BookingCTA from "../components/home/BookingCTA";

function Home() {
  return (
    <main>
      <SEO
        title="SHM Infinity | Premium Taxi Service in Finland"
        description="Premium taxi service in Helsinki, Vantaa, Espoo, and across Finland. Book airport transfers, business travel, city rides, long-distance taxis, and private tours with professional drivers."
        keywords="Taxi Finland, Premium Taxi Finland, Helsinki Taxi, Vantaa Taxi, Espoo Taxi, Airport Transfer Finland, Business Travel, Long Distance Taxi, Private Taxi, SHM Infinity"
        url="https://www.shminfinity.fi/"
      />

      <Hero />
      <Services />
      <About />
      <FleetCarousel />
      <WhyChoose />
      <BookingCTA />
    </main>
  );
}

export default Home;