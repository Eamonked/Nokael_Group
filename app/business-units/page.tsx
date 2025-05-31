'use client';

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export default function BusinessUnitsPage() {
  return (
    <main className="flex flex-col items-center">
      <PageHeader
        title="Our Business Units"
        description="A diverse portfolio of category-leading businesses."
      />
      
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          <BusinessUnit
            title="Nokael Dash Logistics"
            description="Revolutionizing the logistics industry with cutting-edge technology and efficient operations."
            content="Nokael Dash Logistics offers comprehensive logistics solutions for businesses of all sizes. From last-mile delivery to international freight forwarding, we leverage advanced technology to optimize routes, reduce costs, and ensure timely deliveries. Our proprietary logistics platform provides real-time tracking, predictive analytics, and seamless integration with client systems."
            link="https://logistics.nokael.com"
            features={[
              "Last-mile delivery optimization",
              "International freight services",
              "Real-time tracking and analytics",
              "Warehouse management solutions",
              "Supply chain consulting"
            ]}
            imageUrl="/images/logistics.jpg"
          />
          
          <Separator />
          
          <BusinessUnit
            title="Nokael Energy"
            description="Sustainable energy solutions for a greener future."
            content="Nokael Energy is dedicated to accelerating the transition to renewable energy. We invest in solar, wind, and other sustainable energy projects across the UAE and beyond. Our energy management systems help businesses reduce their carbon footprint while optimizing energy consumption and costs. We're committed to developing innovative technologies that make renewable energy more accessible and efficient."
            link="https://energy.nokael.com"
            features={[
              "Renewable energy project development",
              "Energy efficiency consulting",
              "Smart grid solutions",
              "Carbon footprint reduction",
              "Sustainable energy investments"
            ]}
            imageUrl="/images/energy.jpg"
          />
          
          <Separator />
          
          <BusinessUnit
            title="Nokael Farms"
            description="Advanced agricultural systems producing high-quality, sustainable food."
            content="Nokael Farms combines traditional agricultural knowledge with modern technology to create sustainable farming operations. We specialize in vertical farming, hydroponics, and precision agriculture techniques that maximize yield while minimizing resource use. Our farms produce high-quality fruits, vegetables, and herbs for local markets, reducing food miles and ensuring freshness."
            link="https://farms.nokael.com"
            features={[
              "Vertical farming technology",
              "Hydroponic growing systems",
              "Precision agriculture",
              "Farm-to-table distribution",
              "Sustainable agricultural practices"
            ]}
            imageUrl="/images/farms.jpg"
          />
          
          <Separator />
          
          <BusinessUnit
            title="Nokael Technology"
            description="Innovative technology solutions for modern businesses."
            content="Nokael Technology develops cutting-edge software and hardware solutions that help businesses across various industries improve efficiency, reduce costs, and enhance customer experiences. Our team of experienced engineers and developers specializes in artificial intelligence, machine learning, IoT, and cloud computing. We work closely with clients to understand their unique challenges and develop tailored solutions."
            link="https://tech.nokael.com"
            features={[
              "AI and machine learning solutions",
              "IoT device development",
              "Custom software development",
              "Cloud infrastructure management",
              "Digital transformation consulting"
            ]}
            imageUrl="/images/technology.jpg"
          />
          
          <Separator />
          
          <BusinessUnit
            title="Neighborly"
            description="Premium concierge services tailored to your needs."
            content="Neighborly provides high-end concierge services for busy professionals, executives, and luxury residences. Our team handles everything from daily errands and home management to travel arrangements and exclusive event access. We pride ourselves on personalized service that anticipates needs and exceeds expectations, allowing our clients to focus on what matters most to them."
            link="https://neighborly.nokael.com"
            features={[
              "Personal assistant services",
              "Home management and maintenance",
              "Travel planning and coordination",
              "Event access and planning",
              "Lifestyle management"
            ]}
            imageUrl="/images/neighborly.jpg"
          />
        </div>
      </section>
    </main>
  );
}

function BusinessUnit({
  title,
  description,
  content,
  link,
  features,
  imageUrl
}: {
  title: string;
  description: string;
  content: string;
  link: string;
  features: string[];
  imageUrl?: string;
}) {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <p className="text-xl text-muted-foreground mb-6">{description}</p>
        <p className="mb-6">{content}</p>
        
        <h3 className="text-xl font-semibold mb-4">Key Offerings</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button asChild className="group">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      
      <Card className="h-fit">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="aspect-video bg-muted rounded-md overflow-hidden relative">
            {imageUrl ? (
              <>
                {imageLoading && (
                  <Skeleton className="absolute inset-0" />
                )}
                <Image
                  src={imageUrl}
                  alt={`${title} logo`}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    imageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoadingComplete={() => setImageLoading(false)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground">Business Unit Logo</span>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href={link} target="_blank" rel="noopener noreferrer">
              Visit {title.split(' ')[1]} <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}