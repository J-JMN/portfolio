import type { Metadata } from "next";

export const siteUrl = "https://intavor.co.ke";

export const defaultDescription =
  "Based in Nairobi, INTAVOR develops purposeful websites and web applications for organisations in Kenya and internationally.";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadata): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | INTAVOR`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      type: "website",
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
      title: socialTitle,
      description,
      images: ["/brand/social/facebook-cover.png"],
    },
  };
}
