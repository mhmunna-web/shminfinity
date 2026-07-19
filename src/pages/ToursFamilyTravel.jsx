import SEO from "../components/seo/SEO";

import ToursFamilyHero from "../components/services/tours-family/ToursFamilyHero";
import ToursOverview from "../components/services/tours-family/overview/ToursOverview";
import ToursFeatures from "../components/services/tours-family/features/ToursFeatures";
import ToursBenefits from "../components/services/tours-family/benefits/ToursBenefits";
import ToursProcess from "../components/services/tours-family/process/ToursProcess";
import ToursCTA from "../components/services/tours-family/cta/ToursCTA";

const ToursFamilyTravel = () => {
  return (
    <>
      <SEO
        title="Private Tours & Family Travel | SHM Infinity"
        description="Enjoy private sightseeing tours and comfortable family travel across Finland with SHM Infinity. Premium vehicles, experienced drivers, child seat availability, airport transfers, and personalized travel experiences."
        keywords="Private Tours Finland, Family Travel Finland, Sightseeing Tours Finland, Private Taxi Tours, Family Taxi Service, Child Seat Taxi, Premium Travel Finland, SHM Infinity"
        url="https://www.shminfinity.fi/services/tours-family"
      />

      <main>
        <ToursFamilyHero />
        <ToursOverview />
        <ToursFeatures />
        <ToursBenefits />
        <ToursProcess />
        <ToursCTA />
      </main>
    </>
  );
};

export default ToursFamilyTravel;