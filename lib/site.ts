import type { Metadata } from "next";

export const siteUrl = "https://intavor.co.ke";

export const defaultDescription =
  "INTAVOR is a Nairobi website development studio creating purposeful business websites and custom web applications for organisations in Kenya and internationally.";

export const socialImage = {
  url: "/brand/social/facebook-cover.png",
  width: 1640,
  height: 624,
  alt: "INTAVOR. Tech built with intention.",
} as const;

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
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
  };
}
