import { SxProps, Theme } from "@mui/material";

export const button: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingY: "24px",
  alignItems: "center",
  border: "5px solid",
  borderColor: (theme) => theme.palette.violet[500],
  background: (theme) => theme.palette.violet[50],
  borderRadius: "999px",
  overflow: "hidden",
};
