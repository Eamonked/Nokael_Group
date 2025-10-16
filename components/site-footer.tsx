import Link from "next/link";
import { Settings } from "lucide-react";
import { SiteLogo } from "@/components/site-logo";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-primary-foreground">
              <SiteLogo />
              <span className="font-bold text-lg">Nokael Group</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Building, owning, and operating category-leading businesses across diverse sectors.
            </p>
            <div className="pt-4">
              <p className="text-sm text-primary-foreground/80">
                &copy; {new Date().getFullYear()} Nokael Group. All rights reserved.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Companies</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://logistics.nokael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nokael Dash Logistics
                </a>
              </li>
              <li>
                <a 
                  href="https://energy.nokael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nokael Energy
                </a>
              </li>
              <li>
                <a 
                  href="https://farms.nokael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nokael Farms
                </a>
              </li>
              <li>
                <a 
                  href="https://tech.nokael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Nokael Technology
                </a>
              </li>
              <li>
                <a 
                  href="https://neighborly.nokael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Neighborly
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/business-units"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Business Units
                </Link>
              </li>
              <li>
                <Link 
                  href="/investor-relations"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://admin.nokael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-1"
                >
                  <Settings className="h-3 w-3" />
                  Admin Portal
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:info@nokael.com"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@nokael.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+97123456789"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +971 50 971 0446
                </a>
              </li>
              <li className="pt-2">
                <address className="not-italic text-sm text-primary-foreground/80">
                  Nokael Group Tower<br />
                  Al Reem Island<br />
                  Abu Dhabi, UAE
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <ul className="flex gap-6">
              <li>
                <Link 
                  href="/privacy-policy"
                  className="text-xs text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service"
                  className="text-xs text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookies"
                  className="text-xs text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
            
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}