"use client";

import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";

import Button from "@/components/common/ui/button";
import { ButtonColor } from "@/components/common/ui/button/types";

import styles from "./Minprice.module.scss";
import * as sxStyles from "./Minprice.styles";
import useMarketplaceQueryStore from "@/store/marketplace-page/useMarketplaceQueryStore";

const Minprice = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const setMinPrice = useMarketplaceQueryStore((s) => s.setMinPrice);

  return (
    <Box sx={sxStyles.container}>
      <Typography variant="h4">Min price</Typography>
      <Box sx={sxStyles.row}>
        <input
          placeholder="From"
          type="number"
          className={styles.input}
          ref={ref}
        />
        <Button
          color={ButtonColor.BLACK}
          text="Set"
          onClick={() => {
            setMinPrice(parseInt(ref.current?.value as string) || 0);
          }}
        />
      </Box>
    </Box>
  );
};

export default Minprice;
