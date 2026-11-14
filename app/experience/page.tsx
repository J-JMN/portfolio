import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import ExpertiseArt from "@/components/illustrations/ExpertiseArt";
import ServicesOverview from "@/components/experience/ServicesOverview";
import WorkingProcess from "@/components/experience/WorkingProcess";
import ClientPartnerships from "@/components/experience/ClientPartnerships";
import FaqSection from "@/components/experience/FaqSection";
import QuickContact from "@/components/home/QuickContact";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Web Development Services in Nairobi, Kenya",
  description:
    "Explore website design and development, custom web application development, and after-launch website support from Nairobi-based INTAVOR.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <PageBanner
        eyebrow="Expertise"
        title={
          <>
            Clear enough to understand.{" "}
            <span className="text-[#a99cff]">Strong enough to trust.</span>
          </>
        }
        description="Purposeful website development, custom web application development, and dependable after-launch care shaped around what your organisation needs people to understand and do."
        visual={<ExpertiseArt />}
        actions={
          <>
            <Button size="lg" className="h-12 rounded-full px-6" asChild>
              <Link href="/contact">
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 rounded-full bg-background/50 px-6" asChild>
              <Link href="#services">What we do</Link>
            </Button>
          </>
        }
      />
      <ServicesOverview />
      <WorkingProcess />
      <ClientPartnerships />
      <FaqSection />
      <QuickContact />
      <Footer />
    </main>
  );
}
