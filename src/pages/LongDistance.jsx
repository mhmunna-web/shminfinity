import SEO from "../components/seo/SEO";

import LongDistanceHero from "../components/services/long-distance/LongDistanceHero";
import LongDistanceOverview from "../components/services/long-distance/overview/LongDistanceOverview";
import LongDistanceFeatures from "../components/services/long-distance/features/LongDistanceFeatures";
import LongDistanceDestinations from "../components/services/long-distance/destinations/LongDistanceDestinations";
import LongDistanceBookingProcess from "../components/services/long-distance/process/LongDistanceBookingProcess";
import LongDistanceCTA from "../components/services/long-distance/cta/LongDistanceCTA";

const LongDistance = () => {
  return (
    <>
      <SEO
        title="Long Distance Taxi Finland | SHM Infinity"
        description="Travel comfortably across Finland with SHM Infinity's premium long-distance taxi service. Fixed pricing, luxury vehicles, professional drivers, and reliable transportation for business and private travel."
        keywords="Long Distance Taxi Finland, Intercity Taxi Finland, Premium Taxi Finland, Fixed Price Taxi, Business Travel Finland, Private Taxi, Long Distance Transfer, SHM Infinity"
        url="https://www.shminfinity.fi/services/long-distance"
      />

      <main>
        <LongDistanceHero />
        <LongDistanceOverview />
        <LongDistanceFeatures />
        <LongDistanceDestinations />
        <LongDistanceBookingProcess />
        <LongDistanceCTA />
      </main>
    </>
  );
};

export default LongDistance;