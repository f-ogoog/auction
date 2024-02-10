import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import type { Metadata } from "next";

import "@/styles/global-styles.scss";
import "@/styles/reset.scss";
import AuthProvider from "@/hooks/use-auth/use-auth-context/AuthContext";
import { ReactQueryProvider } from "@/providers/ReactRouterProvider";

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
          <ReactQueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </ReactQueryProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
