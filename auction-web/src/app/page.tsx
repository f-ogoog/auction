import {PageBanner} from "@/components/common/layout/banner/types";
import PageLayout from "@/components/common/layout/page-layout";
import HomePage from "@/components/templates/home-page";
import DownloadButton from "@/components/common/ui/download-button";
import {Download} from "@/components/common/ui/download-button/types";

export default function Home() {
  return (
    <PageLayout pageBanner={PageBanner.HOME}>
      <HomePage />
        <DownloadButton download={Download.CREATE}/>
    </PageLayout>
  );
}
