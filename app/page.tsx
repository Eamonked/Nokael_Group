import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BusinessUnitCard } from "@/components/business-unit-card";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection 
        headline="Building, Owning & Operating Category-Leading Businesses"
        subheadline="Nokael Group is a diversified UAE-based holding company operating across logistics, energy, agriculture, technology, and concierge services."
        backgroundImage="/images/background.jpg"
      />
      
      <section className="w-full max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Business Units</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse portfolio of businesses, each designed to lead in their respective industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BusinessUnitCard 
            title="Nokael Dash Logistics"
            description="Modern logistics solutions for businesses of all sizes. We're revolutionizing the logistics industry with cutting-edge technology and efficient operations."
            link="https://logistics.nokael.com"
            iconName="truck"
            imageUrl="/images/logistics.jpg"
          />
          
          <BusinessUnitCard 
            title="Nokael Energy"
            description="Sustainable energy solutions for a greener future. We invest in renewable energy sources and develop innovative technologies to reduce carbon footprint."
            link="https://energy.nokael.com"
            iconName="zap"
            imageUrl="/images/energy.jpg"
          />
          
          <BusinessUnitCard 
            title="Nokael Farms"
            description="Advanced agricultural systems producing high-quality, sustainable food. Our farms use cutting-edge technology to maximize yield while minimizing environmental impact."
            link="https://farms.nokael.com"
            iconName="flower"
            imageUrl="/images/farms.jpg"
          />
          
          <BusinessUnitCard 
            title="Nokael Technology"
            description="Innovative technology solutions for modern businesses. We develop and implement technologies that drive efficiency and growth across multiple sectors."
            link="https://tech.nokael.com"
            iconName="code"
            imageUrl="/images/technology.jpg"
          />
          
          <BusinessUnitCard 
            title="Neighborly"
            description="Premium concierge services tailored to your needs. Our team provides personalized assistance to individuals and businesses, enhancing quality of life."
            link="https://neighborly.nokael.com"
            iconName="heart"
            imageUrl="/images/neighborly.jpg"
          />
        </div>
      </section>
      
      <section className="w-full bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Collaborate?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner, invest, or join our ecosystem, we're always open to new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/about">Learn About Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us <ChevronRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}