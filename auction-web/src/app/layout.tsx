import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
