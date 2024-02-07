import React, { ReactNode } from "react";
import { Box, Container } from "@mui/material";

import Header from "../header";

interface PageLayoutProps {
  children: ReactNode;
  hasBanner?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, hasBanner }) => {
  return (
    <Box>
      <Header />
      {hasBanner && <Box>banner</Box>}
      <Container>{children}</Container>
    </Box>
  );
};

export default PageLayout;
