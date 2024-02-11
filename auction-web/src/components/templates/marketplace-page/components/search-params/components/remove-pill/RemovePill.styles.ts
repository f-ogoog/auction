import { SxProps, Theme } from "@mui/material";

export const pill = (color: "primary" | "gray"): SxProps<Theme> => ({
  border: "1px solid",
  borderColor: color === "gray" ? "grey.900" : "primary.main",
  color: color === "gray" ? "grey.900" : "primary.main",
  textTransform: "none",
  borderRadius: "16px",
  padding: "8px 16px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
});
