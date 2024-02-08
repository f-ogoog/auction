import { SxProps, Theme } from "@mui/material";

export const price: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  paddingY: "16px",
  borderBlock: "1px solid",
  borderColor: (theme) => theme.palette.gray[100],
};

export const row: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
