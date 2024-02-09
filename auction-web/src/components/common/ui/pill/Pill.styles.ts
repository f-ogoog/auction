import { SxProps, Theme } from "@mui/material";

export const pill = (color: "success" | "warning"): SxProps<Theme> => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  paddingY: "4px",
  backgroundColor: color === "success" ? "success.light" : "warning.light",
  borderRadius: "999px",
});
