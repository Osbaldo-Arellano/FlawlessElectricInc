export interface BusinessCardData {
  // Personal info (user input)
  name: string;
  title: string;
  // Contact info (from brand config, overridable)
  email: string;
  phone: string;
  // Brand info (from brand config, overridable)
  tagline: string;
  logoUrl: string | null;
}

export interface BusinessCardConfig {
  data: BusinessCardData;
  template: "modern" | "bold";
  sides: "single" | "double";
  dimensions: "us-standard" | "square";
}

export const DIMENSIONS = {
  "us-standard": {
    label: "US Standard (3.5\" × 2\")",
    width: "3.5in",
    height: "2in",
    widthPx: 336, // 3.5 * 96
    heightPx: 192, // 2 * 96
  },
  "square": {
    label: "Square (2.5\" × 2.5\")",
    width: "2.5in",
    height: "2.5in",
    widthPx: 240, // 2.5 * 96
    heightPx: 240,
  },
} as const;

export type DimensionKey = keyof typeof DIMENSIONS;
