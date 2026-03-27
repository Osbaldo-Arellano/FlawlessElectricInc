import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BrandProvider } from "@/contexts/brand-context";
import { ScrollBackground } from "@/components/scroll-background";
import { createClient } from "@supabase/supabase-js";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_NAME = "Flawless Electric Inc";
const SITE_DESCRIPTION =
  "Veteran-owned, union-trained residential electrical services in Oregon. Panel upgrades, whole-home rewiring, EV charger installation, lighting, and more. Serving the Pacific Northwest — licensed, insured, and built to last.";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://flawlesselectricinc.com";

export async function generateMetadata(): Promise<Metadata> {
  // Fetch favicon from Supabase at request time
  let faviconUrl = "/favicon.ico";

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const userId = process.env.NEXT_PUBLIC_BRAND_USER_ID;

  if (supabaseUrl && supabaseKey && userId) {
    try {
      const client = createClient(supabaseUrl, supabaseKey);
      const { data } = await client
        .from("brands")
        .select("logo_variants, icon_url")
        .eq("user_id", userId)
        .single();

      const variants = data?.logo_variants ?? {};
      const remote =
        variants.favicon ?? data?.icon_url ?? variants.primary ?? variants.light ?? null;
      if (remote) faviconUrl = remote;
    } catch {
      // fall back to local favicon.ico
    }
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "Flawless Electric Inc | Licensed Electricians in Oregon",
      template: "%s | Flawless Electric Inc",
    },
    description: SITE_DESCRIPTION,
    keywords: [
      "electrician Oregon",
      "electrician Portland",
      "veteran owned electrician Oregon",
      "union electrician Portland",
      "IBEW electrician Oregon",
      "panel upgrade Portland OR",
      "whole home rewiring Oregon",
      "residential electrician Pacific Northwest",
      "licensed electrician Oregon CCB 260637",
      "EV charger installation Portland",
      "electrical contractor Oregon",
      "PNW electrician",
      "Flawless Electric",
    ],
    authors: [{ name: "Flawless Electric Inc" }],
    creator: "Flawless Electric Inc",
    publisher: "Flawless Electric Inc",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: "Flawless Electric Inc | Licensed Electricians in Oregon",
      description: SITE_DESCRIPTION,
      images: [
        {
          url: "/pnw.jpg",
          width: 1200,
          height: 630,
          alt: "Flawless Electric Inc — Veteran-owned union electricians serving Oregon",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Flawless Electric Inc | Licensed Electricians in Oregon",
      description: SITE_DESCRIPTION,
      images: ["/pnw.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: faviconUrl,
      shortcut: faviconUrl,
      apple: faviconUrl,
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "Flawless Electric Inc",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+15035550172",
  email: "info@flawlesselectricinc.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Portland",
    addressRegion: "OR",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.5051,
    longitude: -122.675,
  },
  areaServed: [
    { "@type": "State", name: "Oregon" },
    { "@type": "City", name: "Portland" },
    { "@type": "City", name: "Beaverton" },
    { "@type": "City", name: "Gresham" },
    { "@type": "City", name: "Hillsboro" },
    { "@type": "City", name: "Lake Oswego" },
    { "@type": "City", name: "Tigard" },
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  hasCredential: [
    "Oregon CCB #260637",
    "IBEW Union Member",
    "NECA Member",
    "Veteran Owned Business",
    "BBB Accredited",
    "Energy Trust of Oregon Ally",
  ],
  knowsAbout: [
    "Panel Upgrades",
    "Whole-Home Rewiring",
    "Lighting Installation",
    "EV Charger Installation",
    "Electrical Safety Inspections",
    "Electrical Troubleshooting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sans.variable} ${mono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <BrandProvider>
            <ScrollBackground />
            {children}
          </BrandProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
