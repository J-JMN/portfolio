import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/seo/StructuredData";
import WebsiteDevelopmentArt from "@/components/illustrations/WebsiteDevelopmentArt";
import { projects } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";
import {
  createBreadcrumbStructuredData,
  createServiceStructuredData,
} from "@/lib/structured-data";

const path = "/services/website-development";
const description =
  "Professional website design and development in Nairobi for businesses, NGOs, and organisations across Kenya and internationally.";

export const metadata = createPageMetadata({
  title: "Website Design & Development in Nairobi, Kenya",
  description,
  path,
});

const serviceData = createServiceStructuredData({
  name: "Website Design and Development",
  serviceType: "Website design and development",
  description,
  path,
});

const breadcrumbData = createBreadcrumbStructuredData([
  { name: "Home", path: "/" },
  { name: "Expertise", path: "/experience" },
  { name: "Website Design and Development", path },
]);

const relatedProjects = projects
  .filter((project) => project.serviceSlugs.includes("website-development"))
  .slice(0, 2);

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <ServicePage
        eyebrow="Website design and development"
        title={
          <>
            A website that makes your value{" "}
            <span className="text-[#a99cff]">clear from the first click.</span>
          </>
        }
        description="INTAVOR designs and develops responsive business websites that help the right people understand your organisation, trust what they see, and take the next step."
        visual={<WebsiteDevelopmentArt />}
        introduction={{
          eyebrow: "Professional website development",
          title: "Built around what your audience needs to understand.",
          paragraphs: [
            "A strong business website does more than look polished. It gives your services a clear structure, represents the quality of your work, and makes it easy for visitors to move from interest to action.",
            "Based in Nairobi, INTAVOR is an independent website design and development studio working with organisations in Kenya and internationally. Every project is led directly by the founder, from structure and design through development and launch.",
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
        audiences={{
          eyebrow: "Websites shaped around real organisations",
          title: "The right structure depends on who needs to trust you.",
          description:
            "INTAVOR does not force every organisation into the same template. The message, content structure, and functionality follow the people the website needs to reach and the action it needs to support.",
          items: [
            {
              title: "Business and corporate websites",
              description:
                "Professional websites that explain services clearly, strengthen credibility, and turn interest into useful enquiries.",
            },
            {
              title: "NGO and nonprofit websites",
              description:
                "Mission-led websites that bring programmes, impact, stories, partners, and ways to get involved into one clear experience.",
            },
            {
              title: "Education and programme websites",
              description:
                "Clear journeys for parents, schools, learners, and partners looking for relevant programmes, courses, or opportunities.",
            },
            {
              title: "Website redesigns",
              description:
                "A considered rebuild for existing websites that feel outdated, are difficult to navigate, or no longer work well across devices.",
            },
          ],
        }}
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
            question: "Can INTAVOR redesign an existing website?",
            answer:
              "Yes. A redesign can address unclear structure, outdated presentation, weak mobile behaviour, difficult content management, or a website that no longer represents the organisation well.",
          },
          {
            question:
              "What makes INTAVOR different from a larger web development agency?",
            answer:
              "INTAVOR is founder-led, so clients work directly with the person responsible for the thinking, design direction, development, and after-launch relationship. The process remains structured without adding layers between the client and the work.",
          },
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
