"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";
import { useTheme } from "next-themes";

import { useBrand } from "@/contexts/brand-context";
import { useMounted } from "@/hooks/use-mounted";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const socialIcons: Record<string, typeof Twitter> = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
};

export function Footer() {
  const { brand } = useBrand();
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  // Before mount, use null to show text fallback and avoid hydration mismatch
  const logoSrc = mounted
    ? brand.assets.logo.uploaded ||
      (resolvedTheme === "dark"
        ? brand.assets.logo.dark
        : brand.assets.logo.light)
    : null;

  return (
    <footer id="contact" className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <AnimateOnScroll animation="fade-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              {/* <Link href="/" className="inline-block mb-4">
              {logoSrc ? (
                <Image
                  src={logoSrc}
                  alt={brand.company.name}
                  width={140}
                  height={32}
                  className="h-8 w-auto"
                />
              ) : (
                <span className="text-xl font-bold">{brand.company.name}</span>
              )}
            </Link> */}
              <p className="text-sm text-muted-foreground mb-4 max-w-xs">
                {brand.footer.description}
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {brand.footer.social.map((social) => {
                  const Icon = socialIcons[social.platform] || Twitter;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="sr-only">{social.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link Columns */}
            {brand.footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, index) => (
                    <li key={`${column.title}-${index}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Copyright */}
        <AnimateOnScroll animation="fade">
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              {brand.footer.copyright}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}
