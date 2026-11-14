import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import FadeIn from "@/components/animations/FadeIn";
import { Mail, MapPin, Clock } from "lucide-react";
import { brandInfo, founderInfo } from "@/lib/data";
import ContactArt from "@/components/illustrations/ContactArt";
import DotGrid from "@/components/decor/DotGrid";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { createPageMetadata } from "@/lib/site";
import ContactFaq from "@/components/contact/ContactFaq";

export const metadata = createPageMetadata({
  title: "Contact a Web Development Studio in Nairobi",
  description:
    "Contact INTAVOR about website design, website development, custom web applications, or after-launch support in Kenya and internationally.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-16 relative isolate overflow-hidden min-h-[calc(100vh-80px)]">
        <DotGrid className="bottom-10 left-0 h-72 w-md" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-3xl -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 blur-3xl -z-10 rounded-full" />

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
                    Start a conversation
                  </span>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3">
                    Let&apos;s make your value clear{" "}
                    <span className="text-primary">from the first click.</span>
                  </h1>
                  <p className="text-muted-foreground">
                    Tell us what your organisation needs people to understand,
                    trust, or do online. We&apos;ll turn that into a clear
                    direction for your website or web application.
                  </p>
                  <p className="mt-3 text-sm text-foreground/80">
                    Every enquiry is handled directly by{" "}
                    <span className="font-medium text-foreground">
                      {founderInfo.name}
                    </span>
                    , {founderInfo.role.toLowerCase()} at INTAVOR.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <ContactArt />
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
                        href={`mailto:${brandInfo.email}`}
                        className="font-medium hover:text-primary transition-colors text-sm"
                      >
                        {brandInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">WhatsApp</p>
                      <a
                        href={brandInfo.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary transition-colors text-sm"
                      >
                        {brandInfo.phone}
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
                        {brandInfo.location}
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
                        {brandInfo.availability}
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
                    {brandInfo.socials.map((social) => (
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

      <ContactFaq />
      <Footer />
    </main>
  );
}
