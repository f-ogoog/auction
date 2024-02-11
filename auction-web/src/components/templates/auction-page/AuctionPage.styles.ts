import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "50px",
};

export const descriptionContainer: SxProps<Theme> = {
  width: "100%",
  backgroundColor: "primary.main",
  padding: "32px",
  borderRadius: "32px",
  overflow: "hidden",
};

export const description: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "75%",
};
