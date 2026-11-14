import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { brandInfo, founderInfo } from "@/lib/data";
import { defaultDescription, siteUrl, socialImage } from "@/lib/site";
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
    default: "Website Development Studio in Nairobi, Kenya | INTAVOR",
    template: "%s | INTAVOR",
  },
  description: defaultDescription,
  applicationName: "INTAVOR",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
        sizes: "256x256",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  openGraph: {
    title: "Website Development Studio in Nairobi, Kenya | INTAVOR",
    description: defaultDescription,
    type: "website",
    siteName: "INTAVOR",
    locale: "en_KE",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Studio in Nairobi, Kenya | INTAVOR",
    description: defaultDescription,
    images: [socialImage.url],
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
      areaServed: ["Kenya", "International"],
      knowsAbout: [
        "Website design",
        "Website development",
        "Web application development",
        "Responsive web design",
        "Content management systems",
        "After-launch website support",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web development services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${siteUrl}/services/website-development#service`,
              name: "Website Design and Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${siteUrl}/services/web-application-development#service`,
              name: "Custom Web Application Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "After-Launch Website Care",
              url: `${siteUrl}/experience#partnerships`,
            },
          },
        ],
      },
      founder: {
        "@id": `${siteUrl}/#founder`,
      },
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
      "@type": "Person",
      "@id": `${siteUrl}/#founder`,
      name: founderInfo.name,
      jobTitle: founderInfo.role,
      worksFor: {
        "@id": `${siteUrl}/#organization`,
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
