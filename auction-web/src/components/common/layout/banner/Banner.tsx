import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { PageBanner } from "./types";
import { getBanner } from "./utils/get-banner";

import * as styles from "./Banner.styles";
import Image from "next/image";

interface BannerProps {
  pageBanner: PageBanner;
}

const Banner: React.FC<BannerProps> = ({ pageBanner }) => {
  const { title, description, image, alt } = getBanner(pageBanner);

  return (
    <Box sx={styles.bg(pageBanner)}>
      <Container>
        <Box sx={styles.row}>
          <Box sx={styles.textContainer}>
            <Typography sx={styles.title} variant="h1">
              {title}
            </Typography>
            <Typography sx={styles.description} variant="body2">
              {description}
            </Typography>
          </Box>
          <Box sx={styles.imgContainer(pageBanner)}>
            <Image src={image} alt={alt} layout="fill" objectFit="contain" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
