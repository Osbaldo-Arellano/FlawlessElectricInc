"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { formatPhone } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useBrand } from "@/contexts/brand-context";

export default function ContactPage() {
  const { brand } = useBrand();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const loadedAt = useRef(Date.now());

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          services: selectedServices,
          message: data.get("message"),
          source: "qr-contact",
          _hp: data.get("website"),
          loadedAt: loadedAt.current,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src={brand.assets.logo.uploaded ?? brand.assets.logo.light}
            alt={brand.company.name}
            width={360}
            height={120}
            priority
            className="h-16 w-auto object-contain"
          />
        </div>

        <Card className="border-border shadow-md">
          <CardContent className="p-6">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Message Sent!</h2>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => {
                    setSubmitted(false);
                    setSelectedServices([]);
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2">
                  <h2 className="text-lg font-semibold">{brand.cta.headline}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {brand.cta.subheadline}
                  </p>
                </div>

                {/* Honeypot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden",
                    opacity: 0,
                    pointerEvents: "none",
                  }}
                >
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      className="bg-muted/40 dark:bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      className="bg-muted/40 dark:bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-muted/40 dark:bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-medium">
                    Phone (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="bg-muted/40 dark:bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-medium">{brand.cta.servicesLabel}</Label>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {brand.services.items.map((service) => (
                      <label
                        key={service.title}
                        className="flex items-center gap-2 p-2 rounded-md border border-border hover:bg-muted/40 cursor-pointer transition-colors text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service.title)}
                          onChange={() => toggleService(service.title)}
                          className="rounded border-border text-primary focus:ring-primary"
                        />
                        <span>{service.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-medium">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    required
                    className="flex w-full rounded-md border border-border bg-muted/40 dark:bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors"
                  />
                </div>

                <Button type="submit" className="w-full shadow-sm" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Quick contact links */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-muted-foreground">
          <a
            href={`mailto:${brand.company.email}`}
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Image
              src={brand.assets.logo.icon ?? brand.assets.logo.favicon ?? "/blackIcon.svg"}
              alt=""
              width={16}
              height={16}
              className="object-contain"
            />
            {brand.company.email}
          </a>
          <a
            href={`tel:${brand.company.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Image
              src={brand.assets.logo.icon ?? brand.assets.logo.favicon ?? "/blackIcon.svg"}
              alt=""
              width={16}
              height={16}
              className="object-contain"
            />
            {formatPhone(brand.company.phone)}
          </a>
        </div>
      </div>
    </main>
  );
}
