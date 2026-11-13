import Link from "next/link";
import { brandInfo } from "@/lib/data";
import BrandLogo from "@/components/layout/BrandLogo";
import GlowDivider from "@/components/decor/GlowDivider";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="defer-render relative bg-background py-8 md:py-12">
      <GlowDivider />
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6 grid grid-cols-2 gap-x-5 gap-y-8 md:mb-8 md:grid-cols-5 md:gap-8">
          <div className="order-1 col-span-2 text-center md:order-none md:col-span-2 md:text-left">
            <Link
              href="/"
              className="mb-2 inline-block md:mb-3"
            >
              <BrandLogo />
            </Link>
            <p className="mb-3 text-sm text-primary md:mb-5">{brandInfo.tagline}</p>
            <p className="mx-auto mb-4 max-w-md text-sm leading-relaxed text-muted-foreground md:mx-0 md:mb-6 md:max-w-xs md:text-base">
              {brandInfo.bio}
            </p>
            <div className="flex justify-center gap-3 md:justify-start md:gap-4">
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

          <div className="order-3 min-w-0 md:order-none">
            <h3 className="mb-3 font-heading font-bold md:mb-4">Services</h3>
            <ul className="space-y-2 text-sm md:text-base">
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

          <div className="order-2 col-span-2 md:order-none md:col-span-1">
            <h3 className="mb-3 text-center font-heading font-bold md:mb-4 md:text-left">
              Navigation
            </h3>
            <ul className="grid grid-cols-3 gap-x-3 gap-y-2 text-center text-sm md:block md:space-y-2 md:text-left md:text-base">
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

          <div className="order-4 min-w-0 md:order-none">
            <h3 className="mb-3 font-heading font-bold md:mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${brandInfo.email}`}
                  className="break-all text-muted-foreground transition-colors hover:text-primary"
                >
                  {brandInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={brandInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {brandInfo.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{brandInfo.location}</li>
              <li className="text-xs font-medium text-primary md:text-sm">
                {brandInfo.availability}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center border-t border-border pt-5 text-center text-xs text-muted-foreground md:pt-8 md:text-sm">
          <p>
            &copy;{currentYear} {brandInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
