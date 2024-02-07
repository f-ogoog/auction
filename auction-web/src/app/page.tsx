import { PageBanner } from "@/components/common/layout/banner/types";
import PageLayout from "@/components/common/layout/page-layout";
import HomePage from "@/components/templates/home-page";

export default function Home() {
  return (
    <PageLayout pageBanner={PageBanner.HOME}>
      <HomePage />
    </PageLayout>
  );
}
