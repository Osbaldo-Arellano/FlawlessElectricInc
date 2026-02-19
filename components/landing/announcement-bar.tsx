"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

import { useBrand } from "@/contexts/brand-context";
import { formatPhone } from "@/lib/supabase";
import { QuoteModal } from "./quote-modal";

export function AnnouncementBar() {
  const { brand } = useBrand();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-[60] w-full bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 h-10 text-sm">
          <button
            onClick={() => setModalOpen(true)}
            className="font-semibold hover:underline underline-offset-2 transition-colors cursor-pointer"
          >
            {brand.announcementBar.cta}
          </button>
          <a
            href={`tel:${brand.company.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-1.5 hover:underline underline-offset-2 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{formatPhone(brand.company.phone)}</span>
          </a>
        </div>
      </div>

      <QuoteModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
