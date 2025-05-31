import './globals.css';
import './styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nokael.com'),
  title: {
    default: 'Nokael Group | Diversified UAE-Based Holding Company',
    template: '%s | Nokael Group'
  },
  description: 'Nokael Group is a diversified UAE-based holding company operating across logistics, energy, agriculture, technology, and concierge services.',
  keywords: ['Nokael Group', 'holding company', 'UAE', 'Abu Dhabi', 'logistics', 'energy', 'agriculture', 'technology', 'concierge services'],
  authors: [{ name: 'Nokael Group' }],
  creator: 'Nokael Group',
  publisher: 'Nokael Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nokael.com',
    title: 'Nokael Group | Diversified UAE-Based Holding Company',
    description: 'Nokael Group is a diversified UAE-based holding company operating across logistics, energy, agriculture, technology, and concierge services.',
    siteName: 'Nokael Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nokael Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nokael Group | Diversified UAE-Based Holding Company',
    description: 'Nokael Group is a diversified UAE-based holding company operating across logistics, energy, agriculture, technology, and concierge services.',
    images: ['/og-image.jpg'],
    creator: '@nokaelgroup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn(inter.className, "min-h-screen flex flex-col page-transition")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground">
            Skip to main content
          </a>
          <SiteHeader />
          <div id="main-content" className="flex-grow">
            {children}
          </div>
          <SiteFooter />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}