'use client';

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  backgroundImage?: string;
}

export function HeroSection({ headline, subheadline, backgroundImage }: HeroSectionProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <section className="w-full relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      {backgroundImage && (
        <>
          {imageLoading && (
            <Skeleton className="absolute inset-0 w-full h-full" />
          )}
          <Image
            src={backgroundImage}
            alt="Background network graphic"
            fill
            priority // Prioritize loading the hero background image
            className={`object-cover transition-opacity duration-300 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoadingComplete={() => setImageLoading(false)}
            sizes="100vw"
          />
           {/* Optional: Add an overlay for better text readability */}
          <div className="absolute inset-0 bg-background/80 dark:bg-background/60"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 max-w-5xl mx-auto text-foreground">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/business-units">Explore Our Businesses</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              Contact Us <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}