import Link from "next/link";
import { brandInfo } from "@/lib/data";
import BrandLogo from "@/components/layout/BrandLogo";
import GlowDivider from "@/components/decor/GlowDivider";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="defer-render relative bg-background py-12">
      <GlowDivider />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="mb-3 block"
            >
              <BrandLogo />
            </Link>
            <p className="mb-5 text-sm text-primary">{brandInfo.tagline}</p>
            <p className="text-muted-foreground max-w-xs mb-6">
              {brandInfo.bio}
            </p>
            <div className="flex gap-4">
              {brandInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-accent hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/website-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-application-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Application Development
                </Link>
              </li>
              <li>
                <Link
                  href="/experience#partnerships"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  After-Launch Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${brandInfo.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {brandInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={brandInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp: {brandInfo.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{brandInfo.location}</li>
              <li className="text-primary font-medium text-sm">
                {brandInfo.availability}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex justify-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} {brandInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
