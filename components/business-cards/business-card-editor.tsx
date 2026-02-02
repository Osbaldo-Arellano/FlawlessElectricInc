"use client";

import { useState, useEffect } from "react";
import { Download, RotateCcw, FileDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBrand } from "@/contexts/brand-context";

import { BusinessCardData, DIMENSIONS, DimensionKey } from "./types";
import { TemplateModern, generateModernHTML } from "./template-modern";
import { TemplateBold, generateBoldHTML } from "./template-bold";

interface BusinessCardEditorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  template: "modern" | "bold";
}

export function BusinessCardEditor({
  open,
  onOpenChange,
  template,
}: BusinessCardEditorProps) {
  const { brand } = useBrand();
  const t = brand.ui.cardEditor;

  // Initialize with brand defaults
  const getDefaultData = (): BusinessCardData => ({
    name: "John Smith",
    title: "Software Engineer",
    email: brand.company.email,
    phone: brand.company.phone,
    tagline: brand.company.tagline,
    logoUrl: brand.assets.logo.uploaded || null,
  });

  const [data, setData] = useState<BusinessCardData>(getDefaultData);
  const [sides, setSides] = useState<"single" | "double">("double");
  const [dimensions, setDimensions] = useState<DimensionKey>("us-standard");
  const [previewSide, setPreviewSide] = useState<"front" | "back">("front");
  const [isDownloading, setIsDownloading] = useState(false);

  // Reset data when dialog opens
  useEffect(() => {
    if (open) {
      setData(getDefaultData());
      setPreviewSide("front");
    }
  }, [open, brand]);

  const updateField = (field: keyof BusinessCardData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const resetToDefaults = () => {
    setData(getDefaultData());
  };

  // ---------- HTML download (existing) ----------
  const downloadHTML = () => {
    const generateHTML =
      template === "modern" ? generateModernHTML : generateBoldHTML;

    // Generate front
    const frontHTML = generateHTML(data, dimensions, "front");
    downloadFile(`business-card-${template}-front.html`, frontHTML, "text/html");

    // Generate back if double-sided
    if (sides === "double") {
      const backHTML = generateHTML(data, dimensions, "back");
      downloadFile(
        `business-card-${template}-back.html`,
        backHTML,
        "text/html"
      );
    }
  };

  // ---------- PDF download (NEW) ----------
  const downloadPDF = async () => {
    const generateHTML =
      template === "modern" ? generateModernHTML : generateBoldHTML;

    setIsDownloading(true);
    try {
      // Front
      const frontHTML = generateHTML(data, dimensions, "front");
      await downloadPdfFromHtml(`business-card-${template}-front`, frontHTML);

      // Back (optional)
      if (sides === "double") {
        const backHTML = generateHTML(data, dimensions, "back");
        await downloadPdfFromHtml(`business-card-${template}-back`, backHTML);
      }
    } finally {
      setIsDownloading(false);
    }
  };

  const downloadPdfFromHtml = async (baseName: string, html: string) => {
    const res = await fetch("/api/render-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ html, filename: baseName }),
    });

    if (!res.ok) {
      const msg = await res.text().catch(() => "");
      throw new Error(msg || "Failed to render PDF");
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${baseName}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadFile = (filename: string, content: string, mime: string) => {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const TemplateComponent = template === "modern" ? TemplateModern : TemplateBold;
  const templateLabel =
    template === "modern" ? "Modern Minimal" : "Bold Corporate";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>{templateLabel}</DialogTitle>
          <DialogDescription>
            {t.customize}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col lg:flex-row gap-6 mt-4">
          {/* Preview - shown first on mobile */}
          <div className="space-y-4 lg:order-2 lg:flex-1">
            <div className="flex items-center justify-between">
              <Label>{t.preview}</Label>
              {sides === "double" && (
                <div className="flex gap-2">
                  <Button
                    variant={previewSide === "front" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPreviewSide("front")}
                  >
                    {t.front}
                  </Button>
                  <Button
                    variant={previewSide === "back" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPreviewSide("back")}
                  >
                    {t.back}
                  </Button>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center p-4 sm:p-8 bg-muted/50 rounded-lg min-h-[160px] sm:min-h-[200px] overflow-x-auto">
              <div className="shadow-lg transform scale-[0.85] sm:scale-100 origin-center">
                <TemplateComponent
                  data={data}
                  dimensions={dimensions}
                  side={previewSide}
                />
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              {DIMENSIONS[dimensions].label}
              {sides === "double" && " • Double-sided"}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4 lg:order-1 lg:flex-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="dimensions">{t.dimensions}</Label>
                <Select
                  value={dimensions}
                  onValueChange={(v) => setDimensions(v as DimensionKey)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(DIMENSIONS).map(([key, dim]) => (
                      <SelectItem key={key} value={key}>
                        {dim.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sides">{t.sides}</Label>
                <Select
                  value={sides}
                  onValueChange={(v) => setSides(v as "single" | "double")}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">{t.singleSided}</SelectItem>
                    <SelectItem value="double">{t.doubleSided}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <hr className="border-border" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t.name}</Label>
                <Input
                  id="name"
                  value={data.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">{t.title}</Label>
                <Input
                  id="title"
                  value={data.title}
                  onChange={(e) => updateField("title", e.target.value)}
                  placeholder={t.titlePlaceholder}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t.phone}</Label>
                <Input
                  id="phone"
                  value={data.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder={t.phonePlaceholder}
                />
              </div>
            </div>

            {sides === "double" && (
              <div className="space-y-2">
                <Label htmlFor="tagline">{t.taglineBack}</Label>
                <Input
                  id="tagline"
                  value={data.tagline}
                  onChange={(e) => updateField("tagline", e.target.value)}
                  placeholder={t.taglinePlaceholder}
                />
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" onClick={resetToDefaults}>
                <RotateCcw className="h-4 w-4 mr-2" />
                {t.reset}
              </Button>
            </div>
          </div>
        </div>

        {/* Actions - sticky on mobile */}
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2 mt-4 pt-4 border-t border-border">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t.cancel}
          </Button>

          <Button variant="outline" onClick={downloadHTML} disabled={isDownloading}>
            <Download className="h-4 w-4 mr-2" />
            {t.downloadHtml}
          </Button>

          <Button onClick={downloadPDF} disabled={isDownloading}>
            <FileDown className="h-4 w-4 mr-2" />
            {isDownloading ? "Generating PDF..." : t.preview}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
