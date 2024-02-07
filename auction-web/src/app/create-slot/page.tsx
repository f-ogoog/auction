import PageLayout from "@/components/common/layout/page-layout";
import CreateSlotPage from "@/components/templates/create-slot-page";

import { PageBanner } from "@/components/common/layout/banner/types";

const CreateSlot = () => {
  return (
    <PageLayout pageBanner={PageBanner.CREATE_SLOT}>
      <CreateSlotPage />
    </PageLayout>
  );
};

export default CreateSlot;
