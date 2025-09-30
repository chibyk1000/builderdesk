"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Tasks", href: "#tasks" },
  { name: "Compare", href: "#compare" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        "bg-card/80 backdrop-blur-md border border-border rounded-full px-6 py-3",
        isScrolled ? "shadow-lg" : "shadow-sm"
      )}
    >
      <div className="flex items-center gap-8">
        <div className="font-bold text-lg"><img src="/logo.png" alt="" /></div>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}   
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <Button size="sm" className="rounded-full">
          Get Started
        </Button>
      </div>
    </nav>
  );
}
