import { Box, Grid } from "@mui/material";

import SearchParams from "./components/search-params";
import Results from "./components/results";

import * as styles from "./MarketplacePage.styles";

const MarketplacePage = () => {
  return (
    <Box sx={styles.container}>
      <SearchParams />
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <Results />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MarketplacePage;
