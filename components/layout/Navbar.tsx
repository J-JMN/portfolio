"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
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
            ? "bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl shadow-primary/10 rounded-2xl max-w-4xl w-full mx-4"
            : "bg-transparent w-full",
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
              "flex items-center justify-center transition-all duration-500",
              scrolled ? "h-14" : "h-16",
            )}
          >
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-white hover:text-primary hover:bg-white/5",
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

              {/* Animated Hire Me Button */}
              <div className="ml-4 relative">
                {/* Animated ring around button */}
                <motion.div
                  className="absolute -inset-1 rounded-full opacity-75"
                  style={{
                    background:
                      "linear-gradient(90deg, hsl(var(--primary)), #60a5fa, hsl(var(--primary)))",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                {/* Pulsing glow effect */}
                <motion.div
                  className="absolute -inset-2 bg-primary/30 rounded-full blur-md"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Link
                  href="/contact"
                  className="relative px-6 py-2.5 bg-primary text-primary-foreground font-semibold text-base rounded-full inline-block hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  Hire Me
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white absolute right-4"
              onClick={() => setIsOpen(!isOpen)}
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
              className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden rounded-b-2xl"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={closeMenu}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-white hover:text-primary hover:bg-white/5",
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
                    Hire Me
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
