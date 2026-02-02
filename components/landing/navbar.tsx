"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Settings } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useBrand } from "@/contexts/brand-context";
import { useMounted } from "@/hooks/use-mounted";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();
  const { brand } = useBrand();

  // Use uploaded logo if available, otherwise fall back to theme-appropriate logo
  // Before mount, use null to show text fallback and avoid hydration mismatch
  const logoSrc = mounted
    ? brand.assets.logo.uploaded ||
      (resolvedTheme === "dark"
        ? brand.assets.logo.dark
        : brand.assets.logo.light)
    : null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 relative">
        {/* Logo */}
        <Link href="/" className="z-10">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={brand.company.name}
              width={200}
              height={300}
              className="h-50 w-80 object-contain"
            />
          ) : (
            <span className="text-xl font-bold">{brand.company.name}</span>
          )}
        </Link>

        {/* Desktop Navigation - Absolutely centered */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {brand.navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4 z-10">
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild>
            <Link href={brand.navigation.cta.href}>
              {brand.navigation.cta.label}
            </Link>
          </Button>
          <Link href="/login" className="text-muted-foreground/40 hover:text-muted-foreground transition-colors" aria-label="Settings">
            <Settings className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/login" className="text-muted-foreground/40 hover:text-muted-foreground transition-colors" aria-label="Settings">
            <Settings className="w-4 h-4" />
          </Link>
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu - Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 z-50 overflow-hidden rounded-b-2xl bg-background border-b border-border/40 shadow-lg transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-b-0"}`}
      >
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {brand.navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild className="w-full">
                <Link href={brand.navigation.cta.href}>
                  {brand.navigation.cta.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
