import { Grid, SxProps, Theme } from "@mui/material";
import React, { PropsWithChildren } from "react";
import SideBar from "./components/sidebar";

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
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
