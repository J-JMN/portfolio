import { describe, expect, it } from "vitest";
import {
  createBreadcrumbStructuredData,
  createServiceStructuredData,
} from "./structured-data";

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
});
