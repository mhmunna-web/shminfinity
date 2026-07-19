import SEO from "../components/seo/SEO";

import AirportHero from "../components/services/airport/AirportHero";
import AirportOverview from "../components/services/airport/overview/AirportOverview";
import AirportFeatures from "../components/services/airport/features/AirportFeatures";
import AirportProcess from "../components/services/airport/process/AirportProcess";
import AirportCoverage from "../components/services/airport/coverage/AirportCoverage";
import AirportCTA from "../components/services/airport/cta/AirportCTA";

const AirportTransfer = () => {
  return (
    <>
      <SEO
        title="Airport Transfer Helsinki | SHM Infinity"
        description="Premium airport transfer service to and from Helsinki Airport. Fixed pricing, professional drivers, luxury vehicles, flight monitoring, and 24/7 availability across Finland."
        keywords="Helsinki Airport Transfer, Airport Taxi Finland, Helsinki Airport Taxi, Premium Airport Transfer, Fixed Price Taxi, Airport Pickup, Airport Drop-off, SHM Infinity"
        url="https://www.shminfinity.fi/services/airport-transfer"
      />

      <main>
        <AirportHero />
        <AirportOverview />
        <AirportFeatures />
        <AirportProcess />
        <AirportCoverage />
        <AirportCTA />
      </main>
    </>
  );
};

export default AirportTransfer;