import { Box, Typography } from "@mui/material";

import * as styles from "./Price.styles";
import { CardPriceType } from "../../../types";

const Price: React.FC<CardPriceType> = (props) => {
  return (
    <Box sx={styles.price}>
      <Box sx={styles.row}>
        <Typography variant="body1">Sold price</Typography>
        <Typography variant="body1">{props.lastPrice}</Typography>
      </Box>
      <Box sx={styles.row}>
        <Typography variant="body2">Start price</Typography>
        <Typography variant="body2">{props.minPrice}</Typography>
      </Box>
    </Box>
  );
};

export default Price;
