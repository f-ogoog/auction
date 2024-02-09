"use client";

import useAuth from "@/hooks/use-auth";
import { Grid, SxProps, Theme } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren } from "react";
import SideBar from "./components/sidebar";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  if (isLoggedIn) {
    router.push("/");
    return null;
  }

  return (
    <Grid container>
      <Grid item xs={4}>
        <SideBar />
      </Grid>
      <Grid item xs={8} sx={content}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;

const content: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
