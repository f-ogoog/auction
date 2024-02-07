import Header from "@/components/common/layout/header";
import theme from "@/styles/theme";
import { Container, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";

import "@/styles/reset.scss";

export const metadata: Metadata = {
  title: "Auction",
  description:
    "Here you can create, sell, buy and hold auctions. All money will go to the charity!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>
          <Header />
          <Container>{children}</Container>
        </body>
      </ThemeProvider>
    </html>
  );
}
