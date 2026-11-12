import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import WorkArt from "@/components/illustrations/WorkArt";
import ProjectGrid from "@/components/projects/ProjectGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected websites and web applications designed and built by INTAVOR.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <PageBanner
        eyebrow="Selected client work"
        title={
          <>
            Every screen should earn its place.{" "}
            <span className="text-[#a99cff]">Every journey should lead somewhere.</span>
          </>
        }
        description="Selected websites and web applications shaped around what each organisation needs people to understand, trust, and do."
        visual={<WorkArt />}
      />
      <ProjectGrid />
      <Footer />
    </main>
  );
}
