"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "@/components/layout/BrandLogo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Expertise", path: "/experience" },
  { name: "Work", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out"
      style={{ padding: scrolled ? "12px 16px" : "0" }}
    >
      <nav
        className={cn(
          "transition-all duration-500 ease-in-out",
          scrolled
            ? "bg-background/95 backdrop-blur-xl border border-border/70 shadow-2xl shadow-black/20 rounded-2xl max-w-6xl w-full mx-4"
            : "bg-background/70 backdrop-blur-md border-b border-border/40 w-full",
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
              {navItems.map((item) => {
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
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
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
              onClick={() => setIsOpen(!isOpen)}
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              id="mobile-navigation"
              className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden rounded-b-2xl"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {navItems.map((item) => {
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
