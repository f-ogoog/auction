import React, { ReactNode } from "react";
import { Box, Container } from "@mui/material";

import Header from "../header";
import Banner from "../banner";

import { PageBanner } from "../banner/types";

interface PageLayoutProps {
  children: ReactNode;
  pageBanner?: PageBanner;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, pageBanner }) => {
  return (
    <Box>
      <Header />
      {pageBanner && <Banner pageBanner={pageBanner} />}
      <Container>{children}</Container>
    </Box>
  );
};

export default PageLayout;
