import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";

export function SiteFooter() {
  return (
    <footer className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <SiteLogo />
              <span className="font-bold text-lg">Nokael Group</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building, owning, and operating category-leading businesses across diverse sectors.
            </p>
            <div className="pt-4">
              <p className="text-sm">
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
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nokael Dash Logistics
                </a>
              </li>
              <li>
                <a 
                  href="https://energy.nokael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nokael Energy
                </a>
              </li>
              <li>
                <a 
                  href="https://farms.nokael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nokael Farms
                </a>
              </li>
              <li>
                <a 
                  href="https://tech.nokael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Nokael Technology
                </a>
              </li>
              <li>
                <a 
                  href="https://neighborly.nokael.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/business-units"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Business Units
                </Link>
              </li>
              <li>
                <Link 
                  href="/investor-relations"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:info@nokael.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@nokael.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+97123456789"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +971 2 345 6789
                </a>
              </li>
              <li className="pt-2">
                <address className="not-italic text-sm text-muted-foreground">
                  Nokael Group Tower<br />
                  Al Reem Island<br />
                  Abu Dhabi, UAE
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <ul className="flex gap-6">
              <li>
                <Link 
                  href="/privacy-policy"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-of-service"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookies"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
            
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}