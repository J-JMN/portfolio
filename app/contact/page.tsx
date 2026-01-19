import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import FadeIn from "@/components/animations/FadeIn";
import { Mail, MapPin, Clock } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="pt-24 pb-8 relative overflow-hidden min-h-[calc(100vh-80px)]">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-3xl -z-10 rounded-full" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Form (Primary Focus) */}
            <div className="order-2 lg:order-1">
              <FadeIn>
                <ContactForm />
              </FadeIn>
            </div>

            {/* Right Side - Info */}
            <div className="order-1 lg:order-2 space-y-6">
              <FadeIn delay={0.1}>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                    Get in Touch
                  </span>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">
                    Let&apos;s Build Something{" "}
                    <span className="text-primary">Amazing</span>
                  </h1>
                  <p className="text-muted-foreground">
                    Ready to bring your ideas to life? Send me a message and
                    let&apos;s discuss your project.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex flex-col gap-4 p-5 rounded-xl bg-card/50 border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="font-medium hover:text-primary transition-colors text-sm"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-medium text-sm">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Availability
                      </p>
                      <p className="font-medium text-green-500 flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        {personalInfo.availability}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    Connect:
                  </span>
                  <div className="flex gap-2">
                    {personalInfo.socials.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                        aria-label={social.name}
                      >
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
