import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-3xl -z-10 rounded-full" />
        
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Interested in working together? I'd love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
