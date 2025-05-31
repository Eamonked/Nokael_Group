import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
}

export function HeroSection({ headline, subheadline }: HeroSectionProps) {
  return (
    <section className="w-full bg-gradient-to-b from-background to-secondary/50 pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 max-w-5xl mx-auto">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
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