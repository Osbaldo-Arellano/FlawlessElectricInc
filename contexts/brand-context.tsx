"use client";

import { createContext, useContext, useState, useEffect, useRef, startTransition, ReactNode, useCallback } from "react";
import { brandConfig as configEN } from "@/config/brand.config";
import { brandConfig as configES } from "@/config/brand.config.es";

// Available languages
export type Language = "en" | "es";

const configs = {
  en: configEN,
  es: configES,
} as const;

// Types for mutable brand state - using generic types to support both languages
export interface BrandState {
  company: {
    name: string;
    tagline: string;
    description: string;
    email: string;
    phone: string;
    address: string;
  };
  assets: {
    logo: {
      light: string;
      dark: string;
      favicon: string;
      uploaded: string | null;
    };
    hero: {
      image: string;
      imageAlt: string;
    };
    partnerLogos: Array<{ name: string; url: string }>;
  };
  navigation: {
    links: Array<{ label: string; href: string }>;
    cta: { label: string; href: string };
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    stats: Array<{ value: string; label: string }>;
    scrollHint: string;
    overlayCard: {
      eyebrow: string;
      description: string;
      buttons: Array<{ label: string; href: string }>;
    };
  };
  trustBar: {
    headline: string;
  };
  about: {
    headline: string;
    subheadline: string;
    description: string;
    values: Array<{ title: string; description: string }>;
  };
  services: {
    headline: string;
    subheadline: string;
    items: Array<{ icon: string; title: string; description: string }>;
  };
  gallery: {
    headline: string;
    subheadline: string;
    tabs: {
      photos: string;
      videos: string;
    };
    items: Array<{ image: string; title: string; category: string }>;
    videos: Array<{ thumbnail: string; videoUrl: string; title: string; category: string }>;
  };
  cta: {
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  footer: {
    description: string;
    columns: Array<{
      title: string;
      links: Array<{ label: string; href: string }>;
    }>;
    social: Array<{ platform: string; url: string }>;
    copyright: string;
  };
}

interface BrandContextType {
  brand: BrandState;
  language: Language;
  setLanguage: (lang: Language) => void;
  setCompanyName: (name: string) => void;
  setCompanyTagline: (tagline: string) => void;
  setCompanyEmail: (email: string) => void;
  setCompanyPhone: (phone: string) => void;
  setCompanyAddress: (address: string) => void;
  setUploadedLogo: (dataUrl: string | null) => void;
  updateBrand: (updates: Partial<BrandState>) => void;
  resetBrand: () => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

const STORAGE_KEY = "brand-sync-config";
const LANGUAGE_KEY = "brand-sync-language";
const CONFIG_VERSION_KEY = "brand-sync-config-version";
const SCHEMA_VERSION = "2";

function getConfigVersion(lang: Language): string {
  return `${SCHEMA_VERSION}-${lang}`;
}

function getInitialState(lang: Language): BrandState {
  const config = configs[lang];
  return {
    company: { ...config.company },
    assets: {
      logo: {
        ...config.assets.logo,
        uploaded: null,
      },
      hero: { ...config.assets.hero },
      partnerLogos: [...config.assets.partnerLogos],
    },
    navigation: JSON.parse(JSON.stringify(config.navigation)),
    hero: JSON.parse(JSON.stringify(config.hero)),
    trustBar: { ...config.trustBar },
    about: JSON.parse(JSON.stringify(config.about)),
    services: JSON.parse(JSON.stringify(config.services)),
    gallery: JSON.parse(JSON.stringify(config.gallery)),
    cta: JSON.parse(JSON.stringify(config.cta)),
    footer: JSON.parse(JSON.stringify(config.footer)),
};
}

function getHydratedState(): { lang: Language; brand: BrandState } {
  if (typeof window === "undefined") {
    return { lang: "en", brand: getInitialState("en") };
  }

  const storedLang = (localStorage.getItem(LANGUAGE_KEY) as Language) || "en";
  const storedVersion = localStorage.getItem(CONFIG_VERSION_KEY);
  const expectedVersion = getConfigVersion(storedLang);

  if (storedVersion !== expectedVersion) {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(CONFIG_VERSION_KEY, expectedVersion);
    return { lang: storedLang, brand: getInitialState(storedLang) };
  }

  const initial = getInitialState(storedLang);
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return {
        lang: storedLang,
        brand: {
          ...initial,
          assets: {
            ...initial.assets,
            logo: {
              ...initial.assets.logo,
              uploaded: parsed.assets?.logo?.uploaded || null,
            },
          },
        },
      };
    } catch (e) {
      console.error("Failed to parse stored brand config:", e);
    }
  }

  return { lang: storedLang, brand: initial };
}

export function BrandProvider({ children }: { children: ReactNode }) {
  const hydratedRef = useRef(false);
  const [language, setLanguageState] = useState<Language>("en");
  const [brand, setBrand] = useState<BrandState>(() => getInitialState("en"));
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage after mount to avoid SSR mismatch
  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;
    const state = getHydratedState();
    startTransition(() => {
      setLanguageState(state.lang);
      setBrand(state.brand);
      setIsHydrated(true);
    });
  }, []);

  // Save to localStorage on change (after hydration)
  useEffect(() => {
    if (isHydrated) {
      // Only save customizations (uploaded logo), not the entire config
      const customizations = {
        assets: {
          logo: {
            uploaded: brand.assets.logo.uploaded,
          },
        },
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(customizations));
    }
  }, [brand, isHydrated]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_KEY, lang);
    localStorage.setItem(CONFIG_VERSION_KEY, getConfigVersion(lang));

    // Preserve uploaded logo when switching languages
    const uploadedLogo = brand.assets.logo.uploaded;
    const newState = getInitialState(lang);
    newState.assets.logo.uploaded = uploadedLogo;
    setBrand(newState);
  }, [brand.assets.logo.uploaded]);

  const setCompanyName = (name: string) => {
    setBrand((prev) => ({
      ...prev,
      company: { ...prev.company, name },
    }));
  };

  const setCompanyTagline = (tagline: string) => {
    setBrand((prev) => ({
      ...prev,
      company: { ...prev.company, tagline },
    }));
  };

  const setCompanyEmail = (email: string) => {
    setBrand((prev) => ({
      ...prev,
      company: { ...prev.company, email },
    }));
  };

  const setCompanyPhone = (phone: string) => {
    setBrand((prev) => ({
      ...prev,
      company: { ...prev.company, phone },
    }));
  };

  const setCompanyAddress = (address: string) => {
    setBrand((prev) => ({
      ...prev,
      company: { ...prev.company, address },
    }));
  };

  const setUploadedLogo = (dataUrl: string | null) => {
    setBrand((prev) => ({
      ...prev,
      assets: {
        ...prev.assets,
        logo: { ...prev.assets.logo, uploaded: dataUrl },
      },
    }));
  };

  const updateBrand = (updates: Partial<BrandState>) => {
    setBrand((prev) => ({ ...prev, ...updates }));
  };

  const resetBrand = () => {
    setBrand(getInitialState(language));
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(CONFIG_VERSION_KEY, getConfigVersion(language));
  };

  return (
    <BrandContext.Provider
      value={{
        brand,
        language,
        setLanguage,
        setCompanyName,
        setCompanyTagline,
        setCompanyEmail,
        setCompanyPhone,
        setCompanyAddress,
        setUploadedLogo,
        updateBrand,
        resetBrand,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error("useBrand must be used within a BrandProvider");
  }
  return context;
}
