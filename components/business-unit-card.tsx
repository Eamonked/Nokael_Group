"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Truck, Zap, Flower, Code, Heart, ExternalLink, LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface BusinessUnitCardProps {
  title: string;
  description: string;
  link: string;
  iconName: string;
  imageUrl?: string;
}

export function BusinessUnitCard({ 
  title, 
  description, 
  link,
  iconName,
  imageUrl 
}: BusinessUnitCardProps) {
  const [imageLoading, setImageLoading] = useState(true);
  const icons: Record<string, LucideIcon> = {
    truck: Truck,
    zap: Zap,
    flower: Flower,
    code: Code,
    heart: Heart,
  };
  
  const Icon = icons[iconName] || Truck;
  
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4" aria-hidden="true">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
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
        <Button 
          asChild 
          variant="outline" 
          className="w-full group"
          aria-label={`Visit ${title} website`}
        >
          <Link href={link} target="_blank" rel="noopener noreferrer">
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}