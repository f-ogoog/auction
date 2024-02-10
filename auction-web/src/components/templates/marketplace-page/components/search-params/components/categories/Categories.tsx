"use client";

import Checkbox from "@/components/common/ui/checkbox";
import { AuctionCategory } from "@/types/auction-category";
import { Box } from "@mui/material";
import React from "react";

import * as styles from "./Categories.styles";
import useMarketplaceQueryStore from "@/store/marketplace-page/useMarketplaceQueryStore";

const Categories = () => {
  const { setCategory, marketPlaceQuery } = useMarketplaceQueryStore();

  const handleCategoryChange = (category: AuctionCategory) => {
    setCategory(category);
  };

  return (
    <Box sx={styles.container}>
      {Object.entries(AuctionCategory).map(([key, value]) => (
        <Checkbox
          label={value}
          key={key}
          onChange={() => handleCategoryChange(value)}
          isChecked={marketPlaceQuery.categories?.includes(value)}
        />
      ))}
    </Box>
  );
};

export default Categories;
