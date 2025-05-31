"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SiteLogo } from "@/components/site-logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Business Units", href: "/business-units" },
    { label: "Investor Relations", href: "/investor-relations" },
    { label: "Contact", href: "/contact" },
  ];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm shadow-sm py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <SiteLogo />
          <span className="font-bold text-xl hidden sm:inline-block">Nokael Group</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground/80",
                pathname === item.href 
                  ? "text-foreground" 
                  : "text-foreground/60"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md",
                  pathname === item.href
                    ? "bg-secondary text-foreground"
                    : "text-foreground/60 hover:text-foreground hover:bg-secondary/50"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}