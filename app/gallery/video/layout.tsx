import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Gallery",
  description:
    "Watch video walkthroughs of our residential electrical projects — panel upgrades, ceiling work, and whole-home rewires — by Flawless Electric Inc, Oregon's veteran-owned union electricians.",
  alternates: {
    canonical: "/gallery/video",
  },
  openGraph: {
    title: "Video Gallery | Flawless Electric Inc",
    description:
      "Video walkthroughs of electrical projects across Oregon from Flawless Electric Inc — veteran-owned, IBEW union-trained.",
    url: "/gallery/video",
    type: "website",
  },
};

export default function VideoGalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
