import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  axes: ["wdth"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

export const metadata: Metadata = {
  title: {
    default: "INTAVOR | Tech built with intention.",
    template: "%s | INTAVOR",
  },
  description:
    "INTAVOR designs and builds thoughtful websites and web applications that help businesses and organisations communicate clearly and earn trust.",
  applicationName: "INTAVOR",
  openGraph: {
    title: "INTAVOR | Tech built with intention.",
    description:
      "Thoughtful websites and web applications designed to make your value clear and your next step easy to take.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${instrument.variable} ${bricolage.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
