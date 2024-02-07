import { TypographyOptions } from "@mui/material/styles/createTypography";
import { montserrat } from "@/styles/fonts";

const typography: TypographyOptions = {
  fontFamily: montserrat.style.fontFamily,
  h1: {
    fontSize: 64,
    fontWeight: 700,
    lineHeight: "78px",
  },
  h2: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: "59px",
  },
  h3: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: "39px",
  },
  h4: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: "29px",
  },
  body1: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: "19px",
  },
  body1SemiBold: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: "22px",
  },
  body2: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "18px",
  },
};

export default typography;
