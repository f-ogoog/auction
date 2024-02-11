import { Box, Typography } from "@mui/material";

import * as styles from "./SearchParams.styles";
import ActiveFilters from "./components/active-filters";
import Categories from "./components/categories/Categories";
import Minprice from "./components/minprice";

const SearchParams = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Search parameters
      </Typography>
      <ActiveFilters />
      <Categories />
      <Minprice />
    </Box>
  );
};

export default SearchParams;
