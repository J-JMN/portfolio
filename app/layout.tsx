import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "INTAVOR | Tech built with intention.",
    template: "%s | INTAVOR",
  },
  description:
    "INTAVOR builds and manages intentional websites and web applications for businesses and organisations in Nairobi and beyond.",
  applicationName: "INTAVOR",
  openGraph: {
    title: "INTAVOR | Tech built with intention.",
    description:
      "Web development, platform delivery, and ongoing website support for businesses and organisations.",
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
        className={`${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
