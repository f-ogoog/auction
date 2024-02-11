import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
};

export const loading: SxProps<Theme> = {
  height: "500px",
  width: "100%",
  backgroundColor: "grey.300",
  borderRadius: "32px",
  overflow: "hidden",
};
