"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Upload, X, Building2, CreditCard, LogOut, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";
import { useBrand } from "@/contexts/brand-context";
import { BusinessCardEditor } from "@/components/business-cards";

export default function DashboardPage() {
  const {
    brand,
    setCompanyName,
    setCompanyTagline,
    setCompanyEmail,
    setCompanyPhone,
    setUploadedLogo,
    resetBrand
  } = useBrand();

  const { ui } = brand;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<"modern" | "bold">("modern");

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setUploadedLogo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const openEditor = (template: "modern" | "bold") => {
    setSelectedTemplate(template);
    setEditorOpen(true);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold">
              {brand.company.name}
            </Link>
            <span className="text-sm text-muted-foreground">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <LogOut className="h-4 w-4 mr-2" />
                {ui.dashboard.exit}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{ui.dashboard.title}</h1>
            <p className="text-muted-foreground mt-1">
              {ui.dashboard.subtitle}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={resetBrand}>
            <RotateCcw className="h-4 w-4 mr-2" />
            {ui.dashboard.resetToDefaults}
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Brand Identity Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  {ui.companyInfo.title}
                </CardTitle>
                <CardDescription>
                  {ui.companyInfo.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName">{ui.companyInfo.companyName}</Label>
                  <Input
                    id="companyName"
                    value={brand.company.name}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter company name"
                  />
                </div>

                {/* Company Tagline */}
                <div className="space-y-2">
                  <Label htmlFor="tagline">{ui.companyInfo.tagline}</Label>
                  <Input
                    id="tagline"
                    value={brand.company.tagline}
                    onChange={(e) => setCompanyTagline(e.target.value)}
                    placeholder="Your company tagline"
                  />
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{ui.companyInfo.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={brand.company.email}
                      onChange={(e) => setCompanyEmail(e.target.value)}
                      placeholder="contact@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{ui.companyInfo.phone}</Label>
                    <Input
                      id="phone"
                      value={brand.company.phone}
                      onChange={(e) => setCompanyPhone(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Logo Upload */}
                <div className="space-y-2">
                  <Label>{ui.companyInfo.logo}</Label>
                  <div className="flex items-start gap-4">
                    {/* Logo Preview */}
                    <div className="relative w-32 h-32 border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-muted/50 overflow-hidden">
                      {brand.assets.logo.uploaded ? (
                        <>
                          <Image
                            src={brand.assets.logo.uploaded}
                            alt="Company logo"
                            fill
                            className="object-contain p-2"
                          />
                          <button
                            onClick={removeLogo}
                            className="absolute top-1 right-1 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </>
                      ) : (
                        <div className="text-center text-muted-foreground">
                          <Upload className="h-8 w-8 mx-auto mb-1" />
                          <span className="text-xs">{ui.companyInfo.noLogo}</span>
                        </div>
                      )}
                    </div>

                    {/* Upload Button */}
                    <div className="flex-1 space-y-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                        id="logo-upload"
                      />
                      <Button
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {ui.companyInfo.uploadLogo}
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        {ui.companyInfo.logoHint}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground bg-muted p-3 rounded-md">
                  {ui.companyInfo.autoSaveNote}
                </p>
              </CardContent>
            </Card>

            {/* Preview Card */}
            <Card>
              <CardHeader>
                <CardTitle>{ui.preview.title}</CardTitle>
                <CardDescription>
                  {ui.preview.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-6 border border-border rounded-lg bg-background flex items-center gap-4">
                  {brand.assets.logo.uploaded ? (
                    <div className="relative w-16 h-16">
                      <Image
                        src={brand.assets.logo.uploaded}
                        alt="Logo preview"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-lg">{brand.company.name || "Company Name"}</h3>
                    <p className="text-sm text-muted-foreground">{brand.company.tagline || "Your tagline here"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Cards Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  {ui.businessCards.title}
                </CardTitle>
                <CardDescription>
                  {ui.businessCards.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Template Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Modern Minimal Template */}
                    <button
                      onClick={() => openEditor("modern")}
                      className="group text-left"
                    >
                      <div className="aspect-[1.75/1] border-2 border-border rounded-lg overflow-hidden bg-white hover:border-primary transition-colors">
                        {/* Mini preview of modern template */}
                        <div className="w-full h-full p-3 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div className="w-6 h-3 bg-gray-200 rounded" />
                            <div className="w-4 h-0.5 bg-blue-500" />
                          </div>
                          <div>
                            <div className="w-16 h-2 bg-gray-800 rounded mb-1" />
                            <div className="w-12 h-1.5 bg-gray-300 rounded mb-2" />
                            <div className="w-20 h-1 bg-gray-200 rounded mb-0.5" />
                            <div className="w-14 h-1 bg-gray-200 rounded" />
                          </div>
                        </div>
                      </div>
                      <p className="text-sm font-medium mt-2 group-hover:text-primary transition-colors">
                        {ui.businessCards.modernMinimal}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {ui.businessCards.modernMinimalDesc}
                      </p>
                    </button>

                    {/* Bold Corporate Template */}
                    <button
                      onClick={() => openEditor("bold")}
                      className="group text-left"
                    >
                      <div className="aspect-[1.75/1] border-2 border-border rounded-lg overflow-hidden bg-white hover:border-primary transition-colors">
                        {/* Mini preview of bold template */}
                        <div className="w-full h-full flex">
                          <div className="w-1.5 bg-slate-900" />
                          <div className="flex-1 p-3 flex flex-col justify-center">
                            <div className="w-5 h-2.5 bg-gray-200 rounded mb-2" />
                            <div className="w-14 h-2 bg-slate-900 rounded mb-1" />
                            <div className="w-10 h-1.5 bg-gray-400 rounded mb-2" />
                            <div className="flex gap-2">
                              <div className="w-12 h-1 bg-gray-200 rounded" />
                              <div className="w-10 h-1 bg-gray-200 rounded" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm font-medium mt-2 group-hover:text-primary transition-colors">
                        {ui.businessCards.boldCorporate}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {ui.businessCards.boldCorporateDesc}
                      </p>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      {ui.businessCards.selectTemplate}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coming Soon Placeholder */}
            <Card className="border-dashed">
              <CardContent className="py-8">
                <div className="text-center text-muted-foreground">
                  <p className="font-medium">{ui.businessCards.comingSoon}</p>
                  <p className="text-sm mt-1">
                    {ui.businessCards.comingSoonDesc}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Business Card Editor Modal */}
      <BusinessCardEditor
        open={editorOpen}
        onOpenChange={setEditorOpen}
        template={selectedTemplate}
      />
    </div>
  );
}
