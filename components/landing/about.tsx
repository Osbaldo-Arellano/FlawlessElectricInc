"use client";

import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";
import { useBrand } from "@/contexts/brand-context";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const iconMap = [Target, Eye, Heart];

export function About() {
  const { brand } = useBrand();

  return (
    <section
      id="about"
      className="scroll-mt-28 relative overflow-hidden py-20 lg:py-32"
    >
      {/* Decorative glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl tracking-tight font-bold mb-4">
              {brand.about.headline}
            </h2>
            <p className="text-lg lg:text-2xl text-muted-foreground">
              {brand.about.subheadline}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Team photos */}
        <AnimateOnScroll animation="fade-up">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            <div className="hidden lg:block rounded-xl overflow-hidden border border-black/[0.06] dark:border-white/10 aspect-[3/4]">
              <Image
                src="/jobs/electrician-commercial-wire-pull.jpg"
                alt="Electrician pulling commercial wire"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden lg:block rounded-xl overflow-hidden border border-black/[0.06] dark:border-white/10 aspect-[3/4]">
              <Image
                src="/jobs/fully-stocked-work-van.jpg"
                alt="Fully stocked electrician work van"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block rounded-xl overflow-hidden border border-black/[0.06] dark:border-white/10 aspect-[3/4]">
              <Image
                src="/jobs/electrician-on-site.png"
                alt="Electrician measuring on site"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 rounded-xl overflow-hidden border border-black/[0.06] dark:border-white/10 aspect-[3/4] md:aspect-auto">
              <Image
                src="/jobs/service-mast-rooftop-install.png"
                alt="Electrician installing service mast on rooftop"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Description + Shop Photo */}
        <AnimateOnScroll animation="fade-up">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Quote Box */}
            <div className="relative p-8 lg:p-10 bg-white/5 backdrop-blur-md rounded-2xl">
              <span className="absolute top-4 left-6 text-6xl lg:text-9xl font-serif text-primary/20 leading-none select-none">
                &ldquo;
              </span>
              <p className="relative z-10 text-muted-foreground pt-8 lg:pt-10 text-base lg:text-xl leading-relaxed">
                {brand.about.description}
              </p>
              <span className="absolute bottom-4 right-6 text-6xl lg:text-8xl font-serif text-primary/20 leading-none select-none">
                &rdquo;
              </span>
            </div>

            {/* Shop Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-black/[0.06] dark:border-white/10 min-h-[300px] lg:min-h-0">
              <Image
                src="/suburb.jpg"
                alt="Flawless Electric Inc shop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </AnimateOnScroll>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {brand.about.values.map((value, index) => {
            const Icon = iconMap[index] || Target;
            return (
              <AnimateOnScroll
                key={value.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="text-center h-full p-6 bg-white/5 backdrop-blur-md border border-black/[0.06] dark:border-white/10 rounded-2xl">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
