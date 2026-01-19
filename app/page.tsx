import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import QuickContact from "@/components/home/QuickContact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <QuickContact />
      <Footer />
    </main>
  );
}
