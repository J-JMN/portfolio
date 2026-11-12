import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { brandInfo } from "@/lib/data";
import { defaultDescription, siteUrl } from "@/lib/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Website & Web Application Development in Nairobi | INTAVOR",
    template: "%s | INTAVOR",
  },
  description: defaultDescription,
  applicationName: "INTAVOR",
  openGraph: {
    title: "Website & Web Application Development in Nairobi | INTAVOR",
    description: defaultDescription,
    type: "website",
    siteName: "INTAVOR",
    locale: "en_KE",
    images: [
      {
        url: "/brand/social/facebook-cover.png",
        width: 1640,
        height: 924,
        alt: "INTAVOR — Tech built with intention.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & Web Application Development in Nairobi | INTAVOR",
    description: defaultDescription,
    images: ["/brand/social/facebook-cover.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: brandInfo.name,
      url: siteUrl,
      logo: `${siteUrl}/brand/social/profile-avatar.png`,
      description: brandInfo.bio,
      email: brandInfo.email,
      telephone: brandInfo.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: brandInfo.email,
        telephone: brandInfo.phone,
        contactType: "customer service",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: brandInfo.name,
      description: defaultDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
