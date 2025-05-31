import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Investor Relations | Nokael Group",
  description: "Information for current and potential investors in Nokael Group. Learn about our investment approach and opportunities.",
};

export default function InvestorRelationsPage() {
  return (
    <main className="flex flex-col items-center">
      <PageHeader
        title="Investor Relations"
        description="Information for current and potential investors."
      />
      
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Investment Approach</h2>
            <p className="text-lg mb-6">
              At Nokael Group, we take a strategic approach to investing, focusing on businesses and sectors with significant growth potential and opportunities for innovation.
            </p>
            <p className="mb-6">
              Our investment philosophy is guided by a long-term perspective, seeking to create sustainable value through operational excellence, strategic growth initiatives, and a commitment to innovation.
            </p>
            <p className="mb-8">
              We believe in building businesses that not only deliver strong financial returns but also make positive contributions to society and the environment.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Investment Criteria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Market Opportunity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We look for large addressable markets with significant growth potential and opportunities for disruption.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Innovation Potential</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We seek businesses that leverage technology and innovation to create competitive advantages.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We prioritize business models that can scale efficiently and generate strong returns on invested capital.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>We favor businesses that contribute to sustainable development and have positive environmental and social impacts.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3">For Investment Inquiries</h3>
              <p className="mb-4">
                For specific investment opportunities or to discuss potential partnerships, please contact our investor relations team directly.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
          
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Investor Resources</CardTitle>
                <CardDescription>Documents and information for investors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-md flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Company Overview</h4>
                    <p className="text-sm text-muted-foreground">PDF, 2.4MB</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-4 border rounded-md flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Investment Strategy</h4>
                    <p className="text-sm text-muted-foreground">PDF, 1.8MB</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-4 border rounded-md flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Business Unit Portfolio</h4>
                    <p className="text-sm text-muted-foreground">PDF, 3.2MB</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-4">
                  <h4 className="font-medium">Contact Information</h4>
                  <div>
                    <p className="text-sm font-medium">Investor Relations</p>
                    <a href="mailto:investors@nokael.com" className="text-sm text-primary hover:underline">
                      investors@nokael.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Media Inquiries</p>
                    <a href="mailto:media@nokael.com" className="text-sm text-primary hover:underline">
                      media@nokael.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}