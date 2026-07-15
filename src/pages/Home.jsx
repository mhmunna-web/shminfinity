import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import FleetCarousel from "../components/FleetCarousel";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <FleetCarousel />
      <Footer />
    </>
  );
}

export default Home;