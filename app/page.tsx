import Hero from "@/components/home/Hero";
import ServicesStrip from "@/components/home/ServicesStrip";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import QuickContact from "@/components/home/QuickContact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { createPageMetadata, defaultDescription } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Website Development Studio in Nairobi, Kenya | INTAVOR",
  description: defaultDescription,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServicesStrip />
      <FeaturedProjects />
      <ClientTestimonials />
      <QuickContact />
      <Footer />
    </main>
  );
}
