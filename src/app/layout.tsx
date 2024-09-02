import type { Metadata } from "next";
import { Instrument_Serif } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Angel Calderon",
  description: "Software Engineering Portfolio",
};

const instrument_serif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-instrument-serif',
  style: ['italic'], 
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-satoshi_medium tracking-tightest ${instrument_serif.variable}`}>{children}</body>
    </html>
  );
}
