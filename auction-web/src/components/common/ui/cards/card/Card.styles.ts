import { SxProps, Theme } from "@mui/material";

export const card: SxProps<Theme> = {
  backgroundColor: "white",
  boxShadow: "0 5px 10px 0 rgba(0,0,0,0.25)",
  transition: "0.3s",
  width: "100%",
  height: "100%",
  "&:hover": {
    border: "5px solid primary.main",
  },
  overflow: "hidden",
  borderRadius: "16px",
};

export const imageContainer: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: "300px",
  overflow: "hidden",
};

export const content: SxProps<Theme> = {
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  height: "100%",
};
