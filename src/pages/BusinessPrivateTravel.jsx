import SEO from "../components/seo/SEO";

import BusinessPrivateHero from "../components/services/business-private/BusinessPrivateHero";
import BusinessPrivateOverview from "../components/services/business-private/overview/BusinessPrivateOverview";
import BusinessPrivateFeatures from "../components/services/business-private/features/BusinessPrivateFeatures";
import BusinessPrivateBenefits from "../components/services/business-private/benefits/BusinessPrivateBenefits";
import BusinessPrivateProcess from "../components/services/business-private/process/BusinessPrivateProcess";
import BusinessPrivateCTA from "../components/services/business-private/cta/BusinessPrivateCTA";

const BusinessPrivateTravel = () => {
  return (
    <>
      <SEO
        title="Business & Private Travel | SHM Infinity"
        description="Executive business travel and private chauffeur services across Finland. Luxury vehicles, professional drivers, airport transfers, corporate transportation, and premium travel experiences."
        keywords="Business Travel Finland, Executive Taxi Finland, Corporate Taxi, Private Chauffeur Finland, Luxury Taxi, Business Transportation, Premium Taxi, SHM Infinity"
        url="https://www.shminfinity.fi/services/business-travel"
      />

      <main>
        <BusinessPrivateHero />

        <BusinessPrivateOverview />

        <BusinessPrivateFeatures />

        <BusinessPrivateBenefits />

        <BusinessPrivateProcess />

        <BusinessPrivateCTA />
      </main>
    </>
  );
};

export default BusinessPrivateTravel;