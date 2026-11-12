import { describe, expect, it } from "vitest";
import {
  createBreadcrumbStructuredData,
  createServiceStructuredData,
} from "./structured-data";

describe("SEO routes and structured data", () => {
  it("creates ordered absolute breadcrumb data", () => {
    const data = createBreadcrumbStructuredData([
      { name: "Home", path: "/" },
      { name: "Website Design", path: "/services/website-design" },
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
        name: "Website Design",
        item: "https://intavor.co.ke/services/website-design",
      },
    ]);
  });

  it("connects service data to the INTAVOR organization", () => {
    const data = createServiceStructuredData({
      name: "Business Website Design",
      serviceType: "Website design and development",
      description: "Business website design by INTAVOR.",
      path: "/services/website-design",
    });

    expect(data.provider).toEqual({
      "@id": "https://intavor.co.ke/#organization",
    });
    expect(data.url).toBe(
      "https://intavor.co.ke/services/website-design",
    );
  });
});
