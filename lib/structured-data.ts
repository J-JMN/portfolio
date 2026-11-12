import { siteUrl } from "./site";

type Breadcrumb = {
  name: string;
  path: string;
};

type ServiceData = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

export function createBreadcrumbStructuredData(items: Breadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function createServiceStructuredData({
  name,
  description,
  path,
  serviceType,
}: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name,
    serviceType,
    description,
    url: `${siteUrl}${path}`,
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    areaServed: ["Kenya", "International"],
  };
}
