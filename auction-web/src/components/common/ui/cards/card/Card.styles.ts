import { SxProps, Theme } from "@mui/material";

export const card: SxProps<Theme> = {
  backgroundColor: "white",
  boxShadow: "0 5px 10px 0 rgba(0,0,0,0.25)",
  transition: "0.2s",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  borderRadius: "16px",
  outline: "5px solid transparent",
  "&:hover": {
    outlineColor: (theme) => theme.palette.primary.main,
  },
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
