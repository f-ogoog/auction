import { Box } from "@mui/material";
import { useSearchParams } from "next/navigation";

import SearchParams from "./components/search-params";

import * as styles from "./MarketplacePage.styles";

const MarketplacePage = () => {
  return (
    <Box sx={styles.container}>
      <SearchParams />
    </Box>
  );
};

export default MarketplacePage;
