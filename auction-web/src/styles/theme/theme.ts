"use client";

import { createTheme } from "@mui/material";

import customPalette from "./constants/palette";
import customTypography from "./constants/typography";

const theme = createTheme({
  palette: customPalette,
  typography: customTypography,
});

export default theme;
