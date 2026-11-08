import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import WorkArt from "@/components/illustrations/WorkArt";
import ProjectGrid from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected websites and digital platforms delivered and supported by INTAVOR.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <PageBanner
        eyebrow="Selected work"
        title={
          <>
            Client platforms,{" "}
            <span className="text-[#a99cff]">delivered and supported.</span>
          </>
        }
        description="Websites, business platforms, and digital experiences built around clear goals, practical workflows, and lasting value."
        visual={<WorkArt />}
      />
      <ProjectGrid />
      <Footer />
    </main>
  );
}
