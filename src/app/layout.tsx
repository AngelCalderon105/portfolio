import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Angel Calderon",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-medium"}>{children}</body>
    </html>
  );
}
