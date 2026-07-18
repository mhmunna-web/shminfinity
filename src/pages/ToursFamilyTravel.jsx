import ToursFamilyHero from "../components/services/tours-family/ToursFamilyHero";
import ToursOverview from "../components/services/tours-family/overview/ToursOverview";
import ToursFeatures from "../components/services/tours-family/features/ToursFeatures";
import ToursBenefits from "../components/services/tours-family/benefits/ToursBenefits";
import ToursProcess from "../components/services/tours-family/process/ToursProcess";
import ToursCTA from "../components/services/tours-family/cta/ToursCTA";

const ToursFamilyTravel = () => {
  return (
    <>
      <ToursFamilyHero />
      <ToursOverview />
      <ToursFeatures />
      <ToursBenefits />
      <ToursProcess />
      <ToursCTA />
    </>
  );
};

export default ToursFamilyTravel;