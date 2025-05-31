import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";

export const metadata = {
  title: "About Us | Nokael Group",
  description: "Learn about Nokael Group, our mission, vision, and values as a diversified holding company based in Abu Dhabi, UAE.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center">
      <PageHeader
        title="About Nokael Group"
        description="Building the future through diversified excellence."
      />
      
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Founded in Abu Dhabi, Nokael Group has grown into a diversified holding company with a mission to build, own, and operate category-leading businesses across multiple sectors.
            </p>
            <p className="text-lg mb-6">
              What began as a vision to transform industries through innovation and excellence has evolved into a dynamic ecosystem of businesses that lead their respective markets.
            </p>
            <p className="text-lg">
              Today, Nokael Group stands as a testament to strategic growth, operational excellence, and a commitment to creating sustainable value for all stakeholders.
            </p>
          </div>
          
          <div className="bg-muted rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">1</div>
                <div>
                  <h3 className="font-bold text-xl">Identify</h3>
                  <p>We identify sectors with significant growth potential and opportunities for innovation.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">2</div>
                <div>
                  <h3 className="font-bold text-xl">Build</h3>
                  <p>We build businesses from the ground up with a focus on operational excellence and scalability.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">3</div>
                <div>
                  <h3 className="font-bold text-xl">Scale</h3>
                  <p>We scale businesses through strategic investments and continuous innovation.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">4</div>
                <div>
                  <h3 className="font-bold text-xl">Lead</h3>
                  <p>We position our businesses to lead their categories and create lasting impact.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="w-full bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg max-w-3xl mx-auto">
              The principles that guide everything we do at Nokael Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Excellence</h3>
                <p>
                  We pursue excellence in all our endeavors, setting high standards and continuously raising the bar for ourselves and our industries.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Innovation</h3>
                <p>
                  We embrace innovation as a core driver of growth, constantly seeking new ways to solve problems and create value.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Integrity</h3>
                <p>
                  We operate with unwavering integrity, building trust through transparency, honesty, and ethical business practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Sustainability</h3>
                <p>
                  We are committed to sustainable business practices that balance economic growth with social responsibility and environmental stewardship.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
                <p>
                  We believe in the power of collaboration, fostering partnerships and teamwork that amplify our collective impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-3">Resilience</h3>
                <p>
                  We build resilient businesses that can adapt to changing conditions, overcome challenges, and thrive in dynamic environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="w-full max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Led by a team of experienced professionals with a shared vision for excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-40 h-40 bg-muted rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold">Eamon Kendrick</h3>
            <p className="text-muted-foreground">Founder & Chief Executive Officer</p>
          </div>
          
          <div className="text-center">
            <div className="w-40 h-40 bg-muted rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold">Sheila Ankunda</h3>
            <p className="text-muted-foreground">Chief Operations Officer</p>
          </div>
          
          <div className="text-center">
            <div className="w-40 h-40 bg-muted rounded-full mx-auto mb-6"></div>
            <h3 className="text-xl font-bold">Nabwami Catherine</h3>
            <p className="text-muted-foreground">Chief Strategy Officer</p>
          </div>
        </div>
      </section>
    </main>
  );
}