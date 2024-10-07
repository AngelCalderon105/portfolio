import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { Instrument_Serif } from 'next/font/google'
import "./globals.css";
import thumbup from "../../public/avatar/thumbsup.png"
export const metadata: Metadata = {
  title: "Angel Calderon",
  description: "Welcome to Angel's Software Engineering Portfolio Website."
};

const instrument_serif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-instrument-serif',
  style: ['italic','normal'], 
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-satoshi_medium tracking-tightest ${instrument_serif.variable}`}>{children}<SpeedInsights /></body>
    </html>
  );
}
