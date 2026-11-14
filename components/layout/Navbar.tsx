"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/layout/BrandLogo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Expertise", path: "/experience" },
  { name: "Work", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const serviceItems = [
  {
    name: "Website Design & Development",
    description: "Digital presence that earns trust.",
    path: "/services/website-development",
  },
  {
    name: "Web Application Development",
    description: "Purpose-built tools and workflows.",
    path: "/services/web-application-development",
  },
  {
    name: "After-Launch Care",
    description: "Ongoing care for work we deliver.",
    path: "/experience#partnerships",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let frame: number | null = null;
    const handleScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        frame = null;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const toggleMenu = () => {
    if (isOpen) setIsServicesOpen(false);
    setIsOpen((open) => !open);
  };

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center transition-[padding] duration-300 ease-out",
        scrolled ? "px-4 py-3" : "p-0",
      )}
    >
      <nav
        className={cn(
          "transition-[background-color,border-color,border-radius,box-shadow,width] duration-300 ease-out",
          scrolled
            ? "mx-4 w-full max-w-6xl rounded-2xl border border-border/70 bg-background shadow-2xl shadow-black/20 lg:bg-background/95 lg:backdrop-blur-xl"
            : "w-full border-b border-border/40 bg-background/95 lg:bg-background/70 lg:backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "transition-all duration-500",
            scrolled ? "px-6" : "container mx-auto px-4 md:px-6",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "h-14" : "h-16",
            )}
          >
            <Link href="/" onClick={closeMenu} aria-label="INTAVOR home">
              <BrandLogo priority />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 4).map((item) => {
                const isActive =
                  item.path === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-white/5",
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                );
              })}

              <div className="group relative">
                <button
                  type="button"
                  aria-haspopup="menu"
                  className={cn(
                    "relative flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
                    pathname.startsWith("/services")
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-white/5 hover:text-primary",
                  )}
                >
                  Services
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-border/70 bg-background/98 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
                    {serviceItems.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="block rounded-xl px-4 py-3 transition-colors hover:bg-primary/10"
                      >
                        <span className="block font-heading text-sm font-semibold text-foreground">
                          {service.name}
                        </span>
                        <span className="mt-1 block text-xs text-muted-foreground">
                          {service.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navItems.slice(4).map((item) => {
                const isActive = pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-white/5",
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                );
              })}

              <div className="ml-3">
                <Link
                  href="/contact"
                  className="relative px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-full inline-block hover:bg-[#6555ed] transition-colors shadow-lg shadow-primary/20"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            <button
              className="lg:hidden p-2 text-foreground"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="mobile-menu-enter overflow-hidden rounded-b-2xl border-t border-border/50 bg-background lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4">
                {navItems.slice(0, 4).map((item) => {
                  const isActive =
                    item.path === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.path);
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={closeMenu}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/80 hover:text-primary hover:bg-white/5",
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <button
                  type="button"
                  aria-expanded={isServicesOpen}
                  aria-controls="mobile-services"
                  onClick={() => setIsServicesOpen((open) => !open)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium transition-colors",
                    pathname.startsWith("/services")
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-white/5 hover:text-primary",
                  )}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isServicesOpen && "rotate-180",
                    )}
                  />
                </button>
                {isServicesOpen && (
                  <div
                    id="mobile-services"
                    className="mobile-menu-enter rounded-xl border border-border/60 bg-card/30 p-2"
                  >
                    <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#b7adff]">
                    Services
                    </p>
                    {serviceItems.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        onClick={closeMenu}
                        className="block rounded-lg px-3 py-2.5 hover:bg-primary/10"
                      >
                        <span className="block font-heading text-sm font-semibold">
                          {service.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {service.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
                {navItems.slice(4).map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMenu}
                    className="px-4 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-border/50">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full inline-block text-center hover:bg-primary/90 transition-colors"
                  >
                    Start a Project
                  </Link>
                </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
