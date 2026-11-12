import ServicePage from "@/components/services/ServicePage";
import StructuredData from "@/components/seo/StructuredData";
import WebApplicationArt from "@/components/illustrations/WebApplicationArt";
import { projects } from "@/lib/data";
import { createPageMetadata } from "@/lib/site";
import {
  createBreadcrumbStructuredData,
  createServiceStructuredData,
} from "@/lib/structured-data";

const path = "/services/web-application-development";
const description =
  "Custom web application development from Nairobi-based INTAVOR for organisations in Kenya and internationally.";

export const metadata = createPageMetadata({
  title: "Custom Web Application Development in Kenya",
  description,
  path,
});

const serviceData = createServiceStructuredData({
  name: "Custom Web Application Development",
  serviceType: "Web application development",
  description,
  path,
});

const breadcrumbData = createBreadcrumbStructuredData([
  { name: "Home", path: "/" },
  { name: "Expertise", path: "/experience" },
  { name: "Web Application Development", path },
]);

const relatedProjects = projects.filter((project) =>
  project.serviceSlugs.includes("web-application-development"),
);

export default function WebApplicationDevelopmentPage() {
  return (
    <>
      <StructuredData data={serviceData} />
      <StructuredData data={breadcrumbData} />
      <ServicePage
        eyebrow="Custom web application development"
        title={
          <>
            Digital tools shaped around{" "}
            <span className="text-[#a99cff]">how your organisation works.</span>
          </>
        }
        description="INTAVOR designs and develops custom web applications that turn services, workflows, and administration into clear, connected digital experiences."
        visual={<WebApplicationArt />}
        introduction={{
          eyebrow: "Purpose-built web applications",
          title: "When the experience needs to do more than present information.",
          paragraphs: [
            "Some organisations need more than a conventional website. They need customers to book, enquire, access useful content, or move through a service while internal teams manage what happens behind the scenes.",
            "INTAVOR brings those public and administrative needs into one considered web application, with the workflow shaped around the real goal rather than forced into an unrelated template.",
          ],
        }}
        capabilities={[
          {
            title: "Connected workflows",
            description:
              "Turn multi-step services and repeated administrative work into clear processes that are easier to follow and manage.",
          },
          {
            title: "Useful integrations",
            description:
              "Connect the application to the communication, scheduling, or other services required by the workflow.",
          },
          {
            title: "Administrative tools",
            description:
              "Give teams practical ways to manage content, enquiries, bookings, and other operational information.",
          },
          {
            title: "Clear user journeys",
            description:
              "Keep complex functionality understandable so customers and staff can complete important tasks with less friction.",
          },
        ]}
        includes={{
          eyebrow: "What the service can include",
          title: "Public experiences and the systems behind them.",
          description:
            "Each application is scoped around the workflow it needs to support. Relevant functionality is brought together without adding complexity that the organisation does not need.",
          items: [
            "Workflow planning",
            "Responsive application interfaces",
            "Booking and enquiry flows",
            "Transactional email handling",
            "Content and publishing tools",
            "Private administrative dashboards",
            "Third-party integrations",
            "Testing and deployment",
          ],
        }}
        process={[
          {
            title: "Map the workflow",
            description:
              "Understand the people, decisions, information, and actions involved from beginning to end.",
          },
          {
            title: "Define the system",
            description:
              "Turn the workflow into a clear product structure, technical direction, and practical project scope.",
          },
          {
            title: "Build and connect",
            description:
              "Develop the interface, application logic, administrative tools, and required integrations.",
          },
          {
            title: "Test and release",
            description:
              "Verify the important paths, refine the experience, and prepare the application for dependable use.",
          },
        ]}
        relatedProjects={relatedProjects}
        questions={[
          {
            question: "What is the difference between a website and a web application?",
            answer:
              "A website primarily presents information and guides visitors towards a next step. A web application also supports interactive tasks or workflows such as bookings, content management, enquiries, dashboards, or connected services.",
          },
          {
            question: "Can the application include an administrative dashboard?",
            answer:
              "Yes. Where the workflow requires internal management, the application can include private tools for content, enquiries, bookings, publishing, or other relevant information.",
          },
          {
            question: "Can existing services be integrated?",
            answer:
              "Yes. Integrations can be included where an external service is useful to the workflow. The appropriate approach depends on the service and the access it provides.",
          },
          {
            question: "Do you work with organisations outside Nairobi?",
            answer:
              "Yes. INTAVOR is based in Nairobi and works with businesses and organisations in Kenya and internationally.",
          },
        ]}
      />
    </>
  );
}
