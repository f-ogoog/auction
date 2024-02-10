import { SxProps, Theme } from "@mui/material";

export const container: SxProps<Theme> = {
  position: "absolute",

  left: 0,
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  padding: "32px",
  backgroundColor: "white.main",
  borderTopRightRadius: "8px",
  borderBottomRightRadius: "8px",
};

export const title: SxProps<Theme> = {
  paddingBottom: "16px",
  borderBottom: "1px solid",
  borderColor: "grey.300",
};
