import BusinessPrivateHero from "../components/services/business-private/BusinessPrivateHero";
import BusinessPrivateOverview from "../components/services/business-private/overview/BusinessPrivateOverview";
import BusinessPrivateFeatures from "../components/services/business-private/features/BusinessPrivateFeatures";
import BusinessPrivateBenefits from "../components/services/business-private/benefits/BusinessPrivateBenefits";
import BusinessPrivateProcess from "../components/services/business-private/process/BusinessPrivateProcess";
import BusinessPrivateCTA from "../components/services/business-private/cta/BusinessPrivateCTA";

const BusinessPrivateTravel = () => {
  return (
    <>
      <BusinessPrivateHero />

      <BusinessPrivateOverview />

      <BusinessPrivateFeatures />

      <BusinessPrivateBenefits />

      <BusinessPrivateProcess />

      <BusinessPrivateCTA />
    </>
  );
};

export default BusinessPrivateTravel;