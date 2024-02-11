"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import RemovePill from "../remove-pill";
import * as styles from "./ActiveFilters.styles";
import useMarketplaceQueryStore from "@/store/marketplace-page/useMarketplaceQueryStore";

const ActiveFilters = () => {
  const clearAllFilters = useMarketplaceQueryStore((s) => s.clearAllFilters);
  const filters = useMarketplaceQueryStore((s) => s.marketPlaceQuery);
  const setCategory = useMarketplaceQueryStore((s) => s.setCategory);
  const setMinPrice = useMarketplaceQueryStore((s) => s.setMinPrice);

  return (
    <Box sx={styles.container}>
      <Typography variant="h4">Active filters</Typography>
      <RemovePill
        label="Clear All"
        color="gray"
        onRemove={() => clearAllFilters()}
      />
      {Object.entries(filters).map(([key, value]) => {
        if (key === "minPrice") {
          return (
            <RemovePill
              key={key}
              label={`${value}`}
              onRemove={() => setMinPrice(0)}
            />
          );
        }
        if (key === "categories" && Array.isArray(value)) {
          return value.map((category, index) => (
            <RemovePill
              key={index}
              label={category}
              onRemove={() => setCategory(category)}
            />
          ));
        }
        return null;
      })}
    </Box>
  );
};

export default ActiveFilters;
