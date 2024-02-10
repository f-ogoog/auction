"use client";

import React, { ReactNode } from "react";
import { Box, Container } from "@mui/material";

import Header from "../header";
import Banner from "../banner";

import { PageBanner } from "../banner/types";
import useAuth from "@/hooks/use-auth";
import { useRouter } from "next/navigation";

interface PageLayoutProps {
  children: ReactNode;
  pageBanner?: PageBanner;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, pageBanner }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  if (!isLoggedIn) {
    router.push("/login");
    return null;
  }

  return (
    <Box>
      <Header />
      {pageBanner && <Banner pageBanner={pageBanner} />}
      <Container sx={{ paddingY: "50px" }}>{children}</Container>
    </Box>
  );
};

export default PageLayout;
