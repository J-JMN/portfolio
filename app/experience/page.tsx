import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import ExpertiseArt from "@/components/illustrations/ExpertiseArt";
import ServicesOverview from "@/components/experience/ServicesOverview";
import WorkingProcess from "@/components/experience/WorkingProcess";
import ClientPartnerships from "@/components/experience/ClientPartnerships";
import QuickContact from "@/components/home/QuickContact";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Website delivery, ongoing management, and continuous improvement from INTAVOR.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <PageBanner
        eyebrow="Expertise"
        title={
          <>
            Built with purpose.{" "}
            <span className="text-[#a99cff]">Supported for the long run.</span>
          </>
        }
        description="Websites, web applications, and ongoing technical support in one working relationship, from the first idea to the next improvement."
        visual={<ExpertiseArt />}
        actions={
          <>
            <Button size="lg" className="h-12 rounded-full px-6" asChild>
              <Link href="/contact">
                Discuss your website <ArrowRight className="h-4 w-4" />
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
      <QuickContact />
      <Footer />
    </main>
  );
}
