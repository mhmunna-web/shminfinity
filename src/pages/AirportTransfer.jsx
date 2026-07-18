import AirportHero from "../components/services/airport/AirportHero";
import AirportOverview from "../components/services/airport/overview/AirportOverview";
import AirportFeatures from "../components/services/airport/features/AirportFeatures";
import AirportProcess from "../components/services/airport/process/AirportProcess";
import AirportCoverage from "../components/services/airport/coverage/AirportCoverage";
import AirportCTA from "../components/services/airport/cta/AirportCTA";

const AirportTransfer = () => {
  return (
    <>
      <AirportHero />
      <AirportOverview />
      <AirportFeatures />
      <AirportProcess />
      <AirportCoverage />
      <AirportCTA />
    </>
  );
};

export default AirportTransfer;