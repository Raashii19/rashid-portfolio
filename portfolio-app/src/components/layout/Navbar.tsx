"use client";
import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = ["about", "skills", "projects", "contact"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border backdrop-blur-md" : "border-b border-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(13,8,9,0.94)" : "rgba(13,8,9,0.5)",
      }}
    >
      <div className="container mx-auto px-6 max-w-6xl h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="#home" className="font-bold tracking-tighter flex items-center text-[15px]">
          <span className="text-primary">&lt;</span>
          <span className="text-foreground">Rashid</span>
          <span className="text-primary">/&gt;</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative flex flex-col items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-opacity duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="#contact"
            className="inline-flex items-center h-8 px-4 rounded-md text-xs font-semibold border border-border text-foreground hover:bg-primary hover:border-primary hover:text-white transition-all duration-200"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu — animated with max-height */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
        style={{ backgroundColor: "rgba(13,8,9,0.98)" }}
      >
        <div className="border-t border-border px-4 pt-2 pb-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2.5 h-11 px-3 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-foreground bg-muted/60"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    )}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 pt-3 border-t border-border">
            <Link
              href="#contact"
              className="flex items-center justify-center h-10 w-full rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
