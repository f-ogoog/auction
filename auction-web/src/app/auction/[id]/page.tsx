"use client";

import PageLayout from "@/components/common/layout/page-layout";
import AuctionPage from "@/components/templates/auction-page";
import AuctionApi from "@/lib/api/auction/AuctionApi";
import { useQuery } from "@tanstack/react-query";
import { Auction as AuctionType } from "@/types/auction";

const Auction = ({ params }: { params: { id: string } }) => {
  const { data: auction, isLoading } = useQuery<AuctionType>({
    queryKey: ["auction", params.id],
    queryFn: () => {
      return AuctionApi.getAuction(params.id);
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <PageLayout>
      <AuctionPage auction={auction} isLoading={isLoading} />
    </PageLayout>
  );
};

export default Auction;
