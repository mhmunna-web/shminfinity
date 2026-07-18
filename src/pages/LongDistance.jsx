import LongDistanceHero from "../components/services/long-distance/LongDistanceHero";
import LongDistanceOverview from "../components/services/long-distance/overview/LongDistanceOverview";
import LongDistanceFeatures from "../components/services/long-distance/features/LongDistanceFeatures";
import LongDistanceDestinations from "../components/services/long-distance/destinations/LongDistanceDestinations";
import LongDistanceBookingProcess from "../components/services/long-distance/process/LongDistanceBookingProcess";
import LongDistanceCTA from "../components/services/long-distance/cta/LongDistanceCTA";

const LongDistance = () => {
  return (
    <>
      <LongDistanceHero />
      <LongDistanceOverview />
      <LongDistanceFeatures />
      <LongDistanceDestinations />
      <LongDistanceBookingProcess />
      <LongDistanceCTA />
    </>
  );
};

export default LongDistance;