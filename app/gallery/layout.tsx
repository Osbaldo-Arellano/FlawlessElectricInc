import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse our portfolio of residential electrical work across Oregon — panel upgrades, whole-home rewiring, lighting installations, and more. Veteran-owned, union-trained craftsmanship from Flawless Electric Inc.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Project Gallery | Flawless Electric Inc",
    description:
      "See our electrical work across the Pacific Northwest — panel upgrades, lighting, new construction, and commercial projects.",
    url: "/gallery",
    type: "website",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
