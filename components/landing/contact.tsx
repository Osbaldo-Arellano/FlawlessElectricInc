"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useBrand } from "@/contexts/brand-context";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export function Contact() {
  const { brand } = useBrand();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-28 py-20 lg:py-32 bg-muted/50 dark:bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {brand.cta.headline}
            </h2>
            <p className="text-lg text-muted-foreground">
              {brand.cta.subheadline}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimateOnScroll animation="slide-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Have a question or want to work together? Fill out the form and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href={`mailto:${brand.company.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {brand.company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href={`tel:${brand.company.phone.replace(/\D/g, "")}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {brand.company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      {brand.company.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll animation="slide-right">
            <Card className="border-border shadow-md bg-background dark:bg-card">
            <CardContent className="p-6">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-medium">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                        className="bg-muted/40 dark:bg-background border-border focus:bg-background dark:focus:bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-medium">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                        className="bg-muted/40 dark:bg-background border-border focus:bg-background dark:focus:bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-muted/40 dark:bg-background border-border focus:bg-background dark:focus:bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-medium">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="bg-muted/40 dark:bg-background border-border focus:bg-background dark:focus:bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      required
                      className="flex w-full rounded-md border border-border bg-muted/40 dark:bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:bg-background dark:focus:bg-background disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors"
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
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
