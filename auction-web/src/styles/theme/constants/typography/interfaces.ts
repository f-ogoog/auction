import { CSSProperties } from "react";

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body1SemiBold: CSSProperties;
  }

  interface TypographyVariantsOptions {
    body1SemiBold: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1SemiBold: true;
    subtitle1: false;
    subtitle2: false;
    caption: false;
  }
}
