import PageLayout from "@/components/common/layout/page-layout";
import MarketplacePage from "@/components/templates/marketplace-page";

import { PageBanner } from "@/components/common/layout/banner/types";

const Marketplace = () => {
  return (
    <PageLayout pageBanner={PageBanner.MARKETPLACE}>
      <MarketplacePage />
    </PageLayout>
  );
};

export default Marketplace;
