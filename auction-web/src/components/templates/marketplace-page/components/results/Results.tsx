"use client";

import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";

import Button from "@/components/common/ui/button";
import TextArea from "@/components/common/ui/text-area";
import { ButtonColor } from "@/components/common/ui/button/types";
import AuctionCard from "@/components/common/ui/cards/auction-card";

import AuctionApi from "@/lib/api/auction/AuctionApi";
import useMarketplaceQueryStore from "@/store/marketplace-page/useMarketplaceQueryStore";

import { Auction } from "@/types/auction";
import { Pagination as PaginationType } from "@/types/pagination";

import * as sxStyles from "./Results.styles";
import styles from "./Results.module.scss";
import Pagination from "./pagination";

const Results = () => {
  const ref = React.useRef<HTMLInputElement | null>(null);
  const setSearch = useMarketplaceQueryStore((s) => s.setSearch);
  const marketPlaceQuery = useMarketplaceQueryStore((s) => s.marketPlaceQuery);
  const search = useMarketplaceQueryStore((s) => s.marketPlaceQuery.search);

  const [auctions, setAuctions] = React.useState<Auction[]>([]);
  const [pagination, setPagination] = React.useState<PaginationType>();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const getAuctions = async () =>
      await AuctionApi.getAuctions(marketPlaceQuery).then((data) => {
        setAuctions(data.auctions);
        setPagination(data.pagination);
        setIsLoading(false);

        console.log(data.pagination);
      });
    getAuctions();
  }, [marketPlaceQuery]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(ref.current?.value as string);
  };

  return (
    <Box sx={sxStyles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextArea ref={ref} defaultValue={search} />
        <Box>
          <Button color={ButtonColor.BLACK} text="Search" type="submit" />
        </Box>
      </form>

      {!isLoading ? (
        <Grid container spacing={2} rowGap={3}>
          {auctions.map((auction) => (
            <Grid item xs={4} key={auction.id}>
              <AuctionCard
                id={auction.id}
                avatar={auction.avatar}
                category={auction.category}
                name={auction.name}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Loading />
      )}

      <Pagination
        totalPages={pagination?.totalPages!}
        page={pagination?.page as number}
      />
    </Box>
  );
};

export default Results;

const Loading = () => {
  const items = Array.from({ length: 9 }, (_, i) => i);

  return (
    <Grid container spacing={2} rowGap={3}>
      {items.map((i) => (
        <Grid item xs={4} key={i}>
          <Box sx={sxStyles.loading} />
        </Grid>
      ))}
    </Grid>
  );
};
