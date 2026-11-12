import Hero from "@/components/home/Hero";
import ServicesStrip from "@/components/home/ServicesStrip";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import QuickContact from "@/components/home/QuickContact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { createPageMetadata, defaultDescription } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Website & Web Application Development in Nairobi | INTAVOR",
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
      <QuickContact />
      <Footer />
    </main>
  );
}
