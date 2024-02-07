import { SxProps, Theme } from "@mui/material";

export const link = (active?: boolean, bold?: boolean): SxProps<Theme> => ({
  typography: "body2",
  color: "white.main",
  paddingY: "32px",
  borderBottom: "2px solid transparent",
  transition: "color 0.2s, border-bottom 0.2s",

  "&:hover": {
    color: "gray.900",
    borderBottom: "2px solid white",
  },

  ...(active && {
    color: "gray.900",
    borderBottom: "2px solid white",
  }),

  ...(bold && {
    typography: "body1SemiBold",
  }),
});
