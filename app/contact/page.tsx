"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function ContactPage() {
  // Define form schema
  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    company: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  });

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send the form data to a server
    console.log(values);
    
    // Show success message
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    form.reset();
  }

  return (
    <main className="flex flex-col items-center">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team."
      />
      
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">
              Whether you're interested in learning more about our business units, exploring partnership opportunities, or joining our team, we'd love to hear from you.
            </p>
            
            <div className="space-y-8 mb-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MailIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-muted-foreground mb-1">For general inquiries:</p>
                  <a href="mailto:info@nokael.com" className="text-primary hover:underline">
                    info@nokael.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-muted-foreground mb-1">Monday to Friday, 9am to 5pm GST</p>
                  <a href="tel:+97123456789" className="text-primary hover:underline">
                    +971 2 345 6789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-muted-foreground mb-1">Our headquarters:</p>
                  <address className="not-italic">
                    Nokael Group Tower<br />
                    Al Reem Island<br />
                    Abu Dhabi, UAE
                  </address>
                </div>
              </div>
            </div>
            
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Business Unit Inquiries</h3>
                <p className="mb-4">
                  For specific inquiries related to our business units, please visit their respective websites:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a href="https://logistics.nokael.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Nokael Dash Logistics
                    </a>
                  </li>
                  <li>
                    <a href="https://energy.nokael.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Nokael Energy
                    </a>
                  </li>
                  <li>
                    <a href="https://farms.nokael.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Nokael Farms
                    </a>
                  </li>
                  <li>
                    <a href="https://tech.nokael.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Nokael Technology
                    </a>
                  </li>
                  <li>
                    <a href="https://neighborly.nokael.com/contact" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Neighborly
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormDescription>
                        Let us know where you're from.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
}