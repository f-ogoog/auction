"use client";

import AuctionCard from "@/components/common/ui/cards/auction-card";
import AuctionApi from "@/lib/api/auction/AuctionApi";
import { Auction } from "@/types/auction";
import { Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const ItemsPage = () => {
  const { data, isLoading } = useQuery<Auction[]>({
    queryKey: ["myAuctions"],
    queryFn: () => {
      return AuctionApi.getMyAuctions();
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {data?.map((auction) => (
        <AuctionCard
          key={auction.id}
          avatar={auction.avatar}
          name={auction.name}
          category={auction.category}
          id={auction.id}
        />
      ))}
    </Grid>
  );
};

export default ItemsPage;
