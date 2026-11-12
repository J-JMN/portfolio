import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/seo/StructuredData";
import WebsiteDesignArt from "@/components/illustrations/WebsiteDesignArt";
import { projects } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";
import {
  createBreadcrumbStructuredData,
  createServiceStructuredData,
} from "@/lib/structured-data";

const path = "/services/website-design";
const description =
  "Business website design and development from Nairobi-based INTAVOR for organisations in Kenya and internationally.";

export const metadata = createPageMetadata({
  title: "Business Website Design in Nairobi, Kenya",
  description,
  path,
});

const serviceData = createServiceStructuredData({
  name: "Business Website Design",
  serviceType: "Website design and development",
  description,
  path,
});

const breadcrumbData = createBreadcrumbStructuredData([
  { name: "Home", path: "/" },
  { name: "Expertise", path: "/experience" },
  { name: "Website Design", path },
]);

const relatedProjects = projects
  .filter((project) => project.serviceSlugs.includes("website-design"))
  .slice(0, 2);

export default function WebsiteDesignPage() {
  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <ServicePage
        eyebrow="Business website design"
        title={
          <>
            A website that makes your value{" "}
            <span className="text-[#a99cff]">clear from the first click.</span>
          </>
        }
        description="INTAVOR designs and develops responsive business websites that help the right people understand your organisation, trust what they see, and take the next step."
        visual={<WebsiteDesignArt />}
        introduction={{
          eyebrow: "Website design and development",
          title: "Built around what your audience needs to understand.",
          paragraphs: [
            "A strong business website does more than look polished. It gives your services a clear structure, represents the quality of your work, and makes it easy for visitors to move from interest to action.",
            "Based in Nairobi, INTAVOR works with organisations in Kenya and internationally to turn business goals, audience needs, and useful content into a distinctive digital presence.",
          ],
        }}
        capabilities={[
          {
            title: "Clear content structure",
            description:
              "Services, programmes, and key information are organised around the questions your audience arrives with.",
          },
          {
            title: "Responsive experience",
            description:
              "Every page is designed to remain clear, usable, and consistent across phones, tablets, and larger screens.",
          },
          {
            title: "Purposeful visual design",
            description:
              "A considered interface gives your organisation a recognisable presence without distracting from the message.",
          },
          {
            title: "Useful content control",
            description:
              "Where needed, content management tools make updates practical without requiring technical expertise.",
          },
        ]}
        includes={{
          eyebrow: "What the service can include",
          title: "Everything needed for a credible digital presence.",
          description:
            "The exact scope follows the organisation and its audience. The work can bring together the public experience, content tools, and enquiry paths needed to support the goal.",
          items: [
            "Website strategy and structure",
            "Responsive interface design",
            "Frontend development",
            "Content management",
            "Contact and enquiry flows",
            "Performance and accessibility",
            "Search-ready page foundations",
            "Optional after-launch care",
          ],
        }}
        process={[
          {
            title: "Understand",
            description:
              "Clarify the organisation, the audience, and what the website must help people understand or do.",
          },
          {
            title: "Structure",
            description:
              "Shape the content hierarchy, page journeys, and technical requirements before visual decisions take over.",
          },
          {
            title: "Design and build",
            description:
              "Create the responsive interface and develop the experience around the agreed direction.",
          },
          {
            title: "Refine and launch",
            description:
              "Test the details, improve the experience, and prepare the website for a confident release.",
          },
        ]}
        relatedProjects={relatedProjects}
        questions={[
          {
            question: "Do you work with organisations outside Nairobi?",
            answer:
              "Yes. INTAVOR is based in Nairobi and works with businesses and organisations in Kenya and internationally.",
          },
          {
            question: "Can the website include a content management system?",
            answer:
              "Yes. Where regular updates are important, the project can include content tools suited to the information your team needs to manage.",
          },
          {
            question: "Will the website work properly on mobile devices?",
            answer:
              "Yes. Responsive behaviour is considered throughout the design and development process so the experience remains clear across screen sizes.",
          },
          {
            question: "Can INTAVOR support the website after launch?",
            answer:
              "Optional after-launch care is available for websites built by INTAVOR, covering content updates, refinements, and technical support.",
          },
        ]}
      />
    </>
  );
}
