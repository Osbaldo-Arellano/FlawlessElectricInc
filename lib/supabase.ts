import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ============================================
// DB row types (matches the Supabase schema)
// ============================================

export interface BrandRow {
  id: string;
  user_id: string;
  name: string | null;
  tagline: string | null;
  email: string | null;
  phone: string | null;
  logo_url: string | null;
  about_us: string | null;
  address: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  } | null;
  social_links: Array<{
    platform: string;
    url: string;
    handle?: string;
  }> | null;
  logo_variants: {
    primary?: string;
    horizontal?: string;
    dark?: string;
    light?: string;
    favicon?: string;
  } | null;
  updated_at: string;
}

export interface BrandPhotoRow {
  id: string;
  user_id: string;
  url: string;
  alt_text: string | null;
  caption: string | null;
  sort_order: number;
  created_at: string;
}

// ============================================
// Helper: format a raw phone string → (XXX) XXX-XXXX
// Strips all non-digits, removes leading country code 1, then formats.
// Returns the raw string unchanged if it's too short to format.
// ============================================
export function formatPhone(raw: string | null | undefined): string {
  if (!raw) return "";
  const digits = raw.replace(/\D/g, "");
  const local = digits.length === 11 && digits[0] === "1" ? digits.slice(1) : digits;
  if (local.length < 10) return raw;
  return `(${local.slice(0, 3)}) ${local.slice(3, 6)}-${local.slice(6, 10)}`;
}

// ============================================
// Helper: format address JSONB → display string
// ============================================
export function formatAddress(addr: BrandRow["address"]): string {
  if (!addr) return "";
  const { street, city, state, zip } = addr;
  const cityStateZip = [city, state && zip ? `${state} ${zip}` : state || zip]
    .filter(Boolean)
    .join(", ");
  return [street, cityStateZip].filter(Boolean).join(", ");
}
