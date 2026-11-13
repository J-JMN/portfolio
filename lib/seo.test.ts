import { describe, expect, it } from "vitest";
import {
  createBreadcrumbStructuredData,
  createServiceStructuredData,
} from "./structured-data";
import manifest from "../app/manifest";
import { socialImage } from "./site";

describe("SEO routes and structured data", () => {
  it("creates ordered absolute breadcrumb data", () => {
    const data = createBreadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Website Development", path: "/services/website-development" },
    ]);

    expect(data.itemListElement).toEqual([
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://intavor.co.ke/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Website Development",
        item: "https://intavor.co.ke/services/website-development",
      },
    ]);
  });

  it("connects service data to the INTAVOR organization", () => {
    const data = createServiceStructuredData({
      name: "Website Development",
      serviceType: "Website development",
      description: "Website development by INTAVOR.",
      path: "/services/website-development",
    });

    expect(data.provider).toEqual({
      "@id": "https://intavor.co.ke/#organization",
    });
    expect(data.url).toBe(
      "https://intavor.co.ke/services/website-development",
    );
  });

  it("publishes stable favicon URLs", () => {
    expect(manifest().icons).toEqual([
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ]);
  });

  it("declares the social image's actual dimensions", () => {
    expect(socialImage).toMatchObject({
      width: 1640,
      height: 624,
    });
  });
});
